'use client';

import { MapPin, Clock, Navigation, Bell } from 'lucide-react';
import { useTheme, colorClasses } from '@/lib/theme-context';

export default function Tracking() {
  const { primaryColor } = useTheme();

  const steps = [
    { label: 'Trip Created', status: 'completed' },
    { label: 'Vehicle Assigned', status: 'completed' },
    { label: 'Driver Dispatched', status: 'completed' },
    { label: 'In Transit', status: 'active' },
    { label: 'Arriving Soon', status: 'pending' },
    { label: 'Completed', status: 'pending' },
  ];

  return (
    <section
      id="tracking"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Tracking That Feels Like Consumer Apps
          </h2>
          <p className="text-xl text-slate-700 dark:text-slate-300 mb-2">
            Advanced UTrack Journey Experience
          </p>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Monitor every journey with real-time updates, visual route tracking, and intelligent notifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 mb-8">
          {/* LEFT: Live route + key features */}
          <div className="space-y-8">
            {/* Live Route Tracking */}
            <div className="bg-white/95 dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-[0_18px_50px_rgba(15,23,42,0.35)] border border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Live Route Tracking
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Flipkart-style journey view with live status and route path
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-700 text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Tracking
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Updated: 12 sec ago
                  </span>
                </div>
              </div>

              {/* small stats row */}
              <div className="grid grid-cols-3 gap-3 mb-5 text-xs sm:text-sm">
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/80 px-3 py-2 flex flex-col">
                  <span className="text-slate-500 dark:text-slate-400">Trip ID</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    UTR-TRP-9842
                  </span>
                </div>
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/80 px-3 py-2 flex flex-col">
                  <span className="text-slate-500 dark:text-slate-400">Route</span>
                  <span className="font-semibold text-slate-900 dark:text-white truncate">
                    JNTU &rarr; Hyderabad City
                  </span>
                </div>
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/80 px-3 py-2 flex flex-col">
                  <span className="text-slate-500 dark:text-slate-400">ETA</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    2h 15m
                  </span>
                </div>
              </div>

              {/* Map / path area */}
              <div className="relative h-72 sm:h-80 rounded-2xl bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-900 overflow-hidden">
                {/* subtle grid */}
                <div className="absolute inset-0 opacity-30 dark:opacity-40">
                  <div className="grid grid-cols-12 h-full">
                    {Array.from({ length: 60 }).map((_, i) => (
                      <div
                        key={i}
                        className="border-r border-b border-slate-200 dark:border-slate-600"
                      />
                    ))}
                  </div>
                </div>

                {/* curved route path */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="40%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 10 70 Q 25 60, 35 50 T 55 40 T 75 30 T 90 20"
                    stroke="url(#routeGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="5,6"
                    strokeLinecap="round"
                  />
                </svg>

                {/* origin */}
                <div className="absolute top-[70%] left-[10%] flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg">
                    <MapPin size={16} />
                  </div>
                  <span className="mt-1 px-2 py-1 rounded bg-white/90 dark:bg-slate-900 text-[11px] font-medium shadow">
                    Origin
                  </span>
                </div>

                {/* waypoints */}
                <div className="absolute top-[56%] left-[28%] w-4 h-4 rounded-full bg-blue-500 shadow-lg animate-pulse" />
                <div className="absolute top-[46%] left-[45%] w-4 h-4 rounded-full bg-blue-500 shadow-lg animate-pulse" />
                <div className="absolute top-[34%] left-[65%] w-4 h-4 rounded-full bg-blue-500 shadow-lg animate-pulse" />

                {/* destination */}
                <div className="absolute top-[20%] left-[90%] flex flex-col items-center -translate-x-1/2">
                  <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white shadow-lg">
                    <MapPin size={16} />
                  </div>
                  <span className="mt-1 px-2 py-1 rounded bg-white/90 dark:bg-slate-900 text-[11px] font-medium shadow">
                    Destination
                  </span>
                </div>

                {/* truck moving along route – NOW USING UTrack LOGO */}
                <div className="truck-container">
                  <div
                    className={`truck-icon rounded-lg p-2 shadow-xl bg-gradient-to-br ${colorClasses[primaryColor].gradient}`}
                  >
                    <img
                      src="https://vms-admin.pragatiutrack.com/logo.svg"
                      alt="UTrack Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Key features */}
            <div className="bg-white/95 dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200/80 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5">
                Key Journey Features
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className={colorClasses[primaryColor].text} />
                  <p className="text-slate-700 dark:text-slate-200">
                    Real-time GPS location updates every 10 seconds with route-level context.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Bell size={20} className={colorClasses[primaryColor].text} />
                  <p className="text-slate-700 dark:text-slate-200">
                    Ignition, overspeed, and harsh driving alerts delivered instantly.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Navigation size={20} className={colorClasses[primaryColor].text} />
                  <p className="text-slate-700 dark:text-slate-200">
                    Route deviation detection with auto rerouting and manager notifications.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={20} className={colorClasses[primaryColor].text} />
                  <p className="text-slate-700 dark:text-slate-200">
                    Push notifications for ETAs, delays, and arrival confirmations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Timeline + summary */}
          <div className="space-y-8">
            {/* Trip Timeline */}
            <div className="bg-white/95 dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200/80 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Trip Timeline
              </h3>

              <div className="relative pl-4">
                {/* vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-blue-500 to-slate-300 dark:from-emerald-400 dark:via-blue-500 dark:to-slate-700" />
                <div className="space-y-4">
                  {steps.map((step, index) => {
                    const isLast = index === steps.length - 1;
                    return (
                      <div key={index} className="relative flex items-start gap-4">
                        <div className="relative z-10 mt-0.5">
                          <div
                            className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold
                              ${step.status === 'completed'
                                ? `${colorClasses[primaryColor].bg} text-white shadow-md`
                                : step.status === 'active'
                                  ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 ring-4 ring-blue-100 dark:ring-blue-900'
                                  : 'bg-slate-200 dark:bg-slate-700 text-slate-500'
                              }
                            `}
                          >
                            {step.status === 'completed' ? '✓' : index + 1}
                          </div>
                          {!isLast && (
                            <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 h-4 w-px bg-slate-200 dark:bg-slate-700" />
                          )}
                        </div>

                        <div className="flex-1">
                          <p
                            className={`font-semibold text-sm sm:text-base ${step.status === 'active'
                                ? 'text-blue-600 dark:text-blue-400'
                                : 'text-slate-900 dark:text-white'
                              }`}
                          >
                            {step.label}
                          </p>
                          {step.status === 'active' && (
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                              Currently in progress – live GPS &amp; alerts enabled
                            </p>
                          )}
                          {step.status === 'completed' && (
                            <p className="text-xs text-slate-500 dark:text-slate-500">
                              Completed successfully
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Trip Summary */}
            <div
              className={`
                bg-gradient-to-br ${colorClasses[primaryColor].gradient}
                rounded-2xl p-7 sm:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.75)] text-white
              `}
            >
              <h3 className="text-2xl font-bold mb-5">Trip Summary</h3>
              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex justify-between items-center gap-4">
                  <span className="text-blue-100/90">Vehicle ID</span>
                  <span className="font-semibold">TN-42-XY-1234</span>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <span className="text-blue-100/90">Driver</span>
                  <span className="font-semibold">Rajesh Kumar</span>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <span className="text-blue-100/90">Status</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs sm:text-sm font-semibold">
                    In Transit
                  </span>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <span className="text-blue-100/90">ETA</span>
                  <span className="font-semibold">2h 15m</span>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <span className="text-blue-100/90">Distance Remaining</span>
                  <span className="font-semibold">87 km</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 text-xs sm:text-sm text-blue-100/90 flex flex-wrap gap-3">
                <span>Ignition alerts</span>
                <span>Route deviation monitoring</span>
                <span>Push notifications enabled</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .truck-container {
          position: absolute;
          animation: moveTruck 15s ease-in-out infinite;
        }

        @keyframes moveTruck {
          0% {
            top: 70%;
            left: 10%;
          }
          20% {
            top: 60%;
            left: 25%;
          }
          40% {
            top: 50%;
            left: 35%;
          }
          60% {
            top: 40%;
            left: 55%;
          }
          80% {
            top: 30%;
            left: 75%;
          }
          100% {
            top: 20%;
            left: 90%;
          }
        }
      `}</style>
    </section>
  );
}