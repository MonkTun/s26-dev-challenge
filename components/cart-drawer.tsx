"use client";

import { MainButton } from "@/components/ui/main-button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
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
            <MainButton variant="outline">Continue Shopping</MainButton>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
