import Image from 'next/image'

const imagem = [
  'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1768796372063-4da660e034b8?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1768796372063-4da660e034b8?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
  // 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
  // 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
  // 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop',
  // 'https://images.unsplash.com/photo-1763310225071-af00bef26d1c?w=600&h=400&fit=crop',
  // 'https://images.unsplash.com/photo-1653202143301-7fb80a90010c?w=600&h=400&fit=crop',
  // 'https://images.unsplash.com/photo-1763315156830-07870b159121?w=600&h=400&fit=crop',
  // 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
  // 'https://images.unsplash.com/photo-1575282384538-b7ae877e0505?w=600&h=400&fit=crop',
  // 'https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?w=600&h=400&fit=crop',
  // 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
  // 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&h=400&fit=crop',
  // 'https://images.unsplash.com/photo-1585219820390-a34a8d4760ed?w=600&h=400&fit=crop',
  // 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
  // 'https://images.unsplash.com/photo-1707307316651-25b6a1bef122?w=600&h=400&fit=crop',
  // 'https://images.unsplash.com/photo-1581094480465-4e6c25fb4a52?w=600&h=400&fit=crop',
  // 'https://images.unsplash.com/photo-1743422854997-b6a4aa993aea?w=600&h=400&fit=crop',
  // 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=600&h=400&fit=crop',
  // 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
  // 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop',
  // 'https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?w=600&h=400&fit=crop',
  // 'https://images.unsplash.com/photo-1573868396123-ef72a7f7b94f?w=600&h=400&fit=crop',
]

interface IGallerySectionProps {
  imagensURL?: string[]
}

export function GallerySection({ imagensURL }: IGallerySectionProps) {
  return (
    <section className="section-padding bg-background">
      <div className="container-lumia">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {(imagensURL || imagem).map((image, index) => (
            <div
              data-isCover={index === 0}
              key={index}
              className="relative rounded-2xl border-2 overflow-hidden shadow-soft data-[isCover=true]:md:col-span-2 data-[isCover=true]:md:row-span-2"
              style={{ minHeight: '200px' }} // or use h-48, aspect-video, etc.
            >
              <Image
                src={image}
                alt={`Image ${index}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
