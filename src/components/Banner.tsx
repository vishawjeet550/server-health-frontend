import { useSelector } from "react-redux"
import { RootState } from "../store"
import { FaLaptopMedical } from "react-icons/fa"
import Paragraph from "../common/semantic_tags/Paragraph"
import Span from "../common/semantic_tags/Span"
import { AiFillInfoCircle } from "react-icons/ai"
import TippyWrapper from "../common/TippyWrapper"
import { serverHealthTips } from "../utils/common.utils"
import Unordered from "../common/semantic_tags/UnorderedList"

const Banner = ({ className }: { className?: string }) => {
    const { system_configuration } = useSelector((state: RootState) => state.system)
    return (
        <div className={`w-full mx-auto mb-8 ${className}`}>
            <div className="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-[150px] rounded-2xl" style={{ backgroundImage: "url(https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/curved-images/curved0.jpg)", backgroundPositionY: "50%" }}>
                <span className="absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-purple-700 to-pink-500 opacity-60"></span>
            </div>
            <div className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
                <div className="flex justify-between flex-wrap -mx-3">
                    <div className="flex flex-wrap">
                        <div className="flex-none w-auto max-w-full px-3 flex items-center justify-center">
                            <div className="text-base ease-soft-in-out relative rounded-xl text-white transition-all duration-200">
                                <FaLaptopMedical className="w-full text-slate-700 text-4xl rounded-xl" />
                            </div>
                        </div>
                        <div className="flex-none w-auto max-w-full px-3 my-auto">
                            <div className="h-full gap-2 text-black">
                                <h5 className="mb-1 text-slate-700 font-bold">{system_configuration?.users?.username}</h5>
                                <p className="mb-0 font-semibold leading-normal text-sm text-slate-700">Mac OS</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 flex items-center gap-2">
                        <Paragraph className="font-bold text-black">Health: <Span className="text-red-700">Not Healthy</Span></Paragraph>
                        <TippyWrapper className="" placement='right' content={<HealthTips />}>
                            <div><AiFillInfoCircle className="cursor-pointer font-bold text-2xl text-slate-500" /></div>
                        </TippyWrapper>
                    </div>
                </div>
            </div>
        </div>
    )
}

const HealthTips = () => {
    return <Unordered className="p-2 list-disc">
        {serverHealthTips.map(i => { return <Paragraph className="text-sm">- {i}</Paragraph> })}
    </Unordered>
}

export default Banner