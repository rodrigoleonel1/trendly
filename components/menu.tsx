"use client";

import { useState } from "react";
import { HomeIcon, LogOut, MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute bottom-6 right-6 flex gap-2 flex-row-reverse">
      {isOpen ? (
        <>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            size="icon"
            className="bg-neopurple"
          >
            <X />
          </Button>
          <span onClick={() => setIsOpen(!isOpen)}>
            <ModeToggle />
          </span>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            size="icon"
            className="bg-neopurple"
          >
            <HomeIcon />
          </Button>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            size="icon"
            className="bg-neopurple"
          >
            <LogOut />
          </Button>
        </>
      ) : (
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="bg-neopurple"
        >
          <MenuIcon />
        </Button>
      )}
    </nav>
  );
}
