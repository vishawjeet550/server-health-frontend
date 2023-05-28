import { TSematicTypes } from "../../interface/common.interface"

const Heading1 = ({ children, className }: TSematicTypes) => {
    return (
        <h1 className={className}>{children}</h1>
    )
}

export default Heading1