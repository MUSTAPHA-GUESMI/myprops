function Profile(props){
    console.log(props)
    return(
       <>
        <div>
            <h1>{props.fullName}</h1>
            <h1>{props.bio}</h1>
            <h1>{props.profession}</h1>
            </div>

            <div>
            <button onClick={props.handleName}>alert</button>
            </div>
       </>
    )
}
export default Profile