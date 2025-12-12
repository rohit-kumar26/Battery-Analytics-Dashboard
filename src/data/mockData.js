// Mock data for testing when API is unavailable
export const mockCycles = [
  {
    imei: "865044073967657",
    cycle_number: 1,
    cycle_start_time: "2024-01-01T08:00:00Z",
    cycle_end_time: "2024-01-01T12:30:00Z",
    cycle_duration_hours: 4.5,
    soh_drop: 0.0012,
    average_soc: 65.5,
    min_soc: 25.0,
    max_soc: 95.0,
    average_temperature: 28.5,
    temperature_dist_5deg: {
      "20-25": 45.2,
      "25-30": 120.5,
      "30-35": 85.3,
      "35-40": 19.0
    },
    temperature_dist_10deg: {
      "20-30": 165.7,
      "30-40": 104.3
    },
    temperature_dist_15deg: {
      "15-30": 165.7,
      "30-45": 104.3
    },
    temperature_dist_20deg: {
      "20-40": 270.0
    },
    total_distance: 45.8,
    average_speed: 35.2,
    max_speed: 65.0,
    charging_instances_count: 2,
    average_charge_start_soc: 28.5,
    voltage_avg: 52.4,
    voltage_min: 48.2,
    voltage_max: 58.8,
    alert_details: {
      warnings: [],
      protections: []
    }
  },
  {
    imei: "865044073967657",
    cycle_number: 2,
    cycle_start_time: "2024-01-02T08:00:00Z",
    cycle_end_time: "2024-01-02T13:15:00Z",
    cycle_duration_hours: 5.25,
    soh_drop: 0.0015,
    average_soc: 68.2,
    min_soc: 22.0,
    max_soc: 98.0,
    average_temperature: 30.2,
    temperature_dist_5deg: {
      "20-25": 35.2,
      "25-30": 95.5,
      "30-35": 145.3,
      "35-40": 39.0
    },
    temperature_dist_10deg: {
      "20-30": 130.7,
      "30-40": 184.3
    },
    temperature_dist_15deg: {
      "15-30": 130.7,
      "30-45": 184.3
    },
    temperature_dist_20deg: {
      "20-40": 315.0
    },
    total_distance: 52.3,
    average_speed: 38.5,
    max_speed: 72.0,
    charging_instances_count: 1,
    average_charge_start_soc: 22.0,
    voltage_avg: 52.8,
    voltage_min: 47.5,
    voltage_max: 59.2,
    alert_details: {
      warnings: ["High temperature detected"],
      protections: []
    }
  },
  {
    imei: "865044073967657",
    cycle_number: 3,
    cycle_start_time: "2024-01-03T07:30:00Z",
    cycle_end_time: "2024-01-03T11:45:00Z",
    cycle_duration_hours: 4.25,
    soh_drop: 0.0011,
    average_soc: 62.8,
    min_soc: 28.0,
    max_soc: 92.0,
    average_temperature: 27.8,
    temperature_dist_5deg: {
      "20-25": 55.2,
      "25-30": 110.5,
      "30-35": 75.3,
      "35-40": 14.0
    },
    temperature_dist_10deg: {
      "20-30": 165.7,
      "30-40": 89.3
    },
    temperature_dist_15deg: {
      "15-30": 165.7,
      "30-45": 89.3
    },
    temperature_dist_20deg: {
      "20-40": 255.0
    },
    total_distance: 41.2,
    average_speed: 32.8,
    max_speed: 58.0,
    charging_instances_count: 2,
    average_charge_start_soc: 30.5,
    voltage_avg: 52.1,
    voltage_min: 48.8,
    voltage_max: 58.2,
    alert_details: {
      warnings: [],
      protections: []
    }
  }
];

export const mockSummary = [
  {
    imei: "865044073967657",
    total_cycles: 3,
    avg_health: 99.996
  },
  {
    imei: "865044073949366",
    total_cycles: 2,
    avg_health: 99.997
  }
];
