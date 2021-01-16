import React , {useReducer} from 'react'
import axios from 'axios';
import PublishContext from './PublishContext';
import PublishReducer from './PublishReducer';

const PublishState = props => {
    const initialState = {
        publishes : []
    }

    const [state, dispatch] = useReducer(PublishReducer, initialState)

    //Action
    const getAllPublish = async() => {
        try {
            const res = await axios.get('/api/publish');
            dispatch({type : "GET_PUBLISH" , payload:res.data.publish})
        } catch (error) {
            
        }
    }

    const publishArticle = async(formData) => {
        const config = {
            header : {
                "Content-Type" : "application/json" 
            }
        }
        try {
            const res = await axios.post('/api/publish',formData,config);
            console.log(res.data);
        } catch (error) {
            
        }
    }

    return <PublishContext.Provider
        value = { {
            publishes : state.publishes,
            getAllPublish,
            publishArticle,
        } }
    >
        {props.children}
    </PublishContext.Provider>
}

export default PublishState;