import React from 'react';

const BatterySelector = ({ batteries, selectedImei, onSelectImei }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 mb-6 border border-slate-700">
      <label className="block text-sm font-medium text-slate-300 mb-2">
        Select Battery IMEI
      </label>
      <select
        value={selectedImei}
        onChange={(e) => onSelectImei(e.target.value)}
        className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="865044073967657">865044073967657</option>
        <option value="865044073949366">865044073949366</option>
      </select>
      {batteries.length > 0 && (
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {batteries.map((battery) => (
            <div key={battery.imei} className="bg-slate-700/50 rounded p-3">
              <p className="text-xs text-slate-400">Total Cycles</p>
              <p className="text-lg font-semibold">{battery.total_cycles || 'N/A'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BatterySelector;
