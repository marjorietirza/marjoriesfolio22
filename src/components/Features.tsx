import React from "react";

const featureData = [
  {
    title: "Ally to all",
    description:
      "Listen, stand up to & for the users, design & the fellas, business folks.",
  },
  {
    title: "Walking sit-com directory",
    description: "Pretty self-explanatory",
  },
  {
    title: "Puzzler",
    description:
      "From rubiks cube to sudoku, from scrabble to hangman, play them all, love them all",
  },
  {
    title: "Amateur Gamer",
    description:
      "Can't drive well in ETS, not qualify for 3rd round in Fall Guys, rarely scores in Rocket League",
  },
];

export default function Features() {
  return (
    <div className="grid gap-6 grid-cols-12">
      {featureData.map((item) => (
        <div className="col-span-12 md:col-span-6">
          {/* <span className="block w-64 h-64 bg-red-200"></span> */}
          <h2 className="my-4 font-light">{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
