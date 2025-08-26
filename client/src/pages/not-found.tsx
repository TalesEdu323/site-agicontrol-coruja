import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <section className="py-12 mt-4 bg-white" data-testid="not-found-hero">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-semibold mb-6" data-testid="text-not-found-title">
              Página Não Encontrada
            </h1>
            <div className="section-divider bg-red-500 mb-6"></div>
            <p className="text-base max-w-2xl mx-auto text-gray-700">
              A página que você está procurando não existe ou foi movida.
            </p>
          </div>
        </div>
      </section>
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-[80px]">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-3xl font-semibold text-gray-800">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-base text-gray-700">
            Did you forget to add the page to the router?
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
