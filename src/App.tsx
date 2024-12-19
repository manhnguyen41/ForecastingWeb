import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import HeadLine from "./component/HeadLine/HeadLine";
import FilterBox from "./component/FilterBox/FilterBox";
import Tab from "./component/Tab/Tab";
import Content from "./component/Content/Content";
import "./App.css";

const stringToDate = (date: string) => {
  const year = parseInt(date.substring(0, 4));
  const month = parseInt(date.substring(4, 6)) - 1;
  const day = parseInt(date.substring(6, 8));

  // Create a Date object
  const dateObj = new Date(year, month, day);

  return dateObj;
};

const App: React.FC = () => {
  const [stormData] = useState<any>({
    "2023": {
      "TALIM": {
        "20230703": [
          "./././images/2023/TALIM/20230703/ourmethod.png",
          "./././images/2023/TALIM/20230703/hres.png",
        ],
      },
    },
  });
  const [selectedStorm, setSelectedStorm] = useState<string | null>(null);

  // Compute minDate and maxDate based on selectedStorm
  const { date } = useMemo(() => {
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
    return {
      date: dates[0],
    };
  }, [stormData, selectedStorm]);

  return (
    <Router>
      <div className="app-grid">
        <NavBar />
        <HeadLine>
          AI-based Meteorological And Hydrological Forecasting
        </HeadLine>
        <div className="col1"></div>
        <div className="col1">
          <Link to="/">
            <Tab>TC Intensity Estimate</Tab>
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
            date={stringToDate(date ? date : "")}
          />
        </div>
      </div>
    </Router>
  );
};

export default App;
