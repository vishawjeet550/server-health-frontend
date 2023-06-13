import React, { useState } from "react"
import Input from "../../common/semantic_tags/Input"
import Paragraph from "../../common/semantic_tags/Paragraph"

type TShellCommand = {
    submitHandler: (e: React.FormEvent<HTMLFormElement>, value: string) => void;
    input: string;
    output: string;
    path: string;
}

const ShellCommand = ({ submitHandler, input, output, path }: TShellCommand) => {
    const [inputValue, setInputValue] = useState(input || '')
    return (
        <div className="mb-4">
            {
                output
                ? <div className="">
                    <div className="flex items-center justify-start gap-2 w-full">
                        <Paragraph className="whitespace-nowrap">/{path} $</Paragraph>
                        <Paragraph className="whitespace-nowrap">{input}</Paragraph>
                    </div>
                    <div className="">
                        {output}
                    </div>
                </div> 
                : <form className="flex items-center justify-start gap-0 w-full" onSubmit={(e: React.FormEvent<HTMLFormElement>) => submitHandler(e, inputValue)}>
                        <Paragraph className="whitespace-nowrap">/server-health $</Paragraph>
                        <Input autoFocus className="bg-transparent border-0 flickering-cursor w-full" value={inputValue}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} />
                    </form>
            }
        </div>
    )
}

export default ShellCommand