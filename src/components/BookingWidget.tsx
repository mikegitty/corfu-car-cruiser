
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";

interface BookingWidgetProps {
  language: string;
  isSticky?: boolean;
}

const carCategories = [
  { value: "compact", label: { en: "Compact", gr: "Μικρό" } },
  { value: "suv", label: { en: "SUV", gr: "SUV" } },
  { value: "luxury", label: { en: "Luxury", gr: "Πολυτελείας" } },
  { value: "business", label: { en: "Business", gr: "Επαγγελματικό" } },
  { value: "electric", label: { en: "Electric/Hybrid", gr: "Ηλεκτρικό/Υβριδικό" } },
  { value: "family", label: { en: "Family/MPV", gr: "Οικογενειακό/MPV" } },
];

const BookingWidget = ({ language, isSticky = false }: BookingWidgetProps) => {
  const [pickupDate, setPickupDate] = useState<string>("");
  const [returnDate, setReturnDate] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [passengers, setPassengers] = useState<string>("");
  const [coupon, setCoupon] = useState<string>("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would filter the fleet section
    const fleetSection = document.getElementById('fleet');
    if (fleetSection) {
      fleetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`w-full bg-white dark:bg-gray-900 shadow-lg rounded-lg border border-gray-200 dark:border-gray-800 ${
      isSticky ? "sticky top-20 z-40" : ""
    }`}>
      <div className="p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-brand-dark dark:text-white">
          {language === 'en' ? 'Find Your Perfect Car' : 'Βρείτε το Ιδανικό Αυτοκίνητο'}
        </h2>
        
        <form onSubmit={handleSearch}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {language === 'en' ? 'Pick-up Date' : 'Ημερομηνία Παραλαβής'}
              </label>
              <div className="relative">
                <Input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full pl-10"
                  required
                />
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {language === 'en' ? 'Return Date' : 'Ημερομηνία Επιστροφής'}
              </label>
              <div className="relative">
                <Input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full pl-10"
                  required
                />
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {language === 'en' ? 'Car Category' : 'Κατηγορία Αυτοκινήτου'}
              </label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder={language === 'en' ? 'Select category' : 'Επιλέξτε κατηγορία'} />
                </SelectTrigger>
                <SelectContent>
                  {carCategories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {language === 'en' ? cat.label.en : cat.label.gr}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {language === 'en' ? 'Passengers' : 'Επιβάτες'}
              </label>
              <Select value={passengers} onValueChange={setPassengers}>
                <SelectTrigger>
                  <SelectValue placeholder={language === 'en' ? 'Select number' : 'Επιλέξτε αριθμό'} />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="space-y-2 col-span-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {language === 'en' ? 'Coupon Code' : 'Κωδικός Κουπονιού'}
              </label>
              <Input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder={language === 'en' ? 'Enter code (optional)' : 'Εισάγετε κωδικό (προαιρετικό)'}
              />
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <Button
                type="submit"
                className="w-full bg-brand-yellow hover:bg-brand-yellow/90 text-black font-semibold py-2.5 transition-all duration-200 hover:shadow-lg"
              >
                {language === 'en' ? 'Search Availability' : 'Αναζήτηση Διαθεσιμότητας'}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingWidget;
