"use client"

import { CircleCheckBig, Facebook, Instagram } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button";

export const HomePage = () => {

  const router = useRouter();

  return (

    <div className="fixed lg:container mx-auto z-0 top-0 bottom-0 right-0 left-0 bg-black/80 flex justify-center items-center shadow-2xl shadow-black">

      <div className="absolute top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center md:flex-row md:justify-between md:items-stretch gap-2 
      bg-gradient-to-l from-blue-400 to-black/80 shadow-2xl">

        <div className="w-full p-4 md:p-0 md:w-3/5 flex flex-col justify-center text-white z-50">
          <h1 className="w-full max-w-3xl text-center md:pl-20 md:text-start text-gray-200">Chega de esquecimentos! Conheça o </h1>

          <div className="flex flex-col md:flex-row justify-center items-center m-0">
            <h1 className="flex text-4xl my-4 md:text-7xl items-center justify-center p-10 md:p-12 border-t-2 border-b-2 border-black ">Plan Ahead <CircleCheckBig size={40} />
            </h1>

            <div className="flex flex-col gap-4 md:gap-8">
              <button

                className="button rounded-md"
                onClick={() => router.push('./listTarefas')}>Lista de tarefas</button>
              <button
                className="button rounded-md"
                onClick={() => router.push('./listMercado')}>Lista de Mercado</button>
              <button
                className="button rounded-md"
                onClick={() => router.push('./listAgenda')}>laneje seu DiaP</button>
            </div>
          </div>
          <p className="w-full md:pl-20 max-w-2xl text-center md:text-start mt-6 md:mt-24 text-gray-200">Organize suas compras e tarefas do dia a dia de forma simples e eficiente! Com o Plan Ahead, você tem um assistente inteligente na palma da mão para planejar suas listas de mercado e suas tarefas diárias.</p>
        </div>


        <div className="absolute w-full md:w-3/6 -right-72 top-80 md:-right-72 bg-black/80 transform rotate-45 p-4 rounded-l-3xl -bottom-36 md:bottom-10 md:top-0 z-30 shadow-2xl shadow-black">

          <img className="absolute right-52 top-48 md:right-72  md:top-40 transform -rotate-45 z-50 w-3/5 md:w-4/6 h-full object-contain" src="/galeria/print macbook.png" alt="" />

          <img className="absolute bottom-20 right-60 md:top-44 md:right-64 transform -rotate-45 z-50 w-24 md:w-44 h-auto object-contain" src="/galeria/print smart.png" alt="" />

        </div>



        <div className="w-full flex justify-start absolute bottom-2 left-2 p-2 gap-2 z-50">
          <Button className="flex justify-center items-center transition-all duration-500 ease-in-out  rounded-full bg-white size-10 text-black hover:bg-blue-400 hover:text-white ">
            <Instagram className="" />
          </Button>
          <Button className="flex justify-center items-center transition-all duration-500 ease-in-out rounded-full bg-white size-10 text-neutral-800 hover:bg-blue-400 hover:text-white">
            <Facebook />
          </Button>
        </div>

      </div>


    </div>


  )
}