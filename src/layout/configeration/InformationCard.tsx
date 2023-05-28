import { IconType } from "react-icons";
import Card from "../../common/Card"
import Heading5 from "../../common/semantic_tags/Heading5";
import Heading6 from "../../common/semantic_tags/Heading6";
import Span from "../../common/semantic_tags/Span";

type TInformationCard = {
    heading: string;
    description?: string;
    value: number | string;
    Icon: IconType;
    className?: string;
}

const InformationCard = ({ heading, description, value, Icon, className }: TInformationCard) => {
    return (
        <Card className={className}>
            <div className={`p-4 px-14 mx-6 mb-0 text-center bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent flex justify-center`}>
                <div className="w-16 h-16 text-center bg-center icon bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl rounded-xl flex justify-center items-center">
                    <Span className={`text-white opacity-100 text-xl`}><Icon /></Span>
                </div>
            </div>
            <div className="flex-auto p-4 pt-0 text-center">
                <Heading6 className="mb-0 text-center font-semibold">{heading}</Heading6>
                <Span className="leading-tight text-xs">{description}</Span>
                <hr className="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
                <Heading5 className="mb-0 font-bold">{value}</Heading5>
            </div>
        </Card>
  )
}

export default InformationCard