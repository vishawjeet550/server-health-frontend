import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { fetchProcessData } from "../../api/configuration/configuration.api";
import { useEffect } from "react";
import Paragraph from "../../common/semantic_tags/Paragraph";
import HeaderSection from "../../components/HeaderSection";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import Table from "../../common/Table";
import { BiRefresh } from "react-icons/bi";
import LoadingLayer from "../../common/LoadingLayer";
import Caption from "../../common/semantic_tags/Caption";

type TProcess = {
    headers: Record<string, any>[];
}

const Process = ({ headers }: TProcess) => {
    const dispatch = useDispatch();
    const { processLoading, process, error } = useSelector((state: RootState) => state.system);

    const fetchHandler = (page = 1, limit = 10) => dispatch(fetchProcessData({ page, limit }) as any);

    useEffect(() => {
        fetchHandler()
    }, [dispatch]);

    const tableColumnWrapper = (key: string, value: any): any => {
        if (key === 'status') return <Paragraph className="text-green-700">{value}</Paragraph>
        else if (key === 'app_name') return <Paragraph className="font-bold">{value}</Paragraph>
        else return value
    }

    return (
        <div className="process-wrapper w-full mb-8 min-h-[50vh]">
            <HeaderSection Icon={MdOutlineSettingsInputComponent} heading="Process">
                <BiRefresh className="cursor-pointer text-2xl" onClick={() => fetchHandler()} />
            </HeaderSection>
            {processLoading && <LoadingLayer className="mt-8" />}
            {error && <Paragraph className="text-red-700 text-center mt-8">Something went wrong !!!</Paragraph>}
            {!processLoading && !error && <section className="flex gap-4">
                <Table className="w-[50%]" tableColumnWrapper={tableColumnWrapper} headers={headers} data={process?.user || []}>
                    <Caption className="p-5 pl-2 text-lg font-semibold text-left">
                        User Associated Process
                    </Caption>
                </Table>
                <Table className="w-[50%]" tableColumnWrapper={tableColumnWrapper} headers={headers} data={process?.root || []}>
                    <Caption className="p-5 pl-2 text-lg font-semibold text-left">
                        Root Associated Process
                    </Caption>
                </Table>
            </section>}
        </div>
    )
}

export default Process