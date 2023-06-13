import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import LoadingLayer from "./LoadingLayer";
import { Navigate } from "react-router-dom";

type TPrivateRouter = {
    children: React.ReactElement;
}

export const PrivateRouter = ({ children }: TPrivateRouter) => {
    const { globalLoader, user } = useSelector((state: RootState) => state.global)
    if (globalLoader) return <div className="h-screen w-full flex justify-center items-center"><LoadingLayer /></div>
    if (user) return children

    return <Navigate to={'/sign-in'} />
}

export const AuthRouter = ({ children }: TPrivateRouter) => {
    const { globalLoader, user } = useSelector((state: RootState) => state.global)
    if (globalLoader) return <div className="h-screen w-full flex justify-center items-center"><LoadingLayer /></div>
    if (user) return <Navigate to='/' />

    return children
}