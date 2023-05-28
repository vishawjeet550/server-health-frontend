import { TSematicTypes } from "../../interface/common.interface"

const Heading5 = ({ children, className }: TSematicTypes) => {
    return (
        <h5 className={className}>{children}</h5>
    )
}

export default Heading5