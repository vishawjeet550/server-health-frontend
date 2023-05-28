import { MdOutlineNetworkCheck } from "react-icons/md";
import Heading6 from "../common/semantic_tags/Heading6";
import Hr from "../common/semantic_tags/Hr";

type IListing = {
    list: Array<string>;
    className?: string;
    heading: string;
}

const Listing = ({ list, className, heading }: IListing) => {
    return (

        <div className={`p-4 ${className}`}>
            <Heading6 className="font-semibold text-center">{heading}</Heading6>
            <Hr className="mx-0  mb-4" />
            <div className="">
                {list.map((li, key) => {
                    return <div className="flex justify-between items-center mb-2">
                        <div className="font-bold" key={key}>{li}</div>
                        <MdOutlineNetworkCheck />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Listing