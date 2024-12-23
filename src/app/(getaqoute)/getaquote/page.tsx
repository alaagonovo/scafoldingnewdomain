"use client";

import getaquote from "@/app/data/gatauote";
import SelectInput from "@/app/ui/forms/selectInput/SelectInput";
import MainTitle from "@/app/ui/mainTitle/MainTitle";
import SuccessModal from "@/app/ui/succesModal/SuccessModal";
import { useState } from "react";

export default function GetAQuotePage() {
  const [formValues, setFormValues] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
  });

  const [errors, setErrors] = useState<{
    [key in keyof typeof formValues]: string;
  }>({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
  });
  const [reset, setReset] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const handleFormValuesUpdate = (
    updatedValues: Partial<typeof formValues>
  ) => {
    setFormValues((prev) => ({ ...prev, ...updatedValues }));
    setErrors((prev) => ({
      ...prev,
      ...Object.keys(updatedValues).reduce(
        (acc, key) => ({ ...acc, [key]: "" }),
        {}
      ),
    }));
  };

  const validateFields = () => {
    const newErrors: Partial<typeof errors> = {};
    Object.entries(formValues).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key as keyof typeof errors] = "This field must be filled";
      }
    });
    setErrors(newErrors as typeof errors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateFields()) {
      console.log("Form Submitted:", formValues);
      setFormValues({
        field1: "",
        field2: "",
        field3: "",
        field4: "",
        field5: "",
      });
      setReset(true);
      setTimeout(() => {
        setReset(false);
      }, 2000);
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <div className="mx-4 w-full md:mx-0 md:w-[512px]">
      <MainTitle />
      <form
        className="flex flex-col gap-5 mt-12"
        onSubmit={handleSubmit}
        data-aos="fade-up"
        data-aos-delay="250"
      >
        {getaquote.map((field, index) => (
          <div key={index} className="relative">
            <SelectInput
              label={field.label}
              options={field.options}
              placeholder={field.placeholder}
              formValues={formValues}
              name={field.name}
              setFormValues={handleFormValuesUpdate}
              reset={reset}
              index={index}
              isOpen={openDropdownIndex === index}
              setOpenDropdownIndex={setOpenDropdownIndex}
            />
            {errors[field.name as keyof typeof errors] && (
              <p className="text-red-500 text-sm mt-1 absolute">
                {errors[field.name as keyof typeof errors]}
              </p>
            )}
          </div>
        ))}

        <div
          className="relative"
          data-aos="fade-up"
          data-aos-delay="550"
          data-aos-offset="0"
        >
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-labelColor"
          >
            Where do you need the Scaffolder?
          </label>
          <input
            type="text"
            id="first_name"
            name="field5"
            value={formValues.field5}
            onChange={(e) => {
              setFormValues({ ...formValues, [e.target.name]: e.target.value });
            }}
            onClick={() => setOpenDropdownIndex(null)}
            className="text-placeholderColor text-base rounded-lg  block w-full p-2.5 placeholder-placeholderColor border border-borderColor"
            placeholder="Enter your postcode or town"
            required
          />
        </div>
        <input
          type="submit"
          value="Send Your Quote"
          className="px-4 py-3 mt-3 bg-btnbg text-white rounded-3xl font-semibold cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="650"
          data-aos-offset="0"
        />
      </form>
      {reset && <SuccessModal />}
    </div>
  );
}
