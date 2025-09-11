import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <div className="border-b border-border/40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Skeleton className="w-4 h-4 rounded-full" />
              <Skeleton className="w-24 h-4" />
            </div>
            <Skeleton className="w-48 h-8" />
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Image Skeleton */}
        <div className="mb-16">
          <Skeleton className="w-full h-96 md:h-[600px] rounded-2xl mb-8" />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <Skeleton className="w-3/4 h-10 mb-4" />
                <Skeleton className="w-full h-24 mb-6" />
              </div>
              
              <div>
                <Skeleton className="w-48 h-6 mb-4" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[...Array(4)].map((_, i) => (
                    <div key={i}>
                      <Skeleton className="w-16 h-4 mb-1" />
                      <Skeleton className="w-32 h-6" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <Skeleton className="w-48 h-6 mb-4" />
                <div className="space-y-3">
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="w-full h-4" />
                  ))}
                </div>
              </div>
              
              <div>
                <Skeleton className="w-48 h-6 mb-4" />
                <div className="flex flex-wrap gap-2">
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="w-20 h-8 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <Skeleton className="w-48 h-6 mb-4" />
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="aspect-square rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Image Placeholders */}
        <div className="space-y-8">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="w-full h-64 md:h-96 rounded-2xl" />
          ))}
        </div>
      </main>
    </div>
  );
}
