import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { MenuIcon } from "lucide-react"
import { Button } from "./ui/button"

const Header = () => {
    return(
        <Card className="w-screen">
            <CardContent className="flex flex-row items-center justify-between p-5">
                <Image src="/logo.png" alt="tdw logo" height={18} width={120} />
                <Button variant="outline" size="icon">
                <MenuIcon/>
            </Button>
            </CardContent>
        </Card>
    )
}

export default Header