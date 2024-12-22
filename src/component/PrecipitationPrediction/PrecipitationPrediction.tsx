import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./PrecipitationPrediction.css";
import PrecipitationContent from "../PrecipitationContent/PrecipitationContent";

const PrecipitationPrediction: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date('2022-07-01'));

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <>
      <div className="col1">
        <h2>Precipitation Prediction</h2>
        <div className="calendar-container">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            dateFormat="yyyy-MM-dd"
          />
        </div>
      </div>
      <div className="col3">
        <PrecipitationContent date={selectedDate} />
      </div>
    </>
  );
};

export default PrecipitationPrediction;
