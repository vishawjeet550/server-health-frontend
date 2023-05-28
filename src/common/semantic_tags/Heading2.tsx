import { TSematicTypes } from "../../interface/common.interface"

const Heading2 = ({ children, className }: TSematicTypes) => {
    return (
        <h2 className={className}>{children}</h2>
    )
}

export default Heading2