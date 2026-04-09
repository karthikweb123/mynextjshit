import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  imageSrc: string;
  href: string;
  description?: string;
}

export default function ServiceCard({ title, imageSrc, href, description }: ServiceCardProps) {
  return (
    <div className="group relative h-[450px] w-full overflow-hidden bg-neutral-900 shadow-lg">
      
      {/* 1. Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Subtle overlay to ensure text is readable even if image is bright */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
      </div>

      {/* 2. The Link Content Box */}
      <Link 
        href={href} 
        className="
          absolute bottom-0 z-10 
          w-[87%] 
          bg-[#F44336] 
          opacity-50 
          p-8 
          text-white 
          no-underline 
          transition-all 
          duration-300 
          ease-in-out
          hover:opacity-100 
        "
      >
        {/* Title */}
        <h3 className="mb-2 text-2xl font-bold uppercase tracking-tight">
          {title}
        </h3>
        
        {/* Description (Hidden/faded until hover or always visible) */}
        {description && (
          <p className="mb-6 text-sm leading-relaxed text-white/90 line-clamp-2">
            {description}
          </p>
        )}

        {/* Learn More Link UI */}
        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white">
          <span>Learn more</span>
          <ChevronRight 
            size={18} 
            className="transition-transform duration-300 group-hover:translate-x-2" 
          />
        </div>
      </Link>
    </div>
  );
}