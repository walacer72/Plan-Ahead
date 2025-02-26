import { Footer } from "@/components/footer";
import { List } from "@/components/list/listDetarefas";


const Page = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <div className="relative flex justify-center flex-col">
        <List />
        <Footer />
      </div>

    </div>

  )
}

export default Page;