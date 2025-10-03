"use client";

import { 
  Smartphone, 
  ShoppingCart, 
  Clock, 
  Shield, 
  Star,
  ChevronRight,
  Download,
  ExternalLink,
  MapPin,
  Users,
  Truck,
  Store,
  Pill,
  Coffee,
  ShoppingBag,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  CreditCard,
  Eye,
  Headphones,
  Zap,
  Menu,
  X,
  Play,
  TrendingUp,
  Building2,
  Award,
  CheckCircle,
  ArrowRight,
  Globe
} from "lucide-react";
import { useState } from "react";

export default function KimaakiLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header/Navigation - Estilo Premium Internacional */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
  <img src="/logo.svg" alt="Kimaaki Logo" className="h-10 w-auto" />
 
</div>

            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#sobre" className="text-gray-600 hover:text-[#00B488] transition-colors font-medium">Sobre</a>
              <a href="#como-funciona" className="text-gray-600 hover:text-[#00B488] transition-colors font-medium">Como Funciona</a>
              <a href="#categorias" className="text-gray-600 hover:text-[#00B488] transition-colors font-medium">Categorias</a>
              <a href="#beneficios" className="text-gray-600 hover:text-[#00B488] transition-colors font-medium">Benefícios</a>
              <a href="#contato" className="text-gray-600 hover:text-[#00B488] transition-colors font-medium">Contato</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-[#00B488] to-[#006241] text-white px-6 py-2.5 rounded-xl hover:shadow-lg transition-all duration-300 font-medium shadow-md transform hover:scale-105">
                Abrir App
              </button>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-md">
              <nav className="flex flex-col space-y-3">
                <a href="#sobre" className="text-gray-600 hover:text-[#00B488] transition-colors font-medium py-2">Sobre</a>
                <a href="#como-funciona" className="text-gray-600 hover:text-[#00B488] transition-colors font-medium py-2">Como Funciona</a>
                <a href="#categorias" className="text-gray-600 hover:text-[#00B488] transition-colors font-medium py-2">Categorias</a>
                <a href="#beneficios" className="text-gray-600 hover:text-[#00B488] transition-colors font-medium py-2">Benefícios</a>
                <a href="#contato" className="text-gray-600 hover:text-[#00B488] transition-colors font-medium py-2">Contato</a>
                </nav>
</div>
)}
</header>


      {/* Hero Section - Estilo Internacional Premium */}
      <section className="bg-gradient-to-br from-[#006241] via-[#007A52] to-[#00B488] text-white py-20 lg:py-32 relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/3 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Conteúdo Principal - À Esquerda */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <Globe className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Disponível em 4 países</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                O marketplace de entregas que conecta você
              </h1>
              
              <p className="text-xl lg:text-2xl mb-12 text-green-100 leading-relaxed max-w-2xl">
                Restaurantes, supermercados e farmácias na sua cidade. 
                Rapidez, qualidade e praticidade em cada pedido.
              </p>
              
              {/* CTAs Premium com Ícones - Estilo Internacional */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button className="bg-white text-[#006241] px-10 py-5 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-3xl transform hover:scale-105 text-lg group">
                  <ExternalLink className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Abrir App Web</span>
                </button>
                <button className="bg-[#111111] text-white px-10 py-5 rounded-2xl font-bold hover:bg-gray-900 transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl text-lg group">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Google Play</span>
                </button>
                <button className="bg-[#111111] text-white px-10 py-5 rounded-2xl font-bold hover:bg-gray-900 transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl text-lg group">
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>App Store</span>
                </button>
              </div>

              {/* Indicadores de Confiança */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-green-100">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">Entrega garantida</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">Pagamento seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">Suporte 24/7</span>
                </div>
              </div>
            </div>
            
            {/* Mockup Premium de Smartphone - À Direita */}
            <div className="relative flex justify-center lg:justify-end animate-slide-in-right">
              <div className="relative">
                {/* Efeito de brilho premium */}
                <div className="absolute -inset-8 bg-gradient-to-r from-[#00B488]/30 to-[#006241]/30 rounded-[5rem] blur-3xl animate-pulse"></div>
                
                {/* Smartphone Frame Premium */}
                <div className="relative w-80 h-[640px] bg-gradient-to-b from-[#1a1a1a] to-[#000000] rounded-[4rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[3.5rem] overflow-hidden relative">
                    {/* Status Bar Premium */}
                    <div className="bg-gradient-to-r from-[#006241] to-[#00B488] h-16 flex items-center justify-between px-6 text-white text-sm font-medium">
                      <span className="font-bold">9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-2 bg-white rounded-sm opacity-90"></div>
                        <div className="w-4 h-2 bg-white rounded-sm opacity-70"></div>
                        <div className="w-4 h-2 bg-white rounded-sm opacity-50"></div>
                      </div>
                    </div>
                    
                    {/* App Interface Premium */}
                    <div className="p-6">
                      {/* Header do App */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-3">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#00B488] to-[#006241] rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-xl">K</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-[#111111] text-lg">Olá, João!</h3>
                            <p className="text-sm text-gray-500">O que deseja pedir hoje?</p>
                          </div>
                        </div>
                        <div className="relative">
                          <ShoppingCart className="w-8 h-8 text-[#006241]" />
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#00B488] rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">3</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Categorias em Grid Premium */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-gradient-to-br from-[#00B488]/15 to-[#006241]/15 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                          <Coffee className="w-12 h-12 text-[#006241] mx-auto mb-3" />
                          <span className="text-sm font-semibold text-[#111111]">Restaurantes</span>
                          <p className="text-xs text-gray-500 mt-1">120+ opções</p>
                        </div>
                        <div className="bg-gradient-to-br from-[#00B488]/15 to-[#006241]/15 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                          <ShoppingCart className="w-12 h-12 text-[#006241] mx-auto mb-3" />
                          <span className="text-sm font-semibold text-[#111111]">Supermercados</span>
                          <p className="text-xs text-gray-500 mt-1">50+ lojas</p>
                        </div>
                        <div className="bg-gradient-to-br from-[#00B488]/15 to-[#006241]/15 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                          <Pill className="w-12 h-12 text-[#006241] mx-auto mb-3" />
                          <span className="text-sm font-semibold text-[#111111]">Farmácias</span>
                          <p className="text-xs text-gray-500 mt-1">30+ farmácias</p>
                        </div>
                        <div className="bg-gradient-to-br from-[#00B488]/15 to-[#006241]/15 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                          <ShoppingBag className="w-12 h-12 text-[#006241] mx-auto mb-3" />
                          <span className="text-sm font-semibold text-[#111111]">Lojas</span>
                          <p className="text-xs text-gray-500 mt-1">80+ estabelecimentos</p>
                        </div>
                      </div>
                      
                      {/* Promoção Destaque Premium */}
                      <div className="bg-gradient-to-r from-[#00B488] to-[#006241] rounded-2xl p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-base mb-1">🎉 Entrega Grátis</h4>
                            <p className="text-sm opacity-90">Em pedidos acima de 2.000 Kz</p>
                            <p className="text-xs opacity-75 mt-1">Válido até 31/12</p>
                          </div>
                          <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                            <Zap className="w-8 h-8" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Destaques com Números - Estilo Internacional */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00B488] to-[#006241] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-[#111111] mb-2">50K+</h3>
              <p className="text-gray-600 text-lg font-medium">Pedidos Entregues</p>
              <p className="text-sm text-gray-500 mt-1">Este mês</p>
            </div>
            
            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00B488] to-[#006241] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-[#111111] mb-2">15+</h3>
              <p className="text-gray-600 text-lg font-medium">Cidades Ativas</p>
              <p className="text-sm text-gray-500 mt-1">Em 4 países</p>
            </div>
            
            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00B488] to-[#006241] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-[#111111] mb-2">500+</h3>
              <p className="text-gray-600 text-lg font-medium">Parceiros Ativos</p>
              <p className="text-sm text-gray-500 mt-1">Restaurantes e lojas</p>
            </div>
            
            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00B488] to-[#006241] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-[#111111] mb-2">4.8★</h3>
              <p className="text-gray-600 text-lg font-medium">Avaliação Média</p>
              <p className="text-sm text-gray-500 mt-1">Baseado em 10K+ reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Kimaaki com Imagem Ilustrativa - Estilo Internacional */}
      <section id="sobre" className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Conteúdo à Esquerda */}
            <div>
              <div className="inline-flex items-center bg-[#00B488]/10 rounded-full px-6 py-3 mb-8">
                <Globe className="w-5 h-5 text-[#006241] mr-2" />
                <span className="text-[#006241] font-semibold">Sobre o Kimaaki</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#111111] mb-8 leading-tight">
                Conectando comunidades através da tecnologia
              </h2>
              
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                O Kimaaki é mais que um marketplace de entregas. Somos uma plataforma que conecta pessoas, 
                negócios e oportunidades em Angola, Moçambique, Cabo Verde e Guiné-Bissau, 
                promovendo o crescimento econômico local através da tecnologia.
              </p>

              {/* Cards de Destaque */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00B488] to-[#006241] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] mb-2">Cobertura Regional</h3>
                  <p className="text-gray-600 text-sm">4 países, 15+ cidades</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00B488] to-[#006241] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] mb-2">Ecossistema Completo</h3>
                  <p className="text-gray-600 text-sm">Clientes, lojas e entregadores</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00B488] to-[#006241] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] mb-2">Qualidade Garantida</h3>
                  <p className="text-gray-600 text-sm">Parceiros verificados</p>
                </div>
              </div>
            </div>
            
            {/* Ilustração à Direita */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#00B488]/10 to-[#006241]/10 rounded-3xl p-12 text-center">
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Coffee className="w-12 h-12 text-[#006241] mx-auto mb-4" />
                    <h4 className="font-bold text-[#111111] mb-2">Restaurantes</h4>
                    <p className="text-sm text-gray-600">Comida deliciosa</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <ShoppingCart className="w-12 h-12 text-[#006241] mx-auto mb-4" />
                    <h4 className="font-bold text-[#111111] mb-2">Supermercados</h4>
                    <p className="text-sm text-gray-600">Produtos frescos</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Pill className="w-12 h-12 text-[#006241] mx-auto mb-4" />
                    <h4 className="font-bold text-[#111111] mb-2">Farmácias</h4>
                    <p className="text-sm text-gray-600">Saúde e bem-estar</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <ShoppingBag className="w-12 h-12 text-[#006241] mx-auto mb-4" />
                    <h4 className="font-bold text-[#111111] mb-2">Lojas</h4>
                    <p className="text-sm text-gray-600">Produtos diversos</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#00B488] to-[#006241] rounded-2xl p-6 text-white">
                  <h4 className="font-bold text-lg mb-2">Tudo em um só lugar</h4>
                  <p className="text-sm opacity-90">Sua vida mais prática com o Kimaaki</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Expandido - Estilo Internacional */}
      <section id="como-funciona" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-[#00B488]/10 rounded-full px-6 py-3 mb-8">
              <Users className="w-5 h-5 text-[#006241] mr-2" />
              <span className="text-[#006241] font-semibold">Como Funciona</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#111111] mb-8">
              Simples para todos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Uma plataforma intuitiva que conecta clientes, estabelecimentos e entregadores 
              de forma eficiente e segura
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Para Clientes */}
            <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl p-10 shadow-2xl text-center hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-24 h-24 bg-gradient-to-br from-[#00B488] to-[#006241] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <span className="text-white font-bold text-3xl">1</span>
              </div>
              <Users className="w-20 h-20 text-[#006241] mx-auto mb-8" />
              <h3 className="text-3xl font-bold text-[#111111] mb-6">Para Clientes</h3>
              
              <div className="space-y-6 text-left">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#00B488] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111] mb-1">Escolha o estabelecimento</h4>
                    <p className="text-gray-600 text-sm">Navegue pelas categorias e encontre o que precisa</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#00B488] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111] mb-1">Faça seu pedido</h4>
                    <p className="text-gray-600 text-sm">Adicione itens ao carrinho e finalize a compra</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#00B488] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111] mb-1">Receba em casa</h4>
                    <p className="text-gray-600 text-sm">Acompanhe a entrega em tempo real</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-[#00B488] to-[#006241] text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 mt-8 flex items-center justify-center space-x-2">
                <span>Fazer Pedido</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Para Estabelecimentos */}
            <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl p-10 shadow-2xl text-center hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-24 h-24 bg-gradient-to-br from-[#00B488] to-[#006241] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <span className="text-white font-bold text-3xl">2</span>
              </div>
              <Store className="w-20 h-20 text-[#006241] mx-auto mb-8" />
              <h3 className="text-3xl font-bold text-[#111111] mb-6">Para Estabelecimentos</h3>
              
              <div className="space-y-6 text-left">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#00B488] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111] mb-1">Cadastre seu negócio</h4>
                    <p className="text-gray-600 text-sm">Crie seu perfil e adicione produtos/serviços</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#00B488] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111] mb-1">Receba pedidos</h4>
                    <p className="text-gray-600 text-sm">Gerencie pedidos através do painel administrativo</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#00B488] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111] mb-1">Aumente suas vendas</h4>
                    <p className="text-gray-600 text-sm">Alcance mais clientes e cresça seu negócio</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-[#00B488] to-[#006241] text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 mt-8 flex items-center justify-center space-x-2">
                <span>Seja Parceiro</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Para Entregadores */}
            <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl p-10 shadow-2xl text-center hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-24 h-24 bg-gradient-to-br from-[#00B488] to-[#006241] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <span className="text-white font-bold text-3xl">3</span>
              </div>
              <Truck className="w-20 h-20 text-[#006241] mx-auto mb-8" />
              <h3 className="text-3xl font-bold text-[#111111] mb-6">Para Entregadores</h3>
              
              <div className="space-y-6 text-left">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#00B488] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111] mb-1">Cadastre-se na plataforma</h4>
                    <p className="text-gray-600 text-sm">Processo simples e rápido de verificação</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#00B488] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111] mb-1">Aceite entregas</h4>
                    <p className="text-gray-600 text-sm">Escolha as entregas que se adequam à sua rota</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#00B488] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111] mb-1">Ganhe dinheiro</h4>
                    <p className="text-gray-600 text-sm">Receba pagamentos semanais e bonificações</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-[#00B488] to-[#006241] text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 mt-8 flex items-center justify-center space-x-2">
                <span>Seja Entregador</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias Disponíveis - Estilo Internacional */}
      <section id="categorias" className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-[#00B488]/10 rounded-full px-6 py-3 mb-8">
              <ShoppingBag className="w-5 h-5 text-[#006241] mr-2" />
              <span className="text-[#006241] font-semibold">Categorias Disponíveis</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#111111] mb-8">
              Tudo o que você precisa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Desde uma refeição deliciosa até produtos essenciais para casa, 
              encontre tudo na palma da sua mão
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer group transform hover:scale-105 border border-gray-100">
              <div className="w-28 h-28 bg-gradient-to-br from-[#00B488]/10 to-[#006241]/10 rounded-3xl flex items-center justify-center mb-8 group-hover:from-[#00B488] group-hover:to-[#006241] transition-all duration-300 mx-auto shadow-lg">
                <Coffee className="w-16 h-16 text-[#006241] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4 text-center">Restaurantes</h3>
              <p className="text-gray-600 text-center leading-relaxed mb-6">Comida deliciosa dos melhores restaurantes da sua cidade</p>
              <div className="text-center">
                <span className="inline-flex items-center text-[#00B488] font-semibold text-sm">
                  120+ opções
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer group transform hover:scale-105 border border-gray-100">
              <div className="w-28 h-28 bg-gradient-to-br from-[#00B488]/10 to-[#006241]/10 rounded-3xl flex items-center justify-center mb-8 group-hover:from-[#00B488] group-hover:to-[#006241] transition-all duration-300 mx-auto shadow-lg">
                <ShoppingCart className="w-16 h-16 text-[#006241] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4 text-center">Supermercados</h3>
              <p className="text-gray-600 text-center leading-relaxed mb-6">Produtos frescos e essenciais para sua casa e família</p>
              <div className="text-center">
                <span className="inline-flex items-center text-[#00B488] font-semibold text-sm">
                  50+ lojas
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer group transform hover:scale-105 border border-gray-100">
              <div className="w-28 h-28 bg-gradient-to-br from-[#00B488]/10 to-[#006241]/10 rounded-3xl flex items-center justify-center mb-8 group-hover:from-[#00B488] group-hover:to-[#006241] transition-all duration-300 mx-auto shadow-lg">
                <Pill className="w-16 h-16 text-[#006241] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4 text-center">Farmácias</h3>
              <p className="text-gray-600 text-center leading-relaxed mb-6">Medicamentos e produtos de saúde com segurança</p>
              <div className="text-center">
                <span className="inline-flex items-center text-[#00B488] font-semibold text-sm">
                  30+ farmácias
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer group transform hover:scale-105 border border-gray-100">
              <div className="w-28 h-28 bg-gradient-to-br from-[#00B488]/10 to-[#006241]/10 rounded-3xl flex items-center justify-center mb-8 group-hover:from-[#00B488] group-hover:to-[#006241] transition-all duration-300 mx-auto shadow-lg">
                <ShoppingBag className="w-16 h-16 text-[#006241] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4 text-center">Lojas</h3>
              <p className="text-gray-600 text-center leading-relaxed mb-6">Produtos diversos e itens do dia a dia</p>
              <div className="text-center">
                <span className="inline-flex items-center text-[#00B488] font-semibold text-sm">
                  80+ estabelecimentos
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Extras - Estilo Internacional */}
      <section id="beneficios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-[#00B488]/10 rounded-full px-6 py-3 mb-8">
              <Star className="w-5 h-5 text-[#006241] mr-2" />
              <span className="text-[#006241] font-semibold">Por que escolher o Kimaaki?</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#111111] mb-8">
              Benefícios que fazem a diferença
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tecnologia avançada, segurança garantida e experiência excepcional 
              em cada pedido
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-white to-green-50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-24 h-24 bg-gradient-to-br from-[#00B488] to-[#006241] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Zap className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">Entrega Rápida</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Receba seus pedidos em tempo recorde com nossa logística otimizada</p>
              <div className="text-[#00B488] font-semibold text-sm">Média de 30 minutos</div>
            </div>
            
            <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-white to-green-50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-24 h-24 bg-gradient-to-br from-[#00B488] to-[#006241] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Eye className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">Rastreio em Tempo Real</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Acompanhe seu pedido desde a preparação até a entrega</p>
              <div className="text-[#00B488] font-semibold text-sm">GPS integrado</div>
            </div>
            
            <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-white to-green-50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-24 h-24 bg-gradient-to-br from-[#00B488] to-[#006241] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <CreditCard className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">Pagamento Flexível</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Múltiplas opções de pagamento para sua conveniência</p>
              <div className="text-[#00B488] font-semibold text-sm">Cartão, PIX, dinheiro</div>
            </div>
            
            <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-white to-green-50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-24 h-24 bg-gradient-to-br from-[#00B488] to-[#006241] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Headphones className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">Suporte ao Cliente</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Atendimento dedicado sempre disponível para ajudar</p>
              <div className="text-[#00B488] font-semibold text-sm">24/7 disponível</div>
            </div>
            
            <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-white to-green-50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-24 h-24 bg-gradient-to-br from-[#00B488] to-[#006241] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">Segurança Total</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Transações seguras e dados protegidos com criptografia</p>
              <div className="text-[#00B488] font-semibold text-sm">SSL 256-bit</div>
            </div>
            
            <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-white to-green-50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="w-24 h-24 bg-gradient-to-br from-[#00B488] to-[#006241] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Star className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">Qualidade Garantida</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Parceiros verificados e avaliações reais dos usuários</p>
              <div className="text-[#00B488] font-semibold text-sm">4.8★ média geral</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Final - Estilo Internacional Premium */}
      <section className="py-24 bg-gradient-to-br from-[#006241] via-[#007A52] to-[#00B488] text-white relative overflow-hidden">
        {/* Elementos decorativos premium */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 -translate-x-48"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 translate-x-32"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-white/3 rounded-full"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Download className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">Disponível agora</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Pronto para pedir?
          </h2>
          <p className="text-xl lg:text-2xl mb-16 text-green-100 max-w-4xl mx-auto leading-relaxed">
            Junte-se a milhares de usuários que já descobriram a praticidade 
            de ter tudo na palma da mão
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="bg-white text-[#006241] px-12 py-6 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-4 shadow-2xl text-xl group transform hover:scale-105">
              <ExternalLink className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
              <span>Abrir App Web</span>
            </button>
            <button className="bg-[#111111] text-white px-12 py-6 rounded-2xl font-bold hover:bg-gray-900 transition-all duration-300 flex items-center justify-center space-x-4 shadow-2xl text-xl group transform hover:scale-105">
              <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span>Google Play</span>
            </button>
            <button className="bg-[#111111] text-white px-12 py-6 rounded-2xl font-bold hover:bg-gray-900 transition-all duration-300 flex items-center justify-center space-x-4 shadow-2xl text-xl group transform hover:scale-105">
              <Download className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span>App Store</span>
            </button>
          </div>

          {/* Indicadores de confiança finais */}
          <div className="flex flex-wrap items-center justify-center gap-12 text-green-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">50K+</div>
                <div className="text-sm opacity-75">Usuários ativos</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">4.8★</div>
                <div className="text-sm opacity-75">Avaliação média</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">15+</div>
                <div className="text-sm opacity-75">Cidades ativas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Rodapé Premium Internacional */}
  <footer id="contato" className="bg-[#111111] text-white py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        {/* Sobre a Empresa */}
        <div className="md:col-span-2">
          <span className="text-3xl font-bold text-white">Kimaaki</span>

          <p className="text-gray-300 leading-relaxed text-lg mb-8 max-w-md">
            Conectando comunidades através da tecnologia. O marketplace de entregas
            que está transformando a forma como as pessoas fazem compras em África.
          </p>

          {/* Redes sociais (mantive como estavam) */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-[#00B488] transition-all duration-300 transform hover:scale-110"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-[#00B488] transition-all duration-300 transform hover:scale-110"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-[#00B488] transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Links Úteis */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-white">Links Úteis</h3>
          <ul className="space-y-4">
            <li>
              <a
                href="#sobre"
                className="text-gray-300 hover:text-[#00B488] transition-colors text-lg flex items-center group"
              >
                <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Sobre nós
              </a>
            </li>
            <li>
              <a
                href="#como-funciona"
                className="text-gray-300 hover:text-[#00B488] transition-colors text-lg flex items-center group"
              >
                <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Como funciona
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-[#00B488] transition-colors text-lg flex items-center group"
              >
                <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Seja um parceiro
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-[#00B488] transition-colors text-lg flex items-center group"
              >
                <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Termos de uso
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-[#00B488] transition-colors text-lg flex items-center group"
              >
                <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Política de privacidade
              </a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-white">Contato</h3>
          <ul className="space-y-6">
            <li>
              <div className="flex items-center space-x-4">
                <Mail className="w-12 h-12 bg-[#00B488] rounded-xl flex items-center justify-center text-white p-3" />
                <div>
                  <div className="text-gray-300 text-lg">contato@kimaaki.com</div>
                  <div className="text-gray-500 text-sm">Suporte geral</div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4">
                <Phone className="w-12 h-12 bg-[#00B488] rounded-xl flex items-center justify-center text-white p-3" />
                <div>
                  <div className="text-gray-300 text-lg">+244 900 000 000</div>
                  <div className="text-gray-500 text-sm">Segunda a sexta, 8h–18h</div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4">
                <MapPin className="w-12 h-12 bg-[#00B488] rounded-xl flex items-center justify-center text-white p-3" />
                <div>
                  <div className="text-gray-300 text-lg">Luanda, Angola</div>
                  <div className="text-gray-500 text-sm">Sede principal</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="border-t border-gray-800 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-lg mb-4 md:mb-0">
            © 2025 Kimaaki. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-8 text-gray-400">
            <span className="text-sm">Angola • Moçambique • Cabo Verde • Guiné-Bissau</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm leading-relaxed max-w-4xl">
            <strong>Aviso Legal:</strong> O Kimaaki é um marketplace que conecta clientes,
            estabelecimentos e entregadores. Não somos responsáveis pela preparação dos
            produtos, apenas pela intermediação dos pedidos. Os preços e disponibilidade
            dos produtos são definidos pelos estabelecimentos parceiros.
          </p>
        </div>
       </div>
</footer> 
);
} 
