'use client'

import { List } from "@/components/data";
import { Item } from "@/types/item";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Top = 'h-full' | 'h-0';
type Left = '-left-48' | 'left-4';
type ReturnQtd = '-left-64' | '-left-44' | '';
type QtdAppear = '' | 'left-4';
type Number = number | null;
type SubTotal = 'bottom-3' | '-bottom-6';
type filterType = 'h-16' | 'h-0';

type ContextType = {
  list0: Item[];
  list1: Item[];
  list2: Item[];
  list3: Item[];
  list4: Item[];
  list5: Item[];
  list6: Item[];
  list7: Item[];
  list8: Item[];
  editText: boolean;
  setEditText: (editText: boolean) => void;
  nameSetor: string[];
  setNameSetor: (nameSetor: string[]) => void;
  chaveKey: Number;
  setChaveKey: (chaveKey: Number) => void;
  modalList: Top;
  setModalList: (modalList: Top) => void;
  modalReturn: Left;
  setModalReturn: (modalReturn: Left) => void;
  qtdListReturn: ReturnQtd;
  setQtdListReturn: (qtdReturn: ReturnQtd) => void;
  qtdListAppear: QtdAppear;
  setQtdListAppear: (qtdList: QtdAppear) => void;
  handleAddText: (text: string, qtd: number, opcao: string, value: number) => void;
  handleDeletText: (id: number) => void;
  handleEditText: (id: number) => void;
  toogleItem: (id: number) => void;
  handleUpdateTextInput: (newText: string, newQtd: number, newOpcao: string, newValue: number) => void;
  handleUpdateNameSet: (newSet: string, chaveEdit: number) => void;
  chaveEdit: number;
  setChaveEdit: (chave: number) => void;
  showInput: boolean;
  setShowInput: (Input: boolean) => void;
  handleUpQuantity: (id: number, n: number) => void;
  handleClearList: () => void;
  showSubTotal: SubTotal;
  setShowSubTotal: (showSub: SubTotal) => void;
  dataProduct: Product[];
  setDataProduct: (data: Product[]) => void;
  valueInput: string;
  setValueInput: (text: string) => void;
  filterList: filterType;
  setFilterList: (filter: filterType) => void;
  handleAddEqual: (newProduct: Product) => void;
}

export const ValueListContext = createContext<ContextType | undefined>(undefined);

