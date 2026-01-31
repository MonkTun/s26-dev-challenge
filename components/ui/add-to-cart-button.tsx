"use client";
// CLIENT!!!
import { Button } from "@/components/ui/button";
import { MainButton } from "@/components/ui/main-button";
import { cn } from "@/lib/utils";
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface AddToCartButtonProps extends React.ComponentProps<typeof Button> {}

export function AddToCartButton({ className, ...props }: AddToCartButtonProps) {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button
          className={cn(
            "w-full bg-black text-white hover:bg-gray-800 rounded-none",
            className,
          )}
          {...props}
        >
          {props.children || "Add to Cart"}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Shopping Cart</DrawerTitle>
          <DrawerDescription>
            You have added this item to your cart.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <div className="flex items-center justify-center h-32 text-muted-foreground border-2 border-dashed rounded-lg">
            Item added!
          </div>
        </div>
        <DrawerFooter>
          <MainButton onClick={() => alert("Feature not implemented")}>
            Checkout
          </MainButton>
          <DrawerClose asChild>
            <Button variant="outline">Continue Shopping</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
