type TImage = {
    src: string;
    alt: string;
    className?: string;
}

const Image = ({ src, alt, className }: TImage) => {
    return (
        <img src={src} alt={alt} className={className} />
    )
}

export default Image