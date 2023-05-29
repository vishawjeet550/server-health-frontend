import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { GoVersions } from "react-icons/go";
import { GiProcessor } from "react-icons/gi";
import { BiRefresh } from "react-icons/bi";
import { FiHardDrive } from "react-icons/fi";
import { BsBatteryCharging, BsFillCpuFill, BsGpuCard, BsMemory } from "react-icons/bs";


import InformationCard from "../../components/InformationCard"
import { RootState } from "../../store";
import { fetchSystemData } from "../../api/configuration/configuration.api";
import Paragraph from "../../common/semantic_tags/Paragraph";
import { MdNumbers, MdOutlineSettingsInputComponent } from "react-icons/md";
import { calculateMemoryInGB } from "../../utils/helpers.utils";
import HeaderSection from "../../components/HeaderSection";

const Information: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { loading, system_configuration, error } = useSelector((state: RootState) => state.system);

  const fetchHandler = () => dispatch(fetchSystemData());

  useEffect(() => {
    fetchHandler()
  }, [dispatch]);

  if (loading) return <Paragraph className="text-center mt-8">Fetching system configuration details ...</Paragraph>
  if (error) return <Paragraph className="text-red-700 text-center mt-8">Something went wrong !!!</Paragraph>

  return (
    <div className='information-wrapper w-full mb-14 min-h-[50vh]'>
      <HeaderSection Icon={MdOutlineSettingsInputComponent} heading="System Information">
        <BiRefresh className="cursor-pointer text-2xl" onClick={fetchHandler} />
      </HeaderSection>
      <section className="grid grid-cols-5 -mx-3 gap-8">
        <InformationCard className="h-[200px]" heading="User"
          description="User details fetched from your current operating system."
          value={`username: ${system_configuration?.users?.username}`}
          Icon={FaUserAlt} />
        <InformationCard className="h-[200px]" heading="CPU Model"
          description="Central processing unit: The brain of the computer, executing instructions."
          value={`${system_configuration?.cpuModel}`}
          Icon={BsFillCpuFill} />
        <InformationCard className="h-[200px]" heading="GPU Model"
          description="Graphics processing unit: Accelerates rendering and enhances visual performance."
          value={`${system_configuration?.gpuModel?.join(", ")}`}
          Icon={BsGpuCard} />
        <InformationCard className="h-[200px]" heading="Battery"
          description="Portable power source that keeps laptops running for extended periods."
          value={`Percentage: ${system_configuration?.batteryPercentage}%`}
          Icon={BsBatteryCharging} />
        <InformationCard className="h-[200px]" heading="OS version"
          description="Operating system version: Software that manages computer hardware and resources."
          value={`Version: ${system_configuration?.version}`}
          Icon={GoVersions} />
      </section>
      <section className="grid grid-cols-5 -mx-3 gap-8 mt-8">
        <InformationCard className=" h-[200px]" heading="Total CPU's"
          description="The number of CPUs: Determines the processing power and multitasking capability."
          value={`CPU: ${system_configuration?.totalCPUs}`}
          Icon={MdNumbers} />
        <InformationCard className=" h-[200px]" heading="No. of process"
          description="The number of processes in an OS: Concurrent tasks running independently."
          value={`Task: ${system_configuration?.processCount}`}
          Icon={GiProcessor} />
        <InformationCard className=" h-[200px]" heading="RAM"
          description="Random Access Memory (RAM) is volatile computer memory for active processes."
          value={`Using: ${calculateMemoryInGB(system_configuration?.totalMemory.used as number)} GB / Total: ${calculateMemoryInGB(system_configuration?.totalMemory.total as number)} GB`}
          Icon={BsMemory} />
        <InformationCard className=" h-[200px]" heading="Storage"
          description="Storage refers to the device used for storing data electronically."
          value={`Available: ${calculateMemoryInGB(system_configuration?.storage.free as number)} GB / ${calculateMemoryInGB(system_configuration?.storage.total as number)} GB`}
          Icon={FiHardDrive} />
        <InformationCard className=" h-[200px]" heading="IP Listing"
          description="Assigned IP addresses for device identification and communication."
          value={Array.from(system_configuration?.networkInterfaces || []).filter(Boolean).join(', ')}
          Icon={FiHardDrive} />
      </section>
    </div>
  )
}

export default Information