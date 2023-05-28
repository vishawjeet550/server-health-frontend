import {
  FaDesktop,
  FaFolderOpen,
  FaFirefoxBrowser,
  FaChrome,
  FaDatabase,
  FaServer,
  FaCode,
  FaMicroscope,
  FaSlack,
  FaCalendarAlt,
  FaCodeBranch,
  FaToolbox,
  FaEye
} from 'react-icons/fa';
import { SiZoom } from 'react-icons/si'

export function calculateMemoryInGB(memory: number) {
    const GB = 1024 * 1024 * 1024;
    const memoryInGB = Number(memory / GB).toFixed(2);

    return memoryInGB
}

export const getAppIcon = (appName: string) => {
  switch (appName) {
    case 'AnyDesk.app':
      return FaDesktop;
    case 'Docker.app':
      return FaServer;
    case 'Firefox.app':
      return FaFirefoxBrowser;
    case 'Google Chrome.app':
      return FaChrome;
    case 'Grammarly Desktop.app':
      return FaMicroscope;
    case 'MongoDB Compass.app':
      return FaDatabase;
    case 'MySQLWorkbench.app':
      return FaDatabase;
    case 'Postman.app':
      return FaEye;
    case 'Safari Technology Preview.app':
      return FaFirefoxBrowser;
    case 'Safari.app':
      return FaFirefoxBrowser;
    case 'Skype.app':
      return FaSlack;
    case 'Slack.app':
      return FaSlack;
    case 'TopTracker.app':
      return FaCalendarAlt;
    case 'Utilities':
      return FaToolbox;
    case 'Visual Studio Code.app':
      return FaCode;
    case 'Xcode.app':
      return FaCodeBranch;
    case 'pgAdmin 4.app':
      return FaDatabase;
    case 'zoom.us.app':
      return SiZoom;
    default:
      return FaFolderOpen;
  }
};

