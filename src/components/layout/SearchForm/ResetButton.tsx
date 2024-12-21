"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

const ResetButton = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) form.reset();
  };
  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8"
      type="reset"
      onClick={reset}
    >
      <Link href={"/"}>
        <X className="h-4 w-4" />
      </Link>
    </Button>
  );
};

export default ResetButton;
