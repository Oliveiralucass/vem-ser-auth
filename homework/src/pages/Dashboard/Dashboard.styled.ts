import React from 'react'
import styled from 'styled-components'

export const DashboardStyled = styled.div`
    background-color: var(--cor-bg);
    width: 100%;
    height: 100vh;


    .container{
        position: absolute;
        left: 50%;
        top: 49.6%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
    }
  
    div{
        margin: 0 auto;
        gap: 20px;
        max-width: 1200px;
        color: #ffffff;
        display: flex;
        justify-content: space-around;


        button{
            background-color: var(--cor-principal);
            height: 52px;
            width: 200px;
            align-self: center;
            padding-left: 0;
            color: #FFFFFF;
            font-weight: 700;
            border: none;
            outline: none;
            border-radius: 12px;
        }
    }
`