import BarbershopItem from "@/components/barbershop-item";
import Header from "@/components/header";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/prisma";
import { AvatarImage } from "@radix-ui/react-avatar";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

interface QuickSearchOption {
  imageUrl: string;
  title: string;
}

const Home = async () => {
  const quickSearchOptions: QuickSearchOption[] = [
    { imageUrl: "/acabamento.svg", title: "Acabamento" },
    { imageUrl: "/barba.svg", title: "Barba" },
    { imageUrl: "/cabelo.svg", title: "Cabelo" },
    { imageUrl: "/hidratacao.svg", title: "Hidratacao" },
    { imageUrl: "/sobrancelha.svg", title: "Sobrancelha" },
  ];
  // const barbershops = await db.barbershop.findMany({});
  const popularBarbershops = await db.barbershop.findMany({
    // condicional de filtro
    orderBy: { name: "asc" },
  });
  // console.log({ barbershops });
  return (
    <div className="flex flex-col h-screen md:w-96 mx-auto">
      {/* header */}
      <Header />

      {/* MAIN */}
      <div className="p-5">
        <h2 className="text-2xl mb-2">
          Olá, <span className="text-violet-500">João Silva</span>
        </h2>
        <p className="text-slate-400">Sexta-feira, 04 de abril.</p>

        {/* BUSCA RÁPIDA */}
        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca" />
          <Button size="icon">
            <SearchIcon />{" "}
          </Button>
        </div>

        {/* BOTÕES BUSCA RÁPIDA */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button key={option.title} size="icon" className="w-fit px-3">
              <Image
                src={option.imageUrl}
                alt={option.title}
                width={16}
                height={16}
              />{" "}
              {option.title}
            </Button>
          ))}
        </div>

        {/* imagem BANNER */}
        <div className="relative w-full h-[150px] mt-5 rounded-md">
          <Image
            src="/banner-01.png"
            alt="Agende seu horário"
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* AGENDAMENTOS */}
        <h2 className="mt-6 text-sm font-bold uppercase text-gray-500 tracking-wider">
          Agendamentos
        </h2>

        <Card className="mt-2 h-32">
          <CardContent className="flex justify-between items-center">
            {/* ESQUERDA */}
            <div className="flex gap-2 flex-col py-5">
              <Badge className="w-fit tracking-wider">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="http://github.com/srodrigo28.png" />
                </Avatar>
                <p className="text-slate-500 text-md">Barbearia Treina-DEV</p>
              </div>
            </div>

            {/* DIREITA*/}
            <div className="flex gap-2 flex-col items-center border-l-2 pl-3">
              <p className="text-sm pl-3">Abril</p>
              <p className="text-3xl">04</p>
              <p className="text-sm pl-3">12:00</p>
            </div>
          </CardContent>
        </Card>

        {/* AGENDAMENTOS */}
        <h2 className="mt-6 text-sm font-bold uppercase text-gray-500 tracking-wider">
          Recomendados
        </h2>

        {/** AREA DE SCROLL */}
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      {/** AREA DE FOOTER */}
      <footer>
        <Card className="px-5 py-6 pt-8">
          <CardContent>
            <p className="text-sm text-gray-500">
              @ 2025 Copyright TREINA DEV - Barber
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
};

export default Home;
