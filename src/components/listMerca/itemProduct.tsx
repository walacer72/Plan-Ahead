import { useList } from "@/contexts/valueListCpx";
import { Button } from "../ui/button";
import { UseFormSetValue } from "react-hook-form";

type Inputs = {
    text: string;
    quantity: number;
    opcao: string;
    value: number;
    newText: string;
    newQuantity: number;
    newOpcao: string;
    newValue: number;
  
  }
  

type Props = {
    item: Product;
    setValue: UseFormSetValue<Inputs>;
}

export const ItemProduct = ({ item, setValue }: Props) => {

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
        onClick={() => {
            setValue("text", item.product); // Atualiza o input do React Hook Form
            setValueInput(item.product); // Mantém o estado local atualizado
          }}
            type="submit"
            onKeyDown={handleKeyDown}
            variant={'secondary'} className="rounded-full"><p className="text-sm">{item.product}</p></Button>
    )
}