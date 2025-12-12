import React from 'react';
import { Zap } from 'lucide-react';

const ChargingInsights = ({ cycle }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Zap className="w-5 h-5 text-yellow-400" />
        Charging Insights
      </h2>
      
      <div className="space-y-4">
        <div className="p-4 bg-slate-700/50 rounded">
          <span className="text-slate-400 block mb-2">Charging Instances</span>
          <span className="text-3xl font-bold text-yellow-400">
            {cycle.charging_instances_count || 0}
          </span>
          <p className="text-xs text-slate-500 mt-1">
            Number of times battery was charged this cycle
          </p>
        </div>

        <div className="p-4 bg-slate-700/50 rounded">
          <span className="text-slate-400 block mb-2">Average Charge Start SOC</span>
          <span className="text-2xl font-bold">
            {cycle.average_charge_start_soc?.toFixed(1) || 'N/A'}%
          </span>
          <p className="text-xs text-slate-500 mt-1">
            Average battery level when charging began
          </p>
        </div>

        <div className="p-3 bg-blue-900/20 border border-blue-700 rounded">
          <p className="text-sm text-blue-200">
            <strong>Best Practice:</strong> For LFP batteries, charging from 20-30% to 80-90% 
            maximizes cycle life. Occasional full charges help with cell balancing.
          </p>
        </div>

        {cycle.charging_instances_count === 0 && (
          <div className="p-3 bg-orange-900/20 border border-orange-700 rounded">
            <p className="text-sm text-orange-200">
              No charging events detected in this cycle
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChargingInsights;
