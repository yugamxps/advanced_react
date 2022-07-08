import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  return (
    <>
      {people.map((person) => {
        console.log(person);
        return "Hello";
      })}
    </>
  );
};

export default UseStateArray;
