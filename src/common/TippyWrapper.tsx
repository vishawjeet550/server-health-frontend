import Tippy from '@tippyjs/react';

type ITippyWrapper = {
    children: React.ReactElement;
    content: any;
    className?: string;
    placement?: any;
}

const TippyWrapper = ({ children, content, className, placement }: ITippyWrapper) => {
    return (
        <Tippy content={content} placement={placement} className={`bg-white text-black ${className}`}>
            {children}
        </Tippy>
    )
}

export default TippyWrapper