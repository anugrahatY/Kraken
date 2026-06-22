'use client';

import { Search, Radar, Zap } from 'lucide-react';
import { Container } from '@/components/zippystarter/container';

export function ProcessFlow() {
  const steps = [
    {
      icon: Search,
      title: "Install Extension",
      description:
        "Add the Kraken browser extension and pin it to your toolbar for one-click price tracking.",
      iconBg: "bg-blue-500",
      iconColor: "text-blue-500",
      borderColor: "border-blue-500/40",
    },
    {
      icon: Radar,
      title: "Select a Price",
      description:
        "Visit any product page and click the price you want Kraken to monitor.",
      iconBg: "bg-purple-500",
      iconColor: "text-purple-500",
      borderColor: "border-purple-500/40",
    },
    {
      icon: Zap,
      title: "Get Alerts",
      description:
        "Receive instant notifications when the price drops, stock returns, or your target price is reached.",
      iconBg: "bg-amber-500",
      iconColor: "text-amber-500",
      borderColor: "border-amber-500/40",
    },
  ];

  return (
    <Container className="py-24 border-t border-border bg-secondary/10">
      <div className="space-y-20 mx-auto max-w-5xl">
        {/* Main title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
            Getting Started
          </h2>
          <p className="text-muted-foreground text-lg">
            Three simple steps to start tracking prices and saving money on everything you buy.
          </p>
        </div>

        {/* Visual Process Flow - Vertical for better alignment */}
        <div className="space-y-8 max-w-3xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative">
                {/* Connecting line to next step */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-32 w-1 h-20 bg-gradient-to-b from-border to-border/20" />
                )}

                {/* Step card with zigzag layout */}
                <div className={`grid md:grid-cols-2 gap-8 items-center ${isEven ? "" : "md:grid-flow-dense"}`}>
                  {/* Left content */}
                  <div className={isEven ? "order-1" : "order-2"}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right icon */}
                  <div className={`flex ${isEven ? "justify-end order-2" : "justify-start order-1"}`}>
                    <div className="relative w-fit">
                      {/* Icon container with flat color */}
                      <div className={`${step.iconBg}/10 border ${step.borderColor} rounded-2xl p-8 transition-all duration-300 hover:${step.iconBg}/20`}>
                        <Icon className={`w-12 h-12 ${step.iconColor}`} strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive diagram section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-16 pt-16 border-t border-border mx-auto max-w-3xl">
          {/* Left side - Visual representation */}
          <div className="space-y-6">
            <div className="relative aspect-square bg-gradient-to-br from-primary/5 via-background to-background rounded-lg border border-border/50 p-8 flex flex-col justify-between">
              {/* Top browser window */}
              <div className="bg-card border border-border rounded-lg p-3 space-y-2">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs font-mono text-muted-foreground">amazon.com/product/xyz</div>
              </div>

              {/* Product card */}
              <div className="bg-card border border-primary/30 rounded-lg p-4 space-y-2 my-4">
                <div className="h-12 bg-primary/10 rounded"></div>
                <div className="space-y-1">
                  <div className="h-2 bg-primary/20 rounded w-3/4"></div>
                  <div className="h-2 bg-primary/20 rounded w-1/2"></div>
                </div>
                <div className="text-primary font-bold">$49.99</div>
              </div>

              {/* Animated dots flowing down */}
              <div className="flex justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.3s' }}></div>
              </div>

              {/* Price tracking indicator */}
              <div className="bg-card border border-border rounded-lg p-3 text-center">
                <div className="text-xs text-muted-foreground mb-1">LAST UPDATE</div>
                <div className="text-sm font-mono text-primary">2 mins ago</div>
              </div>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Real-Time Monitoring</h3>
              <p className="text-muted-foreground">
                Our distributed system continuously checks prices across the web. Updates happen within minutes, giving you the fastest alerts in the market.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 bg-primary rounded-full"></div>
                <div>
                  <h4 className="font-mono text-sm font-bold mb-1">24/7 Tracking</h4>
                  <p className="text-xs text-muted-foreground">Never miss a price drop, even while you sleep</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 bg-primary rounded-full"></div>
                <div>
                  <h4 className="font-mono text-sm font-bold mb-1">Cross-Platform</h4>
                  <p className="text-xs text-muted-foreground">Works on any website without extensions</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 bg-primary rounded-full"></div>
                <div>
                  <h4 className="font-mono text-sm font-bold mb-1">Instant Alerts</h4>
                  <p className="text-xs text-muted-foreground">Get notifications via email, SMS, or push</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
