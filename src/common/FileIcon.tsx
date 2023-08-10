import React from 'react';
import { FaFilePowerpoint, FaNodeJs } from 'react-icons/fa'
import { AiOutlineFilePdf, AiOutlineFileWord, AiOutlineFileExcel } from 'react-icons/ai';
import { BiFile } from 'react-icons/bi';
import { DiJavascript1, DiGithubBadge } from 'react-icons/di';
import { BsFiletypeJava } from 'react-icons/bs';
import { SiTypescript, SiReact, SiHtml5, SiCss3, SiPython, SiRuby, SiGo, SiCsharp } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';

interface FileIconProps {
    filename: string;
}

const FileIcon: React.FC<FileIconProps> = ({ filename }) => {
    const extension = filename.split('.').pop()?.toLowerCase();

    const iconSize = 17; // Adjust the size of the icon as needed

    switch (extension) {
        // File extensions
        case 'pdf':
            return <AiOutlineFilePdf size={iconSize} />;
        case 'doc':
        case 'docx':
            return <AiOutlineFileWord size={iconSize} />;
        case 'xls':
        case 'xlsx':
            return <AiOutlineFileExcel size={iconSize} />;
        case 'ppt':
        case 'pptx':
            return <FaFilePowerpoint size={iconSize} />;
        case 'js':
            return <DiJavascript1 color='yellow' size={iconSize} />;
        case 'ts':
            return <SiTypescript size={iconSize} />;
        case 'jsx':
        case 'tsx':
            return <SiReact size={iconSize} />;
        case 'node':
            return <FaNodeJs size={iconSize} />;
        case 'html':
        case 'htm':
            return <SiHtml5 size={iconSize} />;
        case 'css':
            return <SiCss3 size={iconSize} />;
        case 'java':
            return <BsFiletypeJava size={iconSize} />;
        case 'py':
            return <SiPython size={iconSize} />;
        case 'rb':
            return <SiRuby size={iconSize} />;
        case 'git':
            return <DiGithubBadge size={iconSize} />;
        case 'json':
            return <VscJson color='yellow' size={iconSize} />;
        case 'go':
            return <SiGo size={iconSize} />;
        case 'cs':
            return <SiCsharp size={iconSize} />;
        default:
            return <BiFile className='text-indigo-400' size={iconSize} />;
    }
};

export default FileIcon;
