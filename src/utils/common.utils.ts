import { GrSystem } from 'react-icons/gr'
import { GiHealthIncrease, GiProcessor } from 'react-icons/gi'
import { TbActivity } from 'react-icons/tb';
import { FaUsers } from 'react-icons/fa';
import { MdSettingsApplications } from 'react-icons/md';

import { TSideBarList } from "../interface/common.interface";


export const sidebarList: TSideBarList[] = [
    {
        Icon: GrSystem,
        title: 'System configuration',
        route: '/'
    },
    {
        Icon: GiProcessor,
        title: 'Process Management',
        route: '/process'
    },
    {
        Icon: TbActivity,
        title: 'Activity Monitor',
        route: '/activity'
    },
    {
        Icon: GiHealthIncrease,
        title: 'System Health',
        route: '/health'
    },
    {
        Icon: FaUsers,
        title: 'User group',
        route: '/users'
    },
    {
        Icon: MdSettingsApplications,
        title: 'Applications',
        route: '/apps'
    }
]

export const processTableHeader = [
    {
        value: "user",
        header: "USER"
    },
    {
        value: "pid",
        header: "PID"
    },
    {
        value: "cpu_usage",
        header: "CPU USAGE"
    },
    {
        value: "mem_usage",
        header: "MEMORY USAGE"
    },
    {
        value: "status",
        header: "STATUS"
    },
    {
        value: "total_time",
        header: "Total Time"
    },
    {
        value: "app_name",
        header: "APP NAME"
    }
]

export const serverHealthTips = [
    "Optimize code and algorithms to reduce CPU usage.",
    "Implement efficient data structures and algorithms to minimize memory footprint.",
    "Regularly monitor disk space utilization and implement disk space management strategies.",
    "Optimize file I/O operations for better disk performance.",
    "Implement proper error handling and exception management in applications.",
    "Keep applications up to date with the latest patches and security fixes.",
    "Implement caching mechanisms to minimize CPU-intensive operations.",
    "Profile and optimize memory-intensive operations.",
    "Monitor and identify processes consuming excessive CPU resources.",
    "Monitor and analyze heap usage patterns to optimize memory usage.",
    "Optimize application configurations for better performance.",
    "Implement garbage collection techniques to reclaim unused memory.",
    "Regularly monitor and analyze server logs to identify and resolve issues promptly.",
    "Consider load balancing or scaling strategies to distribute the workload.",
    "Conduct regular performance testing and optimization of critical application components."
  ];
  