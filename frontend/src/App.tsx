import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { Publish } from './pages/Publish'
import { Home } from './pages/Home'
import { UpdateBlog } from './pages/UpdateBlog'
import { UserBlogs } from './pages/UserBlogs'
import { BulkBlogs } from './pages/BulkBlogs'

function App(){
  return(
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/blog/:id" element={<Blog/>}/>
            <Route path="/blogs" element={<BulkBlogs/>}/>
            <Route path="/yourblogs" element={<UserBlogs/>}/>
            <Route path="/publish" element={<Publish/>}/>
            <Route path="/updateblog" element={<UpdateBlog/>}/>
            <Route path="/yourblogs" element={<UserBlogs/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App