import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useAdvancedScrollAnimations } from "@/hooks/use-advanced-scroll";

interface Child {
  id: string;
  name: string;
  age: number;
  screenTime: number;
  timeLimit: number;
  status: 'online' | 'offline' | 'blocked';
  avatar: string;
  currentApp: string;
  location: string;
}

interface SecurityAlert {
  id: string;
  type: 'blocked_site' | 'time_limit' | 'inappropriate_content' | 'location_alert';
  message: string;
  timestamp: string;
  severity: 'low' | 'medium' | 'high';
}

const initialChildren: Child[] = [
  {
    id: '1',
    name: 'Ana',
    age: 12,
    screenTime: 145,
    timeLimit: 180,
    status: 'online',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
    currentApp: 'Khan Academy',
    location: 'Casa'
  },
  {
    id: '2',
    name: 'Pedro',
    age: 8,
    screenTime: 95,
    timeLimit: 120,
    status: 'online',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    currentApp: 'YouTube Kids',
    location: 'Escola'
  },
  {
    id: '3',
    name: 'Lucas',
    age: 15,
    screenTime: 220,
    timeLimit: 240,
    status: 'blocked',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=face',
    currentApp: 'Instagram',
    location: 'Casa'
  }
];

const initialAlerts: SecurityAlert[] = [
  {
    id: '1',
    type: 'blocked_site',
    message: 'Lucas tentou acessar site bloqueado: gaming-site.com',
    timestamp: '14:32',
    severity: 'medium'
  },
  {
    id: '2',
    type: 'time_limit',
    message: 'Ana atingiu 80% do tempo limite diário',
    timestamp: '14:15',
    severity: 'low'
  },
  {
    id: '3',
    type: 'inappropriate_content',
    message: 'Conteúdo inapropriado detectado e bloqueado para Pedro',
    timestamp: '13:45',
    severity: 'high'
  }
];

