import React, { useState } from "react"
import Input from "../../common/semantic_tags/Input"
import Paragraph from "../../common/semantic_tags/Paragraph"
import Markdown from "../../common/Markdown";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

type TShellCommand = {
    submitHandler: (e: React.FormEvent<HTMLFormElement>, value: string) => void;
    input: string;
    output: string;
    path: string;
    executed: boolean;
}

const ShellCommand = ({ submitHandler, input, output, path, executed }: TShellCommand) => {
    const { history } = useSelector((state: RootState) => state.shell)
    const [inputValue, setInputValue] = useState(input || '')
    const [currentHistoryIndex, setCurrentHistoryIndex] = useState(-1)

    const setPreviousCommand = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (currentHistoryIndex > 0) {
            const index = currentHistoryIndex - 1
            setCurrentHistoryIndex(index);
            setInputValue(history[index])
        } else {
            setCurrentHistoryIndex(history.length - 1);
            setInputValue(history[history.length - 1])
        }
    };

    const setNextCommand = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (currentHistoryIndex < history.length - 1) {
            const index = currentHistoryIndex + 1
            setCurrentHistoryIndex(index);
            setInputValue(history[index]);
        }
        else {
            setCurrentHistoryIndex(-1);
            setInputValue('');
        }
    };

    const handleKeyDown = (event: any) => {
        if (event.key === 'ArrowUp') {
            event.preventDefault();
            setPreviousCommand(event);
        } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            setNextCommand(event);
        }
    };

    return (
        <div className="mb-4">
            {
                executed
                    ? <div className="">
                        <div className="flex items-center justify-start gap-2 w-full">
                            <Paragraph className="whitespace-nowrap text-[#6897BB] font-bold">/{path} $</Paragraph>
                            <Paragraph className="whitespace-nowrap">{input}</Paragraph>
                        </div>
                        <div className="">
                            <Markdown markdown={output} />
                        </div>
                    </div>
                    : <form className="flex items-center justify-start gap-0 w-full" onSubmit={(e: React.FormEvent<HTMLFormElement>) => submitHandler(e, inputValue)}>
                        <Paragraph className="whitespace-nowrap text-[#6897BB] font-bold">{path} $</Paragraph>
                        <Input onKeyDown={handleKeyDown} autoFocus className="bg-transparent border-0 flickering-cursor w-full" value={inputValue}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} />
                    </form>
            }
        </div>
    )
}

export default ShellCommand