'use client'

import { useList } from "@/contexts/valueListCpx";
import { Item } from "@/types/item";
import { CheckCheck, Delete, Pencil } from "lucide-react";
import { ItemQtd } from "./itemQtd";

type Props = {
  item: Item;
}

export const ItemList = ({ item }: Props) => {

  
  const { chaveEdit, editText, handleDeletText, handleEditText, toogleItem } = useList();


  
  const handleTotalValueItem = (n1: any, n2: any): number => {

    if (n1 == null || n2 == null) return 0;
    // Se for string, substitui a vírgula por ponto.
    const str1 = typeof n1 === 'string' ? n1.replace(',', '.') : n1;
    const str2 = typeof n2 === 'string' ? n2.replace(',', '.') : n2;
    const num1 = Number(str1) || 0;
    const num2 = Number(str2) || 0;

    return num1 * num2
  }
  
  const total = handleTotalValueItem(item.quantity, item.value);



  return (

    <li className={`flex justify-between items-center border-b mt-4 ${editText && chaveEdit === item.id ? 'border-b-blue-600' : 'border-b-gray-500'}`} >

      <div className="p-2 max-w-4xl overflow-x-hidden text-wrap flex items-center gap-4 text-primary">
      {item.text}

      </div>
      <div className="flex flex-col md:flex-row items-center bg-input px-4 rounded-full border p-2 gap-2">
        <div className="flex items-center gap-2 text-primary font-bold">
          <ItemQtd key={item.id} item={item} />
        </div>

        <div className="flex items-center gap-3">
          <div className="ml-2 text-primary-foreground font-semibold md:mx-8">
            R$: {total.toFixed(2)}
          </div>

          <Delete
            className="text-primary-foreground size-4 hover:opacity-80"
            onClick={() => handleDeletText(item.id)} />

          <Pencil
            className="text-primary-foreground size-4 hover:opacity-80 "
            onClick={() => handleEditText(item.id)} />

          <CheckCheck
            className={`size-5 hover:opacity-80  ${item.done ? 'text-blue-600' : 'text-primary-foreground'}`}
            onClick={() => toogleItem(item.id)} />
        </div>
      </div>

    </li>


  )
}