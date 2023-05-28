import { TSematicTypes } from "../../interface/common.interface"

const Heading4 = ({ children, className }: TSematicTypes) => {
    return (
        <h4 className={className}>{children}</h4>
    )
}

export default Heading4