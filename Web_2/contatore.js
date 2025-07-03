import React,{usestate} from 'react'

const Contatore = () => {
    const [count,setCount] = useState(0)

    const aumenta=() => {
        setCount(count+1);
    }
    const diminuisci=()=> {
        setCount(count-1);
    }
    return(
        <>
        <div>{count}</div>
        <div>
            <button onClick={diminuisci}>Diminuisci</button>
            <button onClick={aumenta}>Aumenta</button>
        </div>
        </>
    )
}

export default Contatore