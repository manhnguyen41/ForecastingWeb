import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HeadLine from "./component/HeadLine/HeadLine";
import FilterBox from "./component/FilterBox/FilterBox";
import Content from "./component/Content/Content";
import "./App.css";
import baseStormData from "./assets/var";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme();

const App: React.FC = () => {
  const [stormData] = useState<any>(baseStormData);
  const [selectedStorm, setSelectedStorm] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  useEffect(() => {
    if (selectedStorm && stormData) {
      const stormDates: string[] = [];

      // Duyệt qua các năm và lấy danh sách ngày của cơn bão được chọn
      Object.keys(stormData).forEach((year) => {
        const stormsInYear = stormData[year];
        if (stormsInYear[selectedStorm]) {
          stormDates.push(...Object.keys(stormsInYear[selectedStorm]));
        }
      });

      if (stormDates.length > 0) {
        // Sắp xếp các ngày và lấy ngày đầu tiên
        stormDates.sort();
        const firstDateStr = stormDates[0];
        const year = parseInt(firstDateStr.slice(0, 4), 10);
        const month = parseInt(firstDateStr.slice(4, 6), 10) - 1;
        const day = parseInt(firstDateStr.slice(6, 8), 10);

        setSelectedDate(new Date(year, month, day));
      }
    }
  }, [selectedStorm, stormData]);

  return (
    <ThemeProvider theme={theme}>
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
                          <div className="tag-text">
                            Precipitation Prediction
                          </div>
                        </Link>
                      </div>
                    </div>
                    <Content
                      stormData={stormData}
                      selectedStorm={selectedStorm}
                      date={selectedDate || new Date()}
                      onDateChanged={setSelectedDate}
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
                          <div className="tag-text">
                            Precipitation Prediction
                          </div>
                        </Link>
                      </div>
                    </div>
                    <Content
                      stormData={stormData}
                      selectedStorm={selectedStorm}
                      date={selectedDate || new Date()}
                      onDateChanged={setSelectedDate}
                    />
                  </div>
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
