'use client'

import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useList } from "@/contexts/valueListCpx";
import { Item } from "@/types/item";

type Props = {
  item: Item;
};

export const ItemQtd = ({ item }: Props) => {

  const { handleUpQuantity } = useList();

  
  const handleDecrement = () => {
    if (item.quantity > 1) {
      handleUpQuantity(item.id, -1);
    }

  }

  const handleIncrement = () => handleUpQuantity(item.id, 1);

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={handleDecrement}
        disabled={item.quantity === 1}
        className="border rounded-full p-2 size-5 flex items-center justify-center text-background"
      >
        <Minus />
      </Button>
      <div>{Number(item.quantity)}</div>
      <Button
        onClick={handleIncrement}
        className="border rounded-full p-2 size-5 flex items-center justify-center text-background"
      >
        <Plus />
      </Button>
      <div className="font-semibold">{item.opcao}</div>
      
      
    </div>
  );
};
