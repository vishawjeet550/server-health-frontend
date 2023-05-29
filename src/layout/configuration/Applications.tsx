import { MdOutlineSettingsInputComponent } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect } from "react";
import { fetchAppsData } from "../../api/configuration/configuration.api";
import Paragraph from "../../common/semantic_tags/Paragraph";
import FlexCard from "../../components/FlexCard";
import { getAppIcon } from "../../utils/helpers.utils";
import { TApps } from "../../interface/configuration.interface";
import HeaderSection from "../../components/HeaderSection";
import { BiRefresh } from "react-icons/bi";

const Applications = () => {
    const dispatch = useDispatch();
    const { appLoading, apps, error } = useSelector((state: RootState) => state.system);

    const fetchHandler = () => dispatch(fetchAppsData({ page: 1, limit: 10 }) as any);

    useEffect(() => {
        fetchHandler()
    }, [dispatch]);

    if (appLoading) return <Paragraph className="text-center mt-8">Fetching applications details ...</Paragraph>
    if (error) return <Paragraph className="text-red-700 text-center mt-8">Something went wrong !!!</Paragraph>

    return (
        <div className='dashboard-wrapper w-full mb-8 min-h-[50vh]'>
            <HeaderSection Icon={MdOutlineSettingsInputComponent} heading="Applications">
                <BiRefresh className="cursor-pointer text-2xl" onClick={fetchHandler} />
            </HeaderSection>
            <section className="grid grid-cols-5 gap-4">
                {
                    (apps || []).map((app: TApps, key: number) => {
                        return <FlexCard iconClassName="black-gradient" key={key} name={app.name.replace('.app', '')} description={app.storage} Icon={getAppIcon(app.name)} />
                    })
                }
            </section>
        </div>
    )
}

export default Applications