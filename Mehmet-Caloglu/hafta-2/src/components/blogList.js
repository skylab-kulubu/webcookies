import React from 'react'
import Card from './card'

const BlogList = ({ myblogs }) => {

    console.log(myblogs)

    return (
        <div className="mt-8 grid sm:grid-cols-2 lg:md:grid-cols-3 gap-8 mx-6">

            {
                myblogs.map((blogs) => <Card mytitle={blogs.title} mybody={blogs.body} key={blogs.title} />)
            }


        </div>
    )
}

export default BlogList