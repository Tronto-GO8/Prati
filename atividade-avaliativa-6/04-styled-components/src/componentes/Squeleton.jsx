import React from "react";

export default function Skeleton({ width = "100%", height = "1rem", borderRadius = "4px" }) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius,
        backgroundColor: "#ccc",
        animation: "pulse 1.5s infinite ease-in-out"
      }}
    />
  );
}