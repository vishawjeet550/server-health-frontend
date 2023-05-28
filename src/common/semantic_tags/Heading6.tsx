import { TSematicTypes } from "../../interface/common.interface"

const Heading6 = ({ children, className }: TSematicTypes) => {
    return (
        <h6 className={className}>{children}</h6>
    )
}

export default Heading6