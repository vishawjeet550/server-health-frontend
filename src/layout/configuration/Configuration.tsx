import withSideBar from "../../hoc/withSideBar"
import { processTableHeader } from "../../utils/common.utils"
import Applications from "./Applications"
import Information from "./Information"
import Process from "./Process"

const Configuration = () => {
  return (
    <div className="configuration">
      <Information />
      <Process headers={processTableHeader} />
      <Applications />
    </div>
  )
}

export default withSideBar(Configuration)