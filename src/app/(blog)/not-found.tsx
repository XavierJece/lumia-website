export default function BlogNotFound() {
  return (
    <main className="bg-white-essential">
      <section className="container mx-auto px-6 pb-16 pt-14 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary-green">
          Conteúdo não encontrado
        </p>
        <h1 className="mt-3 text-3xl font-bold text-neutral-900">
          Artigo não disponível
        </h1>
        <p className="mt-3 text-neutral-700">
          O artigo que você procura pode ter sido removido ou está indisponível
          no momento.
        </p>
        <a
          href="/blog"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-primary-green px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Voltar para o blog
        </a>
      </section>
    </main>
  )
}
