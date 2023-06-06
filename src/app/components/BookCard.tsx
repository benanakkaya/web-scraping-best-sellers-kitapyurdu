import React from 'react'
import { Book } from '../types/BookType'

interface PropTypes {
    book: Book,
    index:number
}

const BookCard:React.FC<PropTypes> = ({book,index}) => {

  return (
    <a href={book.url} target="_blank" className='flex flex-col gap-2 p-2 border-[1px] border-orange-300 items-center relative'>
      <img className='h-32' src={book.image} alt={book.name} />
      <div className='flex flex-col gap-1 text-center'>
        <strong className='text-sm'>{book.name}</strong>
        <div className='text-xs italic'>({book.author})</div>
        <div className='font-bold text-sm text-orange-400'>{book.price}₺</div>
      </div>
      <span className='top-3 left-3 absolute flex items-center justify-center w-8 h-8 rounded-full border-[2px] border-orange-400 font-bold text-orange-400'>{index+1}</span>
    </a>
  )
}

export default BookCard
