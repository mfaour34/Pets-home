const initState={
    err:null,
    url:[],
    doc:null
}

const postReducer=(state=initState,action)=>{
   switch(action.type){
       case 'POST_CREATED':
           return{
               ...state,
               err:null
           }
        case 'POST_ERROR':
            return{
                ...state,
                err:action.err
            }
        case 'IMAGE_FETCH':
            
            return{
                ...state,
                url:[...state.url,action.url]
            }
        case 'GET_POST':
            
            return{
                ...state,
                err:null,
                doc:action.doc
            }
        case 'GET_POST_ERROR':
            return{
                ...state,
                err:action.err
            }
        case 'DELETED':
            return state;
        case 'DELETE_ERROR':
            return{
                ...state,
                err:action.err
            }
        
        default:
            return state
   }
}

export default postReducer