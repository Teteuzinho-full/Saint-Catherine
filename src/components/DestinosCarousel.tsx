"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { destinos } from "@/data/destinos";
import { SectionHeading } from "./SectionHeading";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function DestinosCarousel() {
  return (
    <section id="destinos" className="relative py-28 bg-sc-blue overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,#D4AF37_1px,transparent_0)] [background-size:26px_26px]" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="A Coleção de Destinos"
          title="Dez lugares que definem Santa Catarina"
          description="Cada destino selecionado a dedo — um convite para colecionar experiências que ficam."
          light
        />
      </div>

      <div className="relative mt-16">
        <Swiper
          modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          spaceBetween={24}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 140,
            modifier: 2.2,
            slideShadows: false,
          }}
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="!pb-14 !px-6"
        >
          {destinos.map((d) => (
            <SwiperSlide key={d.id} className="!w-[280px] sm:!w-[340px]">
              <div className="group relative h-[420px] overflow-hidden rounded-sm border border-sc-gold/20 shadow-premium">
                <Image
                  src={d.imagem}
                  alt={`${d.nome} — ${d.cidade}, Santa Catarina`}
                  fill
                  sizes="(max-width: 640px) 280px, 340px"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sc-blue via-sc-blue/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs uppercase tracking-widest2 text-sc-gold">{d.cidade}</p>
                  <h3 className="mt-1 font-display text-2xl text-sc-offwhite">{d.nome}</h3>
                  <p className="mt-2 text-xs text-sc-offwhite/70 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 overflow-hidden">
                    {d.descricao}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
