"use client";

import { rightNavItems } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { LoginModal } from "@/components/ui/login";
import { CartDrawer } from "@/components/cart-drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavbarActions() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState<any>(null); // Use proper type if available
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, [supabase]);

  const handleAction = async (action: string) => {
    if (!user) {
      setIsLoginOpen(true);
      return;
    }

    if (action === "Cart") {
      setIsCartOpen(true);
    } else if (action === "Heart") {
      // TODO
      alert("Opening wishlist...");
    }
  };

  const handleSignIn = () => {
    setIsLoginOpen(true);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <>
      <LoginModal open={isLoginOpen} onOpenChange={setIsLoginOpen} />
      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
      <div className="flex items-center gap-6">
        {rightNavItems.map((item, index) => {
          if (item.alt === "Account") {
            return (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={24}
                    height={24}
                    className="hover:opacity-70 transition-opacity cursor-pointer"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {user ? (
                    <>
                      <DropdownMenuItem onClick={() => handleAction("Account")}>
                        My Account
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={handleSignOut}>
                        Sign Out
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <DropdownMenuItem onClick={handleSignIn}>
                      Sign In
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          }

          return (
            <button
              key={`${item.alt}-${index}`}
              onClick={() => handleAction(item.alt)}
              className="hover:opacity-70 transition-opacity"
            >
              <Image src={item.src} alt={item.alt} width={24} height={24} />
            </button>
          );
        })}
      </div>
    </>
  );
}
