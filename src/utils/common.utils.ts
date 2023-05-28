import { GrSystem } from 'react-icons/gr'
import { GiHealthIncrease, GiProcessor } from 'react-icons/gi'
import { TbActivity } from 'react-icons/tb';
import { FaUsers } from 'react-icons/fa';
import { MdSettingsApplications } from 'react-icons/md';

import { TSideBarList } from "../interface/common.interface";


export const sidebarList: TSideBarList[] = [
    {
        Icon: GrSystem,
        title: 'System Configeration',
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