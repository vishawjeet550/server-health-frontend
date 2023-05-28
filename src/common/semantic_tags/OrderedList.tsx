import { TSematicTypes } from "../../interface/common.interface"

const Ordered = ({ children, className }: TSematicTypes) => {
    return (
        <ol className={className}>
            {children}
        </ol>
    )
}

export default Ordered