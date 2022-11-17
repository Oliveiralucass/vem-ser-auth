import React from "react";

export interface IAuthContext {
    createNewUser: (newUser: IUser) => Promise<void>,
    handleLogin: (user: IUser) => Promise<void>,
    handleLogout: () => Promise<void>,
    token: string,
    user: IUser | undefined
}

export interface IChildren{
    children?:React.ReactNode
}

export interface IUser{
    login: string,
    senha: string
}

export interface IDashboard {
    children?: JSX.Element|JSX.Element[]
}