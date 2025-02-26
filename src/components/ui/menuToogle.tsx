"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, ShoppingCart, ClipboardList } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"


type Checked = DropdownMenuCheckboxItemProps["checked"]

export function MenuToogle() {

  const router = useRouter();

  const handleOpenList = () => {
    router.push('./listTarefas');

  }

  const handleOpenMarket = () => {
    router.push('./listMercado');

  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" className="bg-transparent border size-10 p-2" variant="outline"><Menu className="" /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="bg-input p-2">
        <DropdownMenuCheckboxItem
          onClick={handleOpenList}
          className="flex justify-between items-center w-28 pl-2"
        >
          <ClipboardList size={15}/>
          <p>To-do List</p>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          onClick={handleOpenMarket}
          className="flex justify-between items-center w-28 pl-2"
        >
          <ShoppingCart size={15}/>
          <p>Market List</p>
        </DropdownMenuCheckboxItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
