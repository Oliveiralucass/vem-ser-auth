import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../context/AuthContex';
import { IUser } from '../../utils/interfaces'
import { Link } from 'react-router-dom'
import { FaTwitter } from 'react-icons/fa'
import { LoginStyled } from './Login.styled';

export const Login = () => {

  const { register, handleSubmit } = useForm<IUser>();
  const { handleLogin } = useContext(AuthContext);


  return (
    <LoginStyled>
      <div className='container'>
        <FaTwitter size={42}/>
        <h1>Entrar no Twitter</h1>
        <form onSubmit={handleSubmit(data => handleLogin(data))}>
          <div>
            <label htmlFor="login">Login</label>
            <input type="text" id='login' {...register('login')}/>
          </div>

          <div>
            <label htmlFor="senha">Senha</label>
            <input type="text" id='senha' {...register('senha')}/>
          </div>

          <input type="submit" value='Entrar'/>
        </form>
        <div className='ou'> ou </div>
        <span>Não possui conta? <Link to='/signup'>Cadastre-se</Link></span>
      </div>
    </LoginStyled>
  )
}
