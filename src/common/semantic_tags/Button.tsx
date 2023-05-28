import { MouseEventHandler } from "react";

type TButton = {
    children: React.ReactNode;
    clickHandler: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    type: "button" | "submit" | "reset" | undefined;
}

const Button = ({ className, clickHandler, type = 'button', children }: TButton) => {
  return (
    <button className={`inline-block black-gradient w-full px-8 py-2 mb-0 font-bold text-center text-black uppercase transition-all ease-in bg-white border-0 border-white rounded-lg shadow-soft-md bg-150 leading-pro text-xs hover:shadow-soft-2xl hover:scale-102 ${className}`}
        onClick={clickHandler}
        type={type}
    >{children}</button>
  )
}

export default Button