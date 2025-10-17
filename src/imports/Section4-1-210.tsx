import imgSection4 from "figma:asset/59354e225dca95d3d4936cb80364c3d02691ec33.png";

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[722px]">
      <p className="font-['Rethink_Sans:Bold',_sans-serif] font-bold leading-[94px] min-w-full relative shrink-0 text-[78px] text-white w-[min-content]">Descomplique o Comércio Exterior e Acelere Seus Resultados</p>
      <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[49px] relative shrink-0 text-[32px] text-[rgba(255,255,255,0.71)] w-[681px]">Experiência comprovada, equipe qualificada e soluções personalizadas que simplificam suas operações de comércio exterior</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-end relative shrink-0">
      <div className="bg-[rgba(217,217,217,0)] shrink-0 size-[753.723px]" data-name="Rectangle" />
      <Frame6 />
    </div>
  );
}

export default function Section4() {
  return (
    <div className="relative size-full" data-name="section_4">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSection4} />
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-end justify-center px-[101px] py-[112px] relative size-full">
          <Frame66 />
        </div>
      </div>
    </div>
  );
}