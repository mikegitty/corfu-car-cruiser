
interface HeroProps {
  language: string;
}

const Hero = ({ language }: HeroProps) => {
  return (
    <section id="home" className="bg-brand-yellow py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center mb-8">
            {language === 'en' 
              ? 'Car Rental in Corfu – Reliable & Affordable' 
              : 'Ενοικίαση Αυτοκινήτων στην Κέρκυρα – Αξιόπιστα & Οικονομικά'}
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {/* Car image lineup */}
            {[1, 2, 3, 4, 5].map((num) => (
              <div 
                key={num} 
                className="w-40 h-28 md:w-48 md:h-32 bg-white/20 rounded-lg flex items-center justify-center overflow-hidden"
              >
                <img 
                  src={`https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=300&h=200&ixlib=rb-4.0.3`} 
                  alt={`Car ${num}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          <a 
            href="#fleet" 
            className="bg-black text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-opacity-90 hover:translate-y-[-2px] group flex items-center"
          >
            {language === 'en' ? 'OUR FLEET' : 'Ο ΣΤΟΛΟΣ ΜΑΣ'} 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
