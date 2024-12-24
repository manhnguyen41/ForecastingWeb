import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HeadLine from "./component/HeadLine/HeadLine";
import FilterBox from "./component/FilterBox/FilterBox";
import Content from "./component/Content/Content";
import "./App.css";

// const stringToDate = (date: string) => {
//   const year = parseInt(date.substring(0, 4));
//   const month = parseInt(date.substring(4, 6)) - 1;
//   const day = parseInt(date.substring(6, 8));

//   // Create a Date object
//   const dateObj = new Date(year, month, day);

//   return dateObj;
// };

const App: React.FC = () => {
  const [stormData] = useState<any>({
    "2023": {
      "2309_SAOLA": {
        "20230902": [
          "./././images/2023/2309_SAOLA/20230902\\tracking.png",
          "./././images/2023/2309_SAOLA/20230902\\forecast.png",
        ],
        "20230826": [
          "./././images/2023/2309_SAOLA/20230826\\tracking.png",
          "./././images/2023/2309_SAOLA/20230826\\forecast.png",
        ],
        "20230825": [
          "./././images/2023/2309_SAOLA/20230825\\tracking.png",
          "./././images/2023/2309_SAOLA/20230825\\forecast.png",
        ],
        "20230829": [
          "./././images/2023/2309_SAOLA/20230829\\tracking.png",
          "./././images/2023/2309_SAOLA/20230829\\forecast.png",
        ],
        "20230830": [
          "./././images/2023/2309_SAOLA/20230830\\tracking.png",
          "./././images/2023/2309_SAOLA/20230830\\forecast.png",
        ],
        "20230831": [
          "./././images/2023/2309_SAOLA/20230831\\tracking.png",
          "./././images/2023/2309_SAOLA/20230831\\forecast.png",
        ],
        "20230901": [
          "./././images/2023/2309_SAOLA/20230901\\tracking.png",
          "./././images/2023/2309_SAOLA/20230901\\forecast.png",
        ],
        "20230827": [
          "./././images/2023/2309_SAOLA/20230827\\tracking.png",
          "./././images/2023/2309_SAOLA/20230827\\forecast.png",
        ],
        "20230828": [
          "./././images/2023/2309_SAOLA/20230828\\tracking.png",
          "./././images/2023/2309_SAOLA/20230828\\forecast.png",
        ],
      },
      "2305_DOKSURI": {
        "20230721": [
          "./././images/2023/2305_DOKSURI/20230721\\tracking.png",
          "./././images/2023/2305_DOKSURI/20230721\\forecast.png",
        ],
        "20230727": [
          "./././images/2023/2305_DOKSURI/20230727\\tracking.png",
          "./././images/2023/2305_DOKSURI/20230727\\forecast.png",
        ],
        "20230722": [
          "./././images/2023/2305_DOKSURI/20230722\\tracking.png",
          "./././images/2023/2305_DOKSURI/20230722\\forecast.png",
        ],
        "20230728": [
          "./././images/2023/2305_DOKSURI/20230728\\tracking.png",
          "./././images/2023/2305_DOKSURI/20230728\\forecast.png",
        ],
        "20230729": [
          "./././images/2023/2305_DOKSURI/20230729\\tracking.png",
          "./././images/2023/2305_DOKSURI/20230729\\forecast.png",
        ],
        "20230724": [
          "./././images/2023/2305_DOKSURI/20230724\\tracking.png",
          "./././images/2023/2305_DOKSURI/20230724\\forecast.png",
        ],
        "20230725": [
          "./././images/2023/2305_DOKSURI/20230725\\tracking.png",
          "./././images/2023/2305_DOKSURI/20230725\\forecast.png",
        ],
        "20230726": [
          "./././images/2023/2305_DOKSURI/20230726\\tracking.png",
          "./././images/2023/2305_DOKSURI/20230726\\forecast.png",
        ],
        "20230723": [
          "./././images/2023/2305_DOKSURI/20230723\\tracking.png",
          "./././images/2023/2305_DOKSURI/20230723\\forecast.png",
        ],
      },
      "2314_KOINU": {
        "20231005": [
          "./././images/2023/2314_KOINU/20231005\\tracking.png",
          "./././images/2023/2314_KOINU/20231005\\forecast.png",
        ],
        "20231002": [
          "./././images/2023/2314_KOINU/20231002\\tracking.png",
          "./././images/2023/2314_KOINU/20231002\\forecast.png",
        ],
        "20231007": [
          "./././images/2023/2314_KOINU/20231007\\tracking.png",
          "./././images/2023/2314_KOINU/20231007\\forecast.png",
        ],
        "20230930": [
          "./././images/2023/2314_KOINU/20230930\\tracking.png",
          "./././images/2023/2314_KOINU/20230930\\forecast.png",
        ],
        "20231004": [
          "./././images/2023/2314_KOINU/20231004\\tracking.png",
          "./././images/2023/2314_KOINU/20231004\\forecast.png",
        ],
        "20231008": [
          "./././images/2023/2314_KOINU/20231008\\tracking.png",
          "./././images/2023/2314_KOINU/20231008\\forecast.png",
        ],
        "20231003": [
          "./././images/2023/2314_KOINU/20231003\\tracking.png",
          "./././images/2023/2314_KOINU/20231003\\forecast.png",
        ],
        "20231009": [
          "./././images/2023/2314_KOINU/20231009\\tracking.png",
          "./././images/2023/2314_KOINU/20231009\\forecast.png",
        ],
        "20231006": [
          "./././images/2023/2314_KOINU/20231006\\tracking.png",
          "./././images/2023/2314_KOINU/20231006\\forecast.png",
        ],
        "20231001": [
          "./././images/2023/2314_KOINU/20231001\\tracking.png",
          "./././images/2023/2314_KOINU/20231001\\forecast.png",
        ],
      },
    },
  });
  const [selectedStorm, setSelectedStorm] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  // Compute minDate and maxDate based on selectedStorm
  // const { date } = useMemo(() => {
  //   if (!stormData || !selectedStorm) {
  //     return { minDate: null, maxDate: null };
  //   }

  //   const years = Object.keys(stormData);
  //   let dates: string[] = [];

  //   years.forEach((year) => {
  //     if (stormData[year]?.[selectedStorm]) {
  //       const stormDates = Object.keys(stormData[year][selectedStorm]);
  //       dates.push(...stormDates);
  //     }
  //   });

  //   if (dates.length === 0) {
  //     return { minDate: null, maxDate: null };
  //   }

  //   // Sort dates to find min and max
  //   dates.sort();
  //   return {
  //     date: dates[0],
  //   };
  // }, [stormData, selectedStorm]);

  return (
    <Router>
      <div className="app-grid">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="col1">
                  <FilterBox
                    stormData={stormData}
                    selectedStorm={selectedStorm}
                    onSelectStorm={setSelectedStorm}
                    selectedDate={selectedDate}
                    onSelectDate={setSelectedDate}
                  />
                  <div className="vertical-divider"></div>
                </div>
                <div className="col4 content">
                  <HeadLine>
                    AI-based Meteorological And Hydrological Forecasting
                  </HeadLine>
                  <div className="tags-container">
                    <div className="first-tag chosen-tag">
                      <Link to="/">
                        <div className="chosen-tag-text">
                          TC Intensity Estimate
                        </div>
                      </Link>
                    </div>
                    <div className="last-tag tag">
                      <Link to="/precipitation">
                        <div className="tag-text">Precipitation Prediction</div>
                      </Link>
                    </div>
                  </div>
                  <Content
                    stormData={stormData}
                    selectedStorm={selectedStorm}
                    date={selectedDate || new Date()}
                  />
                </div>
              </>
            }
          />
          <Route
            path="/precipitation"
            element={
              <>
                <div className="col1">
                  <FilterBox
                    stormData={stormData}
                    selectedStorm={selectedStorm}
                    onSelectStorm={setSelectedStorm}
                    selectedDate={selectedDate}
                    onSelectDate={setSelectedDate}
                  />
                  <div className="vertical-divider"></div>
                </div>
                <div className="col4 content">
                  <HeadLine>
                    AI-based Meteorological And Hydrological Forecasting
                  </HeadLine>
                  <div className="tags-container">
                    <div className="first-tag chosen-tag">
                      <Link to="/">
                        <div className="chosen-tag-text">
                          TC Intensity Estimate
                        </div>
                      </Link>
                    </div>
                    <div className="last-tag tag">
                      <Link to="/precipitation">
                        <div className="tag-text">Precipitation Prediction</div>
                      </Link>
                    </div>
                  </div>
                  <Content
                    stormData={stormData}
                    selectedStorm={selectedStorm}
                    date={selectedDate || new Date()}
                  />
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
