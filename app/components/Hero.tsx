'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Define Types
interface Slide {
  id: number;
  subtitle: string;
  image: string;
}

const slides: Slide[] = [
  { id: 1, subtitle: 'Welcome to Xadel IT Inc', image: 'https://xadelit.com/assets/img/slide/slide-1.jpg' },
  { id: 2, subtitle: 'High-quality Enterprise Solutions and Services', image: 'https://xadelit.com/assets/img/slide/slide-2.jpg' },
  { id: 3, subtitle: 'A cutting-edge IT Consulting Firm', image: 'https://xadelit.com/assets/img/slide/slide-3.jpg' },
];

export default function Hero() {
  // 2. Setup Embla with Autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false })
  ]);

  // 3. Memoized Navigation
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-900" ref={emblaRef}>
      {/* Slides Container */}
      <div className="flex h-full">
        {slides.map((slide) => (
          <div key={slide.id} className="relative flex-[0_0_100%] h-full min-w-0">
            {/* Optimized Next.js Image */}
            <Image src={slide.image}
  alt=""
  fill
  priority={slide.id === 1}
/>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

            {/* Content Container */}
            <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
     

                {/* Wing Section */}
                <div className="flex items-center justify-center gap-6 mb-12">

                  
                  <h4 className="text-xl sm:text-2xl md:text-4xl font-medium tracking-[0] whitespace-nowrap">
                    {slide.subtitle}
                  </h4>
   
                </div>

                {/* Professional Button */}

              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-20 pointer-events-none">
        <button
          onClick={scrollPrev}
          className="pointer-events-auto w-14 h-14 flex items-center justify-center text-white transition-all duration-300 group"
        >
          <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
        </button>

        <button
          onClick={scrollNext}
          className="pointer-events-auto w-14 h-14 flex items-center justify-center text-white transition-all duration-300 group"
        >
          <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Progress Indicators */}

    </section>
  );
}