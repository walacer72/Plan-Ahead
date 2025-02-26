import { Footer } from "@/components/footer"
import { ListHome } from "@/components/listMerca/listHome";
import { SubTotalList } from "@/components/listMerca/subTotaList";
import { ValueListProvider } from "@/contexts/valueListCpx";

const Page = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <ValueListProvider>
        <div className="relative flex justify-center flex-col gap-4">
          <ListHome />
            <div className={`flex justify-center bg-input z-50`}>
              <SubTotalList />
            </div>
          <Footer />
        </div>
      </ValueListProvider>
    </div>

  )
}

export default Page;