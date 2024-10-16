"use client"; // Next.js directive for client-side rendering
import React from "react";
import { useState, ChangeEvent } from "react";
import { Card, CardTitle, CardDescription } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";


const ColorPicker = () => { // Define your functional component
  const [color, setColor] = useState("#000000"); // Move useState inside the component

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setColor(event.target.value); // Update color state
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    alert("Copied to clipboard"); // Show alert when copied
  };

  // JSX Return Statement
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md mx-auto p-8 grid gap-8">
        <div className="text-center space-y-2"></div>
        <CardTitle>Color Picker</CardTitle>
        <CardDescription className="text-black text-lg ">
          Select a color and copy the Hex and RGB values
        </CardDescription>
        <div className="grid gap-4">
          <div
            className="w-full h-48 rounded-lg border-4 border-gray-300 dark:border-gray-800"
            style={{ backgroundColor: color }}
          />
          <div className="grid gap-2 text-center">
            <div className="text-2xl font-semibold">{color}</div>
            <div className="text-black dark:text-with">
              RGB: {parseInt(color.slice(1, 3), 16)},{" "}
              {parseInt(color.slice(3, 5), 16)},{" "}
              {parseInt(color.slice(5, 7), 16)}
            </div>
            <Button 
              onClick={copyToClipboard} // Call copy function on button click
              variant="default"
              className="w-full text-2xl text-white"
            >
              Copy to Clipboard
            </Button>
          </div>
          <input
            type="color"
            value={color}
            onChange={handleColorChange} // Update color on change
            className="w-full h-16 p-0 border-0 rounded-md cursor-pointer border-gray-300 dark:border-gray-800"
          />
          {/* <input
            type="text"
            value={color}
            onChange={handleColorChange} // Update color on change
            className="w-full h-16 p-2 border-0 rounded-md cursor-pointer border-gray-300 dark:border-gray-800"
          /> */}
      </div>
      {/* <div className="w-full h-48 rounded-lg border-4 border-gray-300 dark:border-gray-800">
      <img src="https://preview.redd.it/is-there-a-way-to-dock-this-window-attempting-to-use-color-v0-rynlnklxid0c1.idth=285&format=png&auto=webp&s=681d8f5e62cbf298ef8be644c2b1259fb05e1bcb" />
      </div> */}
      </Card>
    </div>

  );
};
export default ColorPicker;