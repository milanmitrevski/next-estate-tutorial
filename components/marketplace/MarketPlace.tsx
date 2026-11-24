import { getProperties } from '@/server-actions/getProperties';
import { Property } from '@/types/property';
import { MarketPageProps } from '@/app/marketplace/page';
import EmptyState from '../ui/EmptyState';
import PropertyCard from '../properties/PropertyCard';

export default async function MarketPlace({ searchParams }: MarketPageProps) {
  const params = await searchParams;

  const properties: Property[] = await getProperties({
    search: params.search,
    address: params.address,
    location: params.location,
    propertyType: params.propertyType,
    minPrice: params.minPrice,
    maxPrice: params.maxPrice,
  });

  if (properties.length === 0) {
    return (
      <EmptyState
        title="No matching properties."
        subtitle="Try adjusting your search criteria or clearing some filters to see more results."
        filter
      />
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 my-4">
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
