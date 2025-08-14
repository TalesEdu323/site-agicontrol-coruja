import { useRef } from "react";
import { useAdvancedScrollAnimations } from "@/hooks/use-advanced-scroll";

export default function About() {
  const heroRef = useRef<HTMLElement>(null);
  const foundersRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  
  useAdvancedScrollAnimations([heroRef, foundersRef, valuesRef]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 hero-gradient text-white" data-testid="about-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-white" data-testid="text-about-title">
              A Origem do Coruja App
            </h1>
            <div className="section-divider bg-red-500 mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto opacity-90 text-white" data-testid="text-about-subtitle">
              Inspirados pela necessidade de proteger suas próprias famílias, Wililian e Carlos criaram uma solução que combina tecnologia avançada com cuidado humano.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section ref={foundersRef} className="py-20 bg-white" data-testid="founders-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Wililian */}
            <div className="text-center" data-testid="founder-wililian">
              <div className="w-48 h-48 rounded-full mx-auto mb-6 flex items-center justify-center bg-red-500 border-4 border-red-500 shadow-xl">
                <i className="fas fa-user text-white text-6xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2" data-testid="text-wililian-name">Wililian Silva</h3>
              <p className="text-red-500 font-medium mb-4" data-testid="text-wililian-role">Co-fundador & CTO</p>
              <p className="text-gray-700 leading-relaxed" data-testid="text-wililian-bio">
                Especialista em segurança cibernética com mais de 15 anos de experiência. Pai de dois filhos, criou o Coruja App para proteger sua própria família no mundo digital.
              </p>
            </div>
            
            {/* Carlos */}
            <div className="text-center" data-testid="founder-carlos">
              <div className="w-48 h-48 rounded-full mx-auto mb-6 flex items-center justify-center bg-red-500 border-4 border-red-500 shadow-xl">
                <i className="fas fa-user text-white text-6xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2" data-testid="text-carlos-name">Carlos Mendes</h3>
              <p className="text-red-500 font-medium mb-4" data-testid="text-carlos-role">Co-fundador & CEO</p>
              <p className="text-gray-700 leading-relaxed" data-testid="text-carlos-bio">
                Empreendedor serial e especialista em produtos digitais. Acredita que a tecnologia deve servir às famílias, não controlá-las. Lidera a visão estratégica da AGICONTROL.
              </p>
            </div>
          </div>
          
          {/* Company Story */}
          <div className="bg-blue-50 rounded-2xl p-8 mb-16" data-testid="company-story">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 text-blue-900" data-testid="text-story-title">Nossa História</h3>
              <div className="section-divider"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed mb-6 text-gray-800" data-testid="text-story-p1">
                A AGICONTROL nasceu da experiência pessoal de dois pais preocupados com a segurança digital de suas famílias. Wililian e Carlos perceberam que as soluções existentes eram ou muito complexas ou muito limitadas.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700" data-testid="text-story-p2">
                O Coruja App simboliza a vigilância protetora de uma coruja - sempre alerta, mas nunca intrusiva. 
                Combinamos a tecnologia de ponta em segurança cibernética com a intuição parental, criando uma solução 
                que protege sem limitar o crescimento digital das crianças.
              </p>
              <p className="text-lg leading-relaxed text-gray-700" data-testid="text-story-p3">
                Hoje, protegemos mais de 10.000 famílias em todo o Brasil, mantendo nossa promessa de segurança inteligente 
                e controle com cuidado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section ref={valuesRef} className="py-20 bg-gray-50" data-testid="values-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="value-mission">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-bullseye text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900" data-testid="text-mission-title">Missão</h3>
              <p className="text-gray-700 leading-relaxed" data-testid="text-mission-description">
                Proteger o bem-estar digital de crianças, adolescentes e idosos com tecnologia avançada e interface intuitiva.
              </p>
            </div>
            
            <div className="text-center" data-testid="value-vision">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-eye text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900" data-testid="text-vision-title">Visão</h3>
              <p className="text-gray-700 leading-relaxed" data-testid="text-vision-description">
                Ser líder em controle parental inteligente, promovendo um ambiente digital seguro e saudável para todas as famílias.
              </p>
            </div>
            
            <div className="text-center" data-testid="value-values">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-heart text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900" data-testid="text-values-title">Valores</h3>
              <p className="text-gray-700 leading-relaxed" data-testid="text-values-description">
                Segurança, inovação, empatia e transparência guiam cada decisão que tomamos no desenvolvimento de nossos produtos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
