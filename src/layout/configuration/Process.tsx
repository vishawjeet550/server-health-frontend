import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { fetchProcessData } from "../../api/configuration/configuration.api";
import { useEffect } from "react";
import Paragraph from "../../common/semantic_tags/Paragraph";
import HeaderSection from "../../components/HeaderSection";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import Table from "../../common/Table";
import { processTableHeader } from "../../utils/common.utils";
import { BiRefresh } from "react-icons/bi";
import LoadingLayer from "../../common/LoadingLayer";

const Process = () => {
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
                <Table className="w-[50%]" heading="User Associated Process" tableColumnWrapper={tableColumnWrapper} headers={processTableHeader}  data={process?.user || []} />
                <Table className="w-[50%]" heading="Root Process" tableColumnWrapper={tableColumnWrapper} headers={processTableHeader}  data={process?.root || []} />
            </section>}
        </div>
    )
}

export default Process