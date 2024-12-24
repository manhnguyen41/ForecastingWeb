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
      "2305_DOKSURI": {
        "20230728": {
          images: [
            "./././images/2023/2305_DOKSURI/20230728\\tracking.png",
            "./././images/2023/2305_DOKSURI/20230728\\forecast.png",
          ],
          mse_out: 1.5853169384847734,
          mse_hres: 8.590641451129873,
        },
        "20230726": {
          images: [
            "./././images/2023/2305_DOKSURI/20230726\\tracking.png",
            "./././images/2023/2305_DOKSURI/20230726\\forecast.png",
          ],
          mse_out: 4.920800317652167,
          mse_hres: 34.25524052726202,
        },
        "20230725": {
          images: [
            "./././images/2023/2305_DOKSURI/20230725\\tracking.png",
            "./././images/2023/2305_DOKSURI/20230725\\forecast.png",
          ],
          mse_out: 1.1944781146273509,
          mse_hres: 64.86501805015226,
        },
        "20230727": {
          images: [
            "./././images/2023/2305_DOKSURI/20230727\\tracking.png",
            "./././images/2023/2305_DOKSURI/20230727\\forecast.png",
          ],
          mse_out: 1.1316429545001698,
          mse_hres: 16.921879919875803,
        },
        "20230722": {
          images: [
            "./././images/2023/2305_DOKSURI/20230722\\tracking.png",
            "./././images/2023/2305_DOKSURI/20230722\\forecast.png",
          ],
          mse_out: 2.2480940681195305,
          mse_hres: 7.232974320071439,
        },
        "20230723": {
          images: [
            "./././images/2023/2305_DOKSURI/20230723\\tracking.png",
            "./././images/2023/2305_DOKSURI/20230723\\forecast.png",
          ],
          mse_out: 14.961086877402414,
          mse_hres: 20.18000820967742,
        },
        "20230729": {
          images: [
            "./././images/2023/2305_DOKSURI/20230729\\tracking.png",
            "./././images/2023/2305_DOKSURI/20230729\\forecast.png",
          ],
          mse_out: null,
          mse_hres: null,
        },
        "20230721": {
          images: [
            "./././images/2023/2305_DOKSURI/20230721\\tracking.png",
            "./././images/2023/2305_DOKSURI/20230721\\forecast.png",
          ],
          mse_out: 1.1861925741890924,
          mse_hres: 2.4344740396280007,
        },
        "20230724": {
          images: [
            "./././images/2023/2305_DOKSURI/20230724\\tracking.png",
            "./././images/2023/2305_DOKSURI/20230724\\forecast.png",
          ],
          mse_out: 2.9774380127775166,
          mse_hres: 42.325249906607844,
        },
      },
      "2309_SAOLA": {
        "20230829": {
          images: [
            "./././images/2023/2309_SAOLA/20230829\\tracking.png",
            "./././images/2023/2309_SAOLA/20230829\\forecast.png",
          ],
          mse_out: 12.3177430190505,
          mse_hres: 39.34169468264565,
        },
        "20230825": {
          images: [
            "./././images/2023/2309_SAOLA/20230825\\tracking.png",
            "./././images/2023/2309_SAOLA/20230825\\forecast.png",
          ],
          mse_out: 6.692330066331453,
          mse_hres: 8.603783405961897,
        },
        "20230831": {
          images: [
            "./././images/2023/2309_SAOLA/20230831\\tracking.png",
            "./././images/2023/2309_SAOLA/20230831\\forecast.png",
          ],
          mse_out: 13.252046486454105,
          mse_hres: 8.90915953119525,
        },
        "20230901": {
          images: [
            "./././images/2023/2309_SAOLA/20230901\\tracking.png",
            "./././images/2023/2309_SAOLA/20230901\\forecast.png",
          ],
          mse_out: 14.510497814617224,
          mse_hres: 11.084898753973615,
        },
        "20230830": {
          images: [
            "./././images/2023/2309_SAOLA/20230830\\tracking.png",
            "./././images/2023/2309_SAOLA/20230830\\forecast.png",
          ],
          mse_out: 15.727296302297677,
          mse_hres: 21.951969707225516,
        },
        "20230828": {
          images: [
            "./././images/2023/2309_SAOLA/20230828\\tracking.png",
            "./././images/2023/2309_SAOLA/20230828\\forecast.png",
          ],
          mse_out: 1.6531095407084497,
          mse_hres: 29.184348364518097,
        },
        "20230902": {
          images: [
            "./././images/2023/2309_SAOLA/20230902\\tracking.png",
            "./././images/2023/2309_SAOLA/20230902\\forecast.png",
          ],
          mse_out: 7.806773642808223,
          mse_hres: 29.324642566316978,
        },
        "20230827": {
          images: [
            "./././images/2023/2309_SAOLA/20230827\\tracking.png",
            "./././images/2023/2309_SAOLA/20230827\\forecast.png",
          ],
          mse_out: 5.2028808756909894,
          mse_hres: 37.46966824278091,
        },
        "20230826": {
          images: [
            "./././images/2023/2309_SAOLA/20230826\\tracking.png",
            "./././images/2023/2309_SAOLA/20230826\\forecast.png",
          ],
          mse_out: 2.722111397941523,
          mse_hres: 38.53673363517792,
        },
      },
      "2314_KOINU": {
        "20231005": {
          images: [
            "./././images/2023/2314_KOINU/20231005\\tracking.png",
            "./././images/2023/2314_KOINU/20231005\\forecast.png",
          ],
          mse_out: 7.438621475006255,
          mse_hres: 17.17160820692116,
        },
        "20231007": {
          images: [
            "./././images/2023/2314_KOINU/20231007\\tracking.png",
            "./././images/2023/2314_KOINU/20231007\\forecast.png",
          ],
          mse_out: 33.957566305015845,
          mse_hres: 36.10882235203069,
        },
        "20231002": {
          images: [
            "./././images/2023/2314_KOINU/20231002\\tracking.png",
            "./././images/2023/2314_KOINU/20231002\\forecast.png",
          ],
          mse_out: 5.982438473330099,
          mse_hres: 22.357531570567524,
        },
        "20231001": {
          images: [
            "./././images/2023/2314_KOINU/20231001\\tracking.png",
            "./././images/2023/2314_KOINU/20231001\\forecast.png",
          ],
          mse_out: 13.965659693098399,
          mse_hres: 25.720546388696192,
        },
        "20230930": {
          images: [
            "./././images/2023/2314_KOINU/20230930\\tracking.png",
            "./././images/2023/2314_KOINU/20230930\\forecast.png",
          ],
          mse_out: 1.2637728594957616,
          mse_hres: 3.9396615132041397,
        },
        "20231003": {
          images: [
            "./././images/2023/2314_KOINU/20231003\\tracking.png",
            "./././images/2023/2314_KOINU/20231003\\forecast.png",
          ],
          mse_out: 1.5362851319364694,
          mse_hres: 26.263139222855642,
        },
        "20231006": {
          images: [
            "./././images/2023/2314_KOINU/20231006\\tracking.png",
            "./././images/2023/2314_KOINU/20231006\\forecast.png",
          ],
          mse_out: 33.17093700474321,
          mse_hres: 59.43097137534984,
        },
        "20231009": {
          images: [
            "./././images/2023/2314_KOINU/20231009\\tracking.png",
            "./././images/2023/2314_KOINU/20231009\\forecast.png",
          ],
          mse_out: 9.162639210318982,
          mse_hres: 105.55272326711025,
        },
        "20231008": {
          images: [
            "./././images/2023/2314_KOINU/20231008\\tracking.png",
            "./././images/2023/2314_KOINU/20231008\\forecast.png",
          ],
          mse_out: 21.093116139169712,
          mse_hres: 29.26973458763347,
        },
        "20231004": {
          images: [
            "./././images/2023/2314_KOINU/20231004\\tracking.png",
            "./././images/2023/2314_KOINU/20231004\\forecast.png",
          ],
          mse_out: 1.1857962617981603,
          mse_hres: 12.710259003865051,
        },
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
                <div className="col3 content">
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
                <div className="col3 content">
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
