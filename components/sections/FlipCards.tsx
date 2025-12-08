'use client';

import { useState } from 'react';
import { Database, MapPin, Truck, Navigation, Warehouse, Calculator } from 'lucide-react';
import { useTheme, colorClasses } from '@/lib/theme-context';

export default function FlipCards() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const { primaryColor } = useTheme();

  // per-module gradient map
  const gradientClasses: Record<string, string> = {
    blue: 'from-blue-500 via-blue-600 to-blue-700',
    emerald: 'from-emerald-500 via-teal-500 to-emerald-600',
    violet: 'from-violet-500 via-purple-500 to-violet-600',
    teal: 'from-teal-500 via-sky-500 to-teal-600',
    amber: 'from-amber-400 via-orange-500 to-amber-600',
    rose: 'from-rose-500 via-pink-500 to-rose-600',
  };

  const modules = [
    {
      icon: Database,
      title: 'Masters',
      tagline: 'Foundation Data',
      description:
        'Complete master data management including locations, routes, vendors, clients, and product categories. Centralized reference data that powers your entire operation.',
      color: 'blue',
    },
    {
      icon: MapPin,
      title: 'GPS',
      tagline: 'Live Tracking',
      description:
        'Real-time GPS tracking with live location updates, geofencing, route playback, and movement history. Get instant visibility into every vehicle movement.',
      color: 'emerald',
    },
    {
      icon: Truck,
      title: 'Fleet',
      tagline: 'Vehicle Operations',
      description:
        'Comprehensive fleet management with vehicle profiles, fuel tracking, maintenance schedules, insurance, and driver assignments. Keep your fleet running efficiently.',
      color: 'violet',
    },
    {
      icon: Navigation,
      title: 'Trips',
      tagline: 'Journey Management',
      description:
        'End-to-end trip management from planning to completion. Track checkpoints, ETAs, delays, and proof of delivery. Real-time status updates for every journey.',
      color: 'teal',
    },
    {
      icon: Warehouse,
      title: 'Warehouse',
      tagline: 'Inventory Control',
      description:
        'Complete warehouse operations including inventory management, cold chain monitoring, stock transfers, and automated alerts for temperature and stock levels.',
      color: 'amber',
    },
    {
      icon: Calculator,
      title: 'Accounts',
      tagline: 'Financial Control',
      description:
        'Integrated accounting with invoicing, expense tracking, vendor payments, and financial analytics. Generate reports and insights for better financial planning.',
      color: 'rose',
    },
  ];

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="modules" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            From GPS to Accounts – All Your Operations, One Platform
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore our comprehensive modules designed to handle every aspect of fleet and logistics management
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const isFlipped = flippedCards.includes(index);
            const gradient = gradientClasses[module.color] ?? gradientClasses.blue;

            return (
              <div
                key={index}
                className="relative h-80 perspective-1000"
                onClick={() => toggleFlip(index)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* FRONT SIDE (white card with gradient accent) */}
                  <div className="absolute inset-0 backface-hidden">
                    <div className="relative h-full rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-700/80 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden flex items-center justify-center">
                      {/* soft gradient glow in corner */}
                      <div
                        className={`pointer-events-none absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br ${gradient} opacity-40 blur-3xl`}
                      />
                      <div className="relative p-8 flex flex-col items-center justify-center text-center space-y-4">
                        <div
                          className={`
                            w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient}
                            flex items-center justify-center text-white shadow-lg
                          `}
                        >
                          <Icon size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {module.title}
                        </h3>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                          {module.tagline}
                        </p>
                        <div className="pt-2">
                          <span className="inline-block px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-sm font-medium border border-gray-200/70 dark:border-gray-700/70">
                            Learn More
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BACK SIDE (full gradient) */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div
                      className={`
                        h-full p-8 rounded-2xl bg-gradient-to-br ${gradient}
                        text-white shadow-2xl flex flex-col justify-center space-y-4
                      `}
                    >
                      <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon size={32} />
                      </div>
                      <h3 className="text-2xl font-bold">{module.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {module.description}
                      </p>
                      <div className="pt-4">
                        <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium">
                          Click to flip back
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}