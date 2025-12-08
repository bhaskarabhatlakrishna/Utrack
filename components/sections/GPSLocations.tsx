'use client';

import { MapPin, Activity, Globe, Clock } from 'lucide-react';
import { useTheme, colorClasses } from '@/lib/theme-context';

export default function GPSLocations() {
  const { primaryColor } = useTheme();

  return (
    <section id="locations" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            GPS Locations & Live Vehicle Tracking
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real-time location intelligence with precision GPS tracking and comprehensive coverage
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Hub Location – JNTU Hyderabad
            </h3>

            <div className="relative h-96 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
              <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <rect x="20" y="30" width="15" height="20" fill="#cbd5e1" opacity="0.3" />
                  <rect x="40" y="25" width="20" height="25" fill="#cbd5e1" opacity="0.3" />
                  <rect x="65" y="30" width="15" height="20" fill="#cbd5e1" opacity="0.3" />
                  <rect x="25" y="55" width="18" height="15" fill="#cbd5e1" opacity="0.3" />
                  <rect x="50" y="55" width="25" height="20" fill="#cbd5e1" opacity="0.3" />

                  <line x1="0" y1="50" x2="100" y2="50" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="50" y1="0" x2="50" y2="100" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="20" y1="20" x2="80" y2="80" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
                </svg>
              </div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className={`w-16 h-16 rounded-full ${colorClasses[primaryColor].bg} flex items-center justify-center text-white shadow-2xl animate-pulse`}>
                  <MapPin size={32} />
                </div>
                <div className="mt-3 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg text-center">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">
                    Hub - JNTU Hyderabad
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    17.4924° N, 78.3915° E
                  </p>
                </div>
              </div>

              <div className="absolute top-[30%] left-[65%] animate-bounce">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                    <circle cx="7" cy="18" r="2" />
                    <circle cx="17" cy="18" r="2" />
                  </svg>
                </div>
              </div>

              <div className="absolute top-[65%] left-[30%] animate-bounce" style={{ animationDelay: '0.5s' }}>
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                    <circle cx="7" cy="18" r="2" />
                    <circle cx="17" cy="18" r="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-xl text-white">
            <h3 className="text-2xl font-bold mb-6">Live Vehicle Tracking</h3>

            <div className="mb-8">
              <div className="relative h-20 rounded-xl bg-white/10 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mb-1">
                      <MapPin size={16} />
                    </div>
                    <span className="text-xs text-blue-100">Depot</span>
                  </div>
                  <div className="flex-1 mx-4 relative h-1 bg-white/20 rounded-full">
                    <div className="absolute inset-0 bg-white/40 rounded-full" style={{ width: '60%' }} />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center mb-1">
                      <MapPin size={16} />
                    </div>
                    <span className="text-xs text-blue-100">Mid-Stop</span>
                  </div>
                  <div className="flex-1 mx-4 relative h-1 bg-white/20 rounded-full" />
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center mb-1">
                      <MapPin size={16} />
                    </div>
                    <span className="text-xs text-blue-100">Destination</span>
                  </div>
                </div>

                <div className="truck-moving">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-2xl">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                      <circle cx="7" cy="18" r="2" />
                      <circle cx="17" cy="18" r="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <span className="text-blue-100">Current Speed</span>
                <span className="font-bold text-2xl">45 km/h</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <span className="text-blue-100">Last Update</span>
                <span className="font-bold">12 sec ago</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <span className="text-blue-100">GPS Signal</span>
                <span className="px-3 py-1 rounded-full bg-green-500 text-white text-sm font-medium">
                  Strong
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700">
            <div className={`w-16 h-16 rounded-full ${colorClasses[primaryColor].bg} flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}>
              <Activity size={32} />
            </div>
            <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              500+
            </p>
            <p className="text-gray-600 dark:text-gray-400">Active Vehicles</p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 border border-emerald-200 dark:border-emerald-700">
            <div className="w-16 h-16 rounded-full bg-emerald-600 flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
              <Globe size={32} />
            </div>
            <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              37+
            </p>
            <p className="text-gray-600 dark:text-gray-400">Languages</p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-800/20 border border-violet-200 dark:border-violet-700">
            <div className="w-16 h-16 rounded-full bg-violet-600 flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
              <Clock size={32} />
            </div>
            <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              24/7
            </p>
            <p className="text-gray-600 dark:text-gray-400">GPS Tracking</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .truck-moving {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          animation: moveTruckHorizontal 8s ease-in-out infinite;
        }

        @keyframes moveTruckHorizontal {
          0% {
            left: 8%;
          }
          45% {
            left: 48%;
          }
          55% {
            left: 48%;
          }
          100% {
            left: 88%;
          }
        }
      `}</style>
    </section>
  );
}
