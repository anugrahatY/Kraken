
import { CircleAlertIcon } from "lucide-react"

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const BackInStockAlertDemo = () => {
  return (
    <Alert className="flex items-center justify-between cursor-pointer hover:scale-105 transition-all duration-300 max-w-md">
      <Avatar className="rounded-md h-12 w-12">
        <AvatarImage
          src="https://images.unsplash.com/photo-1527814050087-3793815479db?w=200"
          alt="Gaming Mouse"
          className="object-cover"
        />
        <AvatarFallback>GM</AvatarFallback>
      </Avatar>

      <div className="flex-1 px-4">
        <AlertTitle className="text-sm font-semibold">
          Logitech G Pro X Superlight is back in stock
        </AlertTitle>

        <AlertDescription className="text-xs mt-1">
          Available now at ₹8,999.
          <a
            href="#"
            className="ml-1 text-emerald-500 hover:text-emerald-400 no-underline"
          >
            View Product →
          </a>
        </AlertDescription>
      </div>

      <CircleAlertIcon className="h-5 w-5 text-emerald-500 shrink-0" />
    </Alert>
  )
}

export default BackInStockAlertDemo
