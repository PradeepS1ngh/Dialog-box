import React , {useReducer} from 'react'
import axios from 'axios';
import DraftContext from './DraftContext';
import DraftReducer from './DraftReducer';

const DraftState = props => {
    const initialState = {
        drafts : []
    }

    const [state, dispatch] = useReducer(DraftReducer, initialState)

    //Action
    const getAllDraft = async() => {
        try {
            const res = await axios.get('/api/draft');
            dispatch({type : "GET_DRAFT" , payload:res.data.draft})
            console.log(res.data.draft);
        } catch (error) {
            
        }
    }

    const AddDraft = async(formData) => {
        const config = {
            header : {
                "Content-Type" : "application/json" 
            }
        }
        try {
            const res = await axios.post('/api/draft',formData,config);
            console.log(res.data);
        } catch (error) {
            
        }
    }

    return <DraftContext.Provider
        value = { {
            drafts : state.drafts,
            getAllDraft,
            AddDraft
        } }
    >
        {props.children}
    </DraftContext.Provider>
}

export default DraftState;