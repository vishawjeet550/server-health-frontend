import { useEffect, useState } from "react";
import Table from "../../common/Table";
import withSideBar from "../../hoc/withSideBar"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { fetchProcessData } from "../../api/configuration/configuration.api";
import Paragraph from "../../common/semantic_tags/Paragraph";
import LoadingLayer from "../../common/LoadingLayer";
import { processTableHeader } from "../../utils/common.utils";
import HeaderSection from "../../components/HeaderSection";
import { BiRefresh } from "react-icons/bi";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import Caption from "../../common/semantic_tags/Caption";
import Input from "../../common/semantic_tags/Input";
import useDebounce from "../../hooks/useDebounce";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Modal from "../../common/Modal";

const ProcessManagement = () => {
    const dispatch = useDispatch();
    const [userProcessSearch, setUserProcessSearch] = useState('')
    const [rootProcessSearch, setRootProcessSearch] = useState('')
    const { processLoading, process, error } = useSelector((state: RootState) => state.system);
    const [processList, setProcessList] = useState({
        user: process?.user || [],
        root: process?.root || [],
    })

    useEffect(() => {
        setProcessList({ user: process?.user || [], root: process?.root || [] })
    }, [process])

    const fetchHandler = (page = 1, limit = 1000) => dispatch(fetchProcessData({ page, limit }) as any);

    useEffect(() => {
        fetchHandler()
    }, [dispatch]);

    const tableColumnWrapper = (key: string, value: any): any => {
        if (key === 'status') return <Paragraph className="text-green-700">{value}</Paragraph>
        else if (key === 'app_name') return <Paragraph className="font-bold">{value || 'Unknown'}</Paragraph>
        else if (key === 'action') {
            return <div className="flex gap-2">
                <AiFillEdit className="cursor-pointer" />
                <AiFillDelete className="cursor-pointer" />
            </div>
                
        }
        else return value
    }

    const handleSearch = useDebounce((term: string, type: string) => {
        if (type === 'user') !!term ? setProcessList({ ...processList, user: process?.user.filter((i => i.app_name.toLowerCase().includes(term.toLowerCase()))) || [] }) : setProcessList({ ...processList, user: process?.user || [] })
        if (type === 'root') !!term ? setProcessList({ ...processList, root: process?.root.filter((i => i.app_name.toLowerCase().includes(term.toLowerCase()))) || [] }) : setProcessList({ ...processList, root: process?.root || [] })
    }, 500);

    const handleOnChange = (type: string, value: string) => {
        if (type === 'user') { setUserProcessSearch(value); handleSearch(value, type) }
        else { setRootProcessSearch(value); handleSearch(value, type) }
    }

    return (
        <section className="process-wrapper">
            <Modal onClose={() => {}} isOpen={false}>
                hello
            </Modal>
            <HeaderSection Icon={MdOutlineSettingsInputComponent} heading="Processes">
                <BiRefresh className="cursor-pointer text-2xl" onClick={() => fetchHandler()} />
            </HeaderSection>
            {processLoading && <LoadingLayer className="mt-8" />}
            {error && <Paragraph className="text-red-700 text-center mt-8">Something went wrong !!!</Paragraph>}
            {!processLoading && !error && <div className="">
                <Table showPagination={true} itemsPerPage={20} className="w-full overflow-scroll" tableColumnWrapper={tableColumnWrapper}
                    headers={[ ...processTableHeader, { value: 'action', header: 'ACTION' } ]} data={processList.user || []}>
                    <Caption className="p-5 pl-2 text-lg font-semibold text-left">
                        <div className="flex justify-between items-center w-full">
                            <Paragraph>User Associated Process</Paragraph>
                            <Input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange('user', e.target.value)} value={userProcessSearch} placeholder="search by process name" className="text-black text-sm py-1 px-2" />
                        </div>
                    </Caption>
                </Table>
                <Table showPagination={true} itemsPerPage={20} className="w-full overflow-scroll" tableColumnWrapper={tableColumnWrapper}
                    headers={processTableHeader} data={processList.root || []}>
                    <Caption className="p-5 pl-2 text-lg font-semibold text-left">
                        <div className="flex justify-between items-center w-full">
                            <Paragraph>Root Associated Process</Paragraph>
                            <Input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange('root', e.target.value)} value={rootProcessSearch} placeholder="search by process name" className="text-black text-sm py-1 px-2" />
                        </div>
                    </Caption>
                </Table>
            </div>}
        </section>
    )
}

export default withSideBar(ProcessManagement)