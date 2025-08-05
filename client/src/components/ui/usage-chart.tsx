import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Chart: any;
  }
}

export default function UsageChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current || typeof window === 'undefined' || !window.Chart) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    const chart = new window.Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Jogos', 'Redes Sociais', 'Educativo', 'Streaming', 'Outros'],
        datasets: [{
          data: [30, 25, 15, 20, 10],
          backgroundColor: [
            '#E55056',
            '#1E3A8A',
            '#10B981',
            '#F59E0B',
            '#8B5CF6'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom' as const,
            labels: {
              padding: 20,
              usePointStyle: true
            }
          }
        }
      }
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="bg-gray-50 p-8 rounded-2xl" data-testid="usage-chart-container">
      <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center" data-testid="text-usage-title">
        Relatórios de Uso
      </h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-64" data-testid="chart-container">
          <canvas ref={chartRef} data-testid="usage-chart"></canvas>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl" data-testid="total-time-today">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-700">Tempo Total Hoje</span>
              <span className="text-xl font-bold text-blue-900">3h 45m</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-900 h-2 rounded-full" style={{width: '75%'}}></div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-xl" data-testid="most-used-apps">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-700">Apps Mais Usados</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between" data-testid="app-instagram">
                <span className="text-sm text-gray-700">Instagram</span>
                <span className="text-sm font-medium text-blue-900">1h 20m</span>
              </div>
              <div className="flex items-center justify-between" data-testid="app-youtube">
                <span className="text-sm text-gray-700">YouTube</span>
                <span className="text-sm font-medium text-blue-900">1h 05m</span>
              </div>
              <div className="flex items-center justify-between" data-testid="app-whatsapp">
                <span className="text-sm text-gray-700">WhatsApp</span>
                <span className="text-sm font-medium text-blue-900">45m</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-xl" data-testid="security-alerts">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-700">Alertas de Segurança</span>
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">3 Novos</span>
            </div>
            <p className="text-sm text-gray-700">Tentativa de acesso a site bloqueado detectada às 14:30</p>
          </div>
        </div>
      </div>
    </div>
  );
}
