import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import HeadLine from "./component/HeadLine/HeadLine";
import FilterBox from "./component/FilterBox/FilterBox";
import Tab from "./component/Tab/Tab";
import Content from "./component/Content/Content";
import DateSlider from "./component/DateSlider/DateSlider";
import "./App.css";

const stringToDate = (date: string) => {
    const year = parseInt(date.substring(0, 4));
    const month = parseInt(date.substring(4, 6)) - 1;
    const day = parseInt(date.substring(6, 8));

    // Create a Date object
    const dateObj = new Date(year, month, day);
    
    return dateObj
  }

const App: React.FC = () => {
  const [stormData, setStormData] = useState<any>(null);
  const [selectedStorm, setSelectedStorm] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  useEffect(() => {
    fetch("http://localhost:8000/get-storm-data/")
      .then((response) => response.json())
      .then((data) => {
        setStormData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching storm data:", error);
      });
  }, []);

  // Compute minDate and maxDate based on selectedStorm
  const { minDate, maxDate } = useMemo(() => {
    if (!stormData || !selectedStorm) {
      return { minDate: null, maxDate: null };
    }

    const years = Object.keys(stormData);
    let dates: string[] = [];

    years.forEach((year) => {
      if (stormData[year]?.[selectedStorm]) {
        const stormDates = Object.keys(stormData[year][selectedStorm]);
        dates.push(...stormDates);
      }
    });

    if (dates.length === 0) {
      return { minDate: null, maxDate: null };
    }

    // Sort dates to find min and max
    dates.sort();
    console.log(dates[0]);
    setSelectedDate(stringToDate(dates[0]));
    return {
      minDate: dates[0],
      maxDate: dates[dates.length - 1],
    };
  }, [stormData, selectedStorm]);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <Router>
      <div className="app-grid">
        <NavBar />
        <HeadLine />
        <div className="col1"></div>
        <div className="col1">
          <Link to="/">
            <Tab>TC Intensity Forecast</Tab>
          </Link>
        </div>
        <div className="col2"></div>
        <div className="col1"></div>
        <div className="col3">
          <hr />
        </div>
        <div className="col1">
          <FilterBox
            stormData={stormData}
            selectedStorm={selectedStorm}
            onSelectStorm={setSelectedStorm}
          />
          <div className="vertical-divider"></div>
        </div>
        <div className="col3">
          <Content
            stormData={stormData}
            selectedStorm={selectedStorm}
            selectedDate={selectedDate}
          />
          {selectedStorm && minDate && maxDate && (
            <DateSlider
              selectedDate={selectedDate ? selectedDate : stringToDate(minDate)}
              onDateChange={handleDateChange}
              minDate={minDate}
              maxDate={maxDate}
            />
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;
