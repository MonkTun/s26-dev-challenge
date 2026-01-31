"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import { MainButton } from "./main-button";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginModal({ open, onOpenChange }: LoginModalProps) {
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  const handleLogin = async () => {
    setLoading(true);

    // USE GOOGLE OAUTH!!!!

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });

    if (error) {
      console.error(error);
    }
    setLoading(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative">
        <Button
          variant="ghost"
          className="absolute -top-12 right-0 text-white hover:underline hover:bg-transparent hover:text-white"
          onClick={() => onOpenChange(false)}
        >
          Close
        </Button>
        <Card className="w-full max-w-lg py-12 px-6">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              You need to be logged in to perform this action.
            </CardDescription>
            {/*<CardAction>
              <Button variant="link">Sign Up</Button>
            </CardAction>*/}
          </CardHeader>
          <CardContent>
            {/*<form onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>*/}
          </CardContent>
          <CardFooter className="flex-col gap-2">
            {/*<Button
              type="submit"
              className="w-full"
              onClick={() => {
                alert("Email login not implemented in this demo.");
              }}
            >
              Login
            </Button>*/}
            <MainButton
              variant="default"
              className="w-full"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Connecting..." : "Login with Google"}
            </MainButton>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
