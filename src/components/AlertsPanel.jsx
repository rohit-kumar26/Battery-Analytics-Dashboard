import React from 'react';
import { AlertTriangle, Shield } from 'lucide-react';

const AlertsPanel = ({ cycle }) => {
  const alerts = cycle.alert_details || { warnings: [], protections: [] };
  const hasAlerts = alerts.warnings?.length > 0 || alerts.protections?.length > 0;

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <AlertTriangle className="w-5 h-5 text-yellow-400" />
        Alerts & Safety
      </h2>
      
      {!hasAlerts ? (
        <div className="flex flex-col items-center justify-center py-8 text-slate-400">
          <Shield className="w-12 h-12 mb-2 text-green-400" />
          <p className="text-lg font-semibold text-green-400">All Systems Normal</p>
          <p className="text-sm">No warnings or protections triggered</p>
        </div>
      ) : (
        <div className="space-y-4">
          {alerts.warnings && alerts.warnings.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-yellow-400 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Warnings ({alerts.warnings.length})
              </h3>
              <div className="space-y-2">
                {alerts.warnings.map((warning, index) => (
                  <div key={index} className="p-3 bg-yellow-900/20 border border-yellow-700 rounded text-sm">
                    {warning}
                  </div>
                ))}
              </div>
            </div>
          )}

          {alerts.protections && alerts.protections.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Protections ({alerts.protections.length})
              </h3>
              <div className="space-y-2">
                {alerts.protections.map((protection, index) => (
                  <div key={index} className="p-3 bg-red-900/20 border border-red-700 rounded text-sm">
                    {protection}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AlertsPanel;
