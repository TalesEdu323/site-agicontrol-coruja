import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Owl3D from "@/components/ui/owl-3d";
import AdvancedParticles from "@/components/ui/advanced-particles";
import { useAdvancedScrollAnimations } from "@/hooks/use-advanced-scroll";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const recognitionRef = useRef<HTMLElement>(null);
  const downloadRef = useRef<HTMLElement>(null);
  
  useAdvancedScrollAnimations([heroRef, featuresRef, recognitionRef, downloadRef]);

  return (
    <div>
      {/* Hero Section */}
      <section 
        ref={heroRef}
  className="min-h-screen hero-gradient text-white relative overflow-hidden flex items-center pt-20"
        data-testid="hero-section"
        data-hero
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-red-500/10"></div>
        <AdvancedParticles 
          count={30}
          colors={['#E55056', '#1E3A8A', '#FFFFFF']}
          interactive={true}
          intensity="low"
          style="floating"
        />
        
        {/* Premium Floating Elements */}
        <div className="absolute top-20 left-10 floating-animation">
          <div className="w-3 h-3 bg-red-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 floating-animation" style={{animationDelay: '1s'}}>
          <div className="w-2 h-2 bg-blue-400 rounded-full opacity-70"></div>
        </div>
        <div className="absolute bottom-40 left-20 floating-animation" style={{animationDelay: '2s'}}>
          <div className="w-4 h-4 bg-purple-400 rounded-full opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-8 lg:px-16 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-white space-y-8 slide-in-bottom" data-animate>
              <div className="space-y-4" data-animate>
                <span className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-4" data-testid="text-brand">
                  SEGURANÇA DIGITAL PARA TODOS
                </span>
                <h1 className="text-5xl lg:text-8xl font-extrabold leading-tight" data-testid="text-hero-title">
                  Coruja App
                </h1>
                <div className="section-divider mb-8" data-animate></div>
              </div>
              
              <p className="text-xl lg:text-2xl font-medium text-white leading-relaxed text-center" data-testid="text-hero-subtitle">
                Segurança corporativa de alto nível com o cuidado inteligente que sua família merece. A união perfeita entre <span className="text-red-400 font-bold">proteção total</span> e <span className="text-white font-bold">controle inteligente</span>.
              </p>
              
              {/* Premium Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="p-4 rounded-xl text-center border border-white/10 shadow-sm bg-white/5">
                  <div className="text-lg font-bold text-green-400">ISO 27001</div>
                  <div className="text-xs text-blue-200 opacity-80">Certificado</div>
                </div>
                <div className="p-4 rounded-xl text-center border border-white/10 shadow-sm bg-white/5">
                  <div className="text-lg font-bold text-yellow-400">4.9★</div>
                  <div className="text-xs text-blue-200 opacity-80">App Rating</div>
                </div>
                <div className="p-4 rounded-xl text-center border border-white/10 shadow-sm bg-white/5">
                  <div className="text-lg font-bold text-blue-400">50K+</div>
                  <div className="text-xs text-blue-200 opacity-80">Famílias</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4" data-animate>
                <Link href="#download">
                  <button 
                    className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-200 shadow-md"
                    data-testid="button-download"
                    data-magnetic
                    data-cursor="button"
                  >
                    <span>
                      <i className="fas fa-download mr-3"></i>
                      Baixe Agora - Grátis
                    </span>
                  </button>
                </Link>
                <Link href="/demo">
                  <button 
                    className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-200 shadow-md"
                    data-testid="button-demo"
                    data-magnetic
                    data-cursor="button"
                  >
                    <i className="fas fa-play mr-3"></i>
                    Demo Interativa
                  </button>
                </Link>
              </div>
              
              {/* Enterprise Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-8 text-sm opacity-80">
                <div className="flex items-center space-x-2" data-testid="trust-secure">
                  <i className="fas fa-shield-alt text-green-400"></i>
                  <span>AES-256 Encryption</span>
                </div>
                <div className="flex items-center space-x-2" data-testid="trust-compliance">
                  <i className="fas fa-lock text-blue-400"></i>
                  <span>LGPD Compliant</span>
                </div>
                <div className="flex items-center space-x-2" data-testid="trust-partner">
                  <i className="fas fa-award text-yellow-400"></i>
                  <span>Google Partner</span>
                </div>
              </div>
            </div>
            
            {/* 3D Owl Container */}
            <div className="owl-container flex justify-center items-center relative" data-animate data-parallax="0.1">
              <div className="floating-animation" data-magnetic>
                <Owl3D />
              </div>
              {/* Ambient glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent rounded-full" data-parallax="0.05"></div>
            </div>
          </div>
        </div>
        
        {/* Premium Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce opacity-70" data-testid="scroll-indicator">
          <div className="flex flex-col items-center space-y-2 glass-effect p-3 rounded-full">
            <span className="text-xs text-blue-300 uppercase tracking-wide"></span>
            <span className="text-xs text-blue-300 uppercase tracking-wide"></span>
            <i className="fas fa-chevron-down text-xl"></i>
          </div>
        </div>
      </section>

      {/* Demo Banner */}
      <section className="py-8 bg-red-500 text-white" data-testid="demo-banner">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4">
              <i className="fas fa-magic text-2xl"></i>
              <span className="text-lg font-medium">
                Experimente nossa Demo Interativa e veja o controle parental em ação!
              </span>
              <Link href="/demo">
                <button className="bg-white text-red-500 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300">
                  Testar Agora
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Excellence Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden" data-testid="technology-section">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="text-center mb-16">
            <span className="text-red-400 font-semibold text-lg mb-4 block">TECNOLOGIA ENTERPRISE</span>
            <h2 className="text-5xl font-bold mb-6 text-center" data-testid="text-tech-title">
              Segurança Avançada para Cuidar da Sua Família Online
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-400 mx-auto mb-8"></div>
            <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed text-center" data-testid="text-tech-subtitle">
              Segurança Avançada transformada em Controle Parental Inteligente
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 card-hover" data-testid="tech-protecao-total">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-2xl">
                <i className="fas fa-shield-virus text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Proteção Total</h3>
              <p className="text-white/80 text-center leading-relaxed mb-6">
                Sistema de Prevenção de Intrusão com algoritmos utilizados em ambientes estratégicos de alta segurança
              </p>
              <div className="text-center">
                <span className="bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium border border-red-500/30">
                  99.9% Eficácia
                </span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 card-hover" data-testid="tech-ai">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-2xl">
                <i className="fas fa-brain text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">IA Comportamental</h3>
              <p className="text-white/80 text-center leading-relaxed mb-6">
                Inteligência artificial que aprende os padrões da sua família e detecta atividades suspeitas automaticamente. Guiada por profissionais da saúde mental
              </p>
              <div className="text-center">
                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30">
                  Machine Learning
                </span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 card-hover" data-testid="tech-cloud">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-2xl">
                <i className="fas fa-cloud text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Cloud Híbrida</h3>
              <p className="text-white/80 text-center leading-relaxed mb-6">
                Infraestrutura híbrida com processamento local e na nuvem para máxima velocidade e privacidade
              </p>
              <div className="text-center">
                <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30">
                  Ultra Rápido
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section ref={recognitionRef} className="py-20 bg-white" data-testid="recognition-section">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Reconhecimento da Indústria</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Líderes em inovação reconhecem nossa excelência em segurança digital familiar
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gray-50 rounded-2xl card-hover" data-testid="award-cybersec" data-card data-animate>
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4" data-magnetic>
                <i className="fas fa-trophy text-white text-2xl"></i>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Prêmio CyberSec 2024</h4>
              <p className="text-sm text-gray-600">Melhor Solução de Controle Parental</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-2xl card-hover" data-testid="award-privacy" data-card data-animate>
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4" data-magnetic>
                <i className="fas fa-user-shield text-white text-2xl"></i>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Certificação Privacy+</h4>
              <p className="text-sm text-gray-600">Máxima proteção de dados familiares</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-2xl card-hover" data-testid="award-innovation" data-card data-animate>
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4" data-magnetic>
                <i className="fas fa-lightbulb text-white text-2xl"></i>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Innovation Award</h4>
              <p className="text-sm text-gray-600">Tecnologia mais inovadora do ano</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-2xl card-hover" data-testid="award-family" data-card data-animate>
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4" data-magnetic>
                <i className="fas fa-heart text-white text-2xl"></i>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Family Choice</h4>
              <p className="text-sm text-gray-600">Escolha #1 das famílias brasileiras</p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="bg-gradient-to-r from-blue-900 to-red-500 rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div data-testid="stat-families">
                <div className="text-4xl font-bold mb-2">50,000+</div>
                <div className="text-blue-100">Famílias Protegidas</div>
              </div>
              <div data-testid="stat-threats">
                <div className="text-4xl font-bold mb-2">2.5M+</div>
                <div className="text-blue-100">Ameaças Bloqueadas</div>
              </div>
              <div data-testid="stat-uptime">
                <div className="text-4xl font-bold mb-2">99.99%</div>
                <div className="text-blue-100">Uptime Garantido</div>
              </div>
              <div data-testid="stat-support">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Suporte Especializado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section 
        ref={featuresRef}
        className="py-20 bg-gray-50"
        data-testid="features-preview"
      >
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-red-500 font-semibold text-lg mb-4 block">FUNCIONALIDADES PREMIUM</span>
            <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center" data-testid="text-features-title">
              Proteção para seus aparelhos, Segurança para sua família
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center" data-testid="text-features-subtitle">
              Combine a segurança avançada do Proteção Total com o controle parental mais inteligente do mercado
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Proteção Total Feature */}
            <div className="group bg-white p-8 rounded-2xl shadow-xl border border-gray-100 card-hover relative overflow-hidden" data-testid="card-protecao-total">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-shield-alt text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Proteção Total Avançado</h3>
              <p className="text-gray-700 mb-6 text-center leading-relaxed">
                Bloqueio em tempo real de malware, rastreadores e conexões suspeitas com inteligência artificial de última geração
              </p>
              <div className="flex justify-center">
                <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                  Proteção 24/7/365
                </span>
              </div>
            </div>
            
            {/* Parental Control Feature */}
            <div className="group bg-white p-8 rounded-2xl shadow-xl border border-gray-100 card-hover relative overflow-hidden" data-testid="card-parental">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-users-cog text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Controle Parental IA</h3>
              <p className="text-gray-700 mb-6 text-center leading-relaxed">
                Monitore redes sociais, controle tempo de tela e receba relatórios detalhados com insights comportamentais
              </p>
              <div className="flex justify-center">
                <span className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                  Controle Inteligente
                </span>
              </div>
            </div>
            
            {/* Real-time Monitoring */}
            <div className="group bg-white p-8 rounded-2xl shadow-xl border border-gray-100 card-hover relative overflow-hidden md:col-span-2 lg:col-span-1" data-testid="card-monitoring">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-chart-line text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Analytics Avançados</h3>
              <p className="text-gray-700 mb-6 text-center leading-relaxed">
                Dashboards executivos, alertas instantâneos e insights comportamentais com machine learning
              </p>
              <div className="flex justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                  Insights Premium
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Comparison */}
      <section className="py-20 bg-white" data-testid="comparison-section">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Por Que Somos Únicos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Compare nossa solução enterprise com alternativas tradicionais de mercado
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <thead className="bg-gradient-to-r from-blue-900 to-red-500 text-white">
                <tr>
                  <th className="px-8 py-6 text-left font-bold text-lg">Funcionalidade</th>
                  <th className="px-8 py-6 text-center font-bold text-lg">Coruja App</th>
                  <th className="px-8 py-6 text-center font-bold text-lg">Google Family</th>
                  <th className="px-8 py-6 text-center font-bold text-lg">Outros</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-blue-50 transition-colors duration-200">
                  <td className="px-8 py-6 font-semibold text-gray-900">Proteção Total Integrado</td>
                  <td className="px-8 py-6 text-center"><i className="fas fa-check-circle text-green-500 text-2xl"></i></td>
                  <td className="px-8 py-6 text-center"><i className="fas fa-times-circle text-red-500 text-2xl"></i></td>
                  <td className="px-8 py-6 text-center"><i className="fas fa-times-circle text-red-500 text-2xl"></i></td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors duration-200">
                  <td className="px-8 py-6 font-semibold text-gray-900">IA Comportamental</td>
                  <td className="px-8 py-6 text-center"><i className="fas fa-check-circle text-green-500 text-2xl"></i></td>
                  <td className="px-8 py-6 text-center"><i className="fas fa-minus-circle text-yellow-500 text-2xl"></i></td>
                  <td className="px-8 py-6 text-center"><i className="fas fa-times-circle text-red-500 text-2xl"></i></td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors duration-200">
                  <td className="px-8 py-6 font-semibold text-gray-900">VPN Empresarial</td>
                  <td className="px-8 py-6 text-center"><i className="fas fa-check-circle text-green-500 text-2xl"></i></td>
                  <td className="px-8 py-6 text-center"><i className="fas fa-times-circle text-red-500 text-2xl"></i></td>
                  <td className="px-8 py-6 text-center"><i className="fas fa-minus-circle text-yellow-500 text-2xl"></i></td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors duration-200 bg-green-50">
                  <td className="px-8 py-6 font-semibold text-gray-900">Preço Mensal</td>
                  <td className="px-8 py-6 text-center font-bold text-blue-900 text-xl">R$ 9,90</td>
                  <td className="px-8 py-6 text-center font-semibold text-gray-700">Grátis*</td>
                  <td className="px-8 py-6 text-center font-semibold text-gray-700">R$ 49-89</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-500 mt-4 text-center">* Recursos limitados, sem suporte técnico</p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="pt-24 pb-20 bg-white" data-testid="testimonials-section">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">O Que Nossos Clientes Dizem</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Mais de 50.000 famílias confiam no Coruja App para proteger seus entes queridos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl card-hover relative" data-testid="testimonial-1">
              <div className="absolute top-2 left-8">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-quote-left text-white text-sm"></i>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "O Coruja App transformou nossa relação com a tecnologia em casa. Agora tenho paz de espírito sabendo que meus filhos estão protegidos online."
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" 
                  alt="Cliente" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900">Marina Silva</p>
                  <p className="text-sm text-gray-600">Mãe de 2 filhos • São Paulo</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mt-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl card-hover relative" data-testid="testimonial-2">
              <div className="absolute top-2 left-8">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-quote-left text-white text-sm"></i>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Como especialista em TI, posso afirmar que o Coruja App tem a melhor tecnologia de segurança que já vi em uma solução familiar."
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" 
                  alt="Cliente" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900">Carlos Mendonça</p>
                  <p className="text-sm text-gray-600">Diretor de TI • Rio de Janeiro</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mt-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl card-hover relative" data-testid="testimonial-3">
              <div className="absolute top-2 left-8">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-quote-left text-white text-sm"></i>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Finalmente uma solução que me permite educar meus filhos sobre segurança digital sem ser invasiva. Recomendo para todos os pais."
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face" 
                  alt="Cliente" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900">Ana Rodrigues</p>
                  <p className="text-sm text-gray-600">Psicóloga • Belo Horizonte</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mt-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-8">Certificações e Parcerias de Confiança</p>
            <div className="flex flex-wrap justify-center items-center space-x-12 opacity-60">
              <div className="flex items-center space-x-2 mb-4">
                <i className="fas fa-shield-alt text-2xl text-blue-900"></i>
                <span className="font-semibold text-gray-700">ISO 27001</span>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <i className="fas fa-lock text-2xl text-green-600"></i>
                <span className="font-semibold text-gray-700">LGPD Compliant</span>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <i className="fas fa-award text-2xl text-yellow-500"></i>
                <span className="font-semibold text-gray-700">Google Partner</span>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <i className="fas fa-certificate text-2xl text-purple-600"></i>
                <span className="font-semibold text-gray-700">SOC 2 Type II</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download/CTA Section */}
  <section ref={downloadRef} className="py-20 hero-gradient text-white relative overflow-hidden" data-testid="download-section">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-red-500/30"></div>
        <AdvancedParticles 
          count={15}
          colors={['#E55056', '#FFFFFF']}
          interactive={false}
          intensity="low"
          style="floating"
        />
        <div className="container mx-auto px-8 lg:px-16 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6" data-testid="text-download-title">
              Proteja Sua Família Hoje
            </h2>
            <div className="section-divider bg-red-500 mb-8"></div>
            <p className="text-2xl mb-12 opacity-90" data-testid="text-download-subtitle">
              Baixe o Coruja App e tenha 10 dias grátis para experimentar nossa proteção completa.
            </p>
            
            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Basic Plan */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20" data-testid="card-basic">
                <h3 className="text-2xl font-bold mb-4">Plano Básico</h3>
                <div className="text-4xl font-bold mb-2">R$ 9,90</div>
                <div className="text-red-400 mb-6">por mês</div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center"><i className="fas fa-check text-green-400 mr-3"></i>Até 3 dispositivos</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-400 mr-3"></i>Proteção Total básico</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-400 mr-3"></i>Controle parental</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-400 mr-3"></i>Relatórios semanais</li>
                </ul>
                <button 
                  className="w-full bg-white text-blue-900 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300"
                  data-testid="button-basic-plan"
                >
                  Escolher Plano
                </button>
              </div>
              
              {/* Premium Plan (Popular) */}
              <div className="bg-red-500/20 backdrop-blur-sm p-8 rounded-2xl border-2 border-red-500 relative transform scale-105" data-testid="card-premium">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                  MAIS POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-4">Plano Premium</h3>
                <div className="text-4xl font-bold mb-2">R$ 24,90</div>
                <div className="text-red-400 mb-6">por mês</div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center"><i className="fas fa-check text-green-400 mr-3"></i>Dispositivos ilimitados</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-400 mr-3"></i>Proteção Total avançado</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-400 mr-3"></i>Controle total</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-400 mr-3"></i>VPN integrada</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-400 mr-3"></i>Relatórios em tempo real</li>
                </ul>
                <button 
                  className="w-full bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition-colors duration-300"
                  data-testid="button-premium-plan"
                >
                  Escolher Plano
                </button>
              </div>
              
              {/* Family Plan */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20" data-testid="card-family">
                <h3 className="text-2xl font-bold mb-4">Plano Família</h3>
                <div className="text-4xl font-bold mb-2">R$ 39,99</div>
                <div className="text-red-400 mb-6">por mês</div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center"><i className="fas fa-check text-green-400 mr-3"></i>Tudo do Premium</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-400 mr-3"></i>Até 10 perfis</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-400 mr-3"></i>Suporte prioritário</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-400 mr-3"></i>Configuração remota</li>
                </ul>
                <button 
                  className="w-full bg-white text-blue-900 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300"
                  data-testid="button-family-plan"
                >
                  Escolher Plano
                </button>
              </div>
            </div>
            
            {/* App Store Buttons */}
            <div className="flex justify-center space-x-6 mb-12">
              <a 
                href="#" 
                className="bg-black text-white px-8 py-4 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-colors duration-300"
                data-testid="link-google-play"
              >
                <i className="fab fa-google-play text-2xl"></i>
                <div className="text-left">
                  <div className="text-xs">Disponível no</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </a>
              <a 
                href="#" 
                className="bg-black text-white px-8 py-4 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-colors duration-300"
                data-testid="link-chrome-os"
              >
                <i className="fab fa-chrome text-2xl"></i>
                <div className="text-left">
                  <div className="text-xs">Disponível para</div>
                  <div className="text-lg font-bold">Chrome OS</div>
                </div>
              </a>
            </div>
            
            {/* Trial Info */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 max-w-2xl mx-auto" data-testid="trial-info">
              <h4 className="text-xl font-bold mb-2">🎉 Teste Grátis por 10 Dias</h4>
              <p className="opacity-90">
                Experimente todos os recursos premium sem compromisso. Cancele a qualquer momento durante o período de teste.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
