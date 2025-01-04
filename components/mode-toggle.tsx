"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  function toggleTheme() {
    return currentTheme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <Button className={"bg-neopurple"} size={"icon"} onClick={toggleTheme}>
      {currentTheme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
}
