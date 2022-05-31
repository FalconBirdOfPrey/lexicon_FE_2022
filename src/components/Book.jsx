import { useState } from 'react'

const Book = ({title, author, description}) => {

    const [isLiked, setIsLiked] = useState(false)

    const setChoice = () => {
        setIsLiked(state => !state)
    }


  return (
    <div className={`bookcard ${isLiked ? 'like' : ''}`}>
        <h2>Title: {title} </h2>
        <p>Author: {author} </p>
        <p>Description: {description} </p>
        <button onClick={setChoice}>I like this book!</button>
    </div>
  )
}

export default Book