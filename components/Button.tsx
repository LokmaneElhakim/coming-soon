import React, { ReactNode } from "react";

const Button = ({
  label,
  cn,
  handleClick,
  type,
  name,
  color,
  svg,
}: {
  label: string;
  cn: string;
  handleClick?: () => void;
  type?: "submit";
  name?: string;
  color?: "inverted" | undefined;
  svg?: {
    icon?: "start" | undefined;
    component: ReactNode;
  };
}) => {
  return (
    <button
      className={`flex items-center justify-center py-3 px-2 border-2 border-solid rounded-full text-center ${
        color ? " bg-000000 border-eff5ff" : "text-black bg-white border-131313"
      }  ${cn}`}
      onClick={handleClick}
      type={type}
      name={name}
    >
      {svg?.icon && svg.component}
      {label}
      {!svg?.icon && svg?.component}
    </button>
  );
};

export default Button;
