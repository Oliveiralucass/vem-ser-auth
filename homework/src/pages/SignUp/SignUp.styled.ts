import React from 'react'
import styled from 'styled-components'

export const SignUpStyled = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--cor-bg);

    .container{
        margin: 0 auto;
        max-width: 600px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        position: absolute;
        left: 50%;
        top: 49.6%;
        transform: translate(-50%, -50%);
        color: #FFFFFF;
        align-items: center;
        box-shadow: rgb(136 153 166 / 20%) 0px 0px 15px;
        box-sizing: border-box;
        padding: 20px 40px;
        background-color: #15202B;
        border-radius: 12px;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 40px;

        div{
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        input{
            width: 400px;
            height: 42px;
            border: none;
            outline: none;
            border: 2px solid transparent;
            border-radius: 8px;
            font-size: 1.375rem;
            font-weight: 400;
            padding-left: 20px;
            &:focus{
            border: 2px solid var(--cor-principal);
        }
        }
       
        label{
            font-size: 0.875rem;
            font-weight: 600;
        }

        input[type=submit] {
            background-color: var(--cor-principal);
            height: 52px;
            width: 300px;
            align-self: center;
            padding-left: 0;
            color: #FFFFFF;
            font-weight: 700;
        }

        .ou{
            font-weight: 700;
        }
    }
    a{
        color: #ffffff;
        font-weight: 700;
    }
`