'use client'

import {
  Globe,
  TrendingDown,
  Bell,
  Zap,
  BarChart3,
  Activity,
} from 'lucide-react'
import MarqueeBrandsDemo from '../shadcn-space/marquee/marquee-02'
import MiniPriceChart from './chart'
import BackInStockAlertDemo from '../shadcn-space/alert/alert-02'
import SpinningText02 from '../shadcn-space/spinning-text/spinning-text-02'
import ProductDashboardDemo from '../shadcn-space/scroll-area/scroll-area-01'

export function FeaturesSection() {
  const features = [
    {
      title: "Universal Website Support",
      description:
        "Track products from almost any online store. Kraken adapts to different websites so you can monitor prices across your favorite marketplaces.",
      visual: <MarqueeBrandsDemo />,
    },
    {
      title: "Price History",
      description:
        "View historical price trends and identify the best time to buy. Understand whether a discount is actually a good deal.",
      visual: <MiniPriceChart />,
    },
    {
      title: "Smart Notifications",
      description:
        "Receive instant alerts when prices drop, products come back in stock, or your target price is reached.",
      visual: <BackInStockAlertDemo />,
    },
    {
      title: "AI Selector Recovery",
      description:
        "When websites change their layouts, Kraken automatically repairs broken selectors to keep tracking running without interruption.",
      visual: <SpinningText02 />,
    },
    {
      title: "Product Dashboard",
      description:
        "Manage all tracked products in one place. Monitor prices, targets, status, and recent updates from a centralized dashboard.",
      visual: <ProductDashboardDemo />,
    },
    {
      title: "Analytics & Savings",
      description:
        "Measure your savings, track price movement patterns, and gain insights into how much money Kraken has helped you save.",
      visual: <Activity className="h-20 w-20" />,
    },
  ]



  return (
    <section
      id="features"
      className="py-24 border-t border-border bg-background"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 text-center mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Powerful Features
          </h2>

          <div className="h-1 w-24 bg-primary mx-auto" />

          <p className="text-muted-foreground mt-4">
            Everything you need to stay ahead of prices and make informed
            buying decisions.
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            // const Icon = feature.icon
            // const color = colors[index % colors.length]
            const isEven = index % 2 === 0

            return (
              <div
                key={feature.title}
                className={`grid md:grid-cols-2 gap-8 items-center ${isEven ? '' : 'md:grid-flow-dense'
                  }`}
              >
                {/* Icon Column */}
                <div
                  className={`hidden md:flex ${isEven ? 'justify-end order-2' : 'justify-start order-1'
                    }`}
                >
                  <div className="relative group">
                    <div
                      className={`
                        rounded-2xl
                        p-6
                        h-45
                        w-full
                        max-w-[420px]
                        transition-all
                        duration-300
                        hover:border-opacity-100
                        hover:scale-105
                        overflow-hidden
                        relative
                      `}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/5" />

                      <div className="relative z-10 h-full flex items-center justify-center overflow-hidden">
                        <div className="scale-75">
                          {feature.visual}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={isEven ? 'order-1' : 'order-2'}>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">
                      {feature.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}