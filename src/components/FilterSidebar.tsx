import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { filterOptions } from "@/data/products";

interface Filters {
  skinTypes: string[];
  climates: string[];
  ageGroups: string[];
  tiers: string[];
  values: string[];
  priceRange: [number, number];
}

interface FilterSidebarProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
}

export function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const toggleFilter = (category: keyof Omit<Filters, 'priceRange'>, value: string) => {
    const current = filters[category] as string[];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onFilterChange({ ...filters, [category]: updated });
  };

  const handlePriceChange = (value: number[]) => {
    onFilterChange({ ...filters, priceRange: [value[0], value[1]] });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3 text-lg">Price Range</h3>
        <div className="px-2">
          <Slider
            min={0}
            max={600}
            step={10}
            value={[filters.priceRange[0], filters.priceRange[1]]}
            onValueChange={handlePriceChange}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3 text-lg">Skin Type</h3>
        <div className="space-y-2">
          {filterOptions.skinTypes.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <Checkbox
                id={`skin-${option.value}`}
                checked={filters.skinTypes.includes(option.value)}
                onCheckedChange={() => toggleFilter("skinTypes", option.value)}
              />
              <Label htmlFor={`skin-${option.value}`} className="cursor-pointer">
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3 text-lg">Climate</h3>
        <div className="space-y-2">
          {filterOptions.climates.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <Checkbox
                id={`climate-${option.value}`}
                checked={filters.climates.includes(option.value)}
                onCheckedChange={() => toggleFilter("climates", option.value)}
              />
              <Label htmlFor={`climate-${option.value}`} className="cursor-pointer">
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3 text-lg">Age Group</h3>
        <div className="space-y-2">
          {filterOptions.ageGroups.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <Checkbox
                id={`age-${option.value}`}
                checked={filters.ageGroups.includes(option.value)}
                onCheckedChange={() => toggleFilter("ageGroups", option.value)}
              />
              <Label htmlFor={`age-${option.value}`} className="cursor-pointer">
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3 text-lg">Price Tier</h3>
        <div className="space-y-2">
          {filterOptions.tiers.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <Checkbox
                id={`tier-${option.value}`}
                checked={filters.tiers.includes(option.value)}
                onCheckedChange={() => toggleFilter("tiers", option.value)}
              />
              <Label htmlFor={`tier-${option.value}`} className="cursor-pointer">
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3 text-lg">Values</h3>
        <div className="space-y-2">
          {filterOptions.values.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <Checkbox
                id={`value-${option.value}`}
                checked={filters.values.includes(option.value)}
                onCheckedChange={() => toggleFilter("values", option.value)}
              />
              <Label htmlFor={`value-${option.value}`} className="cursor-pointer">
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
