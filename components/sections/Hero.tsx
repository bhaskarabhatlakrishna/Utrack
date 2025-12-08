'use client';

import {
  ArrowRight,
  Play,
  TrendingUp,
  AlertCircle,
  MapPin,
  CheckCircle,
} from 'lucide-react';
import { useTheme, colorClasses } from '@/lib/theme-context';

export default function Hero() {
  const { primaryColor } = useTheme();

  const scrollToModules = () => {
    const element = document.querySelector('#modules');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] pt-20 lg:pt-24 pb-14 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      {/* floating background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-20 -left-10 w-72 h-72 bg-gradient-to-br ${colorClasses[primaryColor].gradient} opacity-30 rounded-full blur-3xl animate-float`}
        />
        <div className="absolute bottom-[-4rem] right-[-4rem] w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 bg-violet-500/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: copy + CTAs */}
          <div className="space-y-7">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 dark:bg-blue-900/20 dark:border-blue-800 text-xs sm:text-sm text-blue-700 dark:text-blue-300 font-medium shadow-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span>Powered by RAMKI Technologies Pvt Ltd</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.15rem] font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
                Smart Fleet, GPS &amp; Logistics Control
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500">
                  for Modern Businesses
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                End-to-end vehicle, trip, warehouse, and accounts control – powered
                by real-time GPS and smart automation.
              </p>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-lg">
                A unified platform for vehicles, drivers, GPS tracking, trips,
                invoices, tickets, and complete operational intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
              <a
                href="https://vms-admin.pragatiutrack.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center space-x-2 px-7 sm:px-8 py-3.5 rounded-xl text-white text-sm sm:text-base font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-[1.03] bg-gradient-to-r ${colorClasses[primaryColor].gradient}`}
              >
                <span>Request Demo</span>
                <ArrowRight size={18} />
              </a>
              <button
                onClick={scrollToModules}
                className="inline-flex items-center justify-center space-x-2 px-7 sm:px-8 py-3.5 rounded-xl bg-white/90 dark:bg-slate-900 text-slate-900 dark:text-white text-sm sm:text-base font-semibold border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-lg"
              >
                <Play size={18} />
                <span>Explore Modules</span>
              </button>
            </div>

            {/* quick stats strip */}
            <div className="flex flex-wrap gap-3 pt-2 text-xs sm:text-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white dark:bg-slate-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>500+ Active Vehicles</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-100">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>37+ Languages</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-100">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                <span>24/7 GPS Tracking</span>
              </div>
            </div>
          </div>

          {/* Right: dashboard mockup */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-2rem] left-[-2rem] w-44 h-44 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative bg-white/95 dark:bg-slate-900 rounded-2xl shadow-[0_22px_60px_rgba(15,23,42,0.45)] p-5 sm:p-6 space-y-5 border border-slate-200/80 dark:border-slate-700/80 animate-float-slow">
              {/* header */}
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-800 dark:text-white">
                    Fleet Command Center
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Live overview · Last updated 12s ago
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200/70 dark:border-emerald-700/70 text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              </div>

              {/* KPI cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-900 border border-blue-100/80 dark:border-slate-700">
                  <div className="flex items-center mb-1.5">
                    <div
                      className={`w-9 h-9 rounded-lg ${colorClasses[primaryColor].bg} flex items-center justify-center text-white shadow-md`}
                    >
                      <TrendingUp size={18} />
                    </div>
                  </div>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">487</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Active Vehicles
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-gradient-to-br from-emerald-50 via-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:via-emerald-900/20 dark:to-teal-900/30 border border-emerald-100/80 dark:border-emerald-700">
                  <div className="flex items-center mb-1.5">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md">
                      <MapPin size={18} />
                    </div>
                  </div>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">142</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Running Trips</p>
                </div>

                <div className="p-3.5 rounded-xl bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-amber-900/30 dark:via-amber-900/20 dark:to-amber-950 border border-amber-100/80 dark:border-amber-700">
                  <div className="flex items-center mb-1.5">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-md">
                      <CheckCircle size={18} />
                    </div>
                  </div>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">23</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Open Tickets</p>
                </div>

                <div className="p-3.5 rounded-xl bg-gradient-to-br from-rose-50 via-red-50 to-rose-100 dark:from-rose-900/30 dark:via-rose-900/20 dark:to-rose-950 border border-rose-100/80 dark:border-rose-700">
                  <div className="flex items-center mb-1.5">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-rose-500 to-red-500 flex items-center justify-center text-white shadow-md">
                      <AlertCircle size={18} />
                    </div>
                  </div>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">12</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Alerts Today</p>
                </div>
              </div>

              {/* fake chart / map */}
              <div className="relative h-40 sm:h-44 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 overflow-hidden">
                {/* grid */}
                <div className="absolute inset-0 opacity-30 dark:opacity-40">
                  <div className="grid grid-cols-8 h-full">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <div
                        key={i}
                        className="border-r border-b border-slate-200 dark:border-slate-600"
                      />
                    ))}
                  </div>
                </div>
                {/* path */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 8 78 Q 28 42, 50 52 T 92 20"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="4,4"
                  />
                </svg>
                {/* points */}
                <div className="absolute top-[62%] left-[10%] w-3 h-3 bg-blue-600 rounded-full shadow-lg animate-pulse" />
                <div className="absolute top-[45%] left-[48%] w-3 h-3 bg-emerald-500 rounded-full shadow-lg animate-pulse" />
                <div className="absolute top-[24%] left-[86%] w-3 h-3 bg-rose-500 rounded-full shadow-lg animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-16px);
          }
        }
        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-22px);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-float {
          animation: float 7s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 9s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 11s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
