import React from 'react';
import styled,{keyframes} from 'styled-components';


const ColorPicker = styled.input`

`;

const Background = styled.div`
    position: absolute;
    
    width: 10rem;
    height: 100%;
    transition: .4s;
    &:hover{
        width: 30rem;
        transition: .4s;
    }
`;

export const Navigation = () => {
    return (
        <Background>

        </Background>
    );
};

export default Navigation;