import { useSelector, useDispatch } from "react-redux";
import withSideBar from "../../hoc/withSideBar"
import FlexCard from "./FlexCard"
import InformationCard from "./InformationCard"
import { RootState } from "../../store";
import { useEffect } from "react";
import { fetchSystemData } from "../../api/configeration/configeration.api";

const Configeration: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { loading, system_configeration, error } = useSelector((state: RootState) => state.system);

  useEffect(() => {
    dispatch(fetchSystemData());
  }, [dispatch]);

  console.log(loading, system_configeration, error)

  return (
    <div className='dashboard-wrapper w-full h-screen'>
      <section className="flex flex-wrap -mx-3 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i, j) => (
          <InformationCard />
        ))}
      </section>
      <section className="flex flex-wrap -mx-3 gap-8 mt-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i, j) => (
          <FlexCard />
        ))}
      </section>
    </div>
  )
}

export default withSideBar(Configeration)