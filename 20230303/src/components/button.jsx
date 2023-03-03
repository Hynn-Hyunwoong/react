import React from 'react'
import styled , { css }from "styled-components"

const flexCenter = css `
    display: inline-flex;
    justify-content: center;
    align-items: center;
`

const fullWidthStyle = css `
    ${({ fullWidth })=>{
        fullWidth && css `
        width:100%;
        & + & {
            margin-top : 10px;
        }
        `
    }}
`

const Button = styled.button`
    ${flexCenter}
    border : none;
    outline : none;
    font-size : 12px;
    font-weight : bold;
    padding : 7px 14px;

`

const StyledButton = ({ children }) => {
    return (
        <Button>{children}</Button>
    )
}

export default StyledButton