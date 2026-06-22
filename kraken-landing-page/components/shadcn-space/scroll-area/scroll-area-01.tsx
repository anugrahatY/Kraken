
"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  MoreHorizontal,
  TrendingDown,
  Bell,
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  change: string;
  status: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Logitech G Pro X Superlight",
    price: "₹8,999",
    change: "-12%",
    status: "Tracking",
  },
  {
    id: 2,
    name: "Sony WH-1000XM5",
    price: "₹22,499",
    change: "-8%",
    status: "Price Drop",
  },
  {
    id: 3,
    name: "Samsung 990 Pro SSD",
    price: "₹10,999",
    change: "+2%",
    status: "Tracking",
  },
  {
    id: 4,
    name: "RTX 5070",
    price: "₹54,999",
    change: "-18%",
    status: "Target Hit",
  },
  {
    id: 5,
    name: "Keychron K2 Pro",
    price: "₹7,499",
    change: "-5%",
    status: "Tracking",
  },
  {
    id: 6,
    name: "Apple AirPods Pro",
    price: "₹19,999",
    change: "-15%",
    status: "Price Drop",
  },
];

export default function ProductDashboardDemo() {
  return (
    <div className="w-[380px] overflow-hidden rounded-xl border shadow-sm scale-90 origin-center">
      {/* Header */}
      <div className="bg-muted/40 flex items-center justify-between border-b px-4 py-3">
        <div>
          <p className="text-sm font-semibold">Product Dashboard</p>
          <p className="text-muted-foreground text-xs">
            {products.length} products tracked
          </p>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="size-8 cursor-pointer"
        >
          <MoreHorizontal className="size-4" />
        </Button>
      </div>

      {/* Table */}
      <ScrollArea className="h-56">
        <div className="bg-background/90 text-muted-foreground sticky top-0 z-10 grid grid-cols-[1fr_auto_auto] items-center gap-2 border-b px-4 py-2 text-xs font-medium uppercase tracking-wider backdrop-blur-sm">
          <span>Product</span>
          <span className="w-20 text-center">Price</span>
          <span className="w-20 text-right">Change</span>
        </div>

        <div className="px-2 py-1">
          {products.map((product, index) => (
            <div key={product.id}>
              <div className="hover:bg-muted group grid cursor-pointer grid-cols-[1fr_auto_auto] items-center gap-2 rounded-lg px-2 py-3 transition-colors">
                {/* Product */}
                <div className="flex min-w-0 items-center gap-3">
                  <div className="bg-primary/10 flex size-9 shrink-0 items-center justify-center rounded-md">
                    <ShoppingCart className="text-primary size-4" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">
                      {product.name}
                    </p>

                    <div className="mt-1 flex items-center gap-1">
                      {product.status === "Price Drop" && (
                        <Badge variant="secondary" className="text-[10px]">
                          <TrendingDown className="mr-1 size-3" />
                          Drop
                        </Badge>
                      )}

                      {product.status === "Target Hit" && (
                        <Badge className="text-[10px]">
                          🎯 Target Hit
                        </Badge>
                      )}

                      {product.status === "Tracking" && (
                        <Badge
                          variant="outline"
                          className="text-[10px]"
                        >
                          <Bell className="mr-1 size-3" />
                          Tracking
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="w-20 text-center">
                  <span className="text-sm font-semibold">
                    {product.price}
                  </span>
                </div>

                {/* Change */}
                <div className="w-20 text-right">
                  <Badge
                    variant={
                      product.change.startsWith("-")
                        ? "default"
                        : "secondary"
                    }
                  >
                    {product.change}
                  </Badge>
                </div>
              </div>

              {index < products.length - 1 && (
                <div className="bg-border/50 mx-2 h-px" />
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="bg-muted/40 text-muted-foreground flex items-center justify-between border-t px-4 py-2 text-xs">
        <span>Total Savings: ₹12,430</span>
        <span>3 Active Alerts</span>
      </div>
    </div>
  );
}

