import { HiChevronDown } from "react-icons/hi";
import FileIcon from "./FileIcon";
import Heading4 from "./semantic_tags/Heading4";
import Span from "./semantic_tags/Span";

interface Directory {
    fileName: string;
    subdirectories?: Directory[];
    open: boolean;
    isDirectory: boolean;
}

interface DirectoriesProps {
    directories: Directory[];
    handleDirectory: Function;
}


const Directories: React.FC<DirectoriesProps> = ({ directories, handleDirectory }) => {
    const renderDirectory = (directory: Directory, indent = '', padding = 0): JSX.Element => {
        const subdirectories = directory.subdirectories || [];
        console.log('directory.open', directory.open, directory.isDirectory)
        return (
            <div className="flex cursor-pointer gap-2 items-center justify-start mb-4" style={{ paddingLeft: `${padding * 20}px` }} key={directory.fileName}>
                {directory.isDirectory
                    ? <Span className={`${directory.open ? 'rotate-180' : ''}`}><HiChevronDown onClick={() => handleDirectory(indent)} size={18} /></Span>
                    : <FileIcon filename={directory.fileName} />}
                <Heading4 className="font-bold text-lg my-auto">{directory.fileName}</Heading4>
                {subdirectories.map((subdirectory, index) => renderDirectory(subdirectory, indent + `,${index}`, padding + 1))}
            </div>
        );
    };

    return (
        <div>
            {directories.map((directory, index) => renderDirectory(directory, `${index}`))}
        </div>
    )
}

export default Directories