import React from "react";
import pagesize from "./orderform-assets/pagesize 1.png";
import orient from "./orderform-assets/orient 2.png";
import { Switch } from "@mui/material";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useContext, useState } from "react";
import Detailcontext from "./DetailContext/Detailcontext";
import Formcontext from "./OrderFormContext/FormContex";

const size = ["A4", "A5", "A3"];
const orientation = ["Portrait", "Landscape"];

function Orderform1() {
  const { details, setDetails } = useContext(Detailcontext);
  const { is_F1_Invalide, setFormOneValid } = useContext(Formcontext);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [clickedpos, setClickedpos] = useState(null);

  return (
    <>
      <div
        id="formcontainer"
        className="   flex-col md:flex-row w-full h-full rounded-md flex"
      >
        <div
          id="leftform"
          className="flex flex-col p-2 md:w-1/2 w-full h-full gap-2 "
        >
          {/* size details */}
          <div className=" flex items-center">
            <img src={pagesize} className=" w-6 h-6 mr-2" alt="" />
            <h1 className=" text-zinc-700 text-left text-xl font-semibold py-2">
              Size
            </h1>
          </div>
          <div id="sizedetails" className=" flex items-center gap-1 ">
            {size.map((item, index) => {
              return (
                <h1
                  key={index}
                  className={`font-semibold text-left bg-slate-50 rounded-xl ${
                    is_F1_Invalide.size
                      ? " bg-red-200 outline-red-600 border-red-600 outline-[1px]"
                      : ""
                  }  border-[2px] cursor-pointer border-gray-500 
                        outline outline-transparent 
                        hover:bg-slate-200 text-xs md:text-base  ${
                          clickedIndex === index || details.size === item
                            ? "bg-gray-200 outline-purple-500 outline-[2px]"
                            : ""
                        } py-1 px-4`}
                  onClick={() => {
                    setDetails({ ...details, size: item });
                    setClickedIndex(index);
                    setFormOneValid({ ...is_F1_Invalide, size: false });
                  }}
                >
                  {item}
                </h1>
              );
            })}
          </div>
          {/* orientation details */}
          <div className=" flex items-center mt-6">
            <img src={orient} className=" w-6 h-6 mr-2" alt="" />
            <h1 className=" text-zinc-700 text-left text-xl font-semibold py-2">
              Orientation
            </h1>
          </div>
          <div id="sizedetails" className=" flex  items-center gap-1 ">
            {orientation.map((item, index) => {
              return (
                <h1
                  key={index}
                  className={`font-semibold text-left   ${
                    is_F1_Invalide.orientation
                      ? "bg-red-200 outline-red-600 border-red-600 outline-[1px]"
                      : "bg-slate-50 border-gray-500"
                  } rounded-xl border-[2px] cursor-pointer  
                    outline outline-transparent 
                    hover:bg-slate-200 text-xs md:text-base ${
                      clickedpos === index || details.orientation === item
                        ? "bg-gray-200 outline-purple-500 outline-[2px]"
                        : "bg-slate-50"
                    } py-1 px-4`}
                  onClick={() => {
                    setDetails({ ...details, orientation: item });
                    setClickedpos(index);
                    setFormOneValid({ ...is_F1_Invalide, orientation: false });
                  }}
                >
                  {item}{" "}
                </h1>
              );
            })}
          </div>
          {/* artist signature */}
          <div id="signature" className=" flex items-center">
            <Switch
              className="my-4 scale-75"
              // checked={}
              onChange={() => {
                setDetails({ ...details, signature: !details.signature });
              }}
              {...(details.signature && { checked: true })}
              color="secondary"
              inputProps={{ "aria-label": "controlled" }}
            />
            <h1 className=" text-left text-base font-semibold py-2 text-slate-700">
              Artist's Signature
            </h1>
          </div>
        </div>

        {/* this is right side of the form */}
        <div id="rightform" className=" md:w-1/2 h-full">
          <h1 className="text-zinc-700 text-left text-xl font-semibold py-2">
            Upload Image
          </h1>
          {/* upload area */}
          <div
            onClick={() => {}}
            id="upload"
            className=" cursor-pointer  flex flex-col items-center justify-center h-[10rem] w-full my-4 md:w-[80%] border-[2px] border-slate-400 border-dashed bg-slate-50 rounded-lg"
          >
            <div
              id="uploadcircle"
              className=" flex items-center justify-center shadow-lg w-[4rem] h-[4rem] rounded-full bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]"
            >
              <DriveFolderUploadIcon className=" scale-150 text-white" />
            </div>
            <h1 className="text-slate-700 m-2 text-xs max-w-56">
              Drag and drop your image here or{" "}
              <span className=" text-[#4A00E0] font-semibold">browse</span> to
              choose a file
            </h1>
          </div>
          {/* guide area */}
          <div id="guide">
            <ul
              style={{ listStyle: "disc" }}
              className=" pb-4 px-4 md:px-2 text-left text-xs text-slate-500"
            >
              <li>Upload a high-quality image.</li>
              <li>Face should be clearly visible.</li>
              <li>Do not upload a blurry image.</li>
              <li>Max file size 50 MB.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orderform1;
