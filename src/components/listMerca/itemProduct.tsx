import { useList } from "@/contexts/valueListCpx";
import { Button } from "../ui/button";

type Props = {
    item: Product;
}

export const ItemProduct = ({ item }: Props) => {

    const { valueInput, setValueInput } = useList();

    const handleAddInput = (text: string) => {
        setValueInput(text);    
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === "Enter" || event.key === " ") { // Espaço opcional para acessibilidade
            handleAddInput(item.product);
        }
    }

    return (
        <Button
            onClick={() => handleAddInput(item.product)}
            type="button"
            onKeyDown={handleKeyDown}
            variant={'secondary'} className="rounded-full"><p className="text-sm">{item.product}</p></Button>
    )
}