export const ValueListProvider = ({ children }: { children: ReactNode }) => {

  const [list0, setList0] = useState<Item[]>([]);
  const [list1, setList1] = useState<Item[]>([]);
  const [list2, setList2] = useState<Item[]>([]);
  const [list3, setList3] = useState<Item[]>([]);
  const [list4, setList4] = useState<Item[]>([]);
  const [list5, setList5] = useState<Item[]>([]);
  const [list6, setList6] = useState<Item[]>([]);
  const [list7, setList7] = useState<Item[]>([]);
  const [list8, setList8] = useState<Item[]>([]);
  const [chaveEdit, setChaveEdit] = useState<number>(0);
  const [editText, setEditText] = useState(false);
  const [chaveKey, setChaveKey] = useState<Number>(null);
  const [modalList, setModalList] = useState<Top>('h-0');
  const [modalReturn, setModalReturn] = useState<Left>('-left-48')
  const [showInput, setShowInput] = useState<boolean>(false);
  const [showSubTotal, setShowSubTotal] = useState<SubTotal>('-bottom-6');
  const [qtdListReturn, setQtdListReturn] = useState<ReturnQtd>('-left-64');
  const [qtdListAppear, setQtdListAppear] = useState<QtdAppear>('')
  const [valueInput, setValueInput] = useState<string>('');
  const [filterList, setFilterList] = useState<filterType>('h-0');
  const [nameSetor, setNameSetor] = useState<string[]>(
    [
      "Higiene e limpeza",
      "Mercearia",
      "Frios e laticínios",
      "Carnes (Proteínas)",
      "Padaria",
      "Hortifrúti",
      "Bebidas",
      "Utensílios Domésticos",
      "Pet Shop"
    ]
  );

  const [dataProduct, setDataProduct] = useState<Product[]>(List);

  useEffect(() => {
    console.log("Produtos atualizados:", dataProduct);
  }, [dataProduct]);

  const handleAddEqual = (newProduct: Product) => {

    setDataProduct((prevData) => [...prevData, newProduct ])

  }
  console.log(dataProduct)



  const handleAddText = (text: string, qtd: number, opcao: string, value: number) => {
    if (text.trim() !== '') {

      switch (chaveKey) {
        case 0:
          setList0([...list0,
          { id: list0.length, text, quantity: qtd, opcao, value, done: false }
          ]);
          break;
        case 1:
          setList1([...list1,
          { id: list1.length, text, quantity: qtd, opcao, value, done: false }
          ]);
          break;
        case 2:
          setList2([...list2,
          { id: list2.length, text, quantity: qtd, opcao, value, done: false }
          ]);
          break;
        case 3:
          setList3([...list3,
          { id: list3.length, text, quantity: qtd, opcao, value, done: false }
          ]);
          break;
        case 4:
          setList4([...list4,
          { id: list4.length, text, quantity: qtd, opcao, value, done: false }
          ]);
          break;
        case 5:
          setList5([...list5,
          { id: list5.length, text, quantity: qtd, opcao, value, done: false }
          ]);
          break;
        case 6:
          setList6([...list6,
          { id: list6.length, text, quantity: qtd, opcao, value, done: false }
          ]);
          break;
        case 7:
          setList7([...list7,
          { id: list7.length, text, quantity: qtd, opcao, value, done: false }
          ]);
          break;
        case 8:
          setList8([...list8,
          { id: list8.length, text, quantity: qtd, opcao, value, done: false }
          ]);
          break;
        default:
          break;
      }
    }
  };


  const handleDeletText = (id: number) => {
    switch (chaveKey) {
      case 0:
        setList0(list0.filter(item => item.id !== id));
        break;
      case 1:
        setList1(list1.filter(item => item.id !== id));
        break;
      case 2:
        setList2(list2.filter(item => item.id !== id));
        break;
      case 3:
        setList3(list3.filter(item => item.id !== id));
        break;
      case 4:
        setList4(list4.filter(item => item.id !== id));
        break;
      case 5:
        setList5(list5.filter(item => item.id !== id));
        break;
      case 6:
        setList6(list6.filter(item => item.id !== id));
        break;
      case 7:
        setList7(list7.filter(item => item.id !== id));
        break;
      case 8:
        setList8(list8.filter(item => item.id !== id));
        break;

      default:
        break;
    }

  }


  const toogleItem = (id: number) => {

    switch (chaveKey) {
      case 0:
        let newList0 = [...list0];

        for (let i in newList0) {
          if (newList0[i].id === id) {
            newList0[i].done = !newList0[i].done;
          }
        }

        setList0(newList0);
        break;
      case 1:
        let newList1 = [...list1];

        for (let i in newList1) {
          if (newList1[i].id === id) {
            newList1[i].done = !newList1[i].done;
          }
        }

        setList1(newList1);
        break;
      case 2:
        let newList2 = [...list2];

        for (let i in newList2) {
          if (newList2[i].id === id) {
            newList2[i].done = !newList2[i].done;
          }
        }

        setList2(newList2);
        break;

      case 3:
        let newList3 = [...list3];

        for (let i in newList3) {
          if (newList3[i].id === id) {
            newList3[i].done = !newList3[i].done;
          }
        }

        setList3(newList3);
        break;
      case 4:
        let newList4 = [...list4];

        for (let i in newList4) {
          if (newList4[i].id === id) {
            newList4[i].done = !newList4[i].done;
          }
        }

        setList4(newList4);
        break;
      case 5:
        let newList5 = [...list5];

        for (let i in newList5) {
          if (newList5[i].id === id) {
            newList5[i].done = !newList5[i].done;
          }
        }

        setList5(newList5);
        break;
      case 6:
        let newList6 = [...list6];

        for (let i in newList6) {
          if (newList6[i].id === id) {
            newList6[i].done = !newList6[i].done;
          }
        }

        setList6(newList6);
        break;
      case 7:
        let newList7 = [...list7];

        for (let i in newList7) {
          if (newList7[i].id === id) {
            newList7[i].done = !newList7[i].done;
          }
        }

        setList7(newList7);
        break;
      case 8:
        let newList8 = [...list8];

        for (let i in newList8) {
          if (newList8[i].id === id) {
            newList8[i].done = !newList8[i].done;
          }
        }

        setList8(newList8);
        break;

      default:
        break;
    }

  }

  const handleEditText = (id: number) => {

    switch (chaveKey) {
      case 0:
        let newList0 = [...list0];

        for (let i in newList0) {
          if (newList0[i].id === id) {
            if (editText === false) {
              setEditText(true);

            } else {
              setEditText(false);
            }
            setChaveEdit(id);

          }
        }
        setList0(newList0);

        break;
      case 1:
        let newList1 = [...list1];

        for (let i in newList1) {
          if (newList1[i].id === id) {
            if (editText === false) {
              setEditText(true);

            } else {
              setEditText(false);
            }
            setChaveEdit(id);

          }
        }
        setList1(newList1);

        break;
      case 2:
        let newList2 = [...list2];

        for (let i in newList2) {
          if (newList2[i].id === id) {
            if (editText === false) {
              setEditText(true);

            } else {
              setEditText(false);
            }
            setChaveEdit(id);

          }
        }
        setList2(newList2);

        break;
      case 3:
        let newList3 = [...list3];

        for (let i in newList3) {
          if (newList3[i].id === id) {
            if (editText === false) {
              setEditText(true);

            } else {
              setEditText(false);
            }
            setChaveEdit(id);

          }
        }
        setList3(newList3);

        break;
      case 4:
        let newList4 = [...list4];

        for (let i in newList4) {
          if (newList4[i].id === id) {
            if (editText === false) {
              setEditText(true);

            } else {
              setEditText(false);
            }
            setChaveEdit(id);

          }
        }
        setList4(newList4);

        break;
      case 5:
        let newList5 = [...list5];

        for (let i in newList5) {
          if (newList5[i].id === id) {
            if (editText === false) {
              setEditText(true);

            } else {
              setEditText(false);
            }
            setChaveEdit(id);

          }
        }
        setList5(newList5);

        break;
      case 6:
        let newList6 = [...list6];

        for (let i in newList6) {
          if (newList6[i].id === id) {
            if (editText === false) {
              setEditText(true);

            } else {
              setEditText(false);
            }
            setChaveEdit(id);

          }
        }
        setList6(newList6);

        break;
      case 7:
        let newList7 = [...list7];

        for (let i in newList7) {
          if (newList7[i].id === id) {
            if (editText === false) {
              setEditText(true);

            } else {
              setEditText(false);
            }
            setChaveEdit(id);

          }
        }
        setList7(newList7);

        break;
      case 8:
        let newList8 = [...list8];

        for (let i in newList8) {
          if (newList8[i].id === id) {
            if (editText === false) {
              setEditText(true);

            } else {
              setEditText(false);
            }
            setChaveEdit(id);

          }
        }
        setList8(newList8);

        break;

      default:
        break;
    }

  }

  const handleUpdateTextInput = (newText: string, newQtd: number, newOpcao: string, newValue: number) => {

    switch (chaveKey) {
      case 0:
        let newList0 = [...list0];

        for (let i in newList0) {
          if (newList0[i].id === chaveEdit) {
            let item = newList0[i]
            item.text = newText;
            item.quantity = newQtd;
            item.opcao = newOpcao;
            item.value = newValue;

            setEditText(false);

          }
        }
        setList0(newList0);
        break;
      case 1:
        let newList1 = [...list1];

        for (let i in newList1) {
          if (newList1[i].id === chaveEdit) {
            let item = newList1[i]
            item.text = newText;
            item.quantity = newQtd;
            item.opcao = newOpcao;
            item.value = newValue;

            setEditText(false);

          }
        }
        setList1(newList1);
        break;
      case 2:
        let newList2 = [...list2];

        for (let i in newList2) {
          if (newList2[i].id === chaveEdit) {
            let item = newList2[i]
            item.text = newText;
            item.quantity = newQtd;
            item.opcao = newOpcao;
            item.value = newValue;

            setEditText(false);

          }
        }
        setList2(newList2);
        break;
      case 3:
        let newList3 = [...list3];

        for (let i in newList3) {
          if (newList3[i].id === chaveEdit) {
            let item = newList3[i]
            item.text = newText;
            item.quantity = newQtd;
            item.opcao = newOpcao;
            item.value = newValue;

            setEditText(false);

          }
        }
        setList3(newList3);
        break;
      case 4:
        let newList4 = [...list4];

        for (let i in newList4) {
          if (newList4[i].id === chaveEdit) {
            let item = newList4[i]
            item.text = newText;
            item.quantity = newQtd;
            item.opcao = newOpcao;
            item.value = newValue;

            setEditText(false);

          }
        }
        setList4(newList4);
        break;
      case 5:
        let newList5 = [...list0];

        for (let i in newList5) {
          if (newList5[i].id === chaveEdit) {
            let item = newList5[i]
            item.text = newText;
            item.quantity = newQtd;
            item.opcao = newOpcao;
            item.value = newValue;

            setEditText(false);

          }
        }
        setList5(newList5);
        break;
      case 6:
        let newList6 = [...list6];

        for (let i in newList6) {
          if (newList6[i].id === chaveEdit) {
            let item = newList6[i]
            item.text = newText;
            item.quantity = newQtd;
            item.opcao = newOpcao;
            item.value = newValue;

            setEditText(false);

          }
        }
        setList6(newList6);
        break;
      case 7:
        let newList7 = [...list7];

        for (let i in newList7) {
          if (newList7[i].id === chaveEdit) {
            let item = newList7[i]
            item.text = newText;
            item.quantity = newQtd;
            item.opcao = newOpcao;
            item.value = newValue;

            setEditText(false);

          }
        }
        setList7(newList7);
        break;

      case 8:
        let newList8 = [...list8];

        for (let i in newList8) {
          if (newList8[i].id === chaveEdit) {
            let item = newList8[i]
            item.text = newText;
            item.quantity = newQtd;
            item.opcao = newOpcao;
            item.value = newValue;

            setEditText(false);

          }
        }
        setList8(newList8);
        break;

      default:
        break;
    }

  }

  const handleUpdateNameSet = (newSet: string, chave: number) => {

    let NameSet = { ...nameSetor };

    if (newSet.trim() !== '') {
      NameSet[chave] = newSet;
    }

    setNameSetor(NameSet);

  }

  const handleUpQuantity = (id: number, n: number) => {

    switch (chaveKey) {
      case 0:
        let newList0 = [...list0];

        for (let i in newList0) {
          if (newList0[i].id === id) {
            newList0[i].quantity = Number(newList0[i].quantity) + n;
          }
        }
        setList0(newList0);

        break;
      case 1:

        let newList1 = [...list1];

        for (let i in newList1) {
          if (newList1[i].id === id) {

            newList1[i].quantity = Number(newList1[i].quantity) + n;
          }
        }
        setList1(newList1);
        break;
      case 2:
        let newList2 = [...list2];

        for (let i in newList2) {
          if (newList2[i].id === id) {
            newList2[i].quantity = Number(newList2[i].quantity) + n;
          }
        }
        setList2(newList2);

        break;
      case 3:
        let newList3 = [...list3];

        for (let i in newList3) {
          if (newList3[i].id === id) {
            newList3[i].quantity = Number(newList3[i].quantity) + n;
          }
        }
        setList3(newList3);

        break;
      case 4:
        let newList4 = [...list4];

        for (let i in newList4) {
          if (newList4[i].id === id) {
            newList4[i].quantity = Number(newList4[i].quantity) + n;
          }
        }
        setList4(newList4);

        break;
      case 5:
        let newList5 = [...list5];

        for (let i in newList5) {
          if (newList5[i].id === id) {
            newList5[i].quantity = Number(newList5[i].quantity) + n;
          }
        }
        setList5(newList5);

        break;
      case 6:
        let newList6 = [...list6];

        for (let i in newList6) {
          if (newList6[i].id === id) {
            newList6[i].quantity = Number(newList6[i].quantity) + n;
          }
        }
        setList6(newList6);

        break;
      case 7:
        let newList7 = [...list7];

        for (let i in newList7) {
          if (newList7[i].id === id) {
            newList7[i].quantity = Number(newList7[i].quantity) + n;
          }
        }
        setList7(newList7);

        break;
      case 8:
        let newList8 = [...list8];

        for (let i in newList8) {
          if (newList8[i].id === id) {
            newList8[i].quantity = Number(newList8[i].quantity) + n;
          }
        }
        setList8(newList8);

        break;

      default:
        break;
    }
  }

  const handleClearList = () => {
    switch (chaveKey) {
      case 0: setList0([]);
        break;
      case 1: setList1([]);
        break;
      case 2: setList2([]);
        break;
      case 3: setList3([]);
        break;
      case 4: setList4([]);
        break;
      case 5: setList5([]);
        break;
      case 6: setList6([]);
        break;
      case 7: setList7([]);
        break;
      case 8: setList8([]);
        break;

      default:
        break;
    }
  }



  return (
    <ValueListContext.Provider value={{ list0, list1, list2, list3, list4, list5, list6, list7, list8, modalList, nameSetor, setNameSetor, setModalList, modalReturn, setModalReturn, chaveKey, setChaveKey, editText, setEditText, handleAddText, handleDeletText, handleEditText, toogleItem, handleUpdateTextInput, chaveEdit, setChaveEdit, setShowInput, showInput, showSubTotal, setShowSubTotal, handleUpdateNameSet, handleUpQuantity, handleClearList, dataProduct, setDataProduct, valueInput, setValueInput, filterList, setFilterList, handleAddEqual, qtdListReturn, setQtdListReturn, qtdListAppear, setQtdListAppear }}>
      {children}
    </ValueListContext.Provider>
  )
}

export const useList = (): ContextType => {
  const context = useContext(ValueListContext);
  if (!context) {
    throw new Error('useMeuContexto deve ser usado dentro de MeuProvider');
  }
  return context;
};

