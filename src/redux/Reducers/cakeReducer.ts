import { buyCake,sellCake,buyIcecrearm,sellIcecream } from "../Actions/actionTypes"

const initialState = {
    numOfCakes:10,
    numOfIceCream:10
}

const cakeReducer = (state=initialState,action:{type:string,payload?:unknown})=>{
    switch(action?.type){
        case buyCake:
            return {
                ...state,
                numOfCakes:state.numOfCakes-1
            }
        case sellCake:
            return {
                ...state,
                numOfCakes:state.numOfCakes+1
            }
        default:
            return state
    }
}

const iceCreamReducer = (state=initialState,action:{type:string,payload?:unknown})=>{
    // switch(action.type){
    //     case 
    // }
}

export default cakeReducer