import withSideBar from "../../hoc/withSideBar"
import Applications from "./Applications"
import Information from "./Information"
import Process from "./Process"

const Configuration = () => {
  return (
    <div className="configuration">
      <Information />
      <Process />
      <Applications />
    </div>
  )
}

export default withSideBar(Configuration)