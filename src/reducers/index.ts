import { combineReducers } from "redux";
import matrixReducer from './matrixReducer';
import backgroundReducer from './backgroundReducer';

export const nextFrame = (item: any) => {
    return {
        type:"NEXT_FRAME",
        payload: item
    };
}

export const setBackgroundColor = (item: any) => {
    return {
        type:"SET_BAKCGROUND_COLOR",
        payload: item
    };
};

export const setForegroundColor = (item: any) => {
    return {
        type:"SET_FOREGROUND_COLOR",
        payload: item
    };
};

export default combineReducers({ backgroundReducer, matrixReducer });