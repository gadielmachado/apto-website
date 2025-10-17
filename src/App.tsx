import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import svgPaths from "./imports/svg-0svwvravrl";
import imgFrame221 from "figma:asset/c2dc9a404448495f366a7d9649601e2011991876.png";
import imgAndyLiCpsTauPoScwUnsplash1 from "figma:asset/b60f0a476c8ac2e1488b1312872c6fc9bf25a958.png";
import imgGlobalLogisticsTransportationNetwork1 from "figma:asset/32083402ba9c0c1ed716ac9341b51169534b4c49.png";
import imgVentiViews1CqIcrWfqbiUnsplash1 from "figma:asset/8693c59076fd0dba1682b76a0c57a8be189c80a1.png";
import imgImage12 from "figma:asset/a1aa316f5fbfed9e39b5d5e77431df23f1d79fdb.png";
import imgImage1 from "figma:asset/f6e384c92af9e4f9305802386b9a8317f934bccb.png";
import imgFrame63 from "figma:asset/b5bf246af5dea4dd1b5f46decbdceac9991745cb.png";
import imgSection4 from "figma:asset/59354e225dca95d3d4936cb80364c3d02691ec33.png";
import imgCargoShip from "figma:asset/fe93bf6ee26ef606774cd42868d45a8be4551098.png";

function Logo() {
  return (
    <div className="relative h-[36px] w-[140px] sm:h-[36px] sm:w-[180px] lg:w-[223px] flex items-center">
      <svg className="w-full h-auto max-h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 224 37">
        <g>
          <path d={svgPaths.p244c86f0} fill="white" />
          <path d={svgPaths.p19da100} fill="white" />
          <path d={svgPaths.p388e7700} fill="white" />
          <path d={svgPaths.p62c5900} fill="white" />
        </g>
      </svg>
    </div>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="flex items-center justify-between py-8 lg:py-10">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 lg:gap-12 font-['Fustat',sans-serif]">
          <a href="#quem-somos" className="text-white hover:text-white/80 transition-colors">
            Quem Somos
          </a>
          <a href="#servicos" className="text-white hover:text-white/80 transition-colors">
            Serviços
          </a>
          <a href="#contato" className="text-white hover:text-white/80 transition-colors">
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden pb-6 flex flex-col gap-4 font-['Fustat',sans-serif]">
          <a
            href="#quem-somos"
            className="text-white hover:text-white/80 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Quem Somos
          </a>
          <a
            href="#servicos"
            className="text-white hover:text-white/80 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Serviços
          </a>
          <a
            href="#contato"
            className="text-white hover:text-white/80 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Fale Conosco
          </a>
        </nav>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="bg-[#1d2783] w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pb-8 lg:pb-16">
          {/* Left Content */}
          <div className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="bg-[#caceff] rounded-full px-4 py-2 inline-flex items-center justify-center w-fit">
              <p className="font-['Fustat',sans-serif] text-[#2634cd66] text-sm lg:text-base">
                O Maior terminal portuário do Brasil
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-['Rethink_Sans',sans-serif]">
              Sua parceira estratégica em comércio exterior
            </h1>

            {/* Description */}
            <p className="text-white/90 text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-relaxed font-['Fustat',sans-serif] max-w-2xl">
              Soluções estratégicas em comércio exterior e benefícios fiscais para quem deseja navegar além das fronteiras e crescer com solidez.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 items-center sm:items-start">
              <button 
                className="bg-white text-black px-10 sm:px-12 lg:px-16 py-4 lg:py-6 font-['Fustat',sans-serif] text-base sm:text-lg lg:text-2xl hover:bg-white/90 transition-colors w-full sm:w-auto" 
                style={{borderRadius: '8px'}}
              >
                Fale Conosco
              </button>
              <button 
                className="bg-white/14 text-white px-10 sm:px-12 lg:px-16 py-4 lg:py-6 font-['Fustat',sans-serif] text-base sm:text-lg lg:text-2xl hover:bg-white/20 transition-colors w-full sm:w-auto" 
                style={{borderRadius: '8px'}}
              >
                Saiba mais
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative h-[350px] sm:h-[450px] lg:h-[600px] xl:h-[774px] flex items-center justify-center">
            <div className="w-full h-full overflow-hidden rounded-2xl lg:rounded-3xl flex items-center justify-center bg-[#1d2783]">
              <img
                alt="Terminal portuário com containers"
                className="w-full h-full object-contain"
                src={imgFrame221}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="quem-somos" className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="bg-[#caceff] rounded-full px-4 py-2 inline-flex items-center justify-center w-fit">
              <p className="font-['Fustat',sans-serif] text-[#2634cd66] text-sm lg:text-base">
                Sobre Nós
              </p>
            </div>

            <h2 className="text-[#292929] text-3xl sm:text-4xl lg:text-5xl font-bold font-['Rethink_Sans',sans-serif]">
              Conheça a APTO Comex
            </h2>

            <p className="text-[#494949] text-base sm:text-lg lg:text-xl leading-relaxed font-['Fustat',sans-serif]">
              A APTO COMEX é uma empresa especializada em comércio exterior, despacho aduaneiro e soluções logísticas integradas. Como um braço estratégico da Five Oceans, atuamos como facilitadores de operações internacionais, assegurando agilidade, segurança e conformidade legal em cada processo.
            </p>

            <button className="border border-black rounded-full px-8 py-4 text-black font-['Fustat',sans-serif] text-lg hover:bg-black hover:text-white transition-colors w-fit">
              Saiba mais
            </button>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] lg:h-[600px] xl:h-[734px] rounded-3xl overflow-hidden">
            <img
              alt="Porto com containers"
              className="w-full h-full object-cover"
              src={imgAndyLiCpsTauPoScwUnsplash1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  number,
  title,
  description,
  image,
  imageStyle,
}: {
  number: string;
  title: string;
  description: string;
  image: string;
  imageStyle?: string;
}) {
  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      <div className="relative h-[300px] lg:h-[400px] xl:h-[478px] rounded-2xl overflow-hidden">
        <img
          alt={title}
          className={`w-full h-full object-cover ${imageStyle || ""}`}
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
        <p className="absolute bottom-6 left-6 text-white text-5xl lg:text-6xl font-['Fustat',sans-serif]">
          {number}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-[#292929] text-2xl sm:text-3xl lg:text-4xl font-bold font-['Rethink_Sans',sans-serif] leading-tight">
          {title}
        </h3>
        <p className="text-[#494949] text-lg sm:text-xl lg:text-2xl leading-relaxed font-['Fustat',sans-serif]">
          {description}
        </p>
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <section id="servicos" className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <h2 className="text-[#292929] text-3xl sm:text-4xl lg:text-5xl font-bold font-['Rethink_Sans',sans-serif] mb-8 lg:mb-16">
          Nossos Serviços
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <ServiceCard
            number="01"
            title="Processos de Importação"
            description="Traga seus produtos para o Brasil com segurança e agilidade"
            image={imgGlobalLogisticsTransportationNetwork1}
          />
          <ServiceCard
            number="02"
            title="Processos de Exportação"
            description="Leve seus produtos para o mundo com eficiência e conformidade"
            image={imgCargoShip}
          />
          <ServiceCard
            number="03"
            title="Consultoria e Assessoria Aduaneira"
            description="Otimize custos e garanta compliance com expertise especializada"
            image={imgAndyLiCpsTauPoScwUnsplash1}
          />
          <ServiceCard
            number="04"
            title="Regimes Aduaneiros Especiais"
            description="Maximize benefícios fiscais com regimes diferenciados e estratégicos"
            image={imgImage1}
          />
        </div>
      </div>
    </section>
  );
}

