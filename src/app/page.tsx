import { HomePage } from "@/components/home";
import { ValueListProvider } from "@/contexts/valueListCpx";


const Page = () => {

  return (
    <div className="w-screen h-screen bg-bannerImg bg-cover flex justify-center">
      <ValueListProvider>
        <HomePage />
      </ValueListProvider>

    </div>

  )
}

export default Page;