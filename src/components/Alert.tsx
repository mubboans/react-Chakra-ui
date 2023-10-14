import React from "react";
interface AlertProps {
  text: string;
}
const Alert = ({ text }: AlertProps) => {
  return (
    <>
      <div className="alert alert-secondary" role="alert">
        You have Clicked on {text}
      </div>
    </>
  );
};

export default Alert;
