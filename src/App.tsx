// import React from 'react';
import { 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  BarChart3, 
  Puzzle, 
  Users,
  Bell,
  Smartphone,
  Play,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src="/RandomGiving_Logo2_page-0001 3 copy.png" alt="Random Giving Logo" className="w-8 h-8" />
              <span className="text-xl font-semibold text-gray-900">Random Giving</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 mt-2">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 mt-2">About</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 mt-2">How It Works</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 mt-2">Contact</a>
              <a href="#" className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Sign Up</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Give<br />
                Anonymously,<br />
                Impact<br />
                <span className="text-red-500">Meaningfully</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Join thousands of givers in a secure, gamified platform where every 
                donation creates lasting impact. Track your generosity in real-time while 
                maintaining complete anonymity.
              </p>
              <div className="flex space-x-4 mt-8">
                <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                  Start Giving Today
                </button>
                <button className="flex items-center bg-blue-100 px-8 rounded-lg space-x-2 text-gray-700 hover:text-gray-900">
                  <Play className="w-5 h-5" />
                  <span>Watch How It Works</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="flex justify-center space-x-4">
                <img src="/Mockup1.png" alt="Random Giving App Mockup 1" className="w-64 h-auto" />
                <img src="/Mockup2.png" alt="Random Giving App Mockup 2" className="w-64 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Meaningful Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature is designed with transparency, security, and user experience in mind. We 
              believe that giving should be simple, secure, and deeply rewarding.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-[#1E3A5F]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Anonymous Donations</h3>
              <p className="text-gray-600">
                Give without revealing your identity, ensuring complete privacy while 
                making a positive impact on causes you care about.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-[#1E3A5F]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Impact Tracking</h3>
              <p className="text-gray-600">
                Watch your contributions make a difference in real-time. See 
                detailed updates on how your anonymous donations 
                are creating impact.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-[#1E3A5F]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Verified Charities</h3>
              <p className="text-gray-600">
                Every organization on our platform is verified and vetted 
                meticulously. Donate with complete confidence and transparency.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-[#1E3A5F]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Impact Dashboard</h3>
              <p className="text-gray-600">
                Visualize your giving journey with beautiful analytics. Track 
                your impact with interactive charts and meaningful 
                insights.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Puzzle className="w-8 h-8 text-[#1E3A5F]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gamified Giving</h3>
              <p className="text-gray-600">
                Earn achievement badges, unlock giving milestones, and 
                celebrate your generosity through fun gamified giving 
                experiences.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-[#1E3A5F]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community-Driven</h3>
              <p className="text-gray-600">
                Join a vibrant community of givers. Share experiences, 
                discover new causes, and inspire others through collective 
                generosity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Make a Difference */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of givers creating positive change every day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Anonymous & Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Real-Time Tracking</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Verified Recipients</span>
            </div>
          </div>
        </div>
      </section>

      {/* How Random Giving Works */}
      <section className="bg-gradient-to-r from-blue-100 via-gray-100 to-red-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Random Giving Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a movement of kindness where every click creates meaningful impact. Our 
              platform makes giving simple, secure, and deeply rewarding.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-[#ff6f6f] " />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Your Impact</h3>
                <p className="text-gray-600">
                  Browse verified charities to discover what causes align with your values and choose your preferred ways to give back. Every organization is thoroughly vetted for transparency.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-[#ff6f6f]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Give Anonymously</h3>
                <p className="text-gray-600">
                  Your donation is processed securely and anonymously. No one from the receiver organization knows your true identity, ensuring complete privacy protection.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Bell className="w-8 h-8 text-[#ff6f6f]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Receive Real-Time Updates</h3>
                <p className="text-gray-600">
                  Get instant notifications about your donation's impact with direct updates without any middle-man interference. Stay connected to your generosity.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-[#ff6f6f]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Track Your Impact</h3>
                <p className="text-gray-600">
                  Watch your cumulative impact grow through our visual dashboard. Discover how your kindness has transformed lives anonymously with detailed analytics.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Meets Anonymity */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transparency Meets <span className="text-red-500">Anonymity</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            With Random Giving you're promised and guaranteed to control donation flow but track the collective 
            impact while maintaining complete anonymity. Charities can add personalized thank you notes, creating a 
            feedback loop that increases transparency while protecting your privacy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-gray-700">Complete Anonymity</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-gray-700">Real-Time Feedback</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-gray-700">Verified Impact</span>
            </div>
          </div>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Learn How About Our Promise
          </button>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Smartphone className="w-6 h-6 text-red-500" />
                <span className="text-red-500 font-semibold">Mobile App Available</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Take Your Generosity<br />
                Anywhere You Go
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Download the Random Giving app and spread kindness on the go. Make 
                anonymous donations, track your impact, and join giving challenges wherever 
                you are.
              </p>
              <div className="flex space-x-4 mb-8">
                <img src="/app-store.png" alt="Download on App Store" className="h-12" />
                {/* <img src="/app-store copy.png" alt="Get it on Google Play" className="h-12" /> */}
              </div>
            </div>
            <div className="relative">
              <div className="flex justify-center space-x-4">
                <img src="/Mockup1 copy.png" alt="Random Giving Mobile App Mockup 1" className="w-64 h-auto" />
                <img src="/Mockup2 copy.png" alt="Random Giving Mobile App Mockup 2" className="w-64 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/RandomGiving_Logo2_page-0001 3.png" alt="Random Giving Logo" className="w-8 h-8" />
                <span className="text-xl font-semibold">Random Giving</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Empowering anonymous generosity through secure 
                technology. Redefining how we contribute to causes we care about.
              </p>
              <p className="text-gray-500 text-xs">
                Crafted for global social good and charity privacy.
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <h3 className="font-semibold mb-4 -ms-7">Platform</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">How It Works</a></li>
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Impact Stories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              {/* <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700">
                  <span className="text-xs">f</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700">
                  <span className="text-xs">t</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700">
                  <span className="text-xs">in</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700">
                  <span className="text-xs">ig</span>
                </a>
              </div> */}
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Random Giving. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Made with ❤️ by a team committed to global good.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;