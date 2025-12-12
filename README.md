# Zenfinity Battery Analytics Dashboard

A comprehensive battery analytics dashboard built for Zenfinity Energy's internship assessment. This application visualizes battery telemetry data, cycle performance, and long-term health trends for Li-ion battery packs.

## Features

### Core Functionality
- **Battery Selection**: Switch between authorized battery IMEIs
- **Cycle Navigation**: Navigate through battery cycles using slider, buttons, or dropdown
- **Real-time Data Visualization**: Interactive charts and graphs using Recharts

### Dashboard Components

1. **Cycle Statistics**
   - Cycle number, start/end times, duration
   - State of Health (SOH) drop per cycle

2. **Performance Metrics**
   - Total distance traveled
   - Average and maximum speed
   - Voltage statistics (min, max, average)
   - Average temperature

3. **Temperature Distribution**
   - Histogram showing time spent in temperature ranges
   - Toggle between 5°C, 10°C, 15°C, and 20°C sampling rates
   - Interactive visualization

4. **Battery Health (SOC & SOH)**
   - State of Charge (SOC) visualization with color-coded indicators
   - Min/Max SOC values
   - SOH degradation tracking
   - LFP battery lifecycle information

5. **Alerts & Safety**
   - Display warnings and protection events
   - Visual indicators for system status

6. **Charging Insights**
   - Number of charging instances
   - Average charge start SOC
   - Best practices for LFP batteries

7. **Long-Term Trends (Bonus)**
   - SOH degradation curve over all cycles
   - Average SOC trends
   - Temperature and distance correlation
   - Summary statistics

## Tech Stack

- **Frontend Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Build Tool**: Vite

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## API Integration

The dashboard connects to Zenfinity's Battery Snapshots API:
- **Base URL**: `https://zenfinity-intern-api-104290304048.europe-west1.run.app`
- **Authorized IMEIs**: 
  - 865044073967657
  - 865044073949366

### API Endpoints Used
- `GET /api/snapshots/summary` - Battery summary
- `GET /api/snapshots` - Cycle snapshots with pagination
- `GET /api/snapshots/{imei}/latest` - Latest cycle
- `GET /api/snapshots/{imei}/cycles/{cycle_number}` - Specific cycle details

## Project Structure

```
├── src/
│   ├── api/
│   │   └── batteryApi.js          # API integration layer
│   ├── components/
│   │   ├── AlertsPanel.jsx        # Warnings & protections
│   │   ├── BatteryHealth.jsx      # SOC & SOH visualization
│   │   ├── BatterySelector.jsx    # IMEI selection
│   │   ├── ChargingInsights.jsx   # Charging statistics
│   │   ├── CycleNavigator.jsx     # Cycle navigation controls
│   │   ├── CycleStatistics.jsx    # Cycle metadata
│   │   ├── LongTermTrends.jsx     # Historical analysis
│   │   ├── PerformanceMetrics.jsx # Speed, distance, voltage
│   │   └── TemperatureDistribution.jsx # Temperature histogram
│   ├── App.jsx                    # Main application component
│   ├── main.jsx                   # Application entry point
│   └── index.css                  # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Key Insights & Analysis

### Battery Health Understanding
- **LFP Chemistry**: The dashboard is optimized for Lithium Iron Phosphate (LFP) batteries
- **Cycle Life**: LFP batteries typically maintain 80% capacity after 2000-3000 cycles
- **Optimal Charging**: Best practice is charging from 20-30% to 80-90% SOC

### Data Visualization Highlights
- Color-coded SOC indicators (green > 80%, yellow > 50%, orange > 20%, red < 20%)
- Temperature distribution with adjustable sampling rates
- Cumulative SOH degradation tracking
- Multi-axis charts for temperature vs distance correlation

## Design Decisions

1. **Clean, Dark Theme**: Reduces eye strain for extended monitoring sessions
2. **Responsive Layout**: Grid-based design adapts to different screen sizes
3. **Interactive Controls**: Slider, buttons, and dropdown for flexible navigation
4. **Color Coding**: Intuitive visual indicators for battery health status
5. **Modular Components**: Each dashboard section is a separate, reusable component

## Future Enhancements

- Real-time data streaming with WebSocket
- Export data to CSV/PDF
- Predictive analytics for battery degradation
- Comparison view for multiple batteries
- Custom date range filtering
- Alert notifications system

## Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## Author

Built for Zenfinity Energy Internship Assessment

---

**Note**: This dashboard demonstrates proficiency in React, data visualization, API integration, and understanding of battery management systems for the cleantech industry.
