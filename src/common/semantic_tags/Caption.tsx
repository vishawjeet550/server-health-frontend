import { TSematicTypes } from "../../interface/common.interface"

const Caption = ({ children, className }: TSematicTypes) => {
    return (
        <caption className={className}>{children}</caption>
    )
}

export default Caption