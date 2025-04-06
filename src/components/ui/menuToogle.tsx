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
import { Menu, ShoppingCart, ClipboardList, Calendar } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Tooltip } from "react-tooltip"


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
    <>
      <DropdownMenu >
        <DropdownMenuTrigger
          data-tooltip-id="Tooltip-Menu" data-tooltip-content="Escolha seu App"
          asChild>
          <Button
            size="icon"
            className="bg-transparent border size-10 p-2"
            variant="outline"
          >
            <Menu />
          </Button>

        </DropdownMenuTrigger>
        <Tooltip id="Tooltip-Menu" place="top-start" />
        <DropdownMenuContent align="start" className="bg-input p-2">
          <DropdownMenuCheckboxItem
            onClick={handleOpenList}
            className="flex justify-start gap-3 items-start w-40 pl-2"
          >
            <ClipboardList size={15} className="text-blue-500"/>
            <p>Lista de Tarefas</p>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            onClick={handleOpenMarket}
            className="flex justify-start gap-3 items-start w-40 pl-2"
          >
            <ShoppingCart size={15} className="text-blue-500" />
            <p>Lista de Mercado</p>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            onClick={handleOpenMarket}
            className="flex justify-start gap-3 items-start w-40 pl-2"
          >
            <Calendar size={15} className="text-blue-500" />
            <p>Planeje seu Dia</p>
          </DropdownMenuCheckboxItem>

        </DropdownMenuContent>
      </DropdownMenu>

    </>
  )
}
