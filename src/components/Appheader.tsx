import React from "react";

type AppheaderProps = {
  title: string;
};

const Appheader = ({ title }: AppheaderProps) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default Appheader;
