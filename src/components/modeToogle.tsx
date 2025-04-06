"use client"

import * as React from "react"
import { Moon, Sun, LaptopMinimal } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { Tooltip } from "react-tooltip"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu >
      <DropdownMenuTrigger 
      asChild 
      className="border"
      data-tooltip-id="Tooltip-MenuToogle" data-tooltip-content="Escolha seu Tema">
        <Button variant="outline" size="icon" className="border bg-input">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"  />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <Tooltip id="Tooltip-MenuToogle" place="top-end" />
      <DropdownMenuContent align="end" className="bg-input border">
        <DropdownMenuItem className="flex justify-around p-2" onClick={() => setTheme("light")}>
          <p>Light</p>
          <Sun size={12} className="text-blue-500"/>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex justify-around p-2" onClick={() => setTheme("dark")}>
          <p>Dark</p>
          <Moon size={12} className="text-blue-500"/>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex justify-around p-2" onClick={() => setTheme("system")}>
          <p>System</p>
          <LaptopMinimal size={12} className="text-blue-500"/>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
