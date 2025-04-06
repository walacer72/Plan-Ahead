'use client'

import { useState } from "react"
import { SecondList0 } from "./setores/secondList0"
import { ListEdit } from "./listEdit";
import { useList } from "@/contexts/valueListCpx";
import { Undo2, AlignJustify, Grid2x2, Plus, ShoppingBag, FilePenLine, X } from "lucide-react";
import { Button } from "../ui/button";
import { SecondList1 } from "./setores/secondList1";
import { SecondList2 } from "./setores/secondList2";
import { SecondList4 } from "./setores/secondList4";
import { SecondList5 } from "./setores/secondList5";
import { SecondList6 } from "./setores/secondList6";
import { SecondList7 } from "./setores/secondList7";
import { SecondList8 } from "./setores/secondList8";
import { SecondList3 } from "./setores/secondList3";
import { useEffect } from "react";
import { Tooltip } from "react-tooltip";

export type ShowTuto = 'flex' | 'hidden';
type ButtonHelp = '-left-11' | '-left-6';

export const ListHome = () => {

  const [flex, setFlex] = useState<string>('md:grid md:grid-cols-3')
  const [tutoList, setTutoList] = useState<ShowTuto>('hidden');
  const [tutoNameSet, setTutoNameSet] = useState<ShowTuto>('hidden');
  const [showTutorial, setShowTutorial] = useState<ShowTuto>('hidden');
  const [AvisoHelp, setAvisoHelp] = useState<ShowTuto>('flex');
  const [buttonHelp, setButtonHelp] = useState<ButtonHelp>('-left-6');
  const [showButtonHelp, setShowButtonHelp] = useState<ShowTuto>('flex')

  const { setQtdListReturn, setModalReturn, setQtdListAppear, setModalList, modalReturn, chaveKey, nameSetor, setFilterList } = useList()


  const handleFlexDiv = () => {
    if (flex === 'md:grid md:grid-cols-3') {
      setFlex('');

    } else {
      setFlex('md:grid md:grid-cols-3');
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setButtonHelp('-left-11');
    }, 10000);
    setTimeout(() => {
      setShowButtonHelp('hidden');
      setAvisoHelp('hidden');
    }, 5000);
  }, []);

  const handleReturnButtonModal = () => {
    setQtdListReturn('-left-64');
    setQtdListAppear('');
    setModalReturn('-left-48');
    setModalList('h-0');
    setFilterList('h-0');
  }

  const handleHelpTutori = () => {
    if (tutoList === 'hidden') {
      setTutoList('flex');
      setShowTutorial('flex');
      setAvisoHelp('hidden');
    } else {
      setTutoList('hidden');
      setShowTutorial('hidden');
    }

  }

  const handleTutori = () => {
    setTutoList('hidden');
    setTutoNameSet('flex');

  }

  const handleCloseTutori = () => {
    setShowTutorial('hidden');
    setTutoNameSet('hidden');
    setAvisoHelp('hidden');
  }

  return (
    <div className="">

      <div className={`fixed top-0 bottom-0 left-0 right-0 bg-black/80 z-40 ${showTutorial} justify-center items-center`}>

        <div className={`absolute text-sm text-neutral-900 top-24 left-2 md:right-0 md:left-44 md:bottom-0 w-56 h-60 ${tutoList} flex-col rounded-l-3xl rounded-t-3xl border bg-white p-4 shadow-gray-600 shadow-2xl`}>

          <button onClick={handleTutori} className="self-start">
            <X className="size-4 transition-all duration-300 text-blue-500 hover:text-blue-400" />
          </button>
          <div className="text-center m-2">
            <h1 className="font-semibold text-base mb-2">Escolha o setor</h1>
            inicie sua lista de compras por um setor, para fazer isso clique no botão <button className="border rounded-full text-white bg-gray-800 text-xs py-1 px-6 mt-2">Fazer Lista</button>
          </div>
          <Button onClick={handleTutori} className="bg-blue-500 rounded-full hover:bg-blue-400 self-start px-3 py-1 border-none text-xs text-white mt-2">
            ok, entendi
          </Button>
        </div>

        <div className={`absolute text-sm text-neutral-900 top-44 w-56 h-52 left-28 md:left-96 ${tutoNameSet} flex-col rounded-l-3xl rounded-b-3xl z-50 p-4 bg-white shadow-gray-600 shadow-2xl`}>
          <button onClick={handleCloseTutori} className="self-start">
            <X className="size-4 transition-all duration-300 text-blue-500 hover:text-slate-500" />
          </button>
          <div className="text-sm m-2">
            <h1 className="font-semibold text-base mb-2">Clicando aqui</h1>
            Você tem a opção de modificar o nome do setor clicando nesse icone

            <Button variant={'default'} className="size-4 ml-2 p-4 bg-input rounded-full hover:text-background"><FilePenLine />
            </Button>

          </div>

          <Button onClick={handleCloseTutori} className="bg-blue-500 rounded-full hover:bg-blue-400 self-start px-3 py-1 border-none text-xs text-white mt-2">
            ok, entendi
          </Button>
        </div>


      </div>

      <div className="relative flex-col justify-center items-center z-0">
        <h1 className={`fixed top-0 right-0 left-0 bg-gradient-to-l from-background to-blue-400 z-0 h-32 flex justify-end p-4 px-8 items-center lg:justify-center text-xl font-bold lg:text-3xl gap-1`}>

          <p>Lista de Mercado</p>
          <ShoppingBag size={22} className=" lg:size-8 lg:m-0 text-blue-500" />
        </h1>

        <div className="fixed left-0 right-0 bottom-2 py-4 px-2 top-28 flex justify-center bg-background z-40 rounded-t-3xl shadow-2xl mb-12">

          <div className="w-full h-full flex justify-center overflow-y-auto pt-2">

            <div className={`fixed top-0 bottom-0 left-0 right-0 bg-black/80 z-40 ${AvisoHelp}`}>

              <div className={`absolute ${showButtonHelp} z-50 items-center top-36 md:top-64 left-9`}>

                <div className="h-1 w-14 bg-blue-50 shadow-md shadow-gray-400"></div>
                <div className="p-3 w-44 bg-blue-50 rounded-3xl shadow-lg shadow-gray-700">

                  <div className="text-sm m-2 text-neutral-900">
                    <h1 className="font-semibold text-base mb-2">Clicando aqui</h1>
                    <p>Preparamos dicas de como utilizar seu app Plan ahead, quando tiver duvidas clique no botão ajuda</p>

                  </div>

                  <Button onClick={handleCloseTutori} className="bg-blue-500 rounded-full hover:bg-blue-400 self-start px-3 py-1 border-none text-xs text-white mt-2">
                    ok, entendi
                  </Button>
                </div>

              </div>

            </div>

            <>
              <Button
                onClick={handleHelpTutori}
                className={`absolute shadow-2xl z-50 top-32 lg:top-60 bg-blue-400 lg:bg-blue-400 text-black ${buttonHelp} transition-all duration-300 hover:-left-6 transform rotate-90 hover:bg-blue-500/90`}
                data-tooltip-id="Tooltip-Help" data-tooltip-content="Duvidas sobre o uso do app"
              >
                Ajuda
              </Button>
              <Tooltip id="Tooltip-Help" place="bottom-end" />
            </>


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

        <div className={`fixed top-8 transition-all duration-700 delay-500 ease-in-out ${modalReturn} z-40 text-slate-700 shadow-lg rounded-full`}>
          <Button
            onClick={handleReturnButtonModal}
            className="flex items-center bg-background border p-4 py-2 gap-2 rounded-full hover:bg-neutral-900"
             data-tooltip-id="Tooltip-ReturnList" data-tooltip-content="Retorne à lista de setores"
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
          <Tooltip id="Tooltip-ReturnList" place="bottom-start" />
        </div>


      </div>
    </div>

  )
}