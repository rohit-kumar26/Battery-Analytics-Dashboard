import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingDown } from 'lucide-react';

const LongTermTrends = ({ allCycles }) => {
  const [zoomSOH, setZoomSOH] = React.useState(false);

  const trendData = allCycles.map(cycle => ({
    cycle: cycle.cycle_number,
    soh_drop: cycle.soh_drop || 0,
    avg_soc: cycle.average_soc || 0,
    avg_temp: cycle.average_temperature || 0,
    distance: cycle.total_distance || 0,
  }));

  const cumulativeSOH = trendData.reduce((acc, curr, idx) => {
    const prevSOH = idx > 0 ? acc[idx - 1].cumulative_soh : 100;
    acc.push({
      cycle: curr.cycle,
      cumulative_soh: prevSOH - curr.soh_drop,
    });
    return acc;
  }, []);

  const totalDegradation = 100 - (cumulativeSOH[cumulativeSOH.length - 1]?.cumulative_soh || 100);
  const minSOH = Math.min(...cumulativeSOH.map(d => d.cumulative_soh));
  const maxSOH = Math.max(...cumulativeSOH.map(d => d.cumulative_soh));

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <TrendingDown className="w-5 h-5 text-purple-400" />
        Long-Term Trends Analysis
      </h2>

      <div className="space-y-8">
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-slate-300">SOH Degradation Over Time</h3>
            <button
              onClick={() => setZoomSOH(!zoomSOH)}
              className="px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded text-sm"
            >
              {zoomSOH ? 'Show Full Scale (0-100%)' : 'Zoom to Data Range'}
            </button>
          </div>
          <div className="mb-2 p-3 bg-blue-900/20 border border-blue-700 rounded">
            <p className="text-sm text-blue-200">
              <strong>Excellent Battery Health!</strong> Total degradation: <strong>{totalDegradation.toFixed(4)}%</strong> after {allCycles.length} cycles. 
              Current SOH: <strong>{(cumulativeSOH[cumulativeSOH.length - 1]?.cumulative_soh || 100).toFixed(4)}%</strong>
            </p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={cumulativeSOH}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis 
                dataKey="cycle" 
                stroke="#94a3b8"
                tick={{ fill: '#94a3b8' }}
                label={{ value: 'Cycle Number', position: 'insideBottom', offset: -5, fill: '#94a3b8' }}
              />
              <YAxis 
                stroke="#94a3b8"
                tick={{ fill: '#94a3b8' }}
                domain={zoomSOH ? [minSOH - 0.01, maxSOH + 0.01] : [0, 100]}
                label={{ value: 'SOH (%)', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
                tickFormatter={(value) => zoomSOH ? value.toFixed(3) : value.toFixed(0)}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#e2e8f0'
                }}
                formatter={(value) => [value.toFixed(4) + '%', 'SOH']}
              />
              <Line 
                type="monotone" 
                dataKey="cumulative_soh" 
                stroke="#a855f7" 
                strokeWidth={2}
                dot={false}
                name="Cumulative SOH"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-slate-300">Average SOC Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis 
                dataKey="cycle" 
                stroke="#94a3b8"
                tick={{ fill: '#94a3b8' }}
                label={{ value: 'Cycle Number', position: 'insideBottom', offset: -5, fill: '#94a3b8' }}
              />
              <YAxis 
                stroke="#94a3b8"
                tick={{ fill: '#94a3b8' }}
                label={{ value: 'SOC (%)', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#e2e8f0'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="avg_soc" 
                stroke="#22c55e" 
                strokeWidth={2}
                dot={{ fill: '#22c55e', r: 3 }}
                name="Avg SOC"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-slate-300">Temperature Trends</h3>
          {trendData.every(d => d.distance === 0) && (
            <div className="mb-2 p-3 bg-yellow-900/20 border border-yellow-700 rounded">
              <p className="text-sm text-yellow-200">
                <strong>Note:</strong> No distance data available across cycles. Showing temperature trends only.
              </p>
            </div>
          )}
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis 
                dataKey="cycle" 
                stroke="#94a3b8"
                tick={{ fill: '#94a3b8' }}
                label={{ value: 'Cycle Number', position: 'insideBottom', offset: -5, fill: '#94a3b8' }}
              />
              <YAxis 
                stroke="#94a3b8"
                tick={{ fill: '#94a3b8' }}
                label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#e2e8f0'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="avg_temp" 
                stroke="#ef4444" 
                strokeWidth={2}
                dot={false}
                name="Avg Temperature (°C)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="p-4 bg-slate-700/50 rounded text-center">
            <p className="text-xs text-slate-400 mb-1">Total Cycles</p>
            <p className="text-2xl font-bold text-purple-400">{allCycles.length}</p>
          </div>
          <div className="p-4 bg-slate-700/50 rounded text-center">
            <p className="text-xs text-slate-400 mb-1">Avg SOH Drop/Cycle</p>
            <p className="text-2xl font-bold text-orange-400">
              {(trendData.reduce((sum, d) => sum + d.soh_drop, 0) / trendData.length).toFixed(4)}%
            </p>
          </div>
          <div className="p-4 bg-slate-700/50 rounded text-center">
            <p className="text-xs text-slate-400 mb-1">Total Distance</p>
            <p className={`text-2xl font-bold ${trendData.reduce((sum, d) => sum + d.distance, 0) > 0 ? 'text-blue-400' : 'text-slate-500'}`}>
              {trendData.reduce((sum, d) => sum + d.distance, 0).toFixed(1)} km
            </p>
            {trendData.reduce((sum, d) => sum + d.distance, 0) === 0 && (
              <p className="text-xs text-slate-500 mt-1">No movement data</p>
            )}
          </div>
          <div className="p-4 bg-slate-700/50 rounded text-center">
            <p className="text-xs text-slate-400 mb-1">Avg Temperature</p>
            <p className="text-2xl font-bold text-red-400">
              {(trendData.reduce((sum, d) => sum + d.avg_temp, 0) / trendData.length).toFixed(1)}°C
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongTermTrends;
