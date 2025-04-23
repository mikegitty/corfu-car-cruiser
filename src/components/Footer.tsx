
interface FooterProps {
  language: string;
}

const Footer = ({ language }: FooterProps) => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CORFU<span className="text-brand-yellow">CAR</span></h3>
            <p className="text-gray-300 mb-4">
              {language === 'en'
                ? 'Premium car rental services in Corfu Island. Explore at your own pace with our reliable vehicles.'
                : 'Premium υπηρεσίες ενοικίασης αυτοκινήτων στην Κέρκυρα. Εξερευνήστε με το δικό σας ρυθμό με τα αξιόπιστα οχήματά μας.'}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Quick Links' : 'Γρήγορη Πρόσβαση'}
            </h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-brand-yellow transition-colors">
                {language === 'en' ? 'Home' : 'Αρχική'}
              </a></li>
              <li><a href="#fleet" className="text-gray-300 hover:text-brand-yellow transition-colors">
                {language === 'en' ? 'Our Fleet' : 'Ο Στόλος μας'}
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors">
                {language === 'en' ? 'Special Offers' : 'Ειδικές Προσφορές'}
              </a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-brand-yellow transition-colors">
                {language === 'en' ? 'Contact Us' : 'Επικοινωνία'}
              </a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Policies' : 'Πολιτικές'}
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors">
                {language === 'en' ? 'Terms & Conditions' : 'Όροι & Προϋποθέσεις'}
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors">
                {language === 'en' ? 'Privacy Policy' : 'Πολιτική Απορρήτου'}
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors">
                {language === 'en' ? 'Cookie Policy' : 'Πολιτική Cookies'}
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors">
                {language === 'en' ? 'FAQ' : 'Συχνές Ερωτήσεις'}
              </a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Newsletter' : 'Ενημερωτικό Δελτίο'}
            </h3>
            <p className="text-gray-300 mb-3">
              {language === 'en'
                ? 'Subscribe to receive special offers and updates'
                : 'Εγγραφείτε για να λαμβάνετε ειδικές προσφορές και ενημερώσεις'}
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder={language === 'en' ? 'Your email' : 'Το email σας'}
                className="py-2 px-3 bg-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow flex-grow"
              />
              <button
                type="submit"
                className="bg-brand-yellow hover:bg-brand-yellow/90 text-black font-medium py-2 px-4 rounded-r-lg"
              >
                {language === 'en' ? 'Send' : 'Αποστολή'}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {year} CORFUCAR. {language === 'en' ? 'All rights reserved' : 'Με επιφύλαξη παντός δικαιώματος'}.
            </p>
            <p className="text-gray-400 text-sm">
              {language === 'en' ? 'Powered by' : 'Από την'} <a href="#" className="text-brand-yellow hover:underline">Lovable</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
