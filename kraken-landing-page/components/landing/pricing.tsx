'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function PricingSection() {
  const pricingPlans = [
    {
      name: 'Free',
      description: 'Perfect for getting started',
      price: '$0',
      period: '/month',
      featured: true,
      features: [
        'Up to 100 tracked products',
        'Browser notifications',
        'Price history',
        'Dashboard access',
        'Product insights',
      ],
    },
    {
      name: 'Pro',
      description: 'Advanced tracking and analytics',
      price: 'Coming',
      period: ' Soon',
      featured: false,
      features: [
        'Unlimited tracked products',
        'Priority tracking',
        'Advanced analytics',
        'API access',
        'Custom alerts',
        'Priority support',
      ],
    },
    // {
    //   name: 'Enterprise',
    //   description: 'Custom solutions for teams',
    //   price: 'Contact',
    //   period: '',
    //   featured: false,
    //   features: [
    //     'Custom integrations',
    //     'Dedicated support',
    //     'SLA guarantees',
    //     'Team management',
    //     'Custom deployment',
    //   ],
    // },
  ]

  return (
    <section
      id="pricing"
      className="py-24 border-t border-border bg-secondary/10"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Simple Pricing
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works for you. Always flexible,
            always transparent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col ${plan.featured
                ? 'border-primary/50 shadow-lg'
                : 'border-border'
                }`}
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>

                <CardDescription>
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 flex-1">
                <div>
                  <span className="text-4xl font-bold">
                    {plan.price}
                  </span>

                  {plan.period && (
                    <span className="text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2"
                    >
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Link
                  href="/dashboard"
                  className="w-full"
                >
                  <Button
                    className="w-full"
                    variant={
                      plan.featured
                        ? 'default'
                        : 'outline'
                    }
                  >
                    Get Started
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}