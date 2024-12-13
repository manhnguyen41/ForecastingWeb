import React, { useState } from "react";
import './FilterBox.css'

interface FilterBoxProps {
  stormData: {
    [year: string]: { [stormId: string]: { [date: string]: string[] } };
  } | null;
  selectedStorm: string | null;
  onSelectStorm: (stormId: string) => void;
}

const FilterBox: React.FC<FilterBoxProps> = ({
  stormData,
<<<<<<< HEAD
  selectedStorm,
=======
>>>>>>> 3a459cbdde10529c926823e1d826d17ed2f35f21
  onSelectStorm,
}) => {
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFilterText = event.target.value;
    setFilterText(newFilterText);
  };

  const yearOptions: string[] = stormData ? Object.keys(stormData) : [];

  const StormsForYear: React.FC<{ year: string; filterText: string }> = ({
    year,
    filterText,
  }) => {
    const storms = stormData ? Object.keys(stormData[year]) : [];

    const filteredStorms = storms.filter((storm) =>
      storm.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
      <div className="storms-list">
        {filteredStorms.length > 0 ? (
          filteredStorms.map((storm) => (
            <a
              key={storm}
              href={`#${storm}`}
              onClick={() => onSelectStorm(storm)}
            >
              {storm}
            </a>
          ))
        ) : (
          <p>No storms found.</p>
        )}
      </div>
    );
  };

  return (
    <div className="filter-box">
      <h2>TC Intensity Forecast</h2>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterChange}
      />
      <h3>Years</h3>
      <div>
        {yearOptions.map((year) => (
          <div key={year} className="year-storms-row">
            <span style={{ marginLeft: "5px" }}>{year}</span>
            <StormsForYear year={year} filterText={filterText} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBox;
