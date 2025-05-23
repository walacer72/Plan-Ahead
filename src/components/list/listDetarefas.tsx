'use client'

import { useEffect, useState } from "react";
import { Item } from "@/types/item";
import { Forward, Pencil, Delete, CheckCheck, CircleCheckBig, ListX } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ItemList } from "@/types/itemList";
import { Button } from "../ui/button";
import { Tooltip } from "react-tooltip";

type Inputs = {
  text: string;
  newText: string;
}


export const List = () => {

  const {
    handleSubmit,
    register,
    setValue,
    setFocus,
    formState: { errors }

  } = useForm<Inputs>();

  setFocus("text");
  useEffect(() => {
    setFocus("text"); // Define o foco automaticamente no campo "text"
  }, [setFocus]);


  const [list, setList] = useState<ItemList[]>([]);
  const [editText, setEditText] = useState(false);
  const [chaveKey, setChaveKey] = useState<number | null>(null);

  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.text.trim() !== '') {
      setList([
        ...list,
        { id: list.length, text: data.text, done: false }
      ])
      setValue('text', '');

    }
  }


  const handleDeletText = (id: number) => {

    setList(list.filter(item => item.id !== id));

  }


  const handleEditText = (id: number) => {

    let newList = [...list];

    for (let i in newList) {
      if (newList[i].id === id) {
        if (editText === false) {
          setEditText(true);

        } else {
          setEditText(false);
        }


      }
    }
    setList(newList);

  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data.newText);

    let newList = [...list];

    for (let i in newList) {
      if (newList[i].id === chaveKey) {
        newList[i].text = data.newText;
        setValue('newText', '');
        setEditText(false);

      }
    }
    setList(newList);


  }


  const toogleItem = (id: number) => {
    let newList = [...list];

    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = !newList[i].done;
      }
    }

    setList(newList);
  }



  return (
    <div className="relative flex flex-col items-center pt-8 px-2 z-0">

      <div className="fixed right-0 left-0 top-0 flex flex-col items-center justify-center z-0 bg-input p-8">

        <h1 className="font-bold text-3xl flex items-center">Lista de tarefas<CircleCheckBig size={28} className="text-blue-500" /></h1>

        {editText &&
          <div className="flex flex-col w-full max-w-6xl">
            <form
              className="flex justify-between items-center w-full max-w-6xl border border-blue-500 animate-pulse bg-input rounded-md mt-4 mb-2"
              onSubmit={handleSubmit(onSubmit)}>

              <input
                {...register('newText', { required: true, maxLength: 80 })}
                placeholder="Digite seu novo texto"
                className="rounded-tl-md rounded-bl-md w-full p-3 outline-none bg-input placeholder:text-blue-500 animate-pulse"
              />

              <>
                <button
                  className="mr-3"
                  type="submit"
                  value="enviar"
                  data-tooltip-id="Tooltip-Enter" data-tooltip-content="insira seu item na lista"
                >
                  <Forward className="mr-0  text-gray-500 size-6" />
                </button>
                <Tooltip id="Tooltip-Enter" place="bottom-end" />
              </>

            </form>
            <div className="h-4 text-slate-400">
              {errors.newText?.type === 'required' && <p>Este campo precisa ser preenchido!</p>}
              {errors.newText?.type === 'maxLength' && <p>Máximo de 80 caracteres</p>}
            </div>
          </div>
        }


        {!editText &&
          <div className="flex flex-col w-full max-w-6xl">
            <form
              className="flex items-center w-full max-w-6xl border bg-background rounded-md mt-4 mb-2 shadow-xl"
              onSubmit={handleSubmit(handleFormSubmit)}>

              <input
                {...register('text', { required: true, maxLength: 80 })}
                placeholder="Digite seu texto"
                className="rounded-tl-md rounded-bl-md w-full p-3 outline-none bg-background hover:opacity-80 "
              />

              <>
                <button
                  className="mr-3"
                  type="submit"
                  value="enviar"
                  data-tooltip-id="Tooltip-Enter" data-tooltip-content="insira seu item na lista"
                >
                  <Forward className="mr-0  text-gray-500 size-6" />
                </button>
                <Tooltip id="Tooltip-Enter" place="bottom-end" />
              </>

            </form>
            <div className="h-4 text-slate-400">
              {errors.text?.type === 'required' && <p>Este campo precisa ser preenchido!</p>}
              {errors.text?.type === 'maxLength' && <p>Máximo de 80 caracteres</p>}
            </div>
          </div>
        }

      </div>

      <div className="fixed left-0 right-0 bottom-2 px-2 top-44 flex justify-start items-start bg-background z-40 rounded-t-3xl shadow-2xl shadow-black mb-12 pb-8">

        <div className="w-full h-full flex flex-col items-center mt-4  overflow-y-auto px-4">

          <ul className="flex flex-col w-full max-w-6xl ">

            {list.map(item => (
              <li key={item.id} className={`flex justify-between p-4 items-center border-b  ${editText && chaveKey === item.id ? 'border-b-blue-600' : 'border-b-gray-500'}`} >

                <div className="w-full max-w-4xl overflow-x-hidden text-wrap flex items-center gap-4 text-primary">
                  {item.text}

                </div>

                <div className="flex items-center gap-4">
                  <>
                    <Delete
                      className="text-primary-foreground size-6 hover:opacity-80 my-2"
                      onClick={() => handleDeletText(item.id)}
                      data-tooltip-id="Tooltip-Delet" data-tooltip-content="Excluir esse item"
                    />
                    <Tooltip id="Tooltip-Delet" place="bottom-end" />
                  </>
                  <>
                    <Pencil
                      className="text-primary-foreground size-5 hover:opacity-80 my-2"
                      onClick={() => handleEditText(item.id)}
                      data-tooltip-id="Tooltip-Edit" data-tooltip-content="Edite esse item"
                    />
                    <Tooltip id="Tooltip-Edit" place="bottom-end" />
                  </>
                  <>
                    <CheckCheck
                      className={`size-7 hover:opacity-80 my-2 ${item.done ? 'text-blue-600' : 'text-primary-foreground'}`}
                      onClick={() => toogleItem(item.id)}
                      data-tooltip-id="Tooltip-Done" data-tooltip-content="Marque esse item como concluído"
                    />
                    <Tooltip id="Tooltip-Done" place="bottom-end" />
                  </>
                </div>

              </li>
            ))}

          </ul>
        </div>
      </div>

      <div className="fixed left-4 bottom-20 z-50">
        <Button
          onClick={() => setList([])}
          className=" flex items-center  bg-input rounded-full  hover:text-background"
          data-tooltip-id="Tooltip-ClearList" data-tooltip-content="Exclua todos os itens da lista"
        >
          <p className="hidden md:flex">Limpar lista</p><ListX />
        </Button>
        <Tooltip id="Tooltip-ClearList" place="right" />
      </div>
    </div >



  )
}