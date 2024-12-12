import React, { useEffect, useState } from 'react';
import './DateSlider.css';

const stringToDate = (date: string) => {
  const year = parseInt(date.substring(0, 4));
  const month = parseInt(date.substring(4, 6)) - 1;
  const day = parseInt(date.substring(6, 8));

  // Create a Date object
  const dateObj = new Date(year, month, day);
  return dateObj
}

interface DateSliderProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  minDate: string;
  maxDate: string;
}

const DateSlider: React.FC<DateSliderProps> = ({ 
  selectedDate, 
  onDateChange, 
  minDate,
  maxDate
}) => {
  const [sliderValue, setSliderValue] = useState(0);

  const startDate = stringToDate(minDate);
  const endDate = stringToDate(maxDate);
  const totalDays = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));

  useEffect(() => {
    const daysDiff = Math.floor((selectedDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
    setSliderValue(daysDiff);
  }, [selectedDate, startDate]);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setSliderValue(value);
    const newDate = new Date(startDate.getTime() + value * 24 * 60 * 60 * 1000);
    onDateChange(newDate);
  };

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); 
    const day = String(date.getDate()).padStart(2, "0");

    // Combine them into a formatted string
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  
  return (
    <div className="date-slider">
      <input
        type="range"
        min={0}
        max={totalDays}
        value={sliderValue}
        onChange={handleSliderChange}
        className="slider"
      />
      <div className="date-display">
        {formatDate(selectedDate)}
      </div>
    </div>
  );
};

export default DateSlider;

