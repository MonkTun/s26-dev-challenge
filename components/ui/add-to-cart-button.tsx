"use client";
// CLIENT!!!

import { Button } from "@/components/ui/button";
import { MainButton } from "@/components/ui/main-button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { LoginModal } from "@/components/ui/login";
import { CartDrawer } from "@/components/cart-drawer";

interface AddToCartButtonProps extends React.ComponentProps<typeof Button> {}

export function AddToCartButton({ className, ...props }: AddToCartButtonProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const supabase = createClient(); // client sided create call

  const handleAddToCart = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setIsLoginOpen(true);
      return;
    }

    // TODO: Add actual add logic here
    setIsDrawerOpen(true);
  };

  return (
    <>
      <LoginModal open={isLoginOpen} onOpenChange={setIsLoginOpen} />

      <CartDrawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} />

      <Button
        className={cn(
          "w-full bg-black text-white hover:bg-gray-800 rounded-none",
          className,
        )}
        onClick={handleAddToCart}
        {...props}
      >
        {props.children || "Add to Cart"}
      </Button>
    </>
  );
}
