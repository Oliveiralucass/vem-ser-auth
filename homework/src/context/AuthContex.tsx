import nProgress from 'nprogress';
import React, { createContext, useState } from 'react'
import { api } from '../utils/api';
import { IAuthContext, IChildren, IUser } from '../utils/interfaces'
import { toast } from 'react-toastify'
import { toastConfig } from '../utils/toast';
import { useNavigate } from 'react-router-dom'


export const AuthContext = createContext({} as IAuthContext)

export const AuthProvider = ({ children }: IChildren) => {

    const [ token, setToken ] = useState<string>('');
    const [ user, setUser ] = useState<IUser>();

    const navigate = useNavigate();

    const createNewUser = async (newUser: IUser) => {
        try {
            nProgress.start();
            await api.post('/auth/create', newUser)
            toast.success('Deu certo', toastConfig)
            const { data } = await api.post('/auth', newUser);
            localStorage.setItem('token', data)
            setToken(data)
            setUser(newUser)
            navigate('/dashboard')
        } catch (error) {
            toast.error('Ocorreu um erro', toastConfig);
            console.error(error);
        } finally {
            nProgress.done();
        };
    };

    const handleLogin = async (user: IUser) => {
        try{
            nProgress.start();
            const { data } = await api.post('/auth', user);
            localStorage.setItem('token', data)
            setToken(data)
            setUser(user)
            navigate('/dashboard')
        } catch(error) {
            toast.error('Login ou senha inválida, tente novamente.', toastConfig)
            console.error(error);
        } finally {
            nProgress.done();
        }
    }

    const handleLogout = async () =>{
        localStorage.removeItem('token');
        api.defaults.headers.common['Authorization'] = undefined;
        setToken('')
        setUser(undefined);
        navigate('/')
    }

    return (
        <AuthContext.Provider value={{ createNewUser, handleLogin, token, handleLogout, user}}>
            { children }
        </AuthContext.Provider>
    )
}
