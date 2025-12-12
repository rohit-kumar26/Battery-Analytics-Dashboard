import React from 'react';
import { Gauge, Navigation, TrendingUp } from 'lucide-react';

const PerformanceMetrics = ({ cycle }) => {
  const hasMovementData = cycle.total_distance > 0 || cycle.average_speed > 0 || cycle.max_speed > 0;
  
  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Gauge className="w-5 h-5 text-blue-400" />
        Performance Metrics
      </h2>
      
      {!hasMovementData && (
        <div className="mb-4 p-3 bg-yellow-900/20 border border-yellow-700 rounded">
          <p className="text-sm text-yellow-200">
            <strong>Note:</strong> No movement data recorded for this cycle. Battery may be in stationary testing or GPS data unavailable.
          </p>
        </div>
      )}
      
      <div className="space-y-4">
        <div className="p-4 bg-slate-700/50 rounded">
          <div className="flex items-center gap-2 text-slate-400 mb-2">
            <Navigation className="w-4 h-4" />
            <span>Total Distance</span>
          </div>
          <span className={`text-2xl font-bold ${hasMovementData ? 'text-blue-400' : 'text-slate-500'}`}>
            {cycle.total_distance?.toFixed(2) || '0.00'} km
          </span>
          {!hasMovementData && <span className="text-xs text-slate-500 block mt-1">No movement detected</span>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-slate-700/50 rounded">
            <div className="flex items-center gap-2 text-slate-400 mb-1">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">Avg Speed</span>
            </div>
            <span className={`text-xl font-semibold ${hasMovementData ? '' : 'text-slate-500'}`}>
              {cycle.average_speed?.toFixed(1) || '0.0'} km/h
            </span>
          </div>

          <div className="p-3 bg-slate-700/50 rounded">
            <span className="text-sm text-slate-400 block mb-1">Max Speed</span>
            <span className={`text-xl font-semibold ${hasMovementData ? 'text-orange-400' : 'text-slate-500'}`}>
              {cycle.max_speed?.toFixed(1) || '0.0'} km/h
            </span>
          </div>
        </div>

        <div className="p-3 bg-slate-700/50 rounded">
          <span className="text-slate-400 block mb-1">Average Temperature</span>
          <span className="text-xl font-semibold">
            {cycle.average_temperature?.toFixed(1) || 'N/A'}°C
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 bg-slate-700/50 rounded text-center">
            <span className="text-xs text-slate-400 block mb-1">Voltage Avg</span>
            <span className="text-sm font-semibold">{cycle.voltage_avg?.toFixed(1) || 'N/A'}V</span>
          </div>
          <div className="p-3 bg-slate-700/50 rounded text-center">
            <span className="text-xs text-slate-400 block mb-1">Voltage Min</span>
            <span className="text-sm font-semibold text-red-400">{cycle.voltage_min?.toFixed(1) || 'N/A'}V</span>
          </div>
          <div className="p-3 bg-slate-700/50 rounded text-center">
            <span className="text-xs text-slate-400 block mb-1">Voltage Max</span>
            <span className="text-sm font-semibold text-green-400">{cycle.voltage_max?.toFixed(1) || 'N/A'}V</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
