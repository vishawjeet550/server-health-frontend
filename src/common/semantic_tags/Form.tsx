type TForm = {
    children: React.ReactNode;
    className?: string;
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

const Form = ({ children, className, handleSubmit }: TForm) => {
    return (
        <form className={`${className}`} onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

export default Form