import React from "react";
import "./Content.css";
import HeadLine from "../HeadLine/HeadLine";

interface ContentProps {
  stormData: {
    [year: string]: { [month: string]: { [date: string]: any[] } };
  } | null;
  selectedStorm: string | null;
  date: Date;
}

const Content: React.FC<ContentProps> = ({
  stormData,
  selectedStorm,
  date,
}) => {
  selectedStorm = selectedStorm ? selectedStorm : "1";
  stormData = stormData || {};

  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
  const day = date.getDate().toString().padStart(2, "0");
  const dateKey = `${year}${month}${day}`;
  const stormImages = stormData[year]?.[selectedStorm]?.[dateKey] ?? [];

  return (
    <div className="content-container">
      <div className="content-item">
        {stormImages.length ? (
          <HeadLine>{`TC Intensity Estimation for ${selectedStorm} from 00:00 ${day}/${month}/${year}`}</HeadLine>
        ) : (
          <></>
        )}
        <div className="image-row">
          {stormImages.length > 0 ? (
            stormImages.map((image: string, index: number) => (
              <div key={index} className="image-box">
                <img
                  loading="lazy"
                  src={`${
                    import.meta.env.VITE_BACKEND_HOST
                  }static/images/${image}`}
                  alt={selectedStorm}
                />
              </div>
            ))
          ) : (
            <p>Select any storm to see the estimation</p>
          )}
        </div>
        {/* <div className="detail">
          <h3>Annotate:</h3>
          <ul className="bullet-disc">
            <li></li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Content;
