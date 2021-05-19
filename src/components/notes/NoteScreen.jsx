import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="note__main-content">

            <NotesAppBar />
            <div className="notes__content">
                <input type="text" placeholder="Some awesome title..." className="notes__title-input" autoComplete="off" />
                <textarea placeholder="What happened today?" className="notes__textarea"></textarea>
                <div className="notes__image">
                    <img src="https://i.pinimg.com/originals/85/60/29/85602937bce1b4ca82463e7e16993d9f.jpg" alt="imagen" />
                </div>
                
            </div>
            
        </div>
    )
}
