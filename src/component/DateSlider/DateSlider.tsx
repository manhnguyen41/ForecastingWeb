import React, { useEffect, useState } from "react";
import { Slider, Box } from "@mui/material";
import "./DateSlider.css";
import dateSliderTheme from "./DateSliderTheme";
import { ThemeProvider } from "@mui/material";

interface DateSliderProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  minDate: Date;
  maxDate: Date;
}

const DateSlider: React.FC<DateSliderProps> = ({
  selectedDate,
  onDateChange,
  minDate,
  maxDate,
}) => {
  const [sliderValue, setSliderValue] = useState(0);

  const startDate = minDate;
  const endDate = maxDate;
  const totalIntervals = Math.floor(
    (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 6)
  );

  useEffect(() => {
    const intervalsDiff = Math.floor(
      (selectedDate.getTime() - startDate.getTime()) / (1000 * 3600 * 6)
    );
    setSliderValue(intervalsDiff);
  }, [selectedDate, startDate]);

  const handleSliderChange = (_: Event, value: number | number[]) => {
    const newValue = Array.isArray(value) ? value[0] : value;
    setSliderValue(newValue);
    const newDate = new Date(
      startDate.getTime() + newValue * 6 * 60 * 60 * 1000
    );
    onDateChange(newDate);
  };

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${day}/${month}/${year}`;
  };

  return (
    <Box className="date-slider" sx={{ width: "100%" }}>
      <ThemeProvider theme={dateSliderTheme}>
        <Slider
          value={sliderValue}
          min={0}
          max={totalIntervals}
          step={4}
          valueLabelDisplay="auto"
          onChange={handleSliderChange}
          valueLabelFormat={(value) =>
            formatDate(
              new Date(startDate.getTime() + value * 6 * 60 * 60 * 1000)
            )
          }
          marks={[
            { value: 0, label: formatDate(startDate) },
            { value: totalIntervals, label: formatDate(endDate) },
          ]}
        />
      </ThemeProvider>
    </Box>
  );
};

export default DateSlider;
