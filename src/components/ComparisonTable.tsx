import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Star } from "lucide-react";
import { Product } from "@/data/products";

interface ComparisonTableProps {
  products: Product[];
}

export function ComparisonTable({ products }: ComparisonTableProps) {
  const sortedProducts = [...products].sort((a, b) => {
    if (a.isOkoaskin) return -1;
    if (b.isOkoaskin) return 1;
    return b.rating - a.rating;
  });

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted">
            <TableHead className="w-12">#</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Key Ingredient</TableHead>
            <TableHead>Skin Types</TableHead>
            <TableHead>Vegan</TableHead>
            <TableHead>Cruelty-Free</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedProducts.map((product, index) => (
            <TableRow
              key={product.id}
              className={product.isOkoaskin ? "bg-brand-50 border-brand-200" : ""}
            >
              <TableCell className="font-bold">
                {product.isOkoaskin ? (
                  <span className="bg-brand-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    1
                  </span>
                ) : (
                  index + 1
                )}
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-semibold">{product.name}</span>
                  <span className="text-muted-foreground text-sm">{product.brand}</span>
                  {product.isOkoaskin && (
                    <Badge className="w-fit mt-1 bg-gradient-to-r from-brand-600 to-accent-pink border-0">
                      Editor's Choice
                    </Badge>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-bold">${product.price}</span>
                  <span className="text-xs text-muted-foreground">${product.pricePerMl.toFixed(2)}/ml</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-accent-gold text-accent-gold" />
                  <span className="font-medium">{product.rating}</span>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-brand-700 font-medium">{product.primaryIngredient}</span>
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {product.skinTypes.map((type) => (
                    <Badge key={type} variant="outline" className="text-xs capitalize">
                      {type}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                {product.isVegan ? (
                  <Check className="w-5 h-5 text-success" />
                ) : (
                  <X className="w-5 h-5 text-muted" />
                )}
              </TableCell>
              <TableCell>
                {product.isCrueltyFree ? (
                  <Check className="w-5 h-5 text-success" />
                ) : (
                  <X className="w-5 h-5 text-muted" />
                )}
              </TableCell>
              <TableCell className="text-right">
                <Button
                  size="sm"
                  className={
                    product.isOkoaskin
                      ? "bg-gradient-to-r from-brand-600 to-accent-pink"
                      : ""
                  }
                  asChild
                >
                  <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer">
                    {product.isOkoaskin ? "Best Price" : "View"}
                  </a>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
