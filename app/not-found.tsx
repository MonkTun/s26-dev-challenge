import Link from "next/link";
import { MainButton } from "@/components/ui/main-button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
      <h1 className="text-[100px] font-heading font-bold leading-none mb-4">
        404
      </h1>
      <h2 className="text-2xl font-medium mb-8">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link href="/">
        <MainButton>Return Home</MainButton>
      </Link>
    </div>
  );
}
