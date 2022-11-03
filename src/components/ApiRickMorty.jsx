import React,{useState,useEffect} from 'react'
import Card from '../components/Card'
import axios from 'axios'
import StyleCard from '../assets/css/styles.module.css'

const ApiRickMorty=()=>{
    const [result, setResult]=useState([])

    useEffect(()=>{
        axios.get("https://rickandmortyapi.com/api/character")
        .then(data=>{
            setResult(data.data.results)
            console.log(data.data.results)
        })
    },[])
    
    return(
        <>
            <div className={StyleCard.container}>
                <Card list={result}>
                    <h1>FICHA DE RICK AND MORTY</h1>
                </Card>
            </div>
            
        </>
    )
}
export default ApiRickMorty