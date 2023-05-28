type TIconWrapper = {
    children: React.ReactNode;
    className?: string;
}

const IconWrapper = ({ children, className }: TIconWrapper) => {
  return (
    <div className={`w-16 h-16 text-xl text-center bg-center icon bg-gradient-to-tl text-white from-purple-700 to-pink-500 shadow-soft-2xl rounded-xl flex justify-center items-center ${className}`}>
        {children}
    </div>
  )
}

export default IconWrapper