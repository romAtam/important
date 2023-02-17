import styled from 'styled-components'
import{Link} from 'react-router-dom'

export const Button = styled(Link)`
border-radius: 4px;
opacity: 0.9;

white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px': '12px 30px')};

font-size : ${({fontBig}) => (fontBig ? '20px': '18px')};
outline: none;
border: none;
font-weight:100;
text-decoration: none;
cursor: pointer;
display: flex;
justify-content: center;
box-shadow: 2px  1px 3px 1px rgba(0, 0, 0,1);
align-items: center;
transition: all 0.2s ease-in-out;
letter-spacing:2px; 
width:100%;
box-shadow:2px 1px 3px 1px rgba(0, 0, 0,1);
 background: ${({primary}) => (primary ? `rgba(0,0,0,0.3)` :'grey')}; ;
    color:wheat;
&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? 'orange' : 'lightgrey')};
  color: ${({dark}) => (dark ? 'blue': 'green')};
}
`

