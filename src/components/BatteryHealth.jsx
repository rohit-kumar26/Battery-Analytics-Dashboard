import React from 'react';
import { Battery, TrendingDown } from 'lucide-react';

const BatteryHealth = ({ cycle }) => {
  const getSOCColor = (soc) => {
    if (soc >= 80) return 'text-green-400';
    if (soc >= 50) return 'text-yellow-400';
    if (soc >= 20) return 'text-orange-400';
    return 'text-red-400';
  };

  const getSOCBarColor = (soc) => {
    if (soc >= 80) return 'bg-green-500';
    if (soc >= 50) return 'bg-yellow-500';
    if (soc >= 20) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Battery className="w-5 h-5 text-green-400" />
        Battery Health (SOC & SOH)
      </h2>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-400">Average SOC</span>
            <span className={`text-2xl font-bold ${getSOCColor(cycle.average_soc || 0)}`}>
              {cycle.average_soc?.toFixed(1) || 'N/A'}%
            </span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3">
            <div
              className={`h-3 rounded-full ${getSOCBarColor(cycle.average_soc || 0)}`}
              style={{ width: `${cycle.average_soc || 0}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-slate-700/50 rounded">
            <span className="text-sm text-slate-400 block mb-1">Min SOC</span>
            <span className={`text-xl font-semibold ${getSOCColor(cycle.min_soc || 0)}`}>
              {cycle.min_soc?.toFixed(1) || 'N/A'}%
            </span>
          </div>
          <div className="p-3 bg-slate-700/50 rounded">
            <span className="text-sm text-slate-400 block mb-1">Max SOC</span>
            <span className={`text-xl font-semibold ${getSOCColor(cycle.max_soc || 0)}`}>
              {cycle.max_soc?.toFixed(1) || 'N/A'}%
            </span>
          </div>
        </div>

        <div className="p-4 bg-slate-700/50 rounded">
          <div className="flex items-center gap-2 text-slate-400 mb-2">
            <TrendingDown className="w-4 h-4" />
            <span>SOH Drop This Cycle</span>
          </div>
          <span className="text-2xl font-bold text-orange-400">
            {cycle.soh_drop?.toFixed(4) || 'N/A'}%
          </span>
          <p className="text-xs text-slate-500 mt-1">
            State of Health degradation during this cycle
          </p>
        </div>

        <div className="p-3 bg-blue-900/20 border border-blue-700 rounded">
          <p className="text-sm text-blue-200">
            <strong>Note:</strong> LFP batteries typically maintain 80% capacity after 2000-3000 cycles
          </p>
        </div>
      </div>
    </div>
  );
};

export default BatteryHealth;
