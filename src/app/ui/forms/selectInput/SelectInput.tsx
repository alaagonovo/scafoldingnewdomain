"use client";
import React, { useState } from "react";
import Downdroparrow from "../../../../../public/svgs/downdroparrow";

interface IFormState {
  [key: string]: string; // Allow dynamic keys
}

function SelectInput({
  label,
  options,
  setFormValues,
  formValues,
  name,
  reset,
  placeholder,
  index,
}: {
  label: string;
  options: string[];
  setFormValues: (values: IFormState) => void;
  formValues: IFormState;
  name: string;
  placeholder: string;
  reset: boolean;
  index: number;
}) {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [dropInput, setDropInput] = useState(false);

  const handleSelect = (option: string) => {
    if (option !== "Other") {
      setFormValues({ ...formValues, [name]: option });
      setIsOpen((prev) => !prev);
    } else {
      setDropInput((prev) => !prev);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    setFormValues({ ...formValues, [name]: e.target.value });
  };

  return (
    <div className="relative w-full">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-labelColor"
      >
        {label}
      </label>

      {/* Dropdown Button */}
      <div
        className="flex items-center justify-between  border border-boredrColor  text-sm rounded-lg focus:ring-black  w-full p-2.5  text-placeholderColor cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="text-placeholderColor">
          {formValues[name] || `${placeholder}`}
        </span>
        <Downdroparrow isOpen={isOpen} />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul
          className={`absolute ${
            index === 3 ? "top-[-350%]" : ""
          } bg-white border border-gray-300 rounded-lg mt-1 w-full max-h-60 overflow-auto z-10`}
        >
          {options.map((option, index) => (
            <React.Fragment key={index}>
              {option === "Other" ? (
                <div
                  className="flex justify-between p-2 text-placeholderColor hover:bg-slate-200 cursor-pointer"
                  onClick={() => setDropInput((prev) => !prev)}
                >
                  <span>Others</span>
                  <Downdroparrow isOpen={dropInput} />
                </div>
              ) : (
                <li
                  key={index}
                  onClick={() => handleSelect(option)}
                  className="p-2 text-placeholderColor hover:bg-slate-200 cursor-pointer"
                >
                  {option}
                </li>
              )}
            </React.Fragment>
          ))}

          {/* Input Field for "Others" */}
          {dropInput && (
            <li className="px-2 pb-2 ">
              <div className="flex items-center h-[44px]">
                <input
                  type="text"
                  value={reset ? "" : inputValue}
                  onChange={handleInputChange}
                  name={name}
                  placeholder="Enter custom option"
                  required
                  className="h-full w-full p-2 bg-gray-50 border border-gray-300 text-placeholderColor text-sm rounded-lg "
                />
              </div>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default SelectInput;
