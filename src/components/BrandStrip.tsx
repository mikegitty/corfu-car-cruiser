
interface BrandStripProps {
  language: string;
}

const brands = [
  { name: "Mercedes", logo: "https://placehold.co/120x60?text=Mercedes" },
  { name: "BMW", logo: "https://placehold.co/120x60?text=BMW" },
  { name: "Audi", logo: "https://placehold.co/120x60?text=Audi" },
  { name: "Toyota", logo: "https://placehold.co/120x60?text=Toyota" },
  { name: "Tesla", logo: "https://placehold.co/120x60?text=Tesla" },
  { name: "Volkswagen", logo: "https://placehold.co/120x60?text=VW" },
];

const BrandStrip = ({ language }: BrandStripProps) => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
              <img src={brand.logo} alt={brand.name} className="h-12 md:h-16" />
            </div>
          ))}
        </div>
        
        <p className="text-center text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          {language === 'en'
            ? "Explore the island at your own pace with our premium car rental service."
            : "Εξερευνήστε το νησί με το δικό σας ρυθμό με την premium υπηρεσία ενοικίασης αυτοκινήτων μας."}
        </p>
      </div>
    </section>
  );
};

export default BrandStrip;
