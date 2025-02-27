'use client'

import { useEffect, useRef } from "react";
import { Forward, ListX } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useList } from "@/contexts/valueListCpx";
import { Input } from "../ui/input";
import { ItemList } from "./itemList";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/menuSize";
import { QtdList } from "./qtdList";

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


export const ListEdit = () => {

  const {
    handleSubmit,
    register,
    setValue,
    setFocus,
    formState: { errors }

  } = useForm<Inputs>();
  

  const {
    handleAddText, handleUpdateTextInput, modalReturn, setEditText,
    modalList, editText, chaveKey, handleClearList,
    list0, list1, list2, list3, list4, list5, list6, list7, list8

  } = useList();

  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {

    if (data.text.trim() !== '') {
      handleAddText(data.text, data.quantity, data.opcao, data.value)
      setValue('text', '');
      setValue('quantity', 0);
      setValue('value', 0.00);

    }
    
  }

  setFocus("text");
  useEffect(() => {
    setFocus("text"); // Define o foco automaticamente no campo "text"
  }, [setFocus]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {

    if (data.newText !== '') {
      handleUpdateTextInput(data.newText, data.newQuantity, data.newOpcao, data.newValue);
      setValue('newText', '');
      setValue('newQuantity', 0);
      setValue('newOpcao', '');
      setValue('newValue', 0.00);
      setEditText(false);
    }

  }


  return (
    <div className={`fixed right-0 left-0 -bottom-28 ${modalList} transition-all duration-500 ease-in-out z-50 bg-background rounded-t-2xl pb-44 shadow-lg shadow-slate-950`}>

      <div className="w-full h-full flex flex-col items-center px-2 z-10">

        {editText &&
          <div className="flex flex-col w-full lg:max-w-6xl">
            <form
              className="flex items-center justify-between w-full bg-input rounded-full my-4 shadow-lg p-2 text-primary border border-blue-600 animate-pulse"
              onSubmit={handleSubmit(onSubmit)}>

              <div className="flex flex-col items-center justi sm:flex-row">
                <label className="flex justify-between w-full px-2 md:px-6 pr-22 md:pr-40 lg:pr-56">

                  <Input
                    {...register('newText', { required: true, maxLength: 100 })}
                    placeholder="Digite seu texto"
                    className="w-full rounded-full rounded-bl-full bg-input hover:opacity-80"
                  />

                </label>

                <div className="flex gap-2 ml-4 my-1">
                  <label className="flex w-full items-center border rounded-full

                pl-4 pr-0 
                sm:pl-8
                md:pl-12 md:pr-2
                lg:pl-16 lg:pr-4">

                    <div className="">qtd:</div>
                    <Input
                      placeholder="0"
                      {...register('newQuantity', { required: true, min: 1 })}
                      type="number"
                      className="rounded-full w-16 rounded-bl-full bg-input hover:opacity-80" />

                  </label>

                  <label className="flex w-full items-center border rounded-full 

                pl-2 pr-1 md:pl-8 md:pr-4
                lg:pl-16 lg:pr-12">

                    <Select
                      onValueChange={(value) => setValue("newOpcao", value)}

                      {...register('newOpcao')}>

                      <SelectTrigger className="w-12 m-0 pl-0 pr-1 rounded-full shadow-none">
                        <SelectValue placeholder="tipo:" />
                      </SelectTrigger>
                      <SelectContent className="w-16 bg-input ">

                        <SelectItem value="und">und</SelectItem>
                        <SelectItem value="kg">kg</SelectItem>
                        <SelectItem value="gm">gm</SelectItem>

                      </SelectContent>
                    </Select>
                  </label>
                  <label className="flex w-full items-center border rounded-full text-sm

                pl-3 pr-0
                sm:pl-8 sm:pr-4 
                lg:pl-16 lg:pr-10">

                    <div className="flex gap-1 pl-2">
                      <div className="">preço:</div>
                      <p>R$</p>
                    </div>
                    <Input
                    
                      {...register('newValue', { required: true, min: 0.01 })}
                      placeholder="0,00"
                      className="w-16 text-sm rounded-full rounded-bl-full bg-input hover:opacity-80"
                    />
                  </label>

                </div>

              </div>
              <button className="" type="submit" value="enviar">
                <Forward className="mr-0 md:mr-5 text-gray-500 size-6 md:size-7" />
              </button>


            </form>
            <div className="h-6 text-slate-400">
              {errors.text?.type === 'required' && <p>Este campo precisa ser preenchido!</p>}
              {errors.text?.type === 'maxLength' && <p>Máximo de 80 caracteres</p>}
              {errors.quantity?.type === 'min' && <p>Insira um número positivo</p>}
            </div>
          </div>
        }


        {!editText &&
          <div className="flex flex-col w-full lg:max-w-6xl">
            <form
              className="flex items-center justify-between w-full border bg-input rounded-full my-4 shadow-lg p-2 text-primary"
              onSubmit={handleSubmit(handleFormSubmit)}>

              <div className="flex flex-col items-center justi sm:flex-row">
                <label className="flex justify-between w-full px-2 md:px-6 pr-22 md:pr-40 lg:pr-56">

                  <Input
                    {...register('text', { required: true, maxLength: 100 })}
                    placeholder="Digite seu texto"
                    className="w-full rounded-full rounded-bl-full bg-input hover:opacity-80"
                  />

                </label>

                <div className="flex gap-2 ml-4 my-1">
                  <label className="flex w-full items-center border rounded-full

                  pl-4 pr-0
                  sm:pl-8
                  md:pl-12 md:pr-2
                  lg:pl-16 lg:pr-4">

                    <div className="">qtd:</div>
                    <Input
                      placeholder="0"
                      {...register('quantity', { required: true, min: 1 })}
                      type="number"
                      className="rounded-full w-16 rounded-bl-full bg-input hover:opacity-80" />

                  </label>

                  <label className="flex w-full items-center border rounded-full 

                  pl-2 pr-1 md:pl-8 md:pr-4
                  lg:pl-16 lg:pr-12">

                    <Select
                      onValueChange={(value) => setValue("opcao", value)}

                      {...register('opcao')}>

                      <SelectTrigger className="w-12 m-0 pl-0 pr-1 rounded-full shadow-none">
                        <SelectValue placeholder="tipo:" />
                      </SelectTrigger>
                      <SelectContent className="w-16 bg-input ">

                        <SelectItem value="und">und</SelectItem>
                        <SelectItem value="kg">kg</SelectItem>
                        <SelectItem value="gm">gm</SelectItem>

                      </SelectContent>
                    </Select>
                  </label>
                  <label className="flex w-full items-center border rounded-full text-sm

                  pl-3 pr-0
                  sm:pl-8 sm:pr-4 
                  lg:pl-16 lg:pr-10">

                    <div className="flex gap-1 pl-2">
                      <div className="hidden md:flex">preço:</div>
                      <p>R$</p>
                    </div>  
                    <Input
                      {...register('value', { required: true, min: 0.01 })}
                      placeholder="0,00"
                      className="w-16 text-sm rounded-full rounded-bl-full bg-input hover:opacity-80"
                    />
                  </label>

                </div>

              </div>
              <button className="" type="submit" value="enviar">
                <Forward className="mr-0 md:mr-5 text-gray-500 size-6 md:size-7" />
              </button>


            </form>
            <div className="h-6 text-slate-400">
              {errors.text?.type === 'required' && <p>Este campo precisa ser preenchido!</p>}
              {errors.text?.type === 'maxLength' && <p>Máximo de 80 caracteres</p>}
              {errors.quantity?.type === 'min' && <p>Insira um número positivo</p>}
            </div>
          </div>
        }

        <div className="w-full h-full flex justify-center overflow-y-auto">

          <ul className="w-full max-w-6xl">

            {chaveKey === 0 && list0.map(item => <ItemList key={item.id} item={item} />)}
            {chaveKey === 1 && list1.map(item => <ItemList key={item.id} item={item} />)}
            {chaveKey === 2 && list2.map(item => <ItemList key={item.id} item={item} />)}
            {chaveKey === 3 && list3.map(item => <ItemList key={item.id} item={item} />)}
            {chaveKey === 4 && list4.map(item => <ItemList key={item.id} item={item} />)}
            {chaveKey === 5 && list5.map(item => <ItemList key={item.id} item={item} />)}
            {chaveKey === 6 && list6.map(item => <ItemList key={item.id} item={item} />)}
            {chaveKey === 7 && list7.map(item => <ItemList key={item.id} item={item} />)}
            {chaveKey === 8 && list8.map(item => <ItemList key={item.id} item={item} />)}
          </ul>
        </div>
      </div >

      <div className={`fixed bottom-20 flex items-center gap-2 bg-input p-2 transition-all duration-700 delay-500 ease-in-out ${modalReturn} z-50 text-slate-700 shadow-lg rounded-full border`}>

        {chaveKey === 0 &&

          <div className="flex flex-col md:flex-row gap-2 items-center pt-4 md:p-0 md:pl-2">
            <QtdList list={list0} />
            <button className="w-auto bg-background border-none p-2 hover:opacity-50 rounded-full hover:border">
              <ListX onClick={handleClearList} className="text-slate-500 size-6 m-0 pl-1" />
            </button>
          </div>
        }
        {chaveKey === 1 &&
          <div className="flex flex-col md:flex-row gap-2 items-center pt-4 md:p-0 md:pl-2">
            <QtdList list={list1} />
            <button className="w-auto bg-background border-none p-2 hover:opacity-50 rounded-full hover:border">
              <ListX onClick={handleClearList} className="text-slate-500 size-6 m-0 pl-1" />
            </button>
          </div>
        }
        {chaveKey === 2 &&
          <div className="flex flex-col md:flex-row gap-2 items-center pt-4 md:p-0 md:pl-2">
            <QtdList list={list2} />
            <button className="w-auto bg-background border-none p-2 hover:opacity-50 rounded-full hover:border">
              <ListX onClick={handleClearList} className="text-slate-500 size-6 m-0 pl-1" />
            </button>
          </div>
        }
        {chaveKey === 3 &&
          <div className="flex flex-col md:flex-row gap-2 items-center pt-4 md:p-0 md:pl-2">
            <QtdList list={list3} />
            <button className="w-auto bg-background border-none p-2 hover:opacity-50 rounded-full hover:border">
              <ListX onClick={handleClearList} className="text-slate-500 size-6 m-0 pl-1" />
            </button>
          </div>
        }
        {chaveKey === 4 &&
          <div className="flex flex-col md:flex-row gap-2 items-center pt-4 md:p-0 md:pl-2">
            <QtdList list={list4} />
            <button className="w-auto bg-background border-none p-2 hover:opacity-50 rounded-full hover:border">
              <ListX onClick={handleClearList} className="text-slate-500 size-6 m-0 pl-1" />
            </button>
          </div>
        }
        {chaveKey === 5 &&
          <div className="flex flex-col md:flex-row gap-2 items-center pt-4 md:p-0 md:pl-2">
            <QtdList list={list5} />
            <button className="w-auto bg-background border-none p-2 rounded-full hover:opacity-50">
              <ListX onClick={handleClearList} className="text-slate-500 size-6 m-0 pl-1 " />
            </button>
          </div>
        }
        {chaveKey === 6 &&
          <div className="flex flex-col md:flex-row gap-2 items-center pt-4 md:p-0 md:pl-2">
            <QtdList list={list6} />
            <button className="w-auto bg-background border-none p-2 hover:opacity-50 rounded-full hover:border">
              <ListX onClick={handleClearList} className="text-slate-500 size-6 m-0 pl-1" />
            </button>
          </div>
        }
        {chaveKey === 7 &&
          <div className="flex flex-col md:flex-row gap-2 items-center pt-4 md:p-0 md:pl-2">
            <QtdList list={list7} />
            <button className="w-auto bg-background border-none p-2 hover:opacity-50 rounded-full hover:border">
              <ListX onClick={handleClearList} className="text-slate-500 size-6 m-0 pl-1" />
            </button>
          </div>
        }
        {chaveKey === 8 &&
          <div className="flex flex-col md:flex-row gap-2 items-center pt-4 md:p-0 md:pl-2">
            <QtdList list={list8} />
            <button className="w-auto bg-background border-none p-2 hover:opacity-50 rounded-full hover:border">
              <ListX onClick={handleClearList} className="text-slate-500 size-6 m-0 pl-1" />
            </button>
          </div>
        }

      </div>






    </div>

  )
}