'use client'

import { useEffect, useState } from "react";
import { ChevronsDown, ChevronsLeft, ChevronsRight, ChevronsUp, Forward, ListX, X } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useList } from "@/contexts/valueListCpx";
import { Input } from "../ui/input";
import { ItemList } from "./itemList";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/menuSize";
import { QtdList } from "./qtdList";
import { Button } from "../ui/button";
import { ShowTuto } from "./listHome";
import { ItemProduct } from "./itemProduct";
import { List } from "../data";
import { Tooltip } from "react-tooltip";


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
    handleAddText, handleUpdateTextInput, setEditText,
    modalList, editText, chaveKey, handleClearList, dataProduct,
    list0, list1, list2, list3, list4, list5, list6, list7, list8, valueInput, setValueInput, qtdListAppear, setQtdListAppear, setQtdListReturn,
    filterList, setFilterList, handleAddEqual, qtdListReturn
  } = useList();

  const [formattedValue, setFormattedValue] = useState("");
  const [showTutorial, setShowTutorial] = useState<ShowTuto>('hidden')
  const [funcaoUnique, setFuncaoUnique] = useState<boolean>(false);

  let listFilter = [];

  // ENVIANDO DADOS DO INPUT
  const handleFormSubmit: SubmitHandler<Inputs> = (data, event) => {
    event?.preventDefault();


    if (data) {
      const textIgual = List.some(item => data.text.toLowerCase() === item.product.toLowerCase());
      if (!textIgual) {
        handleAddEqual({ id: dataProduct.length + 1, categoryId: Number(chaveKey), product: data.text });
      }

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

  const handleHelpTutori = () => {
    if (showTutorial === 'hidden') {
      setShowTutorial('flex');
    } else {
      setShowTutorial('hidden');
    }
  }

  const handleCloseTutori = () => {
    setShowTutorial('hidden');
  }

  for (let i = 0; i <= 8; i++) {
    switch (chaveKey) {
      case i:
        listFilter[i] = dataProduct.filter(item => item.categoryId === i);
        break;
      default:
        break;
    }
  }

  const filterDigit = dataProduct.filter(item =>
    item.product.toLowerCase().includes(valueInput.toLowerCase())
  )

  const handleCloseFilter = () => {
    if (!funcaoUnique) {
      setFilterList('h-16');
      setFuncaoUnique(true);
    }
  }

  const handleClickClose = () => {
    if (filterList === 'h-16') {
      setFilterList('h-0');
    } else {
      setFilterList('h-16');
    }
  }

  const handleShowQtdList = () => {
    if (qtdListReturn === '-left-44') {
      setQtdListReturn('');
      setQtdListAppear('left-4');
    } else {
      setQtdListAppear('');
      setQtdListReturn('-left-44');

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

          {editText && // INPUT COM EDIT

            <div className="flex flex-col w-full lg:max-w-6xl">
              <form
                className="flex flex-col items-center justify-between w-full border border-blue-600 bg-input rounded-3xl my-4 shadow-lg py-3 text-primary text-sm"
                onSubmit={handleSubmit(onSubmit)}>

                <label className="flex justify-between w-full">

                  <Input
                    {...register('newText', { required: true, maxLength: 100 })}
                    onClick={handleCloseFilter}
                    placeholder="Digite seu texto"
                    className="w-full rounded-full text-blue-500 animate-pulse text-sm rounded-bl-full bg-input hover:opacity-80"
                    value={valueInput}
                    onChange={(e) => setValueInput(e.target.value)}
                  />

                  <>
                    <button
                      onClick={handleClickClose}
                      type="button"
                      className=" border-none rounded-full animate-bounce p-3 flex items-center justify-center"
                      data-tooltip-id="Tooltip-listSetor" data-tooltip-content="Lista de Produtos do setor"
                    >
                      {filterList === 'h-0' &&
                        <ChevronsDown className="size-5" />
                      }
                      {filterList === 'h-16' &&
                        <ChevronsUp className="size-5" />
                      }
                    </button>
                    <Tooltip id="Tooltip-listSetor" place="left" />
                  </>

                </label>

                <div className={`flex w-full h-0 transition-all ease-in-out duration-200 ${filterList} mt-4 px-3`}>

                  <div className="flex gap-2 w-full lg:max-w-6xl break-words overflow-y-auto">
                    {valueInput.trim() !== '' &&
                      filterDigit.map(item => (
                        <Button
                          key={item.id}
                          onClick={() => {
                            setValue("newText", item.product); // Atualiza o input do React Hook Form
                            setValueInput(item.product); // Mantém o estado local atualizado
                          }}
                          type="submit"
                          variant={'secondary'} className="rounded-full"><p className="text-sm">{item.product}</p></Button>
                      ))
                    }
                    {valueInput === '' && chaveKey === 0 && filterList === 'h-16' && listFilter[0].map(item => <ItemProduct setValue={setValue} key={item.id} item={item} />)}
                    {valueInput === '' && chaveKey === 1 && filterList === 'h-16' && listFilter[1].map(item => <ItemProduct setValue={setValue} key={item.id} item={item} />)}
                    {valueInput === '' && chaveKey === 2 && filterList === 'h-16' && listFilter[2].map(item => <ItemProduct setValue={setValue} key={item.id} item={item} />)}
                    {valueInput === '' && chaveKey === 3 && filterList === 'h-16' && listFilter[3].map(item => <ItemProduct setValue={setValue} key={item.id} item={item} />)}
                    {valueInput === '' && chaveKey === 4 && filterList === 'h-16' && listFilter[4].map(item => <ItemProduct setValue={setValue} key={item.id} item={item} />)}
                    {valueInput === '' && chaveKey === 5 && filterList === 'h-16' && listFilter[5].map(item => <ItemProduct setValue={setValue} key={item.id} item={item} />)}
                    {valueInput === '' && chaveKey === 6 && filterList === 'h-16' && listFilter[6].map(item => <ItemProduct setValue={setValue} key={item.id} item={item} />)}
                    {valueInput === '' && chaveKey === 7 && filterList === 'h-16' && listFilter[7].map(item => <ItemProduct setValue={setValue} key={item.id} item={item} />)}
                    {valueInput === '' && chaveKey === 8 && filterList === 'h-16' && listFilter[8].map(item => <ItemProduct setValue={setValue} key={item.id} item={item} />)}

                  </div>

                </div>

                <div className="w-full flex justify-between gap-4 md:gap-16 mt-2 px-3">

                  <label className="flex w-full items-center justify-center border rounded-full
                    flex-1 pl-1 pr-0 md:pl-0 z-10 bg-input"
                  >

                    <div className="">qtd:</div>
                    <Input
                      placeholder="0"
                      {...register('newQuantity', { required: true, min: 1 })}
                      type="number"
                      className="rounded-full w-16 m-0 -mr-10 z-0 rounded-bl-full bg-transparent border-transparent hover:opacity-80" />

                  </label>

                  <label className="flex w-full items-center justify-center  border rounded-full 
                    flex-1"
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

                  <label className="flex w-full items-center justify-center border rounded-full text-sm
                    flex-1 bg-input"
                  >

                    <Input
                      placeholder="R$ 0.00"
                      {...register('newValue', { required: true })}
                      className="w-24 flex items-center text-center justify-center text-sm m-0 rounded-full  hover:opacity-80 bg-transparent border-transparent"

                    />

                  </label>

                  <>
                    <button
                      type="submit"
                      value="enviar"
                      data-tooltip-id="Tooltip-Enter" data-tooltip-content="insira seu item na lista"
                    >
                      <Forward className="mr-0  text-gray-500 size-6" />
                    </button>
                    <Tooltip id="Tooltip-Enter" place="bottom-end" />
                  </>

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



          {!editText && // INPUT SEM EDIT

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

                  <>
                    <button
                      onClick={handleClickClose}
                      type="button"
                      className=" border-none rounded-full animate-bounce p-3 flex items-center justify-center"
                      data-tooltip-id="Tooltip-listSetor" data-tooltip-content="Lista de Produtos do setor"
                    >
                      {filterList === 'h-0' &&
                        <ChevronsDown className="size-5" />
                      }
                      {filterList === 'h-16' &&
                        <ChevronsUp className="size-5" />
                      }
                    </button>
                    <Tooltip id="Tooltip-listSetor" place="left" />
                  </>
                </label>

                <div className={`flex w-full h-0 transition-all ease-in-out duration-200 ${filterList} mt-4 px-3`}>

                  <div className="flex gap-2 w-full lg:max-w-6xl break-words overflow-y-auto">
                    {valueInput.trim() !== '' &&
                      filterDigit.map(item => (
                        <Button
                          key={item.id}
                          onClick={() => {
                            setValue("text", item.product); // Atualiza o input do React Hook Form
                            setValueInput(item.product); // Mantém o estado local atualizado
                          }}
                          type="submit"
                          variant={'secondary'} className="rounded-full"><p className="text-sm">{item.product}</p></Button>
                      ))
                    }
                    {valueInput === '' && chaveKey === 0 && filterList === 'h-16' && listFilter[0].map(item => <ItemProduct setValue={setValue} key={item.id} item={item} />)}
                    {valueInput === '' && chaveKey === 1 && filterList === 'h-16' && listFilter[1].map(item => <ItemProduct setValue={setValue} key={item.id} item={item} />)}
                    {valueInput === '' && chaveKey === 2 && filterList === 'h-16' && listFilter[2].map(item => <ItemProduct setValue={setValue} key={item.id} item={item} />)}
                    {valueInput === '' && chaveKey === 3 && filterList === 'h-16' && listFilter[3].map(item => <ItemProduct setValue={setValue} key={item.id} item={item} />)}
                    {valueInput === '' && chaveKey === 4 && filterList === 'h-16' && listFilter[4].map(item => <ItemProduct setValue={setValue} key={item.id} item={item} />)}
                    {valueInput === '' && chaveKey === 5 && filterList === 'h-16' && listFilter[5].map(item => <ItemProduct setValue={setValue} key={item.id} item={item} />)}
                    {valueInput === '' && chaveKey === 6 && filterList === 'h-16' && listFilter[6].map(item => <ItemProduct setValue={setValue} key={item.id} item={item} />)}
                    {valueInput === '' && chaveKey === 7 && filterList === 'h-16' && listFilter[7].map(item => <ItemProduct setValue={setValue} key={item.id} item={item} />)}
                    {valueInput === '' && chaveKey === 8 && filterList === 'h-16' && listFilter[8].map(item => <ItemProduct setValue={setValue} key={item.id} item={item} />)}

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
                  <>
                    <button
                      type="submit"
                      value="enviar"
                      data-tooltip-id="Tooltip-Enter" data-tooltip-content="insira seu item na lista"
                    >
                      <Forward className="mr-0  text-gray-500 size-6" />
                    </button>
                    <Tooltip id="Tooltip-Enter" place="bottom-end" />
                  </>
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
            <>
              <Button
                onClick={handleHelpTutori}
                className="absolute top-60 bg-blue-400 text-base text-black -left-12 transition-all duration-300 hover:-left-6 transform -rotate-90 hover:bg-blue-500/90"
                data-tooltip-id="Tooltip-Help" data-tooltip-content="Duvidas sobre o uso do app"
              >
                Ajuda
              </Button>
              <Tooltip id="Tooltip-Help" place="bottom-end" />
            </>

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

        <div className={`fixed bottom-20 flex items-center bg-background transition-all duration-500 ease-in-out ${qtdListReturn} ${qtdListAppear} z-50 text-primary shadow-lg rounded-full border`}>

          <>
            <button className="flex items-center justify-center border rounded-full w-12 pl-1 bg-primary text-background h-12 hover:bg-primary/90"
              data-tooltip-id="Tooltip-ClearList" data-tooltip-content="Exclua todos os itens da lista"
            >
              <ListX size={20} onClick={handleClearList} className="" />
            </button>
            <Tooltip id="Tooltip-ClearList" place="top-end" />
          </>

          <div className="ml-2">
            {chaveKey === 0 && <QtdList list={list0} />}
            {chaveKey === 1 && <QtdList list={list1} />}
            {chaveKey === 2 && <QtdList list={list2} />}
            {chaveKey === 3 && <QtdList list={list3} />}
            {chaveKey === 4 && <QtdList list={list4} />}
            {chaveKey === 5 && <QtdList list={list5} />}
            {chaveKey === 6 && <QtdList list={list6} />}
            {chaveKey === 7 && <QtdList list={list7} />}
            {chaveKey === 8 && <QtdList list={list8} />}
          </div>

          <button className="flex items-center justify-center rounded-full w-12 h-12 hover:text-primary-foreground">
            {qtdListAppear === '' &&
              <>
                <ChevronsRight
                  size={22}
                  onClick={handleShowQtdList}
                  data-tooltip-id="Tooltip-MoneyValues" data-tooltip-content="Verifique o total da sua lista"
                />
                <Tooltip id="Tooltip-MoneyValues" place="top-start" />
              </>
            }
            {qtdListAppear === 'left-4' &&
              <ChevronsLeft size={22} onClick={handleShowQtdList} />
            }

          </button>

        </div>

      </div>
    </div>


  )
}