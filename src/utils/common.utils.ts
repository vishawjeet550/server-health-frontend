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
        route: '/'
    },
    {
        Icon: TbActivity,
        title: 'Activity Monitor',
        route: '/'
    },
    {
        Icon: GiHealthIncrease,
        title: 'System Health',
        route: '/'
    },
    {
        Icon: FaUsers,
        title: 'User group',
        route: '/'
    },
    {
        Icon: MdSettingsApplications,
        title: 'Applications',
        route: '/'
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