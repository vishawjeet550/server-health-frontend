export type TApps = {
    name: string;
    storage: string;
}

export type TProcess = {
  user: string;
  pid: string;
  cpu_usage: string;
  mem_usage: string;
  status: string;
  total_time: string;
  app_name: string;
}

export type TProcessRecord = {
  root: TProcess[];
  user: TProcess[];
}

export type ISystemconfiguration = {
    totalMemory: Record<string, any>;
    storage: Record<string, any>;
    cpuModel: string;
    gpuModel: string[];
    batteryPercentage?: number;
    diskDrives: string[];
    networkInterfaces: string[];
    version?: string;
    totalCPUs?: number;
    processCount?: number;
    os_type?: number;
    users?: Record<string, any>;
  }
  
  export interface SystemState {
    loading: boolean;
    appLoading: boolean;
    processLoading: boolean;
    system_configuration?: ISystemconfiguration;
    apps: TApps[];
    process: TProcessRecord | undefined;
    error: string | null;
    [key: string]: any;
  }