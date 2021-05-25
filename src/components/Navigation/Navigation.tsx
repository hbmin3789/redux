import React from 'react';
import styled, { keyframes } from 'styled-components';
import { SketchPicker } from 'react-color';
import { useSelector, useDispatch } from 'react-redux';
import { setBackgroundColor, setForegroundColor } from '../../reducers/index';

const Background = styled.div`
    position: absolute;
    right: 0;
    left: auto;
    top: 0;
    width: 10rem;
    height: 100%;
    background-color: #dddddd;
    transition: .2s;
    &:hover{
        width: 20rem;
        transition: .2s;
    }
`;

const Picker = styled.div`
    display: inline-block;
`;

const SetColorArea = styled.div`
    text-align: center;
    margin-top: 2rem;
`;

const SetForegroundDesc = styled.div`
`;

export const Navigation = () => {
    let dispatch = useDispatch();

    const backgroundReducer =  useSelector((state) => {
        return (state as any).backgroundReducer;
    });

    let handleForeground = (color: any) => {
        dispatch(setForegroundColor(color.hex));
    };

    let handleBackground = (color: any) => {
        dispatch(setBackgroundColor(color.hex));
    };

    return (
        <Background>
            <SetColorArea>
                <Picker>
                    <SketchPicker color={backgroundReducer.foreground} 
                                onChangeComplete={handleForeground}>
                    </SketchPicker>
                </Picker>
                <SetForegroundDesc>
                        글자색 변경
                </SetForegroundDesc>
            </SetColorArea>
            <SetColorArea>
                <Picker>
                    <SketchPicker color={backgroundReducer.background} 
                                onChangeComplete={handleBackground}>
                    </SketchPicker>
                </Picker>
                <SetForegroundDesc>
                        배경색 변경
                </SetForegroundDesc>
            </SetColorArea>
        </Background>
    );
};

export default Navigation;