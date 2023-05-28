import Card from "../../common/Card"

const InformationCard = () => {
    return (
        <Card>
            <div className="p-4 px-14 mx-6 mb-0 text-center bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <div className="w-16 h-16 text-center bg-center icon bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl rounded-xl flex justify-center items-center">
                    <i className="text-white opacity-100 fas fa-landmark text-xl" aria-hidden="true"></i>
                </div>
            </div>
            <div className="flex-auto p-4 pt-0 text-center">
                <h6 className="mb-0 text-center font-bold">Salary</h6>
                <span className="leading-tight text-xs">Belong Interactive</span>
                <hr className="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
                <h5 className="mb-0">+$2000</h5>
            </div>
        </Card>
  )
}

export default InformationCard