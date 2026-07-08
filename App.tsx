import { useState, useEffect } from 'react';
import { Heart, MapPin, Phone, Mail, ArrowRight, Award, BookOpen, Gift } from 'lucide-react';

export default function App() {
  const [introCompleted, setIntroCompleted] = useState(true);

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans">
      
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-3.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-rose-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
            <div>
              <h1 className="font-serif text-xl font-black tracking-widest text-gray-900">SARTHAK</h1>
              <p className="font-sans text-[9px] uppercase tracking-wider text-gray-400 font-bold">NGO</p>
            </div>
          </div>
          <button className="px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold">Join With Us</button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative bg-gradient-to-b from-pink-50 via-white to-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-5xl font-extrabold text-gray-900">Give a Hand, Change a Life</h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            SARTHAK is a grassroots non-profit organization supporting underserved communities with food drives, education, healthcare, and livelihood programs.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <button className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl font-bold flex items-center gap-2">
              Join Our Mission
              <Heart className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-white border border-gray-200 text-gray-800 rounded-2xl font-bold flex items-center gap-2">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center">
            <h3 className="font-serif text-4xl font-extrabold text-gray-900">Our Goal & Pillars</h3>
            <p className="text-gray-600 mt-2">Four domains to create structural change</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <BookOpen className="w-8 h-8 text-rose-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Empowering Education</h4>
              <p className="text-sm text-gray-600">Evening coaching modules and educational materials for children.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <Gift className="w-8 h-8 text-rose-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Nutritional Relief</h4>
              <p className="text-sm text-gray-600">Hot nutritious meals to slums and marginalized communities.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <Award className="w-8 h-8 text-rose-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Vocational Training</h4>
              <p className="text-sm text-gray-600">Women empowerment through certified skills programs.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <Heart className="w-8 h-8 text-rose-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Healthcare</h4>
              <p className="text-sm text-gray-600">Free screening camps and diagnostic services for villages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-10">
          <div>
            <h3 className="font-serif text-4xl font-extrabold text-gray-900">Active Social Work</h3>
            <p className="text-gray-600 mt-2">Community impact through direct action</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md">
              <div className="h-40 bg-gray-200"></div>
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-2">Education Program</h4>
                <p className="text-sm text-gray-600">Supporting children with learning materials and coaching.</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md">
              <div className="h-40 bg-gray-200"></div>
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-2">Food Drives</h4>
                <p className="text-sm text-gray-600">Distributing nutritious meals to underserved areas.</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md">
              <div className="h-40 bg-gray-200"></div>
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-2">Healthcare Camps</h4>
                <p className="text-sm text-gray-600">Free medical screening and diagnostic services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="font-serif text-4xl font-extrabold">Become a Pillar of Change</h3>
          <p className="text-gray-300">Your skills and passion can directly empower families and communities.</p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-bold">Join as Volunteer</button>
            <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-bold border border-gray-700">Contact Us</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-3">SARTHAK NGO</h4>
            <p className="text-sm">Delivering targeted humanitarian upliftment projects with transparency and trust.</p>
          </div>
          <div>
            <h5 className="font-bold text-white text-sm mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><button className="hover:text-rose-500">Home</button></li>
              <li><button className="hover:text-rose-500">About</button></li>
              <li><button className="hover:text-rose-500">Activities</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white text-sm mb-3">Contact</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Pathsala, Assam</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> 8486404182</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> sarthakofficial.org@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-900 text-center text-xs">
          <p>© 2026 SARTHAK NGO. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
