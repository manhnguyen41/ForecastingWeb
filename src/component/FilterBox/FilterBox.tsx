import React, { useState, useEffect } from "react";
import "./FilterBox.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import filterBoxTheme from "./FilterBoxTheme";
import { ThemeProvider } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";

interface FilterBoxProps {
  stormData: {
    [year: string]: { [stormId: string]: { [date: string]: string[] } };
  } | null;
  selectedStorm: string | null;
  onSelectStorm: (stormId: string) => void;
}

const FilterBox: React.FC<FilterBoxProps> = ({
  stormData,
  selectedStorm,
  onSelectStorm,
}) => {
  const [filterText, setFilterText] = useState("");
  const [numOfMatchings, setNumOfMatchings] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    if (stormData) {
      const allDates: { stormId: string; date: Date }[] = [];

      Object.entries(stormData).forEach(([_, storms]) => {
        Object.entries(storms).forEach(([stormId, dates]) => {
          Object.keys(dates).forEach((dateStr) => {
            const year = parseInt(dateStr.slice(0, 4), 10);
            const month = parseInt(dateStr.slice(4, 6), 10) - 1;
            const day = parseInt(dateStr.slice(6, 8), 10);
            const date = new Date(year, month, day);
            allDates.push({ stormId, date });
          });
        });
      });

      if (allDates.length > 0) {
        const latestStorm = allDates.reduce((latest, current) =>
          current.date > latest.date ? current : latest
        );

        setSelectedDate(latestStorm.date);
        onSelectStorm(latestStorm.stormId);
      }
    }
  }, []);

  useEffect(() => {
    setFilterText("");
  }, [selectedDate]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
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
          const month = parseInt(dateStr.slice(4, 6), 10) - 1;
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

  const StormsList: React.FC<{ filterText: string; date: Date }> = ({
    filterText,
    date,
  }) => {
    const allStorms = Object.entries(stormData || {}).flatMap(
      ([year, storms]) => {
        return Object.keys(storms).flatMap((stormId) => {
          const dates = Object.keys(storms[stormId]);
          const months = dates.map((dateStr) => dateStr.slice(4, 6));
          const uniqueMonths = Array.from(new Set(months));

          return uniqueMonths.map((month) => ({
            storm: stormId,
            month,
            year,
          }));
        });
      }
    );

    const selectedMonth = (date.getMonth() + 1).toString().padStart(2, "0");
    const selectedYear = date.getFullYear().toString();

    const filteredStorms =
      filterText === ""
        ? allStorms
            .filter(
              ({ month, year }) =>
                month === selectedMonth && year === selectedYear
            )
            .filter(
              (value, index, self) =>
                index === self.findIndex((t) => t.storm === value.storm)
            ) // Loại bỏ trùng lặp theo 'storm'
        : allStorms
            .filter(({ storm }) =>
              storm.toLowerCase().includes(filterText.toLowerCase())
            )
            .filter(
              (value, index, self) =>
                index === self.findIndex((t) => t.storm === value.storm)
            ); // Loại bỏ trùng lặp theo 'storm'

    setNumOfMatchings(filteredStorms.length);

    return (
      <>
        {filteredStorms.length > 0 ? (
          filteredStorms.map(({ storm }) => (
            <div
              className={`storm-container ${
                storm === selectedStorm ? "storm-container-chosen" : ""
              }`}
              key={storm}
              onClick={() => onSelectStorm(storm)}
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
          <div className="no-storms">No storms found</div>
        )}
      </>
    );
  };

  const handleDateChange = (value: Dayjs | null) => {
    setSelectedDate(value ? value.toDate() : null);
  };

  // Xử lý disable tháng
  const shouldDisableMonth = (month: Dayjs) => {
    const selectedYear = month.year().toString();
    if (!stormData || !stormData[selectedYear]) {
      return true;
    }

    const monthsWithStorms = new Set(
      Object.entries(stormData[selectedYear]).flatMap(([, stormDates]) =>
        Object.keys(stormDates).map((dateStr) => dateStr.slice(4, 6))
      )
    );

    return !monthsWithStorms.has(month.format("MM"));
  };

  // Xử lý disable năm
  const shouldDisableYear = (year: Dayjs) => {
    const selectedYear = year.year().toString();
    return !stormData || !stormData[selectedYear];
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
        <ThemeProvider theme={filterBoxTheme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                views={["year", "month"]}
                value={dayjs(selectedDate)}
                onChange={handleDateChange}
                slotProps={{
                  popper: {
                    modifiers: [
                      {
                        name: "offset",
                        options: {
                          offset: [-1, 0], // Đẩy Popper sang phải
                        },
                      },
                    ],
                  },
                }}
                shouldDisableMonth={shouldDisableMonth}
                shouldDisableYear={shouldDisableYear}
              />
            </DemoContainer>
          </LocalizationProvider>
        </ThemeProvider>
      </div>
      <div className="matching-text">
        <span className="matching-text-bold">{numOfMatchings}</span>
        <span className="matching-text-normal">Matching</span>
      </div>
      <StormsList filterText={filterText} date={selectedDate || new Date()} />
    </div>
  );
};

export default FilterBox;
