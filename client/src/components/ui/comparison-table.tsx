interface ComparisonFeature {
  name: string;
  coruja: boolean;
  googleFamily: boolean;
  bark: boolean;
  mspy: boolean;
}

const features: ComparisonFeature[] = [
  {
  name: 'Proteção Total Integrada',
    coruja: true,
    googleFamily: false,
    bark: false,
    mspy: false,
  },
  {
    name: 'Monitoramento em Tempo Real',
    coruja: true,
    googleFamily: true,
    bark: true,
    mspy: true,
  },
  {
    name: 'Controle Personalizado',
    coruja: true,
    googleFamily: false,
    bark: true,
    mspy: true,
  },
  {
    name: 'VPN Integrada',
    coruja: true,
    googleFamily: false,
    bark: false,
    mspy: false,
  },
];

const pricing = {
  coruja: 'R$ 9,90',
  googleFamily: 'Grátis',
  bark: 'R$ 49,90',
  mspy: 'R$ 89,90',
};

export default function ComparisonTable() {
  const renderIcon = (hasFeature: boolean) => {
    if (hasFeature) {
      return <i className="fas fa-check text-green-500 text-xl" data-testid="icon-check"></i>;
    }
    return <i className="fas fa-times text-red-500 text-xl" data-testid="icon-times"></i>;
  };

  return (
    <div className="overflow-x-auto" data-testid="comparison-table">
      <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="px-6 py-4 text-left font-bold" data-testid="header-features">Funcionalidades</th>
            <th className="px-6 py-4 text-center font-bold" data-testid="header-coruja">Coruja App</th>
            <th className="px-6 py-4 text-center font-bold" data-testid="header-google">Google Family Link</th>
            <th className="px-6 py-4 text-center font-bold" data-testid="header-bark">Bark</th>
            <th className="px-6 py-4 text-center font-bold" data-testid="header-mspy">mSpy</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {features.map((feature, index) => (
            <tr 
              key={index}
              className="hover:bg-gray-50 transition-colors duration-200"
              data-testid={`row-feature-${index}`}
            >
              <td className="px-6 py-4 font-medium text-gray-700" data-testid={`feature-name-${index}`}>
                {feature.name}
              </td>
              <td className="px-6 py-4 text-center" data-testid={`coruja-${index}`}>
                {renderIcon(feature.coruja)}
              </td>
              <td className="px-6 py-4 text-center" data-testid={`google-${index}`}>
                {renderIcon(feature.googleFamily)}
              </td>
              <td className="px-6 py-4 text-center" data-testid={`bark-${index}`}>
                {renderIcon(feature.bark)}
              </td>
              <td className="px-6 py-4 text-center" data-testid={`mspy-${index}`}>
                {renderIcon(feature.mspy)}
              </td>
            </tr>
          ))}
          
          {/* Pricing Row */}
          <tr className="hover:bg-gray-50 transition-colors duration-200 bg-blue-50" data-testid="row-pricing">
            <td className="px-6 py-4 font-medium text-gray-700" data-testid="pricing-label">
              Preço Mensal
            </td>
            <td className="px-6 py-4 text-center font-bold text-blue-900" data-testid="price-coruja">
              {pricing.coruja}
            </td>
            <td className="px-6 py-4 text-center text-gray-700" data-testid="price-google">
              {pricing.googleFamily}
            </td>
            <td className="px-6 py-4 text-center text-gray-700" data-testid="price-bark">
              {pricing.bark}
            </td>
            <td className="px-6 py-4 text-center text-gray-700" data-testid="price-mspy">
              {pricing.mspy}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
