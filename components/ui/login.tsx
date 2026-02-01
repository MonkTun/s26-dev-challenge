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

            {/*<button
              aria-label="Sign in with Google"
              className="flex items-center bg-white border border-button-border-light rounded-full p-0.5 pr-4"
            >
              <div className="flex items-center justify-center bg-white w-9 h-9 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <title>Sign in with Google</title>
                  <desc>Google G Logo</desc>
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    className="fill-google-logo-blue"
                  ></path>
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    className="fill-google-logo-green"
                  ></path>
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    className="fill-google-logo-yellow"
                  ></path>
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    className="fill-google-logo-red"
                  ></path>
                </svg>
              </div>
              <span className="text-sm text-google-text-gray tracking-wider">
                Sign in with Google
              </span>
            </button>*/}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
