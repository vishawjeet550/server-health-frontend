import Card from "../../common/Card"
import IconWrapper from "../../common/IconWrapper"
import Heading5 from "../../common/semantic_tags/Heading5"
import Paragraph from "../../common/semantic_tags/Paragraph"
import Span from "../../common/semantic_tags/Span"

const FlexCard = () => {
    return (
        <Card>
            <section className="flex justify-between items-center p-4 gap-8">
                <aside>
                    <Heading5 className="font-bold">Memory Usage</Heading5>
                    <Paragraph>
                        <Span className="text-green-700">64GB</Span>
                        / 128 GB
                    </Paragraph>
                </aside>
                <aside>
                    <IconWrapper>
                        <i className="fas fa-battery"></i>
                    </IconWrapper>
                </aside>
            </section>
        </Card>
    )
}

export default FlexCard