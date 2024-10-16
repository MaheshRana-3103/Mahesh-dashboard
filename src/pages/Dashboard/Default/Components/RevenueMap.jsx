import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { motion } from "framer-motion";
import "../css/RevenueMap.css";
import geoUrl from "../../../../utils/map.json";

const RevenueMap = ({ locations }) => {
  const maxRevenue = Math.max(...locations.map((loc) => loc.revenue));
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="revenueContainer"
    >
      <h3 className="revenueHeading semibold-14">
        Revenue by Location
      </h3>
      <div className="revenueMap">
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>

          {locations.map(({ name, coordinates }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={20} className="marker-map" />
            </Marker>
          ))}
        </ComposableMap>
      </div>
      <div className="revenueMapData">
        {locations.map((location) => (
          <div className="revenueMapDataDiv" key={location.name}>
            <div className="revenueLocationData">
              <div className="regular-12 revenueLocationName">
                {location.name}
              </div>
              <div className="regular-12 revenueLocationRevenue">
                {location.revenue}K
              </div>
            </div>
            <div className="revenueProgress">
              <div
                className="revenueProgressDiv"
                style={{
                  width: `${(location.revenue / maxRevenue) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default RevenueMap;
