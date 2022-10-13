import React, { useEffect, useState } from 'react'
import axios from 'axios';

const DataFetching = ({ refresh}) => {
    const [character, setCharacter] = useState('');

    useEffect(() => {
        axios.get('https://www.breakingbadapi.com/api/character/random')
            .then((res) => {
                console.log(res.data);
                setCharacter(res.data[0])
            })
            .catch((err) => {
                console.log(err)
            })
    },[refresh])

  return (
    <div className='data'>
        <img className='img' src={character.img} alt='img'></img>
        <h1>
            {character.name}
        </h1>
    </div>
  )
}

export default DataFetching