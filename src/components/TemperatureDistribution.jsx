import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Thermometer } from 'lucide-react';

const TemperatureDistribution = ({ cycle }) => {
  const [samplingRate, setSamplingRate] = useState('5deg');

  const getTemperatureData = () => {
    const distKey = `temperature_dist_${samplingRate}`;
    const distribution = cycle[distKey];
    
    if (!distribution) return [];

    return Object.entries(distribution).map(([range, minutes]) => ({
      range,
      minutes: parseFloat(minutes) || 0,
    }));
  };

  const data = getTemperatureData();

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Thermometer className="w-5 h-5 text-red-400" />
          Temperature Distribution
        </h2>
        <div className="flex gap-2">
          {['5deg', '10deg', '15deg', '20deg'].map((rate) => (
            <button
              key={rate}
              onClick={() => setSamplingRate(rate)}
              className={`px-3 py-1 rounded text-sm ${
                samplingRate === rate
                  ? 'bg-green-500 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {rate.replace('deg', '°C')}
            </button>
          ))}
        </div>
      </div>

      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis 
              dataKey="range" 
              stroke="#94a3b8"
              tick={{ fill: '#94a3b8' }}
            />
            <YAxis 
              stroke="#94a3b8"
              tick={{ fill: '#94a3b8' }}
              label={{ value: 'Minutes', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1e293b', 
                border: '1px solid #334155',
                borderRadius: '8px',
                color: '#e2e8f0'
              }}
              formatter={(value) => [`${value.toFixed(2)} min`, 'Time']}
            />
            <Bar dataKey="minutes" fill="#ef4444" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <div className="h-64 flex items-center justify-center text-slate-400">
          No temperature distribution data available
        </div>
      )}
    </div>
  );
};

export default TemperatureDistribution;
