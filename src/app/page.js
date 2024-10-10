import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/component/Navbar";
import { ToolTips } from "@/components/ui/component/ToolTips";





export default function Home() {
  return (

    <div>

      <div className="flex flex-col items-center justify-center h-screen">


        <h1 className="text-5xl font-bold mb-4">Welcome to my First Next Js Projrect </h1>

        <h1 className="  text-red-600 text-3xl font-bold mb-4">Welcome to my First Next Js Project</h1>


        <div className="flex gap-2">

          <Button variant="outline">Get Started</Button>


          <Button variant="destructive">Destructive</Button>


        </div>
        <div className=" mt-5">
        <ToolTips />
        </div>
        
      </div>

    </div>
  );
}
