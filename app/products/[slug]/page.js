import { products, commonFeatures } from "../components/ProductInfo";
import { ProductFeatures } from "../components/ProductFeatures";
import { ProductSpecifications } from "../components/ProductSpecifications";
import { Badge } from "../components/Badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/Tabs";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export default function ProductPage({ params }) {
  const product = products.find((p) => p.id === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mt-[80px] mx-auto py-8 px-4">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            {product.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {product.series?.map((series) => (
              <Badge key={series} variant="secondary">
                {series}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <Tabs defaultValue="features" className="mt-12">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="variants">Variants</TabsTrigger>
          <TabsTrigger value="uses">Uses</TabsTrigger>
        </TabsList>
        <TabsContent value="features">
          <ProductFeatures features={commonFeatures} />
        </TabsContent>
        <TabsContent value="variants">
          <div className="grid gap-6 md:grid-cols-2">
            {product.variants?.map((variant, index) => (
              <ProductSpecifications
                key={index}
                title={variant.name}
                specifications={variant.specifications}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="uses">
          <ul className="grid gap-4 md:grid-cols-2">
            {product.uses?.map((use, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {use}
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  );
}