export default function Demo() {
  const [children, setChildren] = useState<Child[]>(initialChildren);
  const [alerts, setAlerts] = useState<SecurityAlert[]>(initialAlerts);
  const [selectedChild, setSelectedChild] = useState<string>('1');
  const [protecaoTotalEnabled, setProtecaoTotalEnabled] = useState(true);
  const [realTimeMonitoring, setRealTimeMonitoring] = useState(true);
  const [allowedApps, setAllowedApps] = useState<string[]>(['Khan Academy', 'YouTube Kids', 'WhatsApp']);
  
  const demoRef = useRef<HTMLElement>(null);
  const controlsRef = useRef<HTMLElement>(null);
  const alertsRef = useRef<HTMLElement>(null);
  
  useAdvancedScrollAnimations([demoRef, controlsRef, alertsRef]);

  const child = children.find(c => c.id === selectedChild);

  const updateTimeLimit = (childId: string, newLimit: number[]) => {
    setChildren(prev => prev.map(child => 
      child.id === childId ? { ...child, timeLimit: newLimit[0] } : child
    ));
  };

  const toggleAppAccess = (app: string) => {
    setAllowedApps(prev => 
      prev.includes(app) 
        ? prev.filter(a => a !== app)
        : [...prev, app]
    );
  };

  const blockChild = (childId: string) => {
    setChildren(prev => prev.map(child => 
      child.id === childId ? { ...child, status: 'blocked' } : child
    ));
    
    const newAlert: SecurityAlert = {
      id: Date.now().toString(),
      type: 'time_limit',
      message: `Dispositivo de ${child?.name} foi bloqueado manualmente`,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      severity: 'medium'
    };
    setAlerts(prev => [newAlert, ...prev]);
  };

  const unblockChild = (childId: string) => {
    setChildren(prev => prev.map(child => 
      child.id === childId ? { ...child, status: 'online' } : child
    ));
  };

  const getStatusColor = (status: Child['status']) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'offline': return 'bg-gray-400';
      case 'blocked': return 'bg-red-500';
    }
  };

  const getStatusText = (status: Child['status']) => {
    switch (status) {
      case 'online': return 'Online';
      case 'offline': return 'Offline';
      case 'blocked': return 'Bloqueado';
    }
  };

  const getSeverityColor = (severity: SecurityAlert['severity']) => {
    switch (severity) {
      case 'low': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'medium': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'high': return 'bg-red-100 text-red-800 border-red-300';
    }
  };

  const getTimePercentage = (used: number, limit: number) => {
    return Math.min((used / limit) * 100, 100);
  };

  return (
  <div className="pt-[80px]">
      {/* Hero Section */}
  <section className="py-12 mt-4 bg-white" data-testid="demo-hero">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6" data-testid="text-demo-title">
              Demonstração Interativa
            </h1>
            <div className="section-divider bg-red-500 mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto text-gray-700" data-testid="text-demo-subtitle">
              Experimente nosso painel de controle parental em tempo real. Teste todas as funcionalidades e veja como protegemos sua família.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Dashboard */}
  <section ref={controlsRef} className="py-20 mt-8 bg-gray-50" data-testid="interactive-dashboard">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Children Overview */}
            <div className="lg:col-span-2">
              <Card data-testid="children-overview">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <i className="fas fa-users text-blue-900"></i>
                    <span>Visão Geral dos Filhos</span>
                  </CardTitle>
                  <CardDescription>
                    Monitore e controle o uso de dispositivos em tempo real
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {children.map((child) => (
                      <div 
                        key={child.id}
                        className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                          selectedChild === child.id 
                            ? 'border-blue-900 bg-blue-50' 
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                        onClick={() => setSelectedChild(child.id)}
                        data-testid={`child-card-${child.id}`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <img 
                              src={child.avatar} 
                              alt={child.name}
                              className="w-12 h-12 rounded-full object-cover"
                              data-testid={`child-avatar-${child.id}`}
                            />
                            <div>
                              <h3 className="font-bold text-lg">{child.name}</h3>
                              <p className="text-gray-600">{child.age} anos</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <Badge 
                              className={`${getStatusColor(child.status)} text-white`}
                              data-testid={`child-status-${child.id}`}
                            >
                              {getStatusText(child.status)}
                            </Badge>
                            
                            {child.status === 'blocked' ? (
                              <Button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  unblockChild(child.id);
                                }}
                                size="sm"
                                className="bg-green-500 hover:bg-green-600"
                                data-testid={`unblock-button-${child.id}`}
                              >
                                <i className="fas fa-unlock mr-2"></i>
                                Desbloquear
                              </Button>
                            ) : (
                              <Button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  blockChild(child.id);
                                }}
                                variant="destructive"
                                size="sm"
                                data-testid={`block-button-${child.id}`}
                              >
                                <i className="fas fa-ban mr-2"></i>
                                Bloquear
                              </Button>
                            )}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Tempo de Tela Hoje</p>
                            <div className="flex items-center space-x-2">
                              <Progress 
                                value={getTimePercentage(child.screenTime, child.timeLimit)} 
                                className="flex-1"
                                data-testid={`time-progress-${child.id}`}
                              />
                              <span className="text-sm font-medium">
                                {Math.floor(child.screenTime / 60)}h {child.screenTime % 60}m
                              </span>
                            </div>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-600 mb-1">App Atual</p>
                            <p className="font-medium" data-testid={`current-app-${child.id}`}>
                              {child.currentApp}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>
                            <i className="fas fa-map-marker-alt mr-1"></i>
                            {child.location}
                          </span>
                          <span>
                            Limite: {Math.floor(child.timeLimit / 60)}h {child.timeLimit % 60}m
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Control Panel */}
            <div className="space-y-6">
              
              {/* System Controls */}
              <Card data-testid="system-controls">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <i className="fas fa-cog text-blue-900"></i>
                    <span>Controles do Sistema</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Proteção Total Ativo</p>
                      <p className="text-sm text-gray-600">Proteção em tempo real</p>
                    </div>
                    <Switch 
                      checked={protecaoTotalEnabled}
                      onCheckedChange={setProtecaoTotalEnabled}
                      data-testid="protecao-total-toggle"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Monitoramento</p>
                      <p className="text-sm text-gray-600">Rastreamento ativo</p>
                    </div>
                    <Switch 
                      checked={realTimeMonitoring}
                      onCheckedChange={setRealTimeMonitoring}
                      data-testid="monitoring-toggle"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Time Control for Selected Child */}
              {child && (
                <Card data-testid="time-control">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <i className="fas fa-clock text-blue-900"></i>
                      <span>Controle de Tempo - {child.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium mb-2">Limite Diário</p>
                        <Slider
                          value={[child.timeLimit]}
                          onValueChange={(value) => updateTimeLimit(child.id, value)}
                          max={480}
                          min={30}
                          step={30}
                          className="w-full"
                          data-testid="time-limit-slider"
                        />
                        <div className="flex justify-between text-sm text-gray-600 mt-1">
                          <span>30min</span>
                          <span className="font-medium">
                            {Math.floor(child.timeLimit / 60)}h {child.timeLimit % 60}m
                          </span>
                          <span>8h</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">Tempo restante hoje:</p>
                        <p className="text-2xl font-bold text-blue-900">
                          {Math.max(0, Math.floor((child.timeLimit - child.screenTime) / 60))}h {Math.max(0, (child.timeLimit - child.screenTime) % 60)}m
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* App Controls */}
              <Card data-testid="app-controls">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <i className="fas fa-mobile-alt text-blue-900"></i>
                    <span>Controle de Apps</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {['Instagram', 'TikTok', 'YouTube Kids', 'Khan Academy', 'WhatsApp', 'Netflix'].map((app) => (
                      <div key={app} className="flex items-center justify-between">
                        <span className="text-sm">{app}</span>
                        <Button
                          variant={allowedApps.includes(app) ? "default" : "destructive"}
                          size="sm"
                          onClick={() => toggleAppAccess(app)}
                          data-testid={`app-toggle-${app.toLowerCase().replace(' ', '-')}`}
                        >
                          {allowedApps.includes(app) ? (
                            <><i className="fas fa-check mr-1"></i>Permitido</>
                          ) : (
                            <><i className="fas fa-ban mr-1"></i>Bloqueado</>
                          )}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security Alerts */}
  <section ref={alertsRef} className="py-20 mt-8 bg-white" data-testid="security-alerts">
        <div className="container mx-auto px-8 lg:px-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <i className="fas fa-shield-alt text-red-500"></i>
                <span>Alertas de Segurança em Tempo Real</span>
                <Badge className="bg-red-500">{alerts.length}</Badge>
              </CardTitle>
              <CardDescription>
                Monitore todas as atividades suspeitas e bloqueios automáticos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div 
                    key={alert.id}
                    className={`p-4 border rounded-lg ${getSeverityColor(alert.severity)} ${alert.severity === 'high' ? 'animate-pulse' : ''}`}
                    data-testid={`alert-${alert.id}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <i className={`fas ${
                          alert.type === 'blocked_site' ? 'fa-ban' :
                          alert.type === 'time_limit' ? 'fa-clock' :
                          alert.type === 'inappropriate_content' ? 'fa-exclamation-triangle' :
                          'fa-map-marker-alt'
                        }`}></i>
                        <span className="font-medium">{alert.message}</span>
                      </div>
                      <span className="text-sm font-medium">{alert.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button 
                  variant="outline" 
                  className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                  data-testid="view-all-alerts"
                >
                  <i className="fas fa-history mr-2"></i>
                  Ver Histórico Completo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
  <section className="py-16 mt-8 bg-white" data-testid="demo-cta">
        <div className="container mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Gostou do que viu?</h2>
          <p className="text-xl mb-8 opacity-90">
            Baixe o Coruja App agora e tenha 10 dias grátis para proteger sua família.
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg transition-transform transform hover:scale-105"
              data-testid="download-demo-cta"
            >
              <i className="fas fa-download mr-2"></i>
              Baixar Agora
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-blue-900 text-blue-900 hover:bg-red-500 hover:text-white px-8 py-4 text-lg"
              data-testid="contact-demo-cta"
            >
              <i className="fas fa-phone mr-2"></i>
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}