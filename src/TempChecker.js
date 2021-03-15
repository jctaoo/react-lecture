import React from "react";

export default function TempChecker({ temp }) {
  if (temp > 100) {
    return <h1>The water is boil</h1>;
  }
  return <h1>Normal water</h1>;
}
