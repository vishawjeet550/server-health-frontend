import { IconType } from "react-icons"
import Heading4 from "../common/semantic_tags/Heading4";
import Hr from "../common/semantic_tags/Hr";

type THeader = {
    Icon: IconType;
    heading: string;
    enableHorizonLine?: boolean | true;
    children?: React.ReactNode;
}

const HeaderSection = ({ Icon, heading, enableHorizonLine = true, children }: THeader) => {
    return (
        <section className="mb-8">
            <aside className="flex justify-between align-center">
                <div className="flex gap-2 items-center justify-start">
                    <Icon />
                    <Heading4 className="font-bold pb-1">{heading}</Heading4>
                </div>
                {children}
            </aside>
            {enableHorizonLine && <Hr className="mx-0" />}
        </section>
    )
}

export default HeaderSection