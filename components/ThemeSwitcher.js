"use client";

import * as React from "react";
import { Moon, MoonIcon, Sun, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  console.log("resolvedTheme", resolvedTheme);
  console.log("theme", theme);
  return <div>{resolvedTheme === "dark" ? <MoonIcon /> : <SunIcon />}</div>;
}
