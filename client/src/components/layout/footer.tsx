import { Link } from "wouter";
import OwlIcon from "../ui/owl-icon";

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-800 text-white" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4" data-testid="footer-company">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <OwlIcon size="md" className="text-white" />
              </div>
              <span className="font-bold text-xl">Projeto Coruja</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              AGICONTROL - Proteção inteligente para famílias conectadas. Segurança avançada com controle parental intuitivo.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                data-testid="footer-facebook"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                data-testid="footer-instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                data-testid="footer-twitter"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                data-testid="footer-linkedin"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div data-testid="footer-product">
            <h4 className="font-bold text-lg mb-4">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features">
                  <a className="text-gray-400 hover:text-red-400 transition-colors duration-300" data-testid="footer-features">
                    Funcionalidades
                  </a>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300" data-testid="footer-pricing">
                  Preços
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300" data-testid="footer-security">
                  Segurança
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300" data-testid="footer-updates">
                  Atualizações
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div data-testid="footer-support">
            <h4 className="font-bold text-lg mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-red-400 transition-colors duration-300" data-testid="footer-contact">
                    Contato
                  </a>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300" data-testid="footer-faq">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300" data-testid="footer-guides">
                  Guias
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300" data-testid="footer-status">
                  Status do Sistema
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div data-testid="footer-legal">
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300" data-testid="footer-terms">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300" data-testid="footer-privacy">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300" data-testid="footer-lgpd">
                  LGPD
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300" data-testid="footer-cookies">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400" data-testid="footer-copyright">
            © 2024 AGICONTROL - Projeto Coruja. Todos os direitos reservados. 
            <span className="ml-4">CNPJ: 00.000.000/0001-00</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
