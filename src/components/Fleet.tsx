
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car } from "@/types/car";

interface FleetProps {
  language: string;
}

// Sample car data
const cars: Car[] = [
  {
    id: 1,
    name: "Toyota Yaris",
    category: "compact",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=400",
    transmission: "automatic",
    fuel: "petrol",
    hasAC: true,
    passengers: 5,
    pricePerDay: 45,
  },
  {
    id: 2,
    name: "Volkswagen Polo",
    category: "compact",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&h=400",
    transmission: "manual",
    fuel: "diesel",
    hasAC: true,
    passengers: 5,
    pricePerDay: 40,
  },
  {
    id: 3,
    name: "Ford Fiesta",
    category: "compact",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&h=400",
    transmission: "manual",
    fuel: "petrol",
    hasAC: true,
    passengers: 5,
    pricePerDay: 38,
  },
  {
    id: 4,
    name: "Nissan Juke",
    category: "suv",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&h=400",
    transmission: "automatic",
    fuel: "petrol",
    hasAC: true,
    passengers: 5,
    pricePerDay: 65,
  },
  {
    id: 5,
    name: "Toyota RAV4",
    category: "suv",
    image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?auto=format&fit=crop&w=600&h=400",
    transmission: "automatic",
    fuel: "hybrid",
    hasAC: true,
    passengers: 5,
    pricePerDay: 85,
  },
  {
    id: 6,
    name: "Mercedes GLE",
    category: "luxury",
    image: "https://images.unsplash.com/photo-1563720223523-7d8269c716c5?auto=format&fit=crop&w=600&h=400",
    transmission: "automatic",
    fuel: "diesel",
    hasAC: true,
    passengers: 5,
    pricePerDay: 150,
  },
  {
    id: 7,
    name: "BMW 5 Series",
    category: "business",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&h=400",
    transmission: "automatic",
    fuel: "diesel",
    hasAC: true,
    passengers: 5,
    pricePerDay: 120,
  },
  {
    id: 8,
    name: "Tesla Model 3",
    category: "electric",
    image: "https://images.unsplash.com/photo-1554744512-d6c603f27c54?auto=format&fit=crop&w=600&h=400",
    transmission: "automatic",
    fuel: "electric",
    hasAC: true,
    passengers: 5,
    pricePerDay: 110,
  },
  {
    id: 9,
    name: "Volkswagen ID.4",
    category: "electric",
    image: "https://images.unsplash.com/photo-1617814076668-3f9085009225?auto=format&fit=crop&w=600&h=400",
    transmission: "automatic",
    fuel: "electric",
    hasAC: true,
    passengers: 5,
    pricePerDay: 95,
  },
  {
    id: 10,
    name: "Volkswagen Touran",
    category: "family",
    image: "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?auto=format&fit=crop&w=600&h=400",
    transmission: "manual",
    fuel: "diesel",
    hasAC: true,
    passengers: 7,
    pricePerDay: 75,
  },
  {
    id: 11,
    name: "Mercedes Vito",
    category: "family",
    image: "https://images.unsplash.com/photo-1616256929382-8504add6d788?auto=format&fit=crop&w=600&h=400",
    transmission: "automatic",
    fuel: "diesel",
    hasAC: true,
    passengers: 8,
    pricePerDay: 110,
  },
];

const CarCard = ({ car, language }: { car: Car; language: string }) => {
  const [selectedDays, setSelectedDays] = useState(1);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
      <div className="h-48 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-brand-dark dark:text-white">{car.name}</h3>
        
        <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
          <div className="flex items-center">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {language === 'en' ? 'Transmission:' : 'Κιβώτιο ταχυτήτων:'}
            </span>
            <span className="ml-1 text-gray-600 dark:text-gray-400">
              {car.transmission === 'automatic' 
                ? (language === 'en' ? 'Auto' : 'Αυτόματο') 
                : (language === 'en' ? 'Manual' : 'Χειροκίνητο')}
            </span>
          </div>
          
          <div className="flex items-center">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {language === 'en' ? 'Fuel:' : 'Καύσιμο:'}
            </span>
            <span className="ml-1 text-gray-600 dark:text-gray-400">
              {car.fuel === 'petrol' 
                ? (language === 'en' ? 'Petrol' : 'Βενζίνη')
                : car.fuel === 'diesel'
                ? (language === 'en' ? 'Diesel' : 'Πετρέλαιο')
                : car.fuel === 'hybrid'
                ? (language === 'en' ? 'Hybrid' : 'Υβριδικό')
                : (language === 'en' ? 'Electric' : 'Ηλεκτρικό')}
            </span>
          </div>
          
          <div className="flex items-center">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {language === 'en' ? 'A/C:' : 'A/C:'}
            </span>
            <span className="ml-1 text-gray-600 dark:text-gray-400">
              {car.hasAC 
                ? (language === 'en' ? 'Yes' : 'Ναι')
                : (language === 'en' ? 'No' : 'Όχι')}
            </span>
          </div>
          
          <div className="flex items-center">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {language === 'en' ? 'Passengers:' : 'Επιβάτες:'}
            </span>
            <span className="ml-1 text-gray-600 dark:text-gray-400">
              {car.passengers}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-brand-dark dark:text-white">€{car.pricePerDay * selectedDays}</span>
            <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
              {selectedDays === 1 
                ? (language === 'en' ? 'total' : 'σύνολο')
                : (language === 'en' ? `for ${selectedDays} days` : `για ${selectedDays} ημέρες`)}
            </span>
          </div>
          
          <div className="flex items-center">
            <label className="mr-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              {language === 'en' ? 'Days:' : 'Ημέρες:'}
            </label>
            <select 
              value={selectedDays} 
              onChange={(e) => setSelectedDays(Number(e.target.value))}
              className="border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-sm p-1"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 21, 30].map((day) => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
          </div>
        </div>
        
        <Button 
          className="w-full bg-brand-yellow hover:bg-brand-yellow/90 text-black font-semibold transition-all duration-200 hover:shadow-md"
        >
          {language === 'en' ? 'Book Now' : 'Κράτηση Τώρα'}
        </Button>
      </div>
    </div>
  );
};

const Fleet = ({ language }: FleetProps) => {
  const categories = [
    { value: "all", label: { en: "All Cars", gr: "Όλα τα Αυτοκίνητα" } },
    { value: "compact", label: { en: "Compact", gr: "Μικρά" } },
    { value: "suv", label: { en: "SUV", gr: "SUV" } },
    { value: "luxury", label: { en: "Luxury", gr: "Πολυτελείας" } },
    { value: "business", label: { en: "Business", gr: "Επαγγελματικά" } },
    { value: "electric", label: { en: "Electric/Hybrid", gr: "Ηλεκτρικά/Υβριδικά" } },
    { value: "family", label: { en: "Family/MPV", gr: "Οικογενειακά/MPV" } },
  ];

  return (
    <section id="fleet" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-brand-dark dark:text-white">
          {language === 'en' ? 'Our Fleet' : 'Ο Στόλος μας'}
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          {language === 'en' 
            ? 'Choose from our wide range of quality vehicles' 
            : 'Επιλέξτε από τη μεγάλη γκάμα ποιοτικών οχημάτων μας'}
        </p>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 bg-transparent">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.value} 
                value={category.value}
                className="rounded-full px-6 py-2 data-[state=active]:bg-brand-yellow data-[state=active]:text-black"
              >
                {language === 'en' ? category.label.en : category.label.gr}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category.value} value={category.value} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cars
                  .filter((car) => category.value === "all" || car.category === category.value)
                  .map((car) => (
                    <CarCard key={car.id} car={car} language={language} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Fleet;
