import { FaCog } from 'react-icons/fa'
import { ImUser } from 'react-icons/im'
import { IoIosNotifications } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'
import Unordered from './semantic_tags/UnorderedList'
import Breadcrumb from './Breadcrumb'
import Banner from '../components/Banner'
import Span from './semantic_tags/Span'

const Navbar = ({ color, className, showBanner = false }: { color?: string, className?: string; showBanner?: boolean }) => {
    return (
        <nav className={`h-[${showBanner ? '200px': '100px'}] relative flex flex-wrap items-start justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start ${className} text-${color}`} navbar-main="" navbar-scroll="true">
            <div className="z-[99] flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
                <Breadcrumb className={`text-${color}`} />
                <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
                    <div className="flex items-center md:ml-auto md:pr-4">
                        <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                            <Span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal transition-all">
                                <AiOutlineSearch className='text-black' />
                            </Span>
                            <input type="text" className="pl-[2.1875rem] text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" placeholder="Type here..." />
                        </div>
                    </div>
                    <Unordered className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                        <li className="flex items-center cursor-pointer">
                            <div className={`block px-0 py-2 font-semibold transition-all ease-nav-brand text-sm text-${color}`}>
                                <ImUser className='sm:mr-1' />
                            </div>
                            <Span className="hidden sm:inline">Sign In</Span>
                        </li>
                        <li className="flex items-center pl-4 xl:hidden">
                            <div className={`block p-0 transition-all ease-nav-brand text-sm text-${color}`} sidenav-trigger="">
                                <div className="w-4.5 overflow-hidden">
                                    <FaCog className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all" />
                                    <IoIosNotifications className='ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all' />
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center px-4">
                            <div className={`p-0 transition-all text-sm ease-nav-brand text-${color}`}>
                                <FaCog className="cursor-pointer fa fa-cog" />
                            </div>
                        </li>
                    </Unordered>
                </div>
            </div>
            {showBanner && <Banner className='absolute' />}
        </nav>
    )
}

export default Navbar