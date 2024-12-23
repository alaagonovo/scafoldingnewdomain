"use client";
import React, { useEffect, useState } from "react";
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
  isOpen,
  setOpenDropdownIndex,
}: {
  label: string;
  options: string[];
  setFormValues: (values: IFormState) => void;
  formValues: IFormState;
  name: string;
  placeholder: string;
  reset: boolean;
  index: number;
  isOpen: boolean;
  setOpenDropdownIndex: (index: number | null) => void;
}) {
  const [inputValue, setInputValue] = useState("");
  // const initialopens=[]
  // const [isOpen, setIsOpen] = useState<number | null>(null);

  const handleSelect = (option: string) => {
    setFormValues({ ...formValues, [name]: option });
    setOpenDropdownIndex(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    setFormValues({ ...formValues, [name]: e.target.value });
  };
  useEffect(() => {
    if (reset) setInputValue("");
  }, [reset]);

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
        className="flex items-center justify-between  border border-boredrColor  text-base rounded-lg focus:ring-black  w-full p-2.5  text-placeholderColor cursor-pointer"
        onClick={() => setOpenDropdownIndex(isOpen ? null : index)}
      >
        <span className="text-placeholderColor">
          {formValues[name] || `${placeholder}`}
        </span>
        <Downdroparrow isOpen={isOpen} />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul
          className="absolute 
           bg-white border border-gray-300 rounded-lg mt-1 w-full max-h-44 overflow-auto z-10"
        >
          {options.map((option, index) => (
            <React.Fragment key={index}>
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className="p-2 text-placeholderColor hover:bg-slate-200 cursor-pointer"
              >
                {option}
              </li>
              {/* )} */}
            </React.Fragment>
          ))}

          <li className="px-2 pb-2 ">
            <div className="flex items-center h-[44px]">
              <input
                type="text"
                value={reset ? "" : inputValue}
                onChange={handleInputChange}
                name={name}
                placeholder="Others"
                required
                className="h-full w-full p-2 bg-gray-50 border border-gray-300 text-placeholderColor text-sm rounded-lg "
              />
            </div>
          </li>
          {/* )} */}
        </ul>
      )}
    </div>
  );
}

export default SelectInput;
