import React from "react";
import "../style.css";

export default function NavProfile({ profile, styles }) {
  const { name, image } = profile || {};
  return (
    <div className="navProfileDiv">
      <img src={image || "/"} />
      <p className="regular-14 w-400">{name}</p>
    </div>
  );
}
