import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CycleNavigator = ({ allCycles, currentCycle, onCycleChange }) => {
  const currentIndex = allCycles.findIndex(c => c.cycle_number === currentCycle.cycle_number);
  
  const handlePrevious = () => {
    if (currentIndex > 0) {
      onCycleChange(allCycles[currentIndex - 1].cycle_number);
    }
  };

  const handleNext = () => {
    if (currentIndex < allCycles.length - 1) {
      onCycleChange(allCycles[currentIndex + 1].cycle_number);
    }
  };

  return (
    <div className="bg-slate-800 rounded-lg p-6 mb-6 border border-slate-700">
      <h2 className="text-xl font-semibold mb-4">Cycle Navigation</h2>
      <div className="flex items-center gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex-1">
          <input
            type="range"
            min={0}
            max={allCycles.length - 1}
            value={currentIndex}
            onChange={(e) => onCycleChange(allCycles[parseInt(e.target.value)].cycle_number)}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
          />
          <div className="flex justify-between text-sm text-slate-400 mt-2">
            <span>Cycle 1</span>
            <span className="font-semibold text-green-400">
              Cycle {currentCycle.cycle_number} of {allCycles.length}
            </span>
            <span>Cycle {allCycles.length}</span>
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex === allCycles.length - 1}
          className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="mt-4">
        <label className="block text-sm text-slate-400 mb-2">Jump to Cycle:</label>
        <select
          value={currentCycle.cycle_number}
          onChange={(e) => onCycleChange(parseInt(e.target.value))}
          className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {allCycles.map((cycle) => (
            <option key={cycle.cycle_number} value={cycle.cycle_number}>
              Cycle {cycle.cycle_number}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CycleNavigator;
