import React,{useState} from 'react'
import DialogBoxPage from './DialogBoxPage/DialogBoxPage'
function Home() {
    const [check, setcheck] = useState(true)
    return (
        check ? <div className='home'>
            <button onClick={() => setcheck(false)}>Click ME</button>
        </div> : <DialogBoxPage />
    )
}

export default Home
