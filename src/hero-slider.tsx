import { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
// , ChevronLeft, ChevronRight

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides: Array<{
    id: string;
    title: JSX.Element;
    description: string;
    primaryButton: string;
    primaryButtonAction: 'app-downloads' | 'receiver-signup';
    secondaryButton: string;
  }> = [
    {
      id: 'givers',
      title: (
        <>
          Random Acts. <br /> Real
          <span className="text-red-500"> Impact.</span>
        </>
      ),
      description: "Join thousands of givers in a secure, gamified platform where every donation creates lasting impact. Track your generosity in real-time while maintaining complete anonymity.",
      primaryButton: "Start Giving Today",
      primaryButtonAction: "app-downloads", // Goes to app downloads
      secondaryButton: "Watch How It Works"
    },
    {
      id: 'receivers',
      title: (
        <>
          One Platform<br />
          for all of your<br />
          <span className="text-red-500">donations</span>
        </>
      ),
      description: "Lower fees, higher engagement, and access to thousands of new supporters for your cause.",
      primaryButton: "Start Receiving Today",
      primaryButtonAction: "receiver-signup", // Goes to receiver signup
      secondaryButton: "Watch How It Works"
    }
  ];

  // Auto-advance slides every 8 seconds
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 8000);
    
  //   return () => clearInterval(timer);
  // }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // const handlePrimaryButtonClick = (action: 'app-downloads' | 'receiver-signup') => {
  //   if (action === 'app-downloads') {
  //     // Scroll to app download section or open app store
  //     console.log('Navigate to app downloads');
  //   } else if (action === 'receiver-signup') {
  //     // Navigate to receiver signup/approval process
  //     console.log('Navigate to receiver signup');
  //   }
  // };
const handlePrimaryButtonClick = (action: 'app-downloads' | 'receiver-signup') => {
    if (action === 'app-downloads') {
      // Scroll to app download section
      const mobileAppSection = document.getElementById('mobile-app-section');
      if (mobileAppSection) {
        mobileAppSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else if (action === 'receiver-signup') {
      // Navigate to receiver signup/approval process
      // console.log('Navigate to receiver signup');
      window.open('https://testflight.apple.com/join/SbQyVv4k', '_blank');
    }
  };

  return (
    <section className="bg-white py-12 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Slider Container */}
          <div className="relative min-h-[500px]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 relative'
                    : 'opacity-0 absolute inset-0 pointer-events-none'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 2xl:gap-12 items-center">
                  <div className="space-y-6 lg:ps-8 xl:ms-0">
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <button 
                        onClick={() => handlePrimaryButtonClick(slide.primaryButtonAction)}
                        className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                      >
                        {slide.primaryButton}
                      </button>
                      <button className="flex items-center justify-center bg-blue-100 px-8 py-3 rounded-lg space-x-2 text-gray-700 hover:text-gray-900 hover:bg-blue-200 transition-colors">
                        <Play className="w-5 h-5" />
                        <span>{slide.secondaryButton}</span>
                      </button>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex justify-center space-x-2 xl:space-x-4">
                      <div className="relative">
                        <img 
                          // src="/Mockup1.png" 
                          // alt="RandomGiving App Mockup 1" 
                          src={currentSlide === 0 ? "/Mockup1.png" : "/Receiver1.png"} 
                          alt={currentSlide === 0 ? "RandomGiving App Mockup 1" : "RandomGiving Receiver Mockup 1"} 
                          className="w-64 h-auto rounded-3xl transform hover:scale-105 transition-transform duration-300" 
                        />
                        {/* Floating elements for visual interest */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
                      </div>
                      <div className="relative mt-8">
                        <img 
                          src={currentSlide === 0 ? "/Mockup2.png" : "/Receiver2.png"} 
                          alt={currentSlide === 0 ? "RandomGiving App Mockup 2" : "RandomGiving Receiver Mockup 2"} 
                          className="w-64 h-auto rounded-3xl transform hover:scale-105 transition-transform duration-300" 
                        />
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full opacity-20 animate-bounce"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className='hidden sm:flex'>
            <button
              onClick={prevSlide}
              className="absolute -left-6 2xl:-left-16 top-[50%] xl:top-[55%] transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-6 2xl:-right-16 top-[50%] xl:top-[55%] transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          {/* Slide Labels */}
          <div className="hidden lg:flex absolute top-4 right-4 z-10">
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-gray-600">
              {currentSlide === 0 ? 'For Givers' : 'For Receivers'}
            </div>
          </div>
        </div>

        {/* Slide Indicators - Now below the slide content */}
        <div className="flex justify-center space-x-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-red-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
    </section>
  );
};

export default HeroSlider;