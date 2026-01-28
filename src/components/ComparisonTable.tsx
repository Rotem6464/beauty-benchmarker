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
import { AffiliateLink } from "@/components/AffiliateLink";

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
    <div className="overflow-x-auto" role="region" aria-label="Product comparison table">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted">
            <TableHead className="w-12" scope="col">#</TableHead>
            <TableHead scope="col">Product</TableHead>
            <TableHead scope="col">Price</TableHead>
            <TableHead scope="col">Rating</TableHead>
            <TableHead scope="col">Key Ingredient</TableHead>
            <TableHead scope="col">Skin Types</TableHead>
            <TableHead scope="col">Vegan</TableHead>
            <TableHead scope="col">Cruelty-Free</TableHead>
            <TableHead scope="col" className="text-right">Action</TableHead>
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
                  <span className="bg-brand-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm" aria-label="Rank 1">
                    1
                  </span>
                ) : (
                  <span aria-label={`Rank ${index + 1}`}>{index + 1}</span>
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
                  <Star className="w-4 h-4 fill-accent-gold text-accent-gold" aria-hidden="true" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="sr-only">out of 5 stars</span>
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
                  <>
                    <Check className="w-5 h-5 text-success" aria-hidden="true" />
                    <span className="sr-only">Yes, vegan</span>
                  </>
                ) : (
                  <>
                    <X className="w-5 h-5 text-muted" aria-hidden="true" />
                    <span className="sr-only">No, not vegan</span>
                  </>
                )}
              </TableCell>
              <TableCell>
                {product.isCrueltyFree ? (
                  <>
                    <Check className="w-5 h-5 text-success" aria-hidden="true" />
                    <span className="sr-only">Yes, cruelty-free</span>
                  </>
                ) : (
                  <>
                    <X className="w-5 h-5 text-muted" aria-hidden="true" />
                    <span className="sr-only">No, not cruelty-free</span>
                  </>
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
                  <AffiliateLink href={product.affiliateUrl} productName={product.name}>
                    {product.isOkoaskin ? "Best Price" : "Check Price"}
                  </AffiliateLink>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
