import { ContainerProps } from "@/types/props";
import React from "react";

const Container = ({children}:ContainerProps) => {
  return <div className="mx-auto w-auto max-w-7xl">{children}</div>;
};

export default Container;
