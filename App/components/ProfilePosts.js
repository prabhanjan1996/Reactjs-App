import React, {useEffect, useState,useContext} from "react"
import Page from './Page'
import Axios from "axios"
import {useParams} from 'react-router-dom'


function ProfilePosts(){
    const {username} = useParams()
    const [isLoading, setIsLoading] =  useState(true)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function feetchPosts(){
            try{
                const response= await Axios.get(`/profile/${username}/posts`)
                console.log(response.data)
            } catch (e) {
                console.log("There was a problem")
            }
        }
        feetchPosts()
    }, [])
    if(isLoading) return <div>loading...</div>
   
    return (
        <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action">
          <img className="avatar-tiny" src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128" /> <strong>Example Post #1</strong>
          <span className="text-muted small">on 2/10/2020 </span>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <img className="avatar-tiny" src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128" /> <strong>Example Post #2</strong>
          <span className="text-muted small">on 2/10/2020 </span>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <img className="avatar-tiny" src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128" /> <strong>Example Post #3</strong>
          <span className="text-muted small">on 2/10/2020 </span>
        </a>
      </div>

    )
}
export default ProfilePosts