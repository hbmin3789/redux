
type MatrixItem = {
    x: number,
    y: number,
    
};


const getNextFrame = () => {
    
}

const matrixReducer = (state = [], action: any) => {
	switch (action.type) {
    	case "NEXT_FRAME":
            return getNextFrame();
        default:
        	return state;
    }
}

export default matrixReducer;