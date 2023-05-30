type TLoadingLayer = {
  className?: string;
}

const LoadingLayer = ({ className }: TLoadingLayer) => {
  return (
    <div className="flex justify-center items-center">
      <div className={`animate-ping bg-gradient-to-tl text-white from-purple-700 to-pink-500 shadow-soft-2xl p-4 h-[25px] w-[25px] rounded-full`}></div>
    </div>
      
  )
}

export default LoadingLayer