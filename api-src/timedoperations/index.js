import VisualIvrSessions from './VisualIvrSessions.js';
import VisualIvrCodeVerified from './VisualIvrCodeVerified.js';
import VisualIvrFailedPayments from './VisualIvrFailedPayments.js';
import VisualIvrSuccededPayments from './VisualIvrSuccededPayments.js';
import VisualIvrCompletedPayments from './VisualIvrCompletedPayments.js';

export default [
  new VisualIvrSessions(),
  new VisualIvrCodeVerified(),
  new VisualIvrFailedPayments(),
  new VisualIvrSuccededPayments(),
  new VisualIvrCompletedPayments()
];
