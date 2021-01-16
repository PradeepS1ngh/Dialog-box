import React,{useState,useContext} from 'react'

import PublishContext from '../../Context/Publish/PublishContext'
import DraftContext from '../../Context/Draft/DraftContext'

function DialogBox() {

    const draftContext = useContext(DraftContext)
    const {drafts , getAllDraft, AddDraft} = draftContext;

    const publishContext = useContext(PublishContext)
    const {publishes, getAllPublish , publishArticle} = publishContext;


    const [Article, setArticle] = useState({
        title : '',
        desc : ''
    })
    const {title , desc} = Article;

    onchange = (e) => setArticle({...Article,[e.target.name] : e.target.value});

    onsubmit = () => {
        console.log('clicked');
        publishArticle(Article);
        setArticle({
            title : '',
            desc : ''
        })
    }

    const onCrossClick = () => {
        console.log('DraftClicked');
        AddDraft(Article);
        setArticle({
            title : '',
            desc : ''
        })
    }

    return (
        <div>
            <input type="text" name='title' value={title} onChange={onchange}/>
            <input type="text" name='desc' value={desc} onChange={onchange}/>
            <button onClick={onsubmit}>Publish</button>
            <button onClick={onCrossClick}>Cross</button>
        </div>
    )
}

export default DialogBox
