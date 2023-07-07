import React from "react";
import Button from "./Button";

const buttonList = [
  "All",
  "Movies",
  "Music",
  "Cricket",
  "Games",
  "News",
  "TV",
  "WebSeries",
  "All",
  "Movies",
  "Music",
  "Cricket",
  "Games",
  "News",
  "TV",
  "WebSeries",
  "All",
  "Movies",
  "Music",
  "Cricket",
  "Games",
  "News",
  "TV",
  "WebSeries",
  "All",
  "Movies",
  "Music",
  "Cricket",
  "Games",
  "News",
  "TV",
  "WebSeries",
];

const ButtonList = () => {
  return (
    <div className="flex flex-wrap">
      {buttonList.map((btn, indx) => (
        <Button key={indx} name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
