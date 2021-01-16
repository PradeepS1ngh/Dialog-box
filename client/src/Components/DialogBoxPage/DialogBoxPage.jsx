import React,{ useEffect , useContext} from 'react'

import DialogBox from './DialogBox'

import DraftContext from '../../Context/Draft/DraftContext'
import PublishContext from '../../Context/Publish/PublishContext'

function DialogBoxPage() {
    const draftContext = useContext(DraftContext)
    const {drafts , getAllDraft} = draftContext;

    const publishContext = useContext(PublishContext)
    const {publishes, getAllPublish} = publishContext;

    useEffect(() => {
        getAllDraft();
        getAllPublish();
    }, [])

    return (
        <div className='dialogBoxPage'>
            <div className='DraftSide'>{drafts  && drafts.map( (draftItem) => <h1>{draftItem.title}</h1>)}</div>
            <div className="formSide">
                <DialogBox />
            </div>
            <div className='PublishSide'>{publishes  && publishes.map( (publishItem) => <h1>{publishItem.title}</h1>)}</div>
        </div>
    )
}

export default DialogBoxPage
