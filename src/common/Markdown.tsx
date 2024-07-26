import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

type TMarkdown = {
    markdown: string;
}

const Markdown = ({ markdown }: TMarkdown) => {
    return (
        <SyntaxHighlighter language="bash" style={darcula}>
            {markdown}
        </SyntaxHighlighter>
    )
}

export default Markdown