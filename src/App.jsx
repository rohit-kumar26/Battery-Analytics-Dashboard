import { useState, useEffect } from 'react';
import { batteryApi } from './api/batteryApi';
import { mockCycles, mockSummary } from './data/mockData';
import BatterySelector from './components/BatterySelector';
import CycleNavigator from './components/CycleNavigator';
import CycleStatistics from './components/CycleStatistics';
import PerformanceMetrics from './components/PerformanceMetrics';
import TemperatureDistribution from './components/TemperatureDistribution';
import BatteryHealth from './components/BatteryHealth';
import AlertsPanel from './components/AlertsPanel';
import ChargingInsights from './components/ChargingInsights';
import LongTermTrends from './components/LongTermTrends';
import { Battery } from 'lucide-react';

function App() {
  const [batteries, setBatteries] = useState([]);
  const [selectedImei, setSelectedImei] = useState('865044073967657');
  const [allCycles, setAllCycles] = useState([]);
  const [currentCycle, setCurrentCycle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [useMockData, setUseMockData] = useState(false);

  useEffect(() => {
    loadBatterySummary();
  }, [useMockData]);

  useEffect(() => {
    if (selectedImei) {
      loadCycleData();
    }
  }, [selectedImei, useMockData]);

  const loadBatterySummary = async () => {
    try {
      if (useMockData) {
        setBatteries(mockSummary);
      } else {
        const summary = await batteryApi.getSummary();
        setBatteries(summary);
      }
    } catch (err) {
      console.error('Summary API Error:', err);
      // Don't show error for summary, just use empty array
      setBatteries([]);
    }
  };

  const loadCycleData = async () => {
    setLoading(true);
    setError(null);
    try {
      if (useMockData) {
        // Use mock data
        console.log('Using mock data');
        setAllCycles(mockCycles);
        if (mockCycles.length > 0) {
          setCurrentCycle(mockCycles[mockCycles.length - 1]);
        }
      } else {
        // Try real API
        console.log('Fetching data for IMEI:', selectedImei);
        const snapshots = await batteryApi.getSnapshots(selectedImei, 1000);
        console.log('Received snapshots:', snapshots);
        console.log('Snapshots type:', typeof snapshots);
        console.log('Is array?', Array.isArray(snapshots));
        
        if (Array.isArray(snapshots) && snapshots.length > 0) {
          setAllCycles(snapshots);
          setCurrentCycle(snapshots[snapshots.length - 1]);
        } else if (snapshots && typeof snapshots === 'object') {
          // API returns an object, let's check all possible keys
          console.log('Snapshots keys:', Object.keys(snapshots));
          console.log('Full snapshots object:', JSON.stringify(snapshots, null, 2));
          
          // Try common API response patterns
          let cycleData = null;
          
          if (snapshots.data && Array.isArray(snapshots.data)) {
            cycleData = snapshots.data;
          } else if (snapshots.snapshots && Array.isArray(snapshots.snapshots)) {
            cycleData = snapshots.snapshots;
          } else if (snapshots.results && Array.isArray(snapshots.results)) {
            cycleData = snapshots.results;
          } else if (snapshots.items && Array.isArray(snapshots.items)) {
            cycleData = snapshots.items;
          } else if (snapshots.cycles && Array.isArray(snapshots.cycles)) {
            cycleData = snapshots.cycles;
          } else {
            // Check if any value in the object is an array
            for (const key of Object.keys(snapshots)) {
              if (Array.isArray(snapshots[key])) {
                console.log(`Found array in key: ${key}`);
                cycleData = snapshots[key];
                break;
              }
            }
          }
          
          if (cycleData && cycleData.length > 0) {
            console.log('Using cycle data:', cycleData);
            setAllCycles(cycleData);
            setCurrentCycle(cycleData[cycleData.length - 1]);
          } else {
            throw new Error(`Unexpected API response format. Keys: ${Object.keys(snapshots).join(', ')}`);
          }
        } else {
          throw new Error('No cycle data received');
        }
      }
    } catch (err) {
      console.error('API Error:', err);
      console.error('Error response:', err.response);
      const errorMsg = err.response?.data?.message || err.message;
      setError(`Failed to load cycle data: ${errorMsg}. Click "Use Demo Data" to see the dashboard with sample data.`);
    } finally {
      setLoading(false);
    }
  };

  const handleCycleChange = (cycleNumber) => {
    const cycle = allCycles.find(c => c.cycle_number === cycleNumber);
    if (cycle) {
      setCurrentCycle(cycle);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <header className="bg-slate-800 border-b border-slate-700 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Battery className="w-8 h-8 text-green-400" />
            <h1 className="text-3xl font-bold text-white">Zenfinity Battery Analytics</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <BatterySelector
          batteries={batteries}
          selectedImei={selectedImei}
          onSelectImei={setSelectedImei}
        />

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-400"></div>
            <p className="mt-4 text-slate-400">Loading battery data...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-900/20 border border-red-500 text-red-200 px-4 py-3 rounded mb-6">
            <p className="mb-3">{error}</p>
            <button
              onClick={() => {
                setUseMockData(true);
                setError(null);
                loadBatterySummary();
                loadCycleData();
              }}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Use Demo Data
            </button>
          </div>
        )}

        {!loading && !error && !currentCycle && allCycles.length === 0 && (
          <div className="bg-yellow-900/20 border border-yellow-500 text-yellow-200 px-4 py-3 rounded mb-6">
            <p>No cycle data available. The API returned data but no cycles were found.</p>
            <p className="text-sm mt-2">Cycles received: {allCycles.length}</p>
          </div>
        )}

        {!loading && !error && currentCycle && (
          <>
            <CycleNavigator
              allCycles={allCycles}
              currentCycle={currentCycle}
              onCycleChange={handleCycleChange}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <CycleStatistics cycle={currentCycle} />
              <PerformanceMetrics cycle={currentCycle} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <TemperatureDistribution cycle={currentCycle} />
              <BatteryHealth cycle={currentCycle} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <AlertsPanel cycle={currentCycle} />
              <ChargingInsights cycle={currentCycle} />
            </div>

            <LongTermTrends allCycles={allCycles} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
