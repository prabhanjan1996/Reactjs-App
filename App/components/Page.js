import React, {useEffect} from "react"
import Container from "./Container"

function Page(props){
    useEffect(()=> {
        document.title = `${props.title}| Let's Connect`
        window.scrollTo(0, 0)
     
      }, [props.title])
    return(
        <Container wide={props.wide}>
            {props.children}
        </Container>

    )
}
export default Page