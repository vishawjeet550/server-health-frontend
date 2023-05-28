import { MdOutlineSettingsInputComponent } from "react-icons/md"
import Heading4 from "../../common/semantic_tags/Heading4"
import Hr from "../../common/semantic_tags/Hr"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect } from "react";
import { fetchAppsData } from "../../api/configuration/configuration.api";
import Paragraph from "../../common/semantic_tags/Paragraph";
import FlexCard from "../../components/FlexCard";
import { getAppIcon } from "../../utils/helpers.utils";
import { TApps } from "../../interface/application.interface";

const Applications = () => {
    const dispatch = useDispatch();
    const { appLoading, apps, error } = useSelector((state: RootState) => state.system);

    useEffect(() => {
        dispatch(fetchAppsData({ page: 1, limit: 10 }) as any);
    }, [dispatch]);

    if (appLoading) return <Paragraph className="text-center mt-8">Fetching applications details ...</Paragraph>
    if (error) return <Paragraph className="text-red-700 text-center mt-8">Something went wrong !!!</Paragraph>

    return (
        <div className='dashboard-wrapper w-full mb-8'>
            <section className="mb-8">
                <aside className="flex gap-2 items-center justify-start">
                    <MdOutlineSettingsInputComponent />
                    <Heading4 className="font-bold pb-1">Applications</Heading4>
                </aside>
                <Hr className="mx-0" />
            </section>
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