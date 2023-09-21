import { useState,useEffect } from "react"
import React from 'react'

const Photo = () => {
    const [unsplashApi, setUnsplashApi] = useState([])

    useEffect(() => {
        const clientApi = `rl1w01G1yNj20X17q4YuDCudXAN8T64jN6FicS9925I`;
        const unsplash_Api = async () => {
            const response_2 = await fetch(`https://api.unsplash.com/photos/?client_id=${clientApi}`)
            setUnsplashApi(await response_2.json())
        }

        unsplash_Api();
    }, [])

    let image = unsplashApi[0]?.urls?.regular;
    // console.log(unsplashApi);

    return (
        <div>
            <img src={image} className="card-img" height={500} alt="..." />

        </div>
    )
}

export default Photo
