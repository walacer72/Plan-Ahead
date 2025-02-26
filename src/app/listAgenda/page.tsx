import { Footer } from "@/components/footer"
import { Agenda } from "@/components/listAgenda/agenda";


const Page = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <div className="container mx-auto">
        <Agenda />
        <Footer />
      </div>
    </div>

  )
}

export default Page;