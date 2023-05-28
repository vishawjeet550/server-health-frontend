import React, { ComponentType } from "react";
import { FaLaptopMedical } from 'react-icons/fa'
import { TbDiamondFilled } from 'react-icons/tb'

import Span from "../common/semantic_tags/Span";
import Unordered from "../common/semantic_tags/UnorderedList";
import { sidebarList } from "../utils/common.utils";
import { TSideBarList } from "../interface/common.interface";
import Navbar from "../common/Navbar";
import Hr from "../common/semantic_tags/Hr";
import Button from "../common/semantic_tags/Button";

interface WithSidebarProps {
    // Define any additional props needed by the HOC
}

function withSideBar<P extends object>(
    WrappedComponent: ComponentType<P>
): React.FC<P & WithSidebarProps> {
    const WithSidebar: React.FC<P & WithSidebarProps> = (props) => {
        return (
            <section className="flex gap-4">
                <aside className="max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent">
                    <div className="h-19.5 flex items-center gap-2 justify-center">
                        <FaLaptopMedical className="text-3xl" />
                        <div className="block px-4 py-6 m-0 text-sm whitespace-nowrap text-slate-700">
                            <Span className="font-semibold transition-all duration-200 ease-nav-brand">System Management</Span>
                        </div>
                    </div>
                    <Hr className="mx-12" />
                    <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
                        <Unordered className="flex flex-col pl-0 mb-0">
                            {
                                sidebarList.map(({ title, Icon, route }: TSideBarList) => {
                                    return <li className="mt-0.5 w-full" onClick={() => console.log(route)}>
                                        <div className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors">
                                            <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                                <Span className="text-xl"><Icon /></Span>
                                            </div>
                                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">{title}</span>
                                        </div>
                                    </li>
                                })
                            }
                        </Unordered>
                    </div>
                    <div className="mx-4">
                        <p className="text-gray-800 text-red-500 text-red-600 after:bg-gradient-to-tl after:from-gray-900 after:to-slate-800  after:bg-gradient-to-tl after:from-blue-600 after:to-cyan-400 after:bg-gradient-to-tl after:from-red-500 after:to-yellow-400 after:bg-gradient-to-tl after:from-green-600 after:to-lime-400 after:bg-gradient-to-tl after:from-red-600 after:to-rose-400 after:bg-gradient-to-tl after:from-slate-600 after:to-slate-300 text-lime-500 text-cyan-500 text-slate-400 text-fuchsia-500"></p>
                        <div className="after:opacity-65 after:bg-gradient-to-tl after:from-slate-600 after:to-slate-300 relative flex min-w-0 flex-col items-center break-words rounded-2xl border-0 border-solid border-blue-900 bg-white bg-clip-border shadow-none after:absolute after:top-0 after:bottom-0 after:left-0 after:z-10 after:block after:h-full after:w-full after:rounded-2xl after:content-['']" sidenav-card="">
                            <div className="mb-7.5 absolute h-full bg-[url('https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/curved-images/white-curved.jpeg')] w-full rounded-2xl bg-cover bg-center"></div>
                            <div className="relative z-20 flex-auto w-full p-4 text-left text-white">
                                <div className="flex items-center justify-center w-8 h-8 mb-4 text-center bg-white bg-center rounded-lg icon shadow-soft-2xl">
                                    <TbDiamondFilled className='top-0 z-10 opacity-40 ni leading-none ni-diamond text-lg bg-gradient-to-tl from-slate-600 to-slate-300 bg-clip-text opacity-80' />
                                </div>
                                <div className="transition-all duration-200 ease-nav-brand">
                                    <h6 className="mb-0 text-white">Need help?</h6>
                                    <p className="mt-0 mb-4 font-semibold leading-tight text-xs">Please check our docs</p>
                                    <Button clickHandler={() => {}} type="button" className="text-white">Documentation</Button>
                                </div>
                            </div>
                        </div>

                        <a className="inline-block w-full px-6 py-3 my-4 font-bold text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg select-none shadow-soft-md bg-150 bg-x-25 leading-pro text-xs bg-gradient-to-tl from-purple-700 to-pink-500 hover:shadow-soft-2xl hover:scale-102" href="https://www.creative-tim.com/product/soft-ui-dashboard-pro-tailwind?ref=sidebarfree">Upgrade to pro</a>
                    </div>
                </aside>
                <div className="w-full component-wrapper ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
                    <Navbar />
                    <div className="px-10 py-4">
                        <WrappedComponent {...props} />
                    </div>
                </div>
            </section>
        );
    };

    return WithSidebar;
}

export default withSideBar;
