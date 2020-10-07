import React, {useEffect, useState,useContext} from "react"
import Page from './Page'
import Axios from "axios"
import {useParams, Link} from 'react-router-dom'
import LoadDotsIcon from './LoadingDotsIcon'

function ProfileFollowers(){
    const {username} = useParams()
    const [isLoading, setIsLoading] =  useState(true)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function feetchPosts(){
            try{
                const response= await Axios.get(`/profile/${username}/followers`)
                setPosts(response.data)
                setIsLoading(false)

            } catch (e) {
                console.log("There was a problem")
            }
        }
        feetchPosts()
    }, [username])

    if(isLoading) return <div>
        <LoadDotsIcon />
    </div>
   
    return (
        <div className="list-group">
        {posts.map((follower, index) => {
            
            return(
                <Link key={index} to={`/profile/${follower.username}`} className="list-group-item list-group-item-action">
          <img className="avatar-tiny" src={follower.avatar} /> {follower.username}
          
        </Link>
            )
        })}
      </div>

    )
}
export default ProfileFollowers