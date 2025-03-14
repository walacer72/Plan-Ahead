import { useList } from "@/contexts/valueListCpx";
import { Button } from "../ui/button";

type Props = {
    item: Product;
}

export const ItemProduct = ({ item }: Props) => {

const { valueInput, setValueInput } = useList();

    const handleAddInput = (text: string) => {
        
        if  (valueInput.trim() === '') {
            setValueInput(text);
        }
        
    }

    return (
        <Button
        onClick={() => handleAddInput(item.product)}
        variant={'secondary'} className="rounded-full">{item.product}</Button>
    )
}