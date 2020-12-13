import React from "react";
import Card from "./Card";

export default function Cards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 p-5 gap-4 text-center  justify-around w-full h-60 my-5">
      <Card
        text={"Achieve accident-free production."}
        icon={
          <i class="fas fa-cog fa-5x bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 animate-spin"></i>
        }
      />
      <Card
        text={"Build safety-conscious employees."}
        icon={
          <i class="fas fa-hard-hat fa-5x bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 animate-pulse"></i>
        }
      />
      <Card
        text={"Create a culture of safety."}
        icon={
          <i class="fas fa-users fa-5x bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 animate-bounce"></i>
        }
      />
    </div>
  );
}
