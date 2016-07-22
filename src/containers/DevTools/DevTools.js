import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const logMonitorSelect = (state = {}) => typeof state.toJS === 'function' && state.toJS() || state;

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor select={logMonitorSelect} />
  </DockMonitor>
);

export default DevTools;
