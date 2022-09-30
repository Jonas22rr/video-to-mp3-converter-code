import React from "react";
import { getApiData } from "../services/getApiData";

export default function Home() {
  // state for input value
  const [inputValue, setInputValue] = React.useState("");

  const handleConvert = async () => {
    // make the API call
    try {
      const res: any = await getApiData(
        "http://localhost:3001/convert",
        inputValue
      );
      alert(res);
    } catch {
      alert("Error");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="basis-auto text-white font-bold rounded-lg border shadow-lg w-8/12 h-1/2">
        <div className="p-8 h-full w-full text-center">
          <h1 className="text-4xl">Video to mp3 converter</h1>
          <div className="pb-10 pt-10 flex-row">
            <input
              className="text-black"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <input
              type={"button"}
              value={"Convert"}
              onClick={handleConvert}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
