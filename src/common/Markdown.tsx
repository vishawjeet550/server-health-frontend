import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type TMarkdown = {
    markdown: string;
}

const Markdown = ({ markdown }: TMarkdown) => {
    return (
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    )
}

export default Markdown