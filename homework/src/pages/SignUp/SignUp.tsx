import React, { useContext} from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../context/AuthContex';
import { IUser } from '../../utils/interfaces';
import { Link } from 'react-router-dom'
import { SignUpStyled } from './SignUp.styled';
import { FaTwitter } from 'react-icons/fa'

export const SignUp = () => {

  const { register, handleSubmit } = useForm<IUser>();
  const { createNewUser } = useContext(AuthContext);

  return (
    <SignUpStyled>
      <div className='container'>
        <FaTwitter size={42}/>
        <h1>Cadastre-se no Twitter</h1>
        <form onSubmit={handleSubmit(data => createNewUser(data))}> 
        <div>
          <label htmlFor="login"> Login </label>
          <input type='text' id='login' {...register('login')}/>
        </div>

        <div>
          <label htmlFor="senha"> Senha </label>
          <input type='password' id='senha' {...register('senha')}/>
        </div>

        <input type='submit' value='Criar conta'/>
        </form>
        <div className='ou'> ou </div>
        <span>Já possui conta? <Link to="/">Faça o Login</Link></span>
      </div>
    </SignUpStyled>
  );
};
