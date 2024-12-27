import React from "react";
import "./Content.css";
import DateSlider from "../DateSlider/DateSlider";

interface ContentProps {
  stormData: {
    [year: string]: {
      [storm: string]: {
        [date: string]: { images: []; mse_hres: number; mse_out: number };
      };
    };
  } | null;
  selectedStorm: string | null;
  date: Date;
  onDateChanged: (date: Date) => void;
}

const Content: React.FC<ContentProps> = ({
  stormData,
  selectedStorm,
  date,
  onDateChanged,
}) => {
  selectedStorm = selectedStorm ? selectedStorm : "1";
  stormData = stormData || {};

  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
  const day = date.getDate().toString().padStart(2, "0");
  const dateKey = `${year}${month}${day}`;
  const stormImages = stormData[year]?.[selectedStorm]?.[dateKey] ?? {};

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

  return (
    <div className="content-container">
      {stormImages.images?.length ? (
        <div className="header-container">
          <div className="header">{`TC Intensity Estimation for ${selectedStorm} from 00:00 ${day}/${month}/${year}`}</div>
        </div>
      ) : (
        <></>
      )}

      <div className="image-row">
        {stormImages.images?.length > 0 ? (
          stormImages.images.map((image: string, index: number) => (
            <div key={index} className="image-box">
              {index == 1 ? (
                <>
                  <div className="image-title">{`Intensity forecasting for ${selectedStorm}`}</div>
                  <div className="image-title">{`from 00:00 ${day}/${month}/${year}`}</div>
                  <img loading="lazy" src={image} alt={selectedStorm} />
                  <div className="mse-container">
                    <div className="mse-title">MSE</div>
                    <div className="mse">
                      Our method: {stormImages.mse_out.toFixed(4)}
                    </div>
                    <div className="mse">
                      Hres: {stormImages.mse_hres.toFixed(4)}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="image-title">{`Tropical Cyclone Tracking Map for ${selectedStorm}`}</div>
                  <div className="image-title">{`from 00:00 ${day}/${month}/${year}`}</div>
                  <img loading="lazy" src={image} alt={selectedStorm} />
                  <div className="mse-container hidden">
                    <div className="mse-title hidden">MSE</div>
                    <div className="mse hidden">Our method: 100</div>
                    <div className="mse hidden">Our method: 100</div>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <h1>Select any storm to see the estimation</h1>
        )}
      </div>
      <DateSlider
        selectedDate={date}
        onDateChange={onDateChanged}
        minDate={getMinMaxDatesForStorm(selectedStorm)?.minDate || new Date()}
        maxDate={getMinMaxDatesForStorm(selectedStorm)?.maxDate || new Date()}
      />
    </div>
  );
};

export default Content;
