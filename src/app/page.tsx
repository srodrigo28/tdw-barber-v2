import Header from "@/components/header";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AvatarImage } from "@radix-ui/react-avatar";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* header */}
      <Header />

      <div className="p-5">
        <h2 className="text-2xl mb-2">Olá, <span className="text-violet-500">João Silva</span></h2>
        <p className="text-slate-400">Terça-feira, 01 de abril.</p>
        
        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca" />
          <Button size="icon"> <SearchIcon /> </Button>
        </div>
        
        <div className="flex gap-2 justify-center mt-5">
          <Button size="icon" className="w-24"> <SearchIcon /> Cabelo </Button>
          <Button size="icon" className="w-24"> <SearchIcon /> Barba </Button>
          <Button size="icon" className="w-44"> <SearchIcon /> Acabamento </Button>
        </div>

        <div className="relative w-full h-[150px] mt-5 rounded-md">
        <Image src="/banner-01.png"  alt="Agende seu horário" fill className="object-cover rounded-md" />
        </div>

        {/* AGENDAMENTOS */}
        <Card className="mt-6">
          <CardContent className="flex justify-between">
            {/* ESQUERDA */}
            <div className="flex flex-col py-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3>Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                    <AvatarImage src="http://github.com/srodrigo28.png" />
                </Avatar>
                <p className="text-slate-500 text-xl">Barbearia Treina-DEV</p>
              </div>
            </div>
            <div>
              <p>Agosto</p>
            </div>
            {/* DIREITA*/}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
