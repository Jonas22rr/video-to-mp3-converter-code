import React from "react";
import { getApiData } from "../services/getApiData";

export default function Home() {
  // state for input value
  const [inputValue, setInputValue] = React.useState("");
  const [downloadLink, setDownloadLink] = React.useState("");

  const handleConvert = async () => {
    const respons: any = await getApiData("/convert-mp3", inputValue);
    console.log(respons);
    setDownloadLink(respons);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="basis-auto text-white font-bold rounded-lg border shadow-lg w-8/12 h-1/2">
        <div className="p-8 h-full w-full text-center">
          <h1 className="text-4xl">Video to mp3 converter</h1>
          <div className="pb-10 pt-10 flex-row">
            <input
              className="text-black h-10 rounded w-4/5 text-lg "
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              onClick={handleConvert}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 py-2 px-4 rounded m-4"
            >
              Convert
            </button>
          </div>
          <div>
            <a href={downloadLink}>
              <button
                id="idDownloadBtn"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                download
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