function CtaSection1() {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[700px] xl:h-[780px]">
      <img
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={imgSection4}
      />
      
      <div className="relative h-full flex flex-col items-end justify-center px-6 sm:px-12 lg:px-20 xl:px-[101px] py-12 sm:py-16 lg:py-24 xl:py-[112px]">
        <div className="max-w-[722px] flex flex-col gap-6 lg:gap-8">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-[78px] xl:leading-[94px] font-bold leading-tight font-['Rethink_Sans',sans-serif]">
            Descomplique o Comércio Exterior e Acelere Seus Resultados
          </h2>
          <p className="text-[rgba(255,255,255,0.71)] text-lg sm:text-xl lg:text-2xl xl:text-[32px] xl:leading-[49px] leading-relaxed font-['Fustat',sans-serif] max-w-[681px]">
            Experiência comprovada, equipe qualificada e soluções personalizadas que simplificam suas operações de comércio exterior
          </p>
        </div>
      </div>
    </section>
  );
}

function CtaSection2() {
  return (
    <section id="contato" className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="bg-[#1d2783] rounded-3xl lg:rounded-[37px] px-6 sm:px-12 lg:px-20 py-12 sm:py-16 lg:py-24 flex items-center justify-center">
          <div className="max-w-2xl flex flex-col items-center gap-6 lg:gap-10 text-center">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold font-['Rethink_Sans',sans-serif]">
              Fale Conosco Agora
            </h2>
            <p className="text-white/76 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed font-['Fustat',sans-serif]">
              Suporte 24h para suas operações globais. Resposta imediata e soluções personalizadas para garantir o sucesso da sua carga.
            </p>
            <button className="border border-white rounded-full px-8 lg:px-16 py-4 lg:py-6 text-white font-['Fustat',sans-serif] text-lg lg:text-xl hover:bg-white hover:text-[#1d2783] transition-colors">
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#f4f4f4] py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <p className="text-black/70 text-center text-sm sm:text-base lg:text-xl font-['Fustat',sans-serif]">
          Copyright © 2025 Apto Comex. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-[#f4f4f4] min-h-screen w-full font-['Fustat',sans-serif]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CtaSection1 />
      <CtaSection2 />
      <Footer />
    </div>
  );
}
