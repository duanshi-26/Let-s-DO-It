import React, { useEffect, useState } from 'react'

function GitHubFetch(props) {
    // statemanage ke liye
    let[user, setUser] = useState({
        imgUrl: "",
        followers:0,
        following:0
    });

    useEffect(()=>{
        async function callApi()
        {
            let res =await fetch(`https://api.github.com/users/${props.name}`);
            let data = await res.json();

            setUser({
                imgUrl:data.avatar_url,
                followers: data.followers,
                following: data.following
            })
        }

        callApi();
    }, [])

  return (
    <figure>
        <img src={user.imgUrl} alt="" />
        <figcaption>
            <p>Username: {props.name}</p>
            <p>Follower: {user.followers}</p>
            <p>Following: {user.following}</p>
        </figcaption>
    </figure>
  )
}

export default GitHubFetch