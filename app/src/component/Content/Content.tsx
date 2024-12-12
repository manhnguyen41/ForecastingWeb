import React from "react";
import "./Content.css";

interface ContentProps {
  stormData: { [year: string]: { [month: string]: { [date: string]: any[] } } } | null;
  selectedStorm: string | null;
  selectedDate: Date;
}

const Content: React.FC<ContentProps> = ({ stormData, selectedStorm, selectedDate }) => {
  selectedStorm = selectedStorm ? selectedStorm : '1';
  stormData = stormData || {};
  
  const year = selectedDate.getFullYear().toString();
  const month = (selectedDate.getMonth() + 1).toString().padStart(2, "0");  // Months are zero-indexed
  const day = selectedDate.getDate().toString().padStart(2, "0");
  const dateKey = `${year}${month}${day}`;
  const stormImages = stormData[year]?.[selectedStorm]?.[dateKey] ?? [];  

  return (
    <div className="content-container">
      <h2>TC Intensity Forecast</h2>
      <div className="content-item">
        <div className="image-row">
          {stormImages.length > 0 ? (
            stormImages.map((image: string, index: number) => (
              <div key={index} className="image-box">
                <img src={`http://localhost:8000/static/images/${image}`} alt={selectedStorm} />
              </div>
            ))
          ) : (
            <p>No images found for the selected storm and date.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
