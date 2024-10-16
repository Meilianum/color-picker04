"useclient";
import React from "react";
import ColorPicker from "@/Components/ColorPicker";

export default function Home() {
  

  return (
    
  
<div className="flex flex-col underline text-lg justify-center boader-2 border-t-4 boader-b-4 p-4 bg-slate-950 text-center"><h1 className="text-3xl font-bold text-white">Color Picker</h1>
 
      <ColorPicker /> 
      <h1 className="text-white">presented by: @Rukhsana Rais</h1>-
    </div>
  );
}