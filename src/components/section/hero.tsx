"use client"

// import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { UnsplashCarouselImage } from "@/components/UnsplashCarouselImage";



const HeroSection = () => {
  const carouselRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollNext?.();
      }
    }, 5000); // 5 detik

    return () => clearInterval(interval);
  }, []);  



  return (
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white">
          <div className="absolute inset-0">
            <Carousel
                className="w-full h-full"
                opts={{ loop: true }}
                ref={carouselRef}
              >
                <CarouselContent className="h-full">
                  <CarouselItem className="h-full">
                    <div className="relative w-full h-172">
                      <UnsplashCarouselImage query="luxury bedroom" alt="luxury bedroom" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="h-full">
                    <div className="relative w-full h-172">
                      <UnsplashCarouselImage query="scenic view" alt="scenic view" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="h-full">
                    <div className="relative w-full h-172">
                      <UnsplashCarouselImage query="Executive Room" alt="Executive Room" />
                    </div>
                  </CarouselItem>  
                  <CarouselItem className="h-full">
                    <div className="relative w-full h-172">
                      <UnsplashCarouselImage query="Presidential Suite" alt="Presidential Suite" />
                    </div>
                  </CarouselItem>   
                  <CarouselItem className="h-full">
                    <div className="relative w-full h-172">
                      <UnsplashCarouselImage query="Penthouse Suite" alt="Penthouse Suite" />
                    </div>
                  </CarouselItem>                                                     
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 carousel-arrow" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 carousel-arrow" />
              </Carousel>
            {/* Tambahkan overlay transparan dengan warna foreground */}
            {/* <div className="absolute inset-0 bg-foreground/40" /> */}
          </div>

          <div className="relative z-10 text-center space-y-4 px-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold">Find Your Perfect Stay</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">Compare prices and book from our curated list of unique properties.</p>
          </div>
        </section>

  );
};

export default HeroSection;
