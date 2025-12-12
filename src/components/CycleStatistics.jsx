import React from 'react';
import { Calendar, Clock, Activity } from 'lucide-react';

const CycleStatistics = ({ cycle }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Activity className="w-5 h-5 text-green-400" />
        Cycle Statistics
      </h2>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded">
          <span className="text-slate-400">Cycle Number</span>
          <span className="font-semibold text-lg text-green-400">{cycle.cycle_number}</span>
        </div>

        <div className="p-3 bg-slate-700/50 rounded">
          <div className="flex items-center gap-2 text-slate-400 mb-1">
            <Calendar className="w-4 h-4" />
            <span>Start Time</span>
          </div>
          <span className="text-sm">{formatDate(cycle.cycle_start_time)}</span>
        </div>

        <div className="p-3 bg-slate-700/50 rounded">
          <div className="flex items-center gap-2 text-slate-400 mb-1">
            <Calendar className="w-4 h-4" />
            <span>End Time</span>
          </div>
          <span className="text-sm">{formatDate(cycle.cycle_end_time)}</span>
        </div>

        <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded">
          <div className="flex items-center gap-2 text-slate-400">
            <Clock className="w-4 h-4" />
            <span>Duration</span>
          </div>
          <span className="font-semibold">{cycle.cycle_duration_hours?.toFixed(2) || 'N/A'} hours</span>
        </div>

        <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded">
          <span className="text-slate-400">SOH Drop</span>
          <span className="font-semibold text-orange-400">{cycle.soh_drop?.toFixed(3) || 'N/A'}%</span>
        </div>
      </div>
    </div>
  );
};

export default CycleStatistics;
