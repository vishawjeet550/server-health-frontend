import { TSematicTypes } from "../../interface/common.interface"

const Paragraph = ({ children, className }: TSematicTypes) => {
    return (
        <p className={className}>{children}</p>
    )
}

export default Paragraph