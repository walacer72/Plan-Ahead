import { useList } from "@/contexts/valueListCpx";
import { Item } from "@/types/item"


type Props = {
  list: Item[];
}

export const QtdList = ({ list }: Props) => {

  const handleTotalList = () => {
    let totalList = 0;

    for (let i of list) {
      const q1 = typeof i.quantity === "string" ? parseFloat(String(i.quantity).replace(",", ".")) : i.quantity;
      
      const v2 = typeof i.value === "string" ? parseFloat(String(i.value).replace(",", ".")) : i.value;

      totalList += q1 * v2;
    }
    
    return totalList;
  }

  const TotalValueList = handleTotalList();

  return (
    <div className="flex items-center justify-center gap-2 text-primary">
      <div className="">{list.length} {list.length !== 0 && list.length !== 1 ? 'itens': 'item'}</div>
      <div className="">
       R$: {TotalValueList.toFixed(2)}
      </div>

    </div>

  )
}