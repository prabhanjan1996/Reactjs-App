import React, {useEffect, useState,useContext} from "react"
import Page from './Page'
import Axios from "axios"
import {useParams, Link} from 'react-router-dom'
import LoadDotsIcon from './LoadingDotsIcon'

function ProfilePosts(){
    const {username} = useParams()
    const [isLoading, setIsLoading] =  useState(true)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function feetchPosts(){
            try{
                const response= await Axios.get(`/profile/${username}/posts`)
                setPosts(response.data)
                setIsLoading(false)

            } catch (e) {
                console.log("There was a problem")
            }
        }
        feetchPosts()
    }, [])
    if(isLoading) return <div>
        <LoadDotsIcon />
    </div>
   
    return (
        <div className="list-group">
        {posts.map(post => {
            const date = new Date(post.createdDate)
            const dateFormatted = `${date.getDate()}/${date.getMonth() +1}/${date.getFullYear()}`
            return(
                <Link key={post._id} to={`/post/${post._id}`} className="list-group-item list-group-item-action">
          <img className="avatar-tiny" src={post.author.avatar} /> <strong>{post.title}</strong> {" "}
          <span className="text-muted small">on {dateFormatted} </span>
        </Link>
            )
        })}
      </div>

    )
}
export default ProfilePosts