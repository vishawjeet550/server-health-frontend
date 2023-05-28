import { TSematicTypes } from "../../interface/common.interface"

const Heading3 = ({ children, className }: TSematicTypes) => {
    return (
        <h3 className={className}>{children}</h3>
    )
}

export default Heading3