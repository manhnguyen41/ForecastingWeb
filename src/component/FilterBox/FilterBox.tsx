import React, { useState } from "react";
import "./FilterBox.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FilterBoxProps {
  stormData: {
    [year: string]: { [stormId: string]: { [date: string]: string[] } };
  } | null;
  selectedStorm: string | null;
  onSelectStorm: (stormId: string) => void;
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

const FilterBox: React.FC<FilterBoxProps> = ({
  stormData,
  onSelectStorm,
  selectedDate,
  onSelectDate,
}) => {
  const [filterText, setFilterText] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [numOfMatchings, setNumOfMatchings] = useState(0);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFilterText = event.target.value;
    setFilterText(newFilterText);
  };

  // const yearOptions: string[] = stormData ? Object.keys(stormData) : [];

  const formatDate = (date: Date) =>
    `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;

  const getMinMaxDatesForStorm = (stormId: string) => {
    const stormDates: Date[] = [];
    Object.keys(stormData || {}).forEach((year) => {
      const stormEntries = stormData ? stormData[year][stormId] : null;
      if (stormEntries) {
        Object.keys(stormEntries).forEach((dateStr) => {
          const year = parseInt(dateStr.slice(0, 4), 10);
          const month = parseInt(dateStr.slice(4, 6), 10) - 1; // Month is 0-based
          const day = parseInt(dateStr.slice(6, 8), 10);
          const date = new Date(year, month, day);
          stormDates.push(date);
        });
      }
    });

    if (stormDates.length > 0) {
      const min = new Date(Math.min(...stormDates.map((d) => d.getTime())));
      const max = new Date(Math.max(...stormDates.map((d) => d.getTime())));

      return { minDate: min, maxDate: max };
    }

    return null;
  };

  const StormsForYear: React.FC<{ year: string; filterText: string }> = ({
    year,
    filterText,
  }) => {
    const storms = stormData ? Object.keys(stormData[year]) : [];

    const filteredStorms = storms.filter((storm) =>
      storm.toLowerCase().includes(filterText.toLowerCase())
    );

    setNumOfMatchings(filteredStorms.length);

    return (
      <>
        {filteredStorms.length > 0 ? (
          filteredStorms.map((storm) => (
            <div
              className="storm-container"
              onClick={() => {
                onSelectStorm(storm);
                onSelectDate(
                  getMinMaxDatesForStorm(storm)?.minDate ?? new Date()
                );
              }}
            >
              <div className="storm-icon">
                <div className="storm-icon-inner">
                  <img src="/icon/typhoon-fill.svg" alt="storm" />
                </div>
              </div>
              <div className="storm-details">
                <div className="storm-title">{storm}</div>
                <div className="storm-date">
                  {formatDate(
                    getMinMaxDatesForStorm(storm)?.minDate ?? new Date()
                  )}{" "}
                  -{" "}
                  {formatDate(
                    getMinMaxDatesForStorm(storm)?.maxDate ?? new Date()
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </>
    );
  };

  const handleDateChange = (date: Date | null) => {
    onSelectDate(date || new Date());
    setShowDatePicker(false);
  };

  const toggleDatePicker = () => {
    setShowDatePicker((prev) => !prev);
  };

  return (
    <div className="filter-box">
      <div className="logo">
        <img src="/logo1.png" alt="Logo" />
        <img src="/logo2.png" alt="Logo" />
      </div>
      <div className="filter-box-title">TC Intensity Estimate</div>
      <div className="search-box-container">
        <div className="search-icon-box">
          <div className="search-icon-box-inner">
            <img src="/icon/Search.svg" alt="Search Icon" />
          </div>
        </div>
        <input
          type="text"
          placeholder="Tìm kiếm"
          value={filterText}
          onChange={handleFilterChange}
          className="search-input-box"
        />
      </div>
      <hr className="hr-line" />
      <div className="calendar">
        <div className="calendar-container">
          <div className="calendar-date-display" onClick={toggleDatePicker}>
            <div className="calendar-date-text">
              {selectedDate
                ? selectedDate.toLocaleDateString("en-GB")
                : "Select a date"}
            </div>
            <div className="calendar-date-icon">
              <img src="/icon/CalendarOutlined.svg" alt="calendar"></img>
            </div>
          </div>
        </div>
        {/* DatePicker dưới dạng popup */}
        {showDatePicker && (
          <div className="datepicker-popup">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline
              dateFormat="yyyy-MM-dd"
            />
          </div>
        )}
      </div>

      <div className="matching-text">
        <span className="matching-text-bold">{numOfMatchings}</span>
        <span className="matching-text-normal">Matching</span>
      </div>
      <StormsForYear year={"2023"} filterText={filterText} />
    </div>
  );
};

export default FilterBox;
