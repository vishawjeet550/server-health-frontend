import { FaLaptopMedical } from "react-icons/fa"
import Span from "./semantic_tags/Span"
import { IconType } from "react-icons";

const Logo = ({ heading = 'System Management', Icon = FaLaptopMedical, className = '' }: { heading?: string; Icon?: IconType; className?: string; }) => {
    return (
        <div className={`h-19.5 flex items-center gap-2 justify-center ${className}`}>
            <Icon className="text-3xl" />
            <div className="block px-4 py-6 m-0 text-sm whitespace-nowrap text-slate-700">
                <Span className="font-semibold transition-all duration-200 ease-nav-brand">{heading}</Span>
            </div>
        </div>
    )
}

export default Logo