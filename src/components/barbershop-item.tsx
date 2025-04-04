import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";

interface BarbershopItemProps{
    barbershop: Barbershop
}

const BarbershopItem = ( { barbershop } : BarbershopItemProps ) => {
    return ( 
        <Card className="min-w-[167px] rounded-2xl">
            <CardContent className="p-0 px-1 pt-1">
                {/* Imagem */}
                <div className="relative h-[159px] w-full rounded-2xl">
                    <Image 
                    alt={barbershop.name}
                    fill 
                    className="object-cover rounded-2xl" 
                    src={barbershop.imageUrl} 
                />
                <Badge className="absolute left-2 top-2 space-x-1" variant="secondary">
                    <StarIcon size={12} className="fill-primary text-primary" />
                    <p className="ml-1 text-xs">5.0</p>
                </Badge>
                </div>

                {/* Texto */}
                <div className="px-2 py-3">
                    <h3 className="font-semibold truncate">{barbershop.name}</h3>
                    <p className="text-sm text-gray-400 truncate">{barbershop.address}</p>
                    <Button className="mt-3 w-full">Reservar</Button>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default BarbershopItem;