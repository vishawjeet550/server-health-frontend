import withSideBar from "../../hoc/withSideBar"
import Applications from "./Applications"
import Information from "./Information"

const Configuration = () => {
  return (
    <div className="configuration">
      <Information />
      <Applications />
    </div>
  )
}

export default withSideBar(Configuration)