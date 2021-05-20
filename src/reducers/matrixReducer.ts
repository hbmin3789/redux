import MatrixItem from '../libs/MatrixItem';

const getRandom = (num: number) => Math.floor(Math.random() * 100) % num;

const newMatrixItem = (newItem: MatrixItem) => {
    newItem.isActive = true;
    newItem.x = getRandom(100);
    newItem.dist = getRandom(30) + 70;
    newItem.char = String.fromCharCode(getRandom(25)+65);
    newItem.frame = 15;
    newItem.speed = getRandom(5) + 2;
    newItem.y = 0;
}

const getNextFrame = (matrixItems: MatrixItem[]) => {
    matrixItems.forEach(x=>{
        //살아있는 문자라면
        if(x.isActive){
            //Counter상태 확인하고
            
            if(x.frame <= x.counter + 1){
                //Y값을 증가시켜야 하면 증가시켜줌
                x.y += 5;
                //최대 거리까지 갔다면
                if(x.y >= x.dist){
                    //죽임
                    x.isActive = false;                    
                }
                //Y값을 증가시켰다면 Counter 초기화
                x.counter = 0;
                return;
            }
            x.counter += x.speed;

            return;
        }
        //1/3확률(0,1,2)로 부활함. 숫자가 커질수록 부활할 확률 낮아짐
        
        if(getRandom(20) === 0){           
            newMatrixItem(x);
        }        
    });    
}

const matrixReducer = (state = [], action: any) => {
    
	switch (action.type) {
    	case "NEXT_FRAME":
            getNextFrame(action.payload);
            return action.payload;
        default:
        	return state;
    }
}

export default matrixReducer;