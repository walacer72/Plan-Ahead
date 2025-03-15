'use client'

import { useEffect, useState } from "react";
import { ChevronsDown, ChevronsUp, Forward, ListX, X } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useList } from "@/contexts/valueListCpx";
import { Input } from "../ui/input";
import { ItemList } from "./itemList";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/menuSize";
import { QtdList } from "./qtdList";
import { Button } from "../ui/button";
import { ShowTuto } from "./listHome";
import { ItemProduct } from "./itemProduct";


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

  useEffect(() => {
    setFocus("text"); // Define o foco automaticamente no campo "text"
  }, [setFocus]);


  const {
    handleAddText, handleUpdateTextInput, modalReturn, setEditText,
    modalList, editText, chaveKey, handleClearList, dataProduct,
    list0, list1, list2, list3, list4, list5, list6, list7, list8, valueInput, setValueInput,
    filterList, setFilterList
  } = useList();

  const [formattedValue, setFormattedValue] = useState("");
  const [showTutorial, setShowTutorial] = useState<ShowTuto>('flex')
  let funcaoUnique: boolean = false;

  let listFilter = [];

  // ENVIANDO DADOS DO INPUT
  const handleFormSubmit: SubmitHandler<Inputs> = (data, event) => {
    event?.preventDefault();


    if (data) {
      handleAddText(data.text, data.quantity, data.opcao, data.value)
      setValue('text', '');
      setValue('quantity', 0);
      setValue('value', 0.00);
      setFormattedValue('');
      setFocus("text");
    }

    setValueInput('');

  }

  // ENVIANDO DADOS DO INPUT EDITADO 
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

  const handleCloseTutori = () => {
    setShowTutorial('hidden');
  }

  for (let i = 0; i <= 8; i++) {
    switch (chaveKey) {
      case i:
        listFilter[i] = dataProduct.filter(item => item.key === i);
        break;
      default:
        break;
    }
  }

  const handleCloseFilter = () => {
    if (!funcaoUnique) {
      setFilterList('h-16');
      funcaoUnique = true;
    }
  }

  const handleClickClose = () => {
    if (filterList === 'h-16') {
      setFilterList('h-0');
    } else {
      setFilterList('h-16');
    }
  }


  return (
    <div className="">
      {modalList === 'h-full' &&
        <div className={`fixed top-0 bottom-0 left-0 right-0 bg-black/60 z-50 ${showTutorial} justify-center items-center`}>

          <div className={`fixed top-40 text-sm w-48 text-neutral-900 h-64 left-44 md:left-10 flex flex-col
            rounded-r-3xl rounded-b-3xl md:rounded-l-3xl md:rounded-b-3xl md:rounded-tr-none p-4 bg-white shadow-gray-600 shadow-2xl`}>

            <button onClick={handleCloseTutori} className="self-start">
              <X className="size-4 transition-all duration-300 hover:text-blue-400 text-blue-500" />
            </button>

            <div className="w-full h-full flex flex-col mt-2">
              <h1 className="font-semibold text-base mb-2">Comece por aqui</h1>
              Preencha sua lista escrevendo os itens desejados nesse campo, Coloque o nome a quantidade o valor e o tipo se desejar!
            </div>

            <Button onClick={handleCloseTutori} className="bg-blue-500 rounded-full hover:bg-blue-400 self-start px-3 border-none py-1 text-xs m-0 text-white">
              ok, entendi
            </Button>
          </div>

        </div>
      }


      <div className={`fixed right-0 left-0 -bottom-28 ${modalList} transition-all duration-500 ease-in-out z-40 bg-background rounded-t-2xl pb-44 shadow-lg shadow-slate-950`}>

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
                    lg:pl-16 lg:pr-4"
                    >

                      <div className="">qtd:</div>
                      <Input
                        placeholder="0"
                        {...register('newQuantity', { required: true, min: 1 })}
                        type="number"
                        className="rounded-full w-16 rounded-bl-full bg-input hover:opacity-80" />

                    </label>

                    <label className="flex w-full items-center border rounded-full 
                    pl-2 pr-1 md:pl-8 md:pr-4
                    lg:pl-16 lg:pr-12"
                    >

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
                    pl-2 pr-0
                    sm:pl-8 sm:pr-4 
                    lg:pl-10 lg:pr-5"
                    >

                      <div className="hidden md:flex">preço:</div>
                      <Input
                        placeholder="R$ 0.00"
                        {...register('value', { required: true })}
                        className="w-24 text-sm rounded-full bg-input hover:opacity-80"
                        value={formattedValue}
                        onChange={(e) => {
                          const rawValue = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
                          const numericValue = Number(rawValue) / 100;
                          setValue('newValue', numericValue); // Armazena como número
                          setFormattedValue(numericValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
                        }}
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
                {errors.value?.type === 'required' && <p>Insira um valor</p>}
              </div>
            </div>
          }


          {
            // INPUT SEM EDIT 
            !editText &&
            <div className="flex flex-col w-full lg:max-w-6xl">
              <form
                className="flex flex-col items-center justify-between w-full border bg-input rounded-3xl my-4 shadow-lg py-3 text-primary text-sm"
                onSubmit={handleSubmit(handleFormSubmit)}>

                <label className="flex justify-between w-full">

                  <Input
                    {...register('text', { required: true, maxLength: 100 })}
                    onClick={handleCloseFilter}
                    placeholder="Digite seu texto"
                    className="w-full rounded-full text-sm rounded-bl-full bg-input hover:opacity-80"
                    value={valueInput}
                    onChange={(e) => setValueInput(e.target.value)}
                  />

                  <button
                    onClick={handleClickClose}
                    type="button"
                    className=" border-none rounded-full animate-bounce m-1 p-3 flex items-center justify-center"
                    >
                    {filterList === 'h-0' && <ChevronsDown className="size-5"/>}
                    {filterList === 'h-16' && <ChevronsUp className="size-5"/>}
                  </button>

                </label>

                <div className={`flex w-full h-0 transition-all ease-in-out duration-200 ${filterList} mt-4 px-3`}>

                  <div className="flex gap-2 w-full lg:max-w-6xl break-words overflow-y-auto">
                    {chaveKey === 0 && filterList === 'h-16' && listFilter[0].map(item => <ItemProduct key={item.id} item={item} />)}
                    {chaveKey === 1 && filterList === 'h-16' && listFilter[1].map(item => <ItemProduct key={item.id} item={item} />)}
                    {chaveKey === 2 && filterList === 'h-16' && listFilter[2].map(item => <ItemProduct key={item.id} item={item} />)}
                    {chaveKey === 3 && filterList === 'h-16' && listFilter[3].map(item => <ItemProduct key={item.id} item={item} />)}
                    {chaveKey === 4 && filterList === 'h-16' && listFilter[4].map(item => <ItemProduct key={item.id} item={item} />)}
                    {chaveKey === 5 && filterList === 'h-16' && listFilter[5].map(item => <ItemProduct key={item.id} item={item} />)}
                    {chaveKey === 6 && filterList === 'h-16' && listFilter[6].map(item => <ItemProduct key={item.id} item={item} />)}
                    {chaveKey === 7 && filterList === 'h-16' && listFilter[7].map(item => <ItemProduct key={item.id} item={item} />)}
                    {chaveKey === 8 && filterList === 'h-16' && listFilter[8].map(item => <ItemProduct key={item.id} item={item} />)}

                  </div>

                </div>

                <div className="w-full flex justify-between gap-4 md:gap-16 mt-2 px-3">

                  <label className="flex w-full items-center justify-center border rounded-full
                    flex-1 pl-1 pr-0 md:pl-0 z-10 bg-input"
                  >

                    <div className="">qtd:</div>
                    <Input
                      placeholder="0"
                      {...register('quantity', { required: true, min: 1 })}
                      type="number"
                      className="rounded-full w-16 m-0 -mr-10 z-0 rounded-bl-full bg-transparent border-transparent hover:opacity-80" />

                  </label>

                  <label className="flex w-full items-center justify-center  border rounded-full 
                    flex-1"
                  >

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

                  <label className="flex w-full items-center justify-center border rounded-full text-sm
                    flex-1 bg-input"
                  >

                    <Input
                      placeholder="R$ 0.00"
                      {...register('value', { required: true })}
                      className="w-24 flex items-center text-center justify-center text-sm m-0 rounded-full  hover:opacity-80 bg-transparent border-transparent"

                    />

                  </label>

                  <button className="" type="submit" value="enviar">
                    <Forward className="mr-0  text-gray-500 size-6"/>
                  </button>

                </div>




              </form>
              <div className="h-6 text-slate-400">
                {errors.text?.type === 'required' && <p>Este campo precisa ser preenchido!</p>}
                {errors.text?.type === 'maxLength' && <p>Máximo de 80 caracteres</p>}
                {errors.quantity?.type === 'min' && <p>Insira um número positivo</p>}
                {errors.value?.type === 'required' && <p>Insira um valor</p>}
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
    </div>


  )
}