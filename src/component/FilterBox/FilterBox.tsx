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
  selectedStorm,
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

  const StormsList: React.FC<{ filterText: string }> = ({ filterText }) => {
    const allStorms: { storm: string; year: string }[] = [];

    // Duyệt qua tất cả các năm và thêm các cơn bão vào danh sách
    Object.keys(stormData || {}).forEach((year) => {
      Object.keys(stormData![year]).forEach((storm) => {
        allStorms.push({ storm, year });
      });
    });

    // Lọc danh sách theo từ khóa tìm kiếm
    const filteredStorms = allStorms.filter(({ storm }) =>
      storm.toLowerCase().includes(filterText.toLowerCase())
    );

    // Sắp xếp danh sách theo tên bão giảm dần (desc)
    filteredStorms.sort((a, b) => b.storm.localeCompare(a.storm));

    // Cập nhật số lượng matching
    setNumOfMatchings(filteredStorms.length);

    return (
      <>
        {filteredStorms.length > 0 ? (
          filteredStorms.map(({ storm }) => (
            <>
              {storm === selectedStorm ? (
                <>
                  <div
                    className="storm-container-chosen"
                    key={storm}
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
                </>
              ) : (
                <>
                  <div
                    className="storm-container"
                    key={storm}
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
                </>
              )}
            </>
          ))
        ) : (
          <div className="no-storms">No storms found</div>
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
        <img src="/512px.svg" alt="Logo" />
      </div>
      <div className="filter-box-title">TC Intensity Estimate</div>
      <div className="search-box-container">
        <div className="search-icon-box">
          <img
            src="icon/search_25dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Search Icon"
          />
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
              <img
                src="/icon/calendar_today_25dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
                alt="calendar"
              ></img>
            </div>
          </div>
        </div>
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
      <StormsList filterText={filterText} />
    </div>
  );
};

export default FilterBox;
