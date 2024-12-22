import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import DateSlider from "../DateSlider/DateSlider";
import "./PrecipitationContent.css";
import HeadLine from "../HeadLine/HeadLine";

interface PrecipitationContentProps {
  date: Date | null;
}

interface StationData {
  station: string;
  lat: number;
  lon: number;
  accumulatedPrecipitation: { [key: string]: number };
}

const formatDate = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")} ${String(
    date.getHours()
  ).padStart(2, "0")}:00:00`;

const PrecipitationContent: React.FC<PrecipitationContentProps> = ({
  date,
}) => {
  const [stationData, setStationData] = useState<StationData[]>([]);
  const [sliderSelectedDate, setSliderSelectedDate] = useState<Date>(
    date || new Date()
  );

  useEffect(() => {
    const fetchData = async () => {
      const startDateStr = (date || new Date()).toISOString().split("T")[0];
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_BACKEND_HOST
          }get_precipitation_data?start_date=${startDateStr}`
        );

        setStationData(
          Object.keys(response.data).map((stationId) => ({
            station: stationId,
            lat: parseFloat(response.data[stationId].lat),
            lon: parseFloat(response.data[stationId].lon),
            accumulatedPrecipitation: response.data[stationId].precipitation,
          }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    if (date) setSliderSelectedDate(date);
  }, [date]);

  const handleDateChange = useCallback((newDate: Date) => {
    setSliderSelectedDate(newDate);
  }, []);

  const maxSelectableDate = useMemo(() => {
    const maxDate = new Date(sliderSelectedDate);
    maxDate.setDate(maxDate.getDate() + 10);
    return maxDate;
  }, [date]);

  const getColorForPrecipitation = useCallback((precipitation: number) => {
    if (precipitation > 50) return "red";
    if (precipitation > 20) return "orange";
    if (precipitation > 10) return "yellow";
    return "green";
  }, []);

  const mapBounds = useMemo(() => {
    const coordinates: [[number, number], [number, number]] = [
      [8, 100], // Southwest
      [25, 115], // Northeast
    ];
    return coordinates;
  }, []);

  return (
    <div className="precipitation-content">
      <HeadLine>{`Accumulated Precipitation Map Over Time`}</HeadLine>
      <MapContainer
        bounds={mapBounds}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {stationData.map((station) => {
          const precipValue =
            station.accumulatedPrecipitation[
              formatDate(
                new Date(sliderSelectedDate.getTime() - 7 * 60 * 60 * 1000)
              )
            ] || 0;
          if (sliderSelectedDate.getTime() !== (date || new Date()).getTime())
            return (
              <CircleMarker
                key={`${station.station}-${(
                  date || new Date()
                ).toISOString()}-${sliderSelectedDate.toISOString()}`}
                center={[station.lat, station.lon]}
                radius={5}
                color={getColorForPrecipitation(precipValue)}
              >
                <Popup>
                  <div>
                    <strong>Station:</strong> {station.station}
                    <br />
                    <strong>Precipitation:</strong> {precipValue} mm
                  </div>
                </Popup>
              </CircleMarker>
            );
          else
            return (
              <CircleMarker
                key={`${station.station}-${(
                  date || new Date()
                ).toISOString()}-${sliderSelectedDate.toISOString()}`}
                center={[station.lat, station.lon]}
                radius={5}
                color={'green'}
              >
                <Popup>
                  <div>
                    <strong>Station:</strong> {station.station}
                    <br />
                    <strong>Precipitation:</strong> {precipValue} mm
                  </div>
                </Popup>
              </CircleMarker>
            );
        })}
      </MapContainer>

      <DateSlider
        selectedDate={sliderSelectedDate}
        onDateChange={handleDateChange}
        minDate={date || new Date()}
        maxDate={maxSelectableDate}
      />
    </div>
  );
};

export default PrecipitationContent;
