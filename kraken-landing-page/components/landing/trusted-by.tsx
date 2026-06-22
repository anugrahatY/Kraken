'use client'

export function TrustedBySection() {
  const stores = [
    { name: 'Amazon', logo: 'A' },
    { name: 'Flipkart', logo: 'F' },
    { name: 'Myntra', logo: 'M' },
    { name: 'Ajio', logo: 'AJ' },
    { name: 'eBay', logo: 'E' },
    { name: 'Best Buy', logo: 'BB' },
  ]

  return (
    <section className="py-20 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-muted mb-2">Works across thousands of online stores</p>
          <h2 className="text-3xl font-bold">Trusted By</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
          {stores.map((store) => (
            <div
              key={store.name}
              className="flex items-center justify-center p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <span className="font-bold text-primary text-sm">{store.logo}</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">{store.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
