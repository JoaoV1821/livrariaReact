import React, {useEffect, useState} from 'react'

const Livros = () => {
    const [request, setRequest] = useState([]);

    const searchBooks = async () => {
        const url = 'https://bookstore-mod4-v2.herokuapp.com/livros';

        const data =  await fetch(url);

        const json = await data.json();
        console.log(json)
        setRequest(json);

    }

    
    useEffect(() => {

      return () => {
        searchBooks();
        
      };
    }, [])
 
  return (
    <main>
        {showBooks()}
    </main>
  )
}

export default Livros