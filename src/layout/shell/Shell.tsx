import Heading4 from "../../common/semantic_tags/Heading4"
import withSideBar from "../../hoc/withSideBar"
import Terminal from "./Terminal"

const Shell = () => {
  return (
    <div className="shell-wrapper">
        <section className="mt-4">
            <Terminal />
        </section>
    </div>
  )
}

export default withSideBar(Shell)