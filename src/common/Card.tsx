export type ICard = {
    children: React.ReactNode;
    className?: string;
}

const Card = ({ children, className }: ICard) => {
    return (
        <div className={`relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border ${className}`}>
            {children}
        </div>
    )
}

export default Card