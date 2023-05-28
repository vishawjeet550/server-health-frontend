import Ordered from "./semantic_tags/OrderedList"

const Breadcrumb = () => {
    return (
        <nav>
            <Ordered className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                <li className="leading-normal text-sm"><div className="opacity-50 text-slate-700">Pages</div></li>
                <li className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']" aria-current="page">Dashboard</li>
            </Ordered>
            <h6 className="mb-0 font-bold capitalize">Dashboard</h6>
        </nav>
    )
}

export default Breadcrumb