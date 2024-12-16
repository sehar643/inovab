import React from 'react'
import SubscribeSection from './_components/SubscribeSection'
import RecentBlog from './_components/RecentBlog'
import AllBlogPosts from './_components/AllBlogPosts'

const StoriesAndInterviews = () => {
  return (
    <div className='bg-gradient-to-r from-blue-50 via-white to-blue-50'>
      <SubscribeSection/>
      <RecentBlog/>
      <AllBlogPosts/>
    </div>
  )
}

export default StoriesAndInterviews
