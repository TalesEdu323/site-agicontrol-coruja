import { useRef } from "react";
import TimeSlider from "@/components/ui/time-slider";
import CategoryGallery from "@/components/ui/category-gallery";
import UsageChart from "@/components/ui/usage-chart";
import ComparisonTable from "@/components/ui/comparison-table";
import { useAdvancedScrollAnimations } from "@/hooks/use-advanced-scroll";

export default function Features() {
  const protecaoTotalRef = useRef<HTMLElement>(null);
  const parentalRef = useRef<HTMLElement>(null);
  const comparisonRef = useRef<HTMLElement>(null);
  
  useAdvancedScrollAnimations([protecaoTotalRef, parentalRef, comparisonRef]);

  return (
  <div className="pt-[80px]">
  {/* Hero Section */}
  <section className="py-12 mt-4 bg-white" data-testid="features-hero">
  <div className="container mx-auto px-8 lg:px-16">
    <div className="text-center mb-12">
      <h1 className="text-3xl font-semibold mb-6" data-testid="text-features-title">
              Controle Parental Dinâmico
      </h1>
      <div className="section-divider bg-red-500 mb-6"></div>
      <p className="text-base max-w-2xl mx-auto text-gray-700">
              Monitore, controle e proteja seus filhos no mundo digital com ferramentas intuitivas e relatórios inteligentes.
      </p>
    </div>
  </div>
</section>

  {/* Proteção Total Section */}
  

      {/* Parental Control Section */}
  <section ref={parentalRef} className="py-[22px] bg-gray-50" data-testid="parental-section">
  <div className="container mx-auto px-6 md:px-12 lg:px-24">
         
          
          {/* Interactive Time Control Slider */}
          <TimeSlider />
          
          {/* Category Blocking Gallery */}
          <CategoryGallery />
          
          {/* Usage Statistics Chart */}
          <UsageChart />
        </div>
      </section>

      {/* Comparison Table */}
  <section ref={comparisonRef} className="py-[22px] bg-white" data-testid="comparison-section">
  <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h3 className="text-xl font-medium text-gray-700 mb-6 text-center" data-testid="text-comparison-title">
            Compare com a Concorrência
          </h3>
          <ComparisonTable />
        </div>
      </section>
    </div>
  );
}
