'use client'

import { ModeToggle } from "@/components/modeToogle"
import { MenuToogle } from "./ui/menuToogle"
import { useList } from "@/contexts/valueListCpx"
import { Tooltip } from "react-tooltip"

export const Footer = () => {



  return (
    <div className="fixed bottom-0 right-0 left-0 bg-input px-2 border z-0">
      <div className="w-full max-w-6xl mx-auto p-2 flex items-center justify-between">

        <MenuToogle/>

        <ModeToggle />
      </div>

    </div>
  )
}