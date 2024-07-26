type THr = {
    className?: string;
}

const Hr = ({ className }: THr) => {
  return (
    <hr className={`h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black-40 to-transparent ${className}`} />
  )
}

export default Hr