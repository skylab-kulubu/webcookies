import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Card from './components/card'
import BlogList from './components/blogList'


const App = () => {
  const [tikla, setTikla] = useState(true)
  const [blogs, setBlogs] = useState([])
  const [sira, setSira] = useState(1)


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + sira)
      .then(response => response.json())
      .then(json => setBlogs([...blogs, json]))

    console.log(blogs)



  }, [sira])




  return (
    <div>

      <div className='navigation py-5   bg-white sticky top-0 z-50 opacity-90   '>
        <nav className='justify-around flex'>
          <p className="text-4xl ...">Some Blogs</p>
          <button onClick={() => setSira(sira + 1)} className="bg-white opacity-100  hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
            <span className=' first-letter:'>Bir Post Daha Lütfen</span>
          </button>

        </nav>
      </div>

      {/* // main */}
      <BlogList myblogs={[...blogs]} />

    </div>

  )
}

export default App