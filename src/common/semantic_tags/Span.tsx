import { TSematicTypes } from "../../interface/common.interface"

const Span = ({ children, className }: TSematicTypes) => {
    return (
        <span className={className}>{children}</span>
    )
}

export default Span