'use client'

import { useState } from "react"
import { SecondList0 } from "./setores/secondList0"
import { ListEdit } from "./listEdit";
import { useList } from "@/contexts/valueListCpx";
import { Undo2, AlignJustify, Grid2x2, Plus, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import { SecondList1 } from "./setores/secondList1";
import { SecondList2 } from "./setores/secondList2";
import { SecondList4 } from "./setores/secondList4";
import { SecondList5 } from "./setores/secondList5";
import { SecondList6 } from "./setores/secondList6";
import { SecondList7 } from "./setores/secondList7";
import { SecondList8 } from "./setores/secondList8";
import { SecondList3 } from "./setores/secondList3";
import { SubTotalList } from "./subTotaList";


export const ListHome = () => {

  const [flex, setFlex] = useState<string>('md:grid md:grid-cols-3')

  const {

    setModalReturn, setModalList, modalReturn, chaveKey, nameSetor } = useList()

  const handleFlexDiv = () => {
    if (flex === 'md:grid md:grid-cols-3') {
      setFlex('');

    } else {
      setFlex('md:grid md:grid-cols-3');
    }
  }
  const handleReturnButtonModal = () => {
    setModalReturn('-left-48');
    setModalList('h-0');

  }

  return (
    <div className="relative flex-col justify-center items-center z-0">
      <h1 className={`fixed top-0 right-0 left-0 bg-input z-0 h-32 flex justify-end p-4 px-8 items-center lg:justify-center text-xl font-bold lg:text-4xl gap-1`}>

        <p>Lista de Mercado</p>
        <ShoppingBag className="size-5 lg:size-8 lg:m-0" />
      </h1>

      <div className="fixed left-0 right-0 bottom-2 py-4 px-2 top-28 flex justify-center bg-background z-40 rounded-t-3xl shadow-2xl mb-12">

        <div className="w-full h-full flex justify-center overflow-y-auto pt-2">

          <div className="flex ml-0 md:ml-[3.5rem] w-full max-w-4xl">
            <div className={`w-full max-w-4xl flex flex-col ${flex} gap-4 px-2`}>
              <SecondList0 />
              <SecondList1 />
              <SecondList2 />
              <SecondList3 />
              <SecondList4 />
              <SecondList5 />
              <SecondList6 />
              <SecondList7 />
              <SecondList8 />
            </div>
            <div className="hidden xl:flex flex-col items-center gap-2">
              <Button
                onClick={handleFlexDiv}
                className="bg-input hover:text-background p-4 size-10 rounded-full shadow-md shadow-ring">
                {flex !== '' &&
                  <AlignJustify />
                }
                {flex === '' &&
                  <Grid2x2 />
                }
              </Button>
              <Button className="bg-input hover:text-background border p-4 size-10 rounded-full shadow-md shadow-ring">
                <Plus />
              </Button>
            </div>

          </div>

        </div>

      </div>
      <ListEdit />

      <div className={`fixed top-8 transition-all duration-700 delay-500 ease-in-out ${modalReturn} z-50 text-slate-700 shadow-lg rounded-full`}>
        <Button
          onClick={handleReturnButtonModal}
          className="flex items-center bg-background border p-4 py-2 gap-2 rounded-full hover:bg-neutral-900"
        >

          <Undo2 size={14} />
          {chaveKey === 0 &&
            <p className="w-20 truncate md:text-clip md:w-auto">{nameSetor[0]}</p>
          }
          {chaveKey === 1 &&
            <p className="w-20 truncate md:text-clip md:w-auto">{nameSetor[1]}</p>
          }
          {chaveKey === 2 &&
            <p className="w-20 truncate md:text-clip md:w-auto">{nameSetor[2]}</p>
          }
          {chaveKey === 3 &&
            <p className="w-20 truncate md:text-clip md:w-auto">{nameSetor[3]}</p>
          }
          {chaveKey === 4 &&
            <p className="w-20 truncate md:text-clip md:w-auto">{nameSetor[4]}</p>
          }
          {chaveKey === 5 &&
            <p className="w-20 truncate md:text-clip md:w-auto">{nameSetor[5]}</p>
          }
          {chaveKey === 6 &&
            <p className="w-20 truncate md:text-clip md:w-auto">{nameSetor[6]}</p>
          }
          {chaveKey === 7 &&
            <p className="w-20 truncate md:text-clip md:w-auto">{nameSetor[7]}</p>
          }
          {chaveKey === 8 &&
            <p className="w-20 truncate md:text-clip md:w-auto">{nameSetor[8]}</p>
          }

        </Button>
      </div>


    </div>
  )
}