import Link from "next/link";
import Image from "next/image";
import { Badge } from "./Badge";
import { Card, CardContent, CardHeader } from "./Card";

export function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group overflow-hidden transition-colors hover:bg-accent">
        <CardHeader className="p-0">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {product.description}
          </p>
          {product.series && (
            <div className="mt-3 flex flex-wrap gap-2">
              {product.series.slice(0, 3).map((series) => (
                <Badge key={series} variant="secondary" className="text-xs">
                  {series}
                </Badge>
              ))}
              {product.series.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{product.series.length - 3} more
                </Badge>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
