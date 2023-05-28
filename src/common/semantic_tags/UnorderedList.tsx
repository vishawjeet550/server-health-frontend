import { TSematicTypes } from "../../interface/common.interface"

const Unordered = ({ children, className }: TSematicTypes) => {
    return (
        <ul className={className}>
            {children}
        </ul>
    )
}

export default Unordered