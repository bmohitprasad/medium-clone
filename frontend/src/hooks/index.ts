import { useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"

export interface Blog {
    "content": string
    "title": string
    "id": string
    "author": {
        "name": string
    }
    "date": Date
}

export interface User {
    "username": string
    "name": string
    "catchPhrase": string
}

export const useBlog = ({id}:{id: string}) =>{
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState<Blog>()

    useEffect(() =>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response =>{
            setBlog(response.data.blog)
            setLoading(false)
        })
    }, [id])

    return {
        loading,
        blog
    }
}

export const useBlogs = () =>{
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState<Blog[]>([])

    useEffect(() =>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response =>{
            setBlogs(response.data.blogs)
            setLoading(false)
        })
    }, [])
    return {
        loading,
        blogs
    }
}

export const userBlogs = () =>{
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState<Blog[]>([])

    useEffect(() =>{
        axios.get(`${BACKEND_URL}/api/v1/blog/yourblogs`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response =>{
            setBlogs(response.data.blogs)
            setLoading(false)
        })
    }, [])
    return {
        loading,
        blogs
    }
}

export const userDetails = ( { userId } : { userId: any } ) => {
    const [loading, setLoading] = useState(true)
    const [details, setDetails] = useState<User | null>(null);

    
    useEffect(() => {
        
        axios.post(`${BACKEND_URL}/api/v1/user/details`, { userId })
        .then(response => {
            setDetails(response.data.user)
            setLoading(false)
        })
    }, [])

    return {
        loading,
        details
    }
} 