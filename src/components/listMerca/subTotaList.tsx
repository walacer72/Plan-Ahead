'use client'

import { useList } from "@/contexts/valueListCpx";

export const SubTotalList = () => {

  const {

    showSubTotal, list0, list1, list2, list3, list4, list5, list6, list7, list8

  } = useList();

  let totalList: number[] = new Array(9).fill(0);



  for (let i of list0) {
    const q1 = typeof i.quantity === "string" ? parseFloat(String(i.quantity).replace(",", ".")) : i.quantity;

    const v2 = typeof i.value === "string" ? parseFloat(String(i.value).replace(",", ".")) : i.value;


    totalList[0] += q1 * v2;

  }

  for (let i of list1) {
    const q1 = typeof i.quantity === "string" ? parseFloat(String(i.quantity).replace(",", ".")) : i.quantity;

    const v2 = typeof i.value === "string" ? parseFloat(String(i.value).replace(",", ".")) : i.value;

    totalList[1] += q1 * v2;
  }

  for (let i of list2) {
    const q1 = typeof i.quantity === "string" ? parseFloat(String(i.quantity).replace(",", ".")) : i.quantity;

    const v2 = typeof i.value === "string" ? parseFloat(String(i.value).replace(",", ".")) : i.value;

    totalList[2] += q1 * v2;
  }

  for (let i of list3) {
    const q1 = typeof i.quantity === "string" ? parseFloat(String(i.quantity).replace(",", ".")) : i.quantity;

    const v2 = typeof i.value === "string" ? parseFloat(String(i.value).replace(",", ".")) : i.value;

    totalList[3] += q1 * v2;
  }

  for (let i of list4) {
    const q1 = typeof i.quantity === "string" ? parseFloat(String(i.quantity).replace(",", ".")) : i.quantity;

    const v2 = typeof i.value === "string" ? parseFloat(String(i.value).replace(",", ".")) : i.value;

    totalList[4] += q1 * v2;
  }

  for (let i of list5) {
    const q1 = typeof i.quantity === "string" ? parseFloat(String(i.quantity).replace(",", ".")) : i.quantity;

    const v2 = typeof i.value === "string" ? parseFloat(String(i.value).replace(",", ".")) : i.value;

    totalList[5] += q1 * v2;
  }

  for (let i of list6) {
    const q1 = typeof i.quantity === "string" ? parseFloat(String(i.quantity).replace(",", ".")) : i.quantity;

    const v2 = typeof i.value === "string" ? parseFloat(String(i.value).replace(",", ".")) : i.value;

    totalList[6] += q1 * v2;
  }

  for (let i of list7) {
    const q1 = typeof i.quantity === "string" ? parseFloat(String(i.quantity).replace(",", ".")) : i.quantity;

    const v2 = typeof i.value === "string" ? parseFloat(String(i.value).replace(",", ".")) : i.value;

    totalList[7] += q1 * v2;
  }

  for (let i of list8) {
    const q1 = typeof i.quantity === "string" ? parseFloat(String(i.quantity).replace(",", ".")) : i.quantity;

    const v2 = typeof i.value === "string" ? parseFloat(String(i.value).replace(",", ".")) : i.value;

    totalList[8] += q1 * v2;
  }

  let subTotalList = 0;

  for (let i = 0; i <= 8; i++) {
    subTotalList += totalList[i];
  }

  return (
    <div className={`fixed left-1/4 right-1/4 flex justify-center items-center gap-2 bottom-3 border p-1 px-12 transition-all duration-500 ease-in-out rounded-full shadow-xl shadow-ring text-primary`}>

      <p>SubTotal:</p> <p className="flex items-center gap-2"><span>R$</span>{subTotalList.toFixed(2)}</p>
      
    </div>
  )

}