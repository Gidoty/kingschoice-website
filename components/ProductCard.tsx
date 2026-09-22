import Image from 'next/image';
import type { Product } from '@/lib/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md">
      <div className="relative aspect-square overflow-hidden bg-offwhite">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-ink">{product.name}</h3>
        <p className="mt-1 text-xs leading-relaxed text-ink/60">{product.description}</p>
      </div>
    </div>
  );
}
