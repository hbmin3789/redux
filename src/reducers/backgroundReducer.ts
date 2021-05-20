const initialStates = {
    background: "#ffffff",
    foreground: "#000000"
}

const backgroundReducer = (state = initialStates, action: any) => {
    
	switch (action.type) {
    	case "SET_BAKCGROUND_COLOR":
            return {
                ...state,
                background: action.payload
            };
        case "SET_FOREGROUND_COLOR":
            return {
                ...state,
                foreground: action.payload
            };
        default:
        	return state;
    }
}

export default backgroundReducer;