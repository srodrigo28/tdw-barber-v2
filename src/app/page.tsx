import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl text-green-500">App NextJS 14</h1>
      <Button variant={"ghost"} className="border mt-10">Entrar</Button>
    </div>
  );
}
