import React from "react";
import "../css/filterDropdown.css";

const FilterDropdown = ({ setData, orderData }) => {
  return (
    <div className="filterDropdown">
      <button onClick={() => setData(orderData)}>All</button>
      <button
        onClick={() =>
          setData(
            orderData.filter((item) => item.status.text === "In Progress")
          )
        }
      >
        In Progress
      </button>
      <button
        onClick={() =>
          setData(orderData.filter((item) => item.status.text === "Complete"))
        }
      >
        Complete
      </button>
      <button
        onClick={() =>
          setData(orderData.filter((item) => item.status.text === "Pending"))
        }
      >
        Pending
      </button>
    </div>
  );
};

export default FilterDropdown;
