
import { Button } from "@/components/ui/button";

interface SpecialOffersProps {
  language: string;
}

const offers = [
  {
    id: 1,
    title: { en: "Weekend Special", gr: "Ειδική Προσφορά Σαββατοκύριακου" },
    car: "Volkswagen Polo",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&h=400",
    discount: "15%",
  },
  {
    id: 2,
    title: { en: "Monthly Rental Deal", gr: "Προσφορά Μηνιαίας Ενοικίασης" },
    car: "Toyota Corolla",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=600&h=400",
    discount: "25%",
  },
  {
    id: 3,
    title: { en: "Electric Vehicle Promotion", gr: "Προώθηση Ηλεκτρικών Οχημάτων" },
    car: "Tesla Model 3",
    image: "https://images.unsplash.com/photo-1554744512-d6c603f27c54?auto=format&fit=crop&w=600&h=400",
    discount: "10%",
  },
  {
    id: 4,
    title: { en: "Family Package", gr: "Οικογενειακό Πακέτο" },
    car: "Volkswagen Touran",
    image: "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?auto=format&fit=crop&w=600&h=400",
    discount: "20%",
  },
];

const SpecialOffers = ({ language }: SpecialOffersProps) => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-brand-dark dark:text-white">
          {language === 'en' 
            ? 'Special Offers – Unbeatable Prices for Your Next Adventure' 
            : 'Ειδικές Προσφορές – Ασυναγώνιστες Τιμές για την Επόμενη Περιπέτειά σας'}
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          {language === 'en' 
            ? 'Take advantage of our limited-time deals and save on your next rental' 
            : 'Εκμεταλλευτείτε τις προσφορές περιορισμένου χρόνου και εξοικονομήστε στην επόμενη ενοικίαση'}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {offers.map((offer) => (
            <div 
              key={offer.id} 
              className="relative overflow-hidden rounded-lg group"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img 
                  src={offer.image} 
                  alt={language === 'en' ? offer.title.en : offer.title.gr} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-brand-yellow text-black font-bold px-3 py-1 rounded-full z-20">
                  -{offer.discount}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-lg font-bold text-white mb-1">
                  {language === 'en' ? offer.title.en : offer.title.gr}
                </h3>
                <p className="text-white/90 text-sm">{offer.car}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button className="bg-transparent border-2 border-brand-dark hover:bg-brand-dark text-brand-dark hover:text-white dark:border-brand-light dark:text-brand-light dark:hover:bg-brand-light dark:hover:text-brand-dark font-semibold transition-all duration-200">
            {language === 'en' ? 'Load More' : 'Περισσότερα'}
          </Button>
          <Button className="bg-brand-yellow hover:bg-brand-yellow/90 text-black font-semibold transition-all duration-200 hover:shadow-md">
            {language === 'en' ? 'View Our Fleet' : 'Δείτε το Στόλο μας'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
