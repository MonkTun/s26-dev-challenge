"use client";
// CLIENT!!!
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface AddToCartButtonProps extends React.ComponentProps<typeof Button> {}

export function AddToCartButton({ className, ...props }: AddToCartButtonProps) {
  return (
    <Button
      className={cn(
        "w-full bg-black text-white hover:bg-gray-800 rounded-none",
        className,
      )}
      {...props}
    >
      {props.children || "Add to Cart"}
    </Button>
  );
}
