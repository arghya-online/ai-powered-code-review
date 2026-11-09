import { Button } from "@/components/ui/button";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

const page = () => {
  return (
    <div>
      <Button>Click me</Button>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ModeToggle />
      </ThemeProvider>
    </div>
  );
};

export default page;
