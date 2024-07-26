import withCodeEditor from '../../hoc/withCodeEditor'
import withSideBar from '../../hoc/withSideBar'

const CodeEditor = () => {
  return (
    <div>
        Hello
    </div>
  )
}

export default withSideBar(withCodeEditor(CodeEditor))