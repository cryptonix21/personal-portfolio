import { onCLS, onFID, onLCP } from 'web-vitals';

export function initWebVitals() {
  function reportWebVitals({ name, value, id }: { name: string; value: number; id: string }) {
    // Log to console in development
    if (import.meta.env.DEV) {
      console.log(`${name}:`, value, `(ID: ${id})`);
    }
  }

  // Initialize web vitals
  onCLS(reportWebVitals);
  onFID(reportWebVitals);
  onLCP(reportWebVitals);
}
