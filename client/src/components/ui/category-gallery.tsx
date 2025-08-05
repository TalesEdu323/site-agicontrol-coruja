import { useState } from "react";

interface Category {
  id: string;
  name: string;
  icon: string;
  status: 'allowed' | 'limited' | 'blocked';
}

const initialCategories: Category[] = [
  { id: 'social', name: 'Redes Sociais', icon: 'fab fa-instagram', status: 'allowed' },
  { id: 'gaming', name: 'Jogos', icon: 'fas fa-gamepad', status: 'blocked' },
  { id: 'adult', name: 'Conteúdo Adulto', icon: 'fas fa-exclamation-triangle', status: 'blocked' },
  { id: 'shopping', name: 'Compras', icon: 'fas fa-shopping-cart', status: 'limited' },
  { id: 'streaming', name: 'Streaming', icon: 'fas fa-video', status: 'allowed' },
  { id: 'education', name: 'Educação', icon: 'fas fa-graduation-cap', status: 'allowed' },
];

export default function CategoryGallery() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);

  const getStatusColor = (status: Category['status']) => {
    switch (status) {
      case 'allowed': return 'bg-green-500';
      case 'limited': return 'bg-yellow-500';
      case 'blocked': return 'bg-red-500';
    }
  };

  const getStatusText = (status: Category['status']) => {
    switch (status) {
      case 'allowed': return 'Permitido';
      case 'limited': return 'Limitado';
      case 'blocked': return 'Bloqueado';
    }
  };

  const cycleStatus = (id: string) => {
    setCategories(prev => prev.map(category => {
      if (category.id === id) {
        const statuses: Category['status'][] = ['allowed', 'limited', 'blocked'];
        const currentIndex = statuses.indexOf(category.status);
        const nextIndex = (currentIndex + 1) % statuses.length;
        return { ...category, status: statuses[nextIndex] };
      }
      return category;
    }));
  };

  return (
    <div className="mb-12" data-testid="category-gallery">
      <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center" data-testid="text-category-title">
        Bloqueio por Categorias
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white p-6 rounded-xl text-center cursor-pointer hover:bg-gray-50 transition-all duration-300 border-2 border-transparent hover:border-red-500"
            onClick={() => cycleStatus(category.id)}
            data-testid={`category-${category.id}`}
          >
            <i className={`${category.icon} text-3xl text-blue-900 mb-3`}></i>
            <p className="font-medium text-gray-700 mb-2">{category.name}</p>
            <div className="flex flex-col items-center space-y-1">
              <div className={`w-6 h-6 ${getStatusColor(category.status)} rounded-full`}></div>
              <span className="text-xs text-gray-600">{getStatusText(category.status)}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-6" data-testid="category-legend">
        <p className="text-gray-700 text-sm">
          <span className="inline-flex items-center mr-4">
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>Permitido
          </span>
          <span className="inline-flex items-center mr-4">
            <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>Limitado
          </span>
          <span className="inline-flex items-center">
            <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>Bloqueado
          </span>
        </p>
        <p className="text-xs text-gray-500 mt-2">Clique nas categorias para alterar o status</p>
      </div>
    </div>
  );
}
