import { IconType } from "react-icons"
import Card from "../common/Card"
import IconWrapper from "../common/IconWrapper"
import Heading5 from "../common/semantic_tags/Heading5"
import Paragraph from "../common/semantic_tags/Paragraph"
import Span from "../common/semantic_tags/Span"

type IFlexCard = {
    name: string;
    description: string;
    clasName?: string;
    iconClassName?: string;
    Icon: IconType;
}

const FlexCard = ({ name, description, Icon, clasName, iconClassName }: IFlexCard) => {
    return (
        <Card className={clasName}>
            <section className="flex justify-between items-center p-4 gap-8">
                <aside>
                    <Heading5 className="font-bold">{name}</Heading5>
                    <Paragraph>
                        <Span className="text-green-700">{description}</Span>
                    </Paragraph>
                </aside>
                <aside>
                    <IconWrapper className={iconClassName}>
                        <Icon />
                    </IconWrapper>
                </aside>
            </section>
        </Card>
    )
}

export default FlexCard