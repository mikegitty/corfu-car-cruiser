
import { Shield, Clock, Users, Wrench, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhyChooseUsProps {
  language: string;
}

const features = [
  {
    icon: Users,
    title: { en: "Diverse Vehicle Selection", gr: "Ποικιλία Οχημάτων" },
    description: { 
      en: "From economy to luxury, we have the perfect car for every need and budget.",
      gr: "Από οικονομικά έως πολυτελή, έχουμε το τέλειο αυτοκίνητο για κάθε ανάγκη και προϋπολογισμό."
    }
  },
  {
    icon: Clock,
    title: { en: "Flexible Rental Periods", gr: "Ευέλικτες Περίοδοι Ενοικίασης" },
    description: { 
      en: "Daily, weekly, or monthly rentals with competitive rates and no hidden fees.",
      gr: "Ημερήσιες, εβδομαδιαίες ή μηνιαίες ενοικιάσεις με ανταγωνιστικές τιμές χωρίς κρυφές χρεώσεις."
    }
  },
  {
    icon: Shield,
    title: { en: "Delivery Options", gr: "Επιλογές Παράδοσης" },
    description: { 
      en: "Free delivery to your hotel or any location on Corfu island for your convenience.",
      gr: "Δωρεάν παράδοση στο ξενοδοχείο σας ή σε οποιαδήποτε τοποθεσία στην Κέρκυρα για την άνεσή σας."
    }
  },
  {
    icon: Wrench,
    title: { en: "24/7 Roadside Assistance", gr: "24/7 Οδική Βοήθεια" },
    description: { 
      en: "Peace of mind with round-the-clock support and emergency roadside service.",
      gr: "Ασφάλεια με υποστήριξη όλο το 24ωρο και υπηρεσία οδικής βοήθειας έκτακτης ανάγκης."
    }
  },
  {
    icon: Handshake,
    title: { en: "Easy Booking & Cancellation", gr: "Εύκολη Κράτηση & Ακύρωση" },
    description: { 
      en: "Simple online booking process with flexible cancellation policies.",
      gr: "Απλή διαδικασία online κράτησης με ευέλικτες πολιτικές ακύρωσης."
    }
  },
];

const WhyChooseUs = ({ language }: WhyChooseUsProps) => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-brand-dark dark:text-white">
          {language === 'en' ? 'Why Choose Us' : 'Γιατί να μας Επιλέξετε'}
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          {language === 'en'
            ? 'Experience the best car rental service in Corfu with our premium fleet and exceptional customer care'
            : 'Ζήστε την καλύτερη υπηρεσία ενοικίασης αυτοκινήτων στην Κέρκυρα με τον premium στόλο μας και την εξαιρετική εξυπηρέτηση πελατών'}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="p-4 bg-brand-yellow rounded-full mb-4">
                <feature.icon className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-dark dark:text-white">
                {language === 'en' ? feature.title.en : feature.title.gr}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {language === 'en' ? feature.description.en : feature.description.gr}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-brand-dark dark:bg-black/40 text-white rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-3/4 mb-6 md:mb-0">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                {language === 'en'
                  ? 'Planning your trip? Get the best rental deals with our flexible financing options.'
                  : 'Σχεδιάζετε το ταξίδι σας; Αποκτήστε τις καλύτερες προσφορές ενοικίασης με τις ευέλικτες επιλογές χρηματοδότησής μας.'}
              </h3>
              <p className="text-white/80">
                {language === 'en'
                  ? 'Drive around the island with ease.'
                  : 'Οδηγήστε στο νησί με άνεση.'}
              </p>
            </div>
            <div>
              <Button className="bg-brand-yellow hover:bg-brand-yellow/90 text-black font-semibold transition-all duration-200 hover:shadow-md">
                {language === 'en' ? 'Explore Offers' : 'Εξερευνήστε τις Προσφορές'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
