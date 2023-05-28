import withSideBar from "../../hoc/withSideBar"
import Information from "./Information"

const Configeration = () => {
  return (
    <div className="configeration">
      <Information />
    </div>
  )
}

export default withSideBar(Configeration)