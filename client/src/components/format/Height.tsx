import React from "react";

interface Props {
  height: number;
}

const Height: React.FC<Props> = ({ height }) => {
  return <div style={{ height: `${height}px` }}></div>;
};

export default Height;
