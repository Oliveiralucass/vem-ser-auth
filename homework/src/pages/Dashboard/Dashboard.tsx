import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContex'
import { IDashboard } from '../../utils/interfaces';
import { DashboardStyled } from './Dashboard.styled';
import { FaTwitter} from 'react-icons/fa'

export const Dashboard:React.FC<IDashboard> = (props: IDashboard) => {

  const { handleLogout, user } = useContext(AuthContext);

  return (
    <DashboardStyled>
      <div className='container'>
        <div>
          <FaTwitter size={42}/>
          <h1>Olá {user?.login}, Bem-vindo ao Twitter!</h1>
        </div>

        <div>
          <button onClick={handleLogout}>Log out</button>
        </div>
      </div>
      
    </DashboardStyled>
  )
}
