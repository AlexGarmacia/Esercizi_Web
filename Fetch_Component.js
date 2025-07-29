import React, {useEffect, useState} from ' react'

const url="https://jsonplaceholder.typicode.com/albums";
const FetchComponent = () => {
    const [albums, setAlbums] = useState([]);

    const getData = async () => {
        const albums = await fetch (url).then(res=>res.json())
        setAlbums(albums)
    }

    useEffect(()=>{
        //getData()
        fetch(url)
        .then(res=>res.json())
        .then(ris=>
            setAlbums(ris)
        )
    }, [])
    return (
        <div>
            {
                albums.map((a)=>{
                    return (<h3>(a.title)</h3>)
                })
            }
        </div>
    )
}

export default FetchComponent