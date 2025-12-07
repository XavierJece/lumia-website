export default function BlogLoading() {
  return (
    <main className="bg-white-essential">
      <section className="container mx-auto px-6 pb-20 pt-14 lg:px-8">
        <div className="h-10 w-48 animate-pulse rounded-full bg-neutral-200" />
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-64 animate-pulse rounded-2xl bg-neutral-100"
            />
          ))}
        </div>
      </section>
    </main>
  )
}
