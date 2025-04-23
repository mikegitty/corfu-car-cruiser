
import { MapPin, Phone, Mail, Facebook, Twitter, Youtube } from "lucide-react";

interface LocationProps {
  language: string;
}

const Location = ({ language }: LocationProps) => {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-brand-dark dark:text-white">
          {language === 'en' ? 'Come Visit Us!' : 'Επισκεφθείτε μας!'}
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          {language === 'en'
            ? 'Our team is ready to assist you with your car rental needs'
            : 'Η ομάδα μας είναι έτοιμη να σας βοηθήσει με τις ανάγκες ενοικίασης αυτοκινήτου'}
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 rounded-lg overflow-hidden h-[400px] bg-gray-200 dark:bg-gray-800">
            {/* Google Maps Embed - Replace with actual Google Maps embed in production */}
            <div className="w-full h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12289.85241872987!2d19.919878099999997!3d39.48980765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135b57617367b845%3A0xe6e7184f39a5a067!2sSt%20George%20South%2C%20Argirades%20490%2080%2C%20Greece!5e0!3m2!1sen!2sus!4v1712145182306!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
          
          <div className="lg:col-span-2 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-brand-dark dark:text-white">
              {language === 'en' ? 'Contact Information' : 'Στοιχεία Επικοινωνίας'}
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-yellow mt-0.5 mr-3" />
                <div>
                  <p className="font-semibold text-brand-dark dark:text-white">
                    {language === 'en' ? 'Address' : 'Διεύθυνση'}:
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">St. George South Corfu 49080</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-brand-yellow mt-0.5 mr-3" />
                <div>
                  <p className="font-semibold text-brand-dark dark:text-white">
                    {language === 'en' ? 'Phone' : 'Τηλέφωνο'}:
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">+30 26610 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-brand-yellow mt-0.5 mr-3" />
                <div>
                  <p className="font-semibold text-brand-dark dark:text-white">
                    {language === 'en' ? 'Email' : 'Email'}:
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">info@corfucarcruiser.com</p>
                </div>
              </div>
              
              <div className="pt-4">
                <p className="font-semibold text-brand-dark dark:text-white mb-3">
                  {language === 'en' ? 'Follow Us' : 'Ακολουθήστε μας'}:
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-brand-yellow p-2 rounded-full text-black hover:bg-brand-yellow/90 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-brand-yellow p-2 rounded-full text-black hover:bg-brand-yellow/90 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-brand-yellow p-2 rounded-full text-black hover:bg-brand-yellow/90 transition-colors">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
