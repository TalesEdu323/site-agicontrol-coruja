import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useAdvancedScrollAnimations } from "@/hooks/use-advanced-scroll";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(1, "Selecione um assunto"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLElement>(null);
  
  useAdvancedScrollAnimations([formRef, infoRef]);

  const form = useForm<ContactForm>({
    // resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Contact form submitted:", data);
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Nossa equipe entrará em contato em breve.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50" data-testid="contact-hero">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-blue-900 mb-4" data-testid="text-contact-title">
              Entre em Contato
            </h1>
            <div className="section-divider mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto" data-testid="text-contact-subtitle">
              Nossa equipe está pronta para ajudar você a proteger sua família. Entre em contato para suporte técnico ou dúvidas comerciais.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white" data-testid="contact-form-section">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <section ref={formRef} data-testid="contact-form">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-6" data-testid="text-form-title">
                  Envie sua mensagem
                </h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">Nome Completo</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Seu nome completo" 
                              {...field}
                              data-testid="input-name"
                              className="border-gray-300 focus:border-blue-900 focus:ring-blue-900"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">E-mail</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="seu@email.com" 
                              {...field}
                              data-testid="input-email"
                              className="border-gray-300 focus:border-blue-900 focus:ring-blue-900"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">Assunto</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger 
                                data-testid="select-subject"
                                className="border-gray-300 focus:border-blue-900 focus:ring-blue-900"
                              >
                                <SelectValue placeholder="Selecione um assunto" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="support">Suporte Técnico</SelectItem>
                              <SelectItem value="sales">Informações Comerciais</SelectItem>
                              <SelectItem value="partnership">Parcerias</SelectItem>
                              <SelectItem value="other">Outros</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">Mensagem</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Digite sua mensagem aqui..." 
                              className="resize-none h-32 border-gray-300 focus:border-blue-900 focus:ring-blue-900"
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 text-lg font-bold"
                      disabled={isSubmitting}
                      data-testid="button-submit"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner animate-spin mr-2"></i>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane mr-2"></i>
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </section>
            
            {/* Contact Information */}
            <section ref={infoRef} className="space-y-8" data-testid="contact-info">
              {/* Support Info */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100" data-testid="support-info">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Suporte Rápido</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4" data-testid="support-chat">
                    <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                      <i className="fas fa-headset text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700">Chat Online</h4>
                      <p className="text-gray-600">Disponível 24/7 no aplicativo</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4" data-testid="support-email">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-envelope text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700">E-mail</h4>
                      <p className="text-gray-600">suporte@projetocoruja.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4" data-testid="support-whatsapp">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <i className="fab fa-whatsapp text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700">WhatsApp</h4>
                      <p className="text-gray-600">(11) 9 9999-9999</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100" data-testid="social-media">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Siga-nos</h3>
                
                <div className="flex space-x-4 mb-6">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    data-testid="link-facebook"
                  >
                    <i className="fab fa-facebook-f text-white text-xl"></i>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    data-testid="link-instagram"
                  >
                    <i className="fab fa-instagram text-white text-xl"></i>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    data-testid="link-twitter"
                  >
                    <i className="fab fa-twitter text-white text-xl"></i>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    data-testid="link-linkedin"
                  >
                    <i className="fab fa-linkedin-in text-white text-xl"></i>
                  </a>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <i className="fas fa-info-circle text-blue-900 mr-2"></i>
                    Acompanhe nossas dicas de segurança digital e novidades do produto.
                  </p>
                </div>
              </div>
              
              {/* FAQ Quick Links */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100" data-testid="faq-links">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Perguntas Frequentes</h3>
                
                <div className="space-y-3">
                  <a 
                    href="#" 
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                    data-testid="link-faq-install"
                  >
                    <h4 className="font-medium text-gray-700">Como instalar o Coruja App?</h4>
                    <p className="text-sm text-gray-600">Guia completo de instalação</p>
                  </a>
                  <a 
                    href="#" 
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                    data-testid="link-faq-pricing"
                  >
                    <h4 className="font-medium text-gray-700">Preços e planos disponíveis</h4>
                    <p className="text-sm text-gray-600">Conheça nossos planos</p>
                  </a>
                  <a 
                    href="#" 
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                    data-testid="link-faq-settings"
                  >
                    <h4 className="font-medium text-gray-700">Configurações avançadas</h4>
                    <p className="text-sm text-gray-600">Personalize sua experiência</p>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
