'use client'

import { Button } from "@/components/ui/button";
import { useList } from "@/contexts/valueListCpx";
import { Forward, FilePenLine, Plus, CheckCheck } from "lucide-react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { QtdList } from "../qtdList";
import { useState } from "react";


type Inputs = {
  name: string;

}

export const SecondList3 = () => {

  const {
    handleSubmit,
    register,
    formState: { errors }

  } = useForm<Inputs>();

  const chaveShowEdit = 3;
  const [showInput, setShowInput] = useState<boolean>(false);

  const { list3, handleUpdateNameSet, setChaveKey, setModalReturn, setModalList, nameSetor, toogleItem } = useList();


  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleUpdateNameSet(data.name, chaveShowEdit);
    setShowInput(!showInput);
  }

  const handleShowEdit = () => {
    setChaveKey(chaveShowEdit);
    setModalReturn('left-4');
    setModalList('h-full');
  }



  return (
    <div className={`w-full h-auto flex flex-col justify-between ${list3.length > 0 ? 'border border-blue-500' : 'border'} p-4 rounded-3xl bg-input`}>
      <h1>
        {!showInput &&
          <div className="flex justify-between items-center">
            <h1 className="p-2">{nameSetor[chaveShowEdit]}</h1>

            <Button variant={'default'} onClick={() => setShowInput(!showInput)} className="size-4 p-4 bg-input rounded-full hover:text-background"><FilePenLine /></Button>
          </div>
        }
        {showInput &&

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-between items-center">
            <input
              {...register('name', { maxLength: 20 })}
              placeholder="Nova categoria"
              className={`bg-input placeholder:text-blue-400 text-blue-400 rounded-md p-2 animate-pulse outline-none ${errors.name?.type === 'maxLength' && 'text-red-400'}`}

            />
            <Button
              className="bg-background rounded-full p-4 size-4 hover:text-background"
              type="submit" value="enviar">
              <Forward className="" />
            </Button>
          </form>

        }

      </h1>
      {list3.length === 0 &&
        <div className="w-full h-full flex flex-col justify-between">
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-center mt-6 animate-pulse p-8">Lista Vazia</p>
          </div>

          <Button
            onClick={handleShowEdit}
            variant={'default'}
            className="text-card rounded-3xl">Fazer Lista</Button>
        </div>


      }

      {list3.length !== 0 &&

        <div className="w-full h-full flex flex-col justify-between">
          <ul className="w-full mt-4 overflow-y-auto">


            {list3.map(item => (

              <li key={item.id} className={`flex justify-between p-2 items-center border-b  $border-b-gray-500`} >

                <div className="w-full max-w-4xl overflow-x-hidden flex items-center justify-between gap-4 text-primary">

                  <p className="w-full max-w-24 break-words">{item.text}</p>

                  <div className="flex items-center gap-2">
                    <p className="flex items-center gap-2"><span>qtd:</span>{Number(item.quantity)}</p>
                    <p>{item.opcao}</p>
                    <CheckCheck
                      className={`size-5 hover:opacity-80  ${item.done ? 'text-blue-600' : 'text-primary-foreground'}`}
                      onClick={() => toogleItem(item.id)} />

                  </div>


                </div>

              </li>


            ))}

          </ul>
          <div className="flex items-center self-end gap-2 mt-4 border rounded-full pl-4">

            <div className="flex items-end gap-2">
              <QtdList list={list3} />
            </div>

            <Button onClick={handleShowEdit} variant={'default'} className="border p-4 size-4 rounded-full text-background">
              <Plus />
            </Button>

          </div>


        </div>

      }



    </div>


  )
}