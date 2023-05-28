import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { GoVersions } from "react-icons/go";
import { BsBatteryCharging, BsFillCpuFill, BsFillRocketFill, BsGpuCard } from "react-icons/bs";


import InformationCard from "./InformationCard"
import { RootState } from "../../store";
import { fetchSystemData } from "../../api/configeration/configeration.api";
import Paragraph from "../../common/semantic_tags/Paragraph";
import Heading4 from "../../common/semantic_tags/Heading4";
import Hr from "../../common/semantic_tags/Hr";
import { MdNumbers, MdOutlineSettingsInputComponent } from "react-icons/md";
import { GiProcessor } from "react-icons/gi";
import Card from "../../common/Card";
import Heading6 from "../../common/semantic_tags/Heading6";
import Span from "../../common/semantic_tags/Span";
import Heading5 from "../../common/semantic_tags/Heading5";

const Information: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { loading, system_configeration, error } = useSelector((state: RootState) => state.system);

  useEffect(() => {
    dispatch(fetchSystemData());
  }, [dispatch]);

  if (loading) return <Paragraph className="text-center mt-8">Fetching system configeration details ...</Paragraph>
  if (error) return <Paragraph className="text-red-700 text-center mt-8">Something went wrong !!!</Paragraph>

  return (
    <div className='dashboard-wrapper w-full h-screen'>
      <section className="mb-8">
        <aside className="flex gap-2 items-center justify-start">
          <MdOutlineSettingsInputComponent />
          <Heading4 className="font-bold pb-1">System Information</Heading4>
        </aside>
        <Hr className="mx-0" />
      </section>
      <section className="grid grid-cols-5 -mx-3 gap-8">
        <InformationCard className="h-[200px]" heading="User"
          description="User details fetched from your current operating system."
          value={`username: ${system_configeration?.users?.username}`}
          Icon={FaUserAlt} />
        <InformationCard className="h-[200px]" heading="CPU Model"
          description="Central processing unit: The brain of the computer, executing instructions."
          value={`${system_configeration?.cpuModel}`}
          Icon={BsFillCpuFill} />
        <InformationCard className="h-[200px]" heading="GPU Model"
          description="Graphics processing unit: Accelerates rendering and enhances visual performance."
          value={`${system_configeration?.gpuModel?.join(", ")}`}
          Icon={BsGpuCard} />
        <InformationCard className="h-[200px]" heading="Battery"
          description="Portable power source that keeps laptops running for extended periods."
          value={`Percentage: ${system_configeration?.batteryPercentage}%`}
          Icon={BsBatteryCharging} />
        <InformationCard className="h-[200px]" heading="OS version"
          description="Operating system version: Software that manages computer hardware and resources."
          value={`Version: ${system_configeration?.version}`}
          Icon={GoVersions} />
      </section>
      <section className="grid grid-cols-5 -mx-3 gap-8 mt-8">
        <InformationCard className=" h-[200px]" heading="Total CPU's"
          description="The number of CPUs: Determines the processing power and multitasking capability."
          value={`CPU: ${system_configeration?.totalCPUs}`}
          Icon={MdNumbers} />
        <InformationCard className=" h-[200px]" heading="No. of process"
          description="The number of processes in an OS: Concurrent tasks running independently."
          value={`CPU: ${system_configeration?.processCount}`}
          Icon={GiProcessor} />
        <aside className="col-span-3">
          <Card className="h-full">
            <div className="flex items-stretch h-full w-full gap-4">
              <div className="w-[60%] p-4">
                <Heading6 className="font-semibold">IP Listing</Heading6>
                <Hr className="!mx-0" />
                <Span className="">A compilation of assigned IP addresses, enabling network identification, communication, and routing among devices on a network.</Span>
                <Heading5 className="font-bold mb-4">{Array.from(system_configeration?.networkInterfaces || []).filter(Boolean).join(', ')}</Heading5>

                <Heading6 className="font-semibold">Disk Drives</Heading6>
                <Hr className="!mx-0" />
                <Span className="">Storage devices used for reading, writing, and accessing data on disks or solid-state drives</Span>
                <Heading5 className="font-bold">{Array.from(system_configeration?.diskDrives || []).filter(Boolean).join(', ')}</Heading5>
              </div>
              <div className="w-[40%] h-full col-span-1 bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl rounded-xl flex justify-center items-center">
                <BsFillRocketFill className="animate-spin-slow text-white text-8xl" />
              </div>
            </div>
          </Card>
        </aside>
      </section>
    </div>
  )
}

export default Information