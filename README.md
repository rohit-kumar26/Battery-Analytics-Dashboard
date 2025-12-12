<div align="center">

# 🔋 Battery Analytics & Predictive Insights Platform

### Data Analytics | Machine Learning | IoT Telemetry Analysis

*An intelligent battery health monitoring system leveraging data science techniques to analyze Li-ion battery performance, predict degradation patterns, and derive actionable insights from real-time telemetry data.*

![Dashboard Overview]("C:\Users\Rajat Kumar\Pictures\Screenshots\Screenshot 2025-12-12 222005.png")

[Live Demo](#) | [Features](#features) | [Installation](#installation) | [Data Analysis](#key-findings--insights)

</div>

---

## 📊 Project Overview

This project demonstrates **end-to-end data analytics** and **machine learning readiness** for battery management systems. It showcases comprehensive analysis of 116+ battery cycles, providing insights into battery health, performance trends, and degradation patterns.

**Core Capabilities:**
- 📈 **Statistical Analysis**: Time-series analysis with cumulative degradation tracking
- 📊 **Data Visualization**: Interactive dashboards for multi-dimensional telemetry data
- 🤖 **ML-Ready Infrastructure**: Foundation for predictive models (RUL prediction, anomaly detection)
- 🔬 **Domain Expertise**: Deep understanding of LFP battery chemistry and thermal management
- ⚡ **Real-time Processing**: RESTful API integration with ETL pipelines

## ✨ Features

### � Data A nalytics & Insights

- **Cycle Analysis**: Comprehensive tracking of 116+ battery cycles with detailed performance metrics
- **Health Monitoring**: Real-time SOC (State of Charge) and SOH (State of Health) analysis
- **Degradation Modeling**: Cumulative SOH tracking showing 0.0013% average degradation per cycle
- **Temperature Analytics**: Multi-resolution histogram analysis (5°C, 10°C, 15°C, 20°C intervals)
- **Statistical Summaries**: Automated calculation of trends, averages, and anomalies

### � Ienteractive Visualizations

![Cycle Navigation]("C:\Users\Rajat Kumar\Pictures\Screenshots\Screenshot 2025-12-12 221021.png")
*Intuitive cycle navigation with slider, dropdown, and quick-jump controls*

#### Key Dashboard Components:

**1. Cycle Navigator**
- Slider-based navigation through 116+ cycles
- Quick jump to specific cycles via dropdown
- Previous/Next cycle controls for sequential analysis

**2. Performance Dashboard**
![Performance Metrics]("C:\Users\Rajat Kumar\Pictures\Screenshots\Screenshot 2025-12-12 221147.png")
*Real-time performance metrics including voltage, temperature, and movement data*

- Real-time voltage, temperature, speed, and distance metrics
- Intelligent handling of missing GPS/movement data
- Color-coded health indicators

**3. Temperature Distribution Analysis**
![Temperature Distribution]("C:\Users\Rajat Kumar\Pictures\Screenshots\Screenshot 2025-12-12 221214.png")
*Interactive temperature histogram with adjustable sampling rates*

- Histogram visualization with toggle between 4 sampling rates (5°C, 10°C, 15°C, 20°C)
- Time-in-temperature-range analysis
- Thermal behavior pattern recognition

**4. Battery Health Monitoring**
![Battery Health]("C:\Users\Rajat Kumar\Pictures\Screenshots\Screenshot 2025-12-12 221228.png")
*SOC and SOH visualization with color-coded health indicators*

- SOC visualization with color-coded progress bars (green/yellow/orange/red)
- Min/Max SOC tracking
- SOH degradation per cycle
- LFP battery lifecycle information

**5. Long-Term Trends**
![Long-Term Trends]("C:\Users\Rajat Kumar\Pictures\Screenshots\Screenshot 2025-12-12 221256.png")
*Comprehensive trend analysis with SOH degradation curves and statistical summaries*

- Cumulative SOH degradation curve with zoom functionality
- Temperature trend analysis
- Multi-metric correlation visualization
- Statistical summary cards

**6. Alerts & Safety Monitoring**
![Alerts Panel]("C:\Users\Rajat Kumar\Pictures\Screenshots\Screenshot 2025-12-12 221912.png")
*Real-time alert monitoring for warnings and protection events*

- Warning and protection event display
- System health status indicators
- Safety event logging

**7. Charging Insights**
![Charging Insights]("C:\Users\Rajat Kumar\Pictures\Screenshots\Screenshot 2025-12-12 221313.png")
*Charging pattern analysis with best practice recommendations*

- Charging instances tracking
- Average charge start SOC analysis
- LFP battery best practices

### 🔬 Domain Expertise

- **LFP Battery Chemistry**: Understanding of Lithium Iron Phosphate characteristics
- **Thermal Management**: Temperature distribution and thermal behavior analysis
- **Charging Patterns**: Insights into optimal charging strategies (20-80% SOC)
- **Data Quality**: Intelligent handling of missing GPS/movement data
- **Safety Monitoring**: Alert detection for warnings and protection events

## 🛠️ Technology Stack

### Data & Analytics
- **Data Processing**: JavaScript ES6+, Array methods, statistical calculations
- **Visualization**: Recharts (React-based charting library)
- **API Integration**: Axios for RESTful API calls
- **State Management**: React Hooks (useState, useEffect)

### Frontend Framework
- **Framework**: React 18 with Vite (fast build tool)
- **Styling**: Tailwind CSS (utility-first CSS)
- **Icons**: Lucide React
- **Build Tool**: Vite (next-generation frontend tooling)

### Data Pipeline
- **API**: RESTful endpoints with pagination support
- **Data Transformation**: ETL pipeline for cycle data processing
- **Error Handling**: Comprehensive error management and fallbacks

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/rohit-kumar26/Battery-Analytics-Dashboard.git
cd Battery-Analytics-Dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

The optimized build will be in the `dist/` directory.

## 📡 API Integration

**Base URL**: `https://zenfinity-intern-api-104290304048.europe-west1.run.app`

**Endpoints**:
- `GET /api/snapshots/summary` - Battery summary statistics
- `GET /api/snapshots?imei={imei}&limit={limit}` - Cycle data with pagination
- `GET /api/snapshots/{imei}/latest` - Most recent cycle
- `GET /api/snapshots/{imei}/cycles/{cycle_number}` - Specific cycle details

**Authorized Battery IMEIs**:
- 865044073967657
- 865044073949366

## 📊 Key Findings & Insights

### Battery Health Analysis

| Metric | Value | Interpretation |
|--------|-------|----------------|
| **Current SOH** | 99.85% | Excellent health after 116 cycles |
| **Degradation Rate** | 0.0013% per cycle | Well within LFP specifications |
| **Projected Lifespan** | 2000+ cycles | Expected to reach 80% capacity after 2000-3000 cycles |
| **Avg Temperature** | 28-30°C | Optimal operating range |
| **Total Cycles Analyzed** | 116 | Comprehensive dataset |

### Data Science Insights

**1. Degradation Pattern Analysis**
- Linear degradation trend observed across 116 cycles
- Consistent with LFP battery chemistry expectations
- No anomalous degradation spikes detected

**2. Temperature Behavior**
- Stable operating temperature range (28-30°C)
- No thermal runaway events
- Optimal thermal management demonstrated

**3. Usage Patterns**
- Stationary testing environment (no movement data)
- Consistent charge/discharge cycles
- Minimal protection events triggered

**4. Data Quality Assessment**
- High-quality voltage and temperature telemetry
- GPS/movement data unavailable (expected for stationary testing)
- Complete cycle metadata for all 116 cycles

## 📁 Project Structure

```
battery-analytics-dashboard/
├── src/
│   ├── api/
│   │   └── batteryApi.js              # API integration layer
│   ├── components/
│   │   ├── AlertsPanel.jsx            # Safety alerts display
│   │   ├── BatteryHealth.jsx          # SOC/SOH visualization
│   │   ├── BatterySelector.jsx        # IMEI selection
│   │   ├── ChargingInsights.jsx       # Charging analytics
│   │   ├── CycleNavigator.jsx         # Cycle navigation UI
│   │   ├── CycleStatistics.jsx        # Cycle metadata
│   │   ├── LongTermTrends.jsx         # Historical analysis
│   │   ├── PerformanceMetrics.jsx     # Performance dashboard
│   │   └── TemperatureDistribution.jsx # Temperature charts
│   ├── data/
│   │   └── mockData.js                # Sample data for testing
│   ├── App.jsx                        # Main application component
│   ├── main.jsx                       # Application entry point
│   └── index.css                      # Global styles
├── screenshots/                        # Dashboard screenshots
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🤖 Future Enhancements (ML/AI)

### Planned Features

- [ ] **LSTM-based RUL Prediction**: Forecast remaining useful life using deep learning
- [ ] **Anomaly Detection**: Isolation Forest for unusual degradation patterns
- [ ] **Clustering Analysis**: K-means for usage pattern segmentation
- [ ] **Feature Engineering**: Create derived metrics for ML models
- [ ] **Model Deployment**: Flask/FastAPI backend for real-time predictions
- [ ] **Real-time Alerts**: ML-powered early warning system
- [ ] **Comparative Analysis**: Multi-battery performance benchmarking
- [ ] **Optimization Models**: Reinforcement learning for charging strategies

## 🎓 Skills Demonstrated

This project showcases proficiency in:

✅ **Data Analysis**: Statistical analysis, trend identification, pattern recognition  
✅ **Data Visualization**: Interactive dashboards, multi-chart layouts, color-coded indicators  
✅ **Domain Knowledge**: Battery management systems, LFP chemistry, thermal dynamics  
✅ **API Integration**: RESTful APIs, data fetching, pagination, error handling  
✅ **Data Quality**: Missing data handling, validation, edge case management  
✅ **Full-Stack Development**: End-to-end solution from data pipeline to UI  
✅ **Problem Solving**: CORS handling, proxy configuration, real-world data challenges

## 📝 Requirements Fulfilled

### ✅ Data Retrieval
- [x] API integration with summary and snapshot endpoints
- [x] Battery IMEI selection functionality
- [x] Pagination support for large datasets (1000+ cycles)

### ✅ Dashboard Implementation
- [x] Cycle navigation (slider, dropdown, buttons)
- [x] Cycle statistics (number, timestamps, duration, SOH drop)
- [x] Performance metrics (speed, distance, voltage, temperature)
- [x] Temperature distribution with 4 sampling rates (5°C, 10°C, 15°C, 20°C)
- [x] Battery health (SOC & SOH visualization with color coding)
- [x] Alerts & safety monitoring (warnings, protections)
- [x] Charging insights (instances, start SOC, best practices)
- [x] Additional insights (LFP chemistry, thermal management)

### ✅ Advanced Analysis (Bonus)
- [x] Long-term SOH degradation trends with cumulative tracking
- [x] Statistical summaries across all cycles
- [x] Multi-metric correlation analysis
- [x] Zoom functionality for detailed trend views
- [x] Temperature trend analysis

## 🔧 Configuration

### Proxy Configuration

The project uses Vite proxy to handle CORS issues:

```javascript
// vite.config.js
server: {
  proxy: {
    '/api': {
      target: 'https://zenfinity-intern-api-104290304048.europe-west1.run.app',
      changeOrigin: true,
      secure: false
    }
  }
}
```

## 🐛 Troubleshooting

**Issue**: CORS errors when fetching data  
**Solution**: Ensure Vite dev server is running (proxy handles CORS)

**Issue**: No data displayed  
**Solution**: Check browser console for API errors, verify IMEI is authorized

**Issue**: Charts not rendering  
**Solution**: Ensure all dependencies are installed: `npm install`

**Issue**: Broken images in README  
**Solution**: Add screenshots to `screenshots/` folder and push to GitHub

## 📄 License

MIT License - Free to use for educational and commercial purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

<div align="center">

**Built with ❤️ for Battery Analytics & Data Science**

⭐ Star this repository if you find it useful!
