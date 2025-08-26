import { useRef } from "react";
import TimeSlider from "@/components/ui/time-slider";
import CategoryGallery from "@/components/ui/category-gallery";
import UsageChart from "@/components/ui/usage-chart";
import ComparisonTable from "@/components/ui/comparison-table";
import { useAdvancedScrollAnimations } from "@/hooks/use-advanced-scroll";

export default function Features() {
  const ipsRef = useRef<HTMLElement>(null);
  const parentalRef = useRef<HTMLElement>(null);
  const comparisonRef = useRef<HTMLElement>(null);
  
  useAdvancedScrollAnimations([ipsRef, parentalRef, comparisonRef]);

  return (
    <div className="pt-20">
      {/* IPS Section */}
      <section ref={ipsRef} className="py-20 bg-white" data-testid="ips-section">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8" data-animate>
              <div data-animate>
                <h2 className="text-4xl font-bold text-blue-900 mb-4" data-testid="text-ips-title">
                  Sistema IPS de Última Geração
                </h2>
                <div className="section-divider mb-6" data-animate></div>
                <p className="text-xl text-gray-800 leading-relaxed" data-testid="text-ips-description">
                  Nossa tecnologia de Prevenção de Intrusão (IPS) monitora e bloqueia ameaças em tempo real, protegendo todos os dispositivos da sua família contra malware, phishing e ataques cibernéticos.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6" data-animate>
                <div className="bg-gray-50 p-6 rounded-xl card-hover" data-testid="card-intelligent-blocking" data-card data-magnetic>
                  <h4 className="font-bold text-blue-900 mb-2">Bloqueio Inteligente</h4>
                  <p className="text-sm text-gray-700">IA avançada identifica e bloqueia ameaças desconhecidas</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl card-hover" data-testid="card-247-protection" data-card data-magnetic>
                  <h4 className="font-bold text-blue-900 mb-2">Proteção 24/7</h4>
                  <p className="text-sm text-gray-700">Monitoramento contínuo sem impacto na performance</p>
                </div>
              </div>
              
              <button 
                className="bg-blue-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 transition-all duration-200"
                data-testid="button-ips-demo"
                data-magnetic
                data-cursor="button"
                data-animate
              >
                <i className="fas fa-play mr-2"></i>
                Ver IPS em Ação
              </button>
            </div>
            
            {/* 3D Shield Visualization */}
            <div className="flex justify-center">
              <div className="relative">
                <div 
                  className="w-72 h-72 bg-gradient-to-br from-blue-900 to-blue-600 rounded-full flex items-center justify-center shadow-2xl transform hover:rotate-3 transition-transform duration-500"
                  data-testid="shield-3d"
                >
                  <i className="fas fa-shield-alt text-white text-6xl"></i>
                </div>
                
                {/* Threat Particles being blocked */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 left-0 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                  <div className="absolute top-3/4 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Blocked Counter */}
                <div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm"
                  data-testid="blocked-counter"
                >
                  <span>1,247</span> Ameaças Bloqueadas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parental Control Section */}
      <section ref={parentalRef} className="py-20 bg-gray-50" data-testid="parental-section">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4" data-testid="text-parental-title">
              Controle Parental Dinâmico
            </h2>
            <div className="section-divider mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto" data-testid="text-parental-description">
              Monitore, controle e proteja seus filhos no mundo digital com ferramentas intuitivas e relatórios inteligentes.
            </p>
          </div>
          
          {/* Interactive Time Control Slider */}
          <TimeSlider />
          
          {/* Category Blocking Gallery */}
          <CategoryGallery />
          
          {/* Usage Statistics Chart */}
          <UsageChart />
        </div>
      </section>

      {/* Comparison Table */}
      <section ref={comparisonRef} className="py-20 bg-white" data-testid="comparison-section">
        <div className="container mx-auto px-8 lg:px-16">
          <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-testid="text-comparison-title">
            Compare com a Concorrência
          </h3>
          <ComparisonTable />
        </div>
      </section>
    </div>
  );
}
