import React from 'react'
import StyleCard from '../assets/css/styles.module.css'


const Card =(props)=>{

    
    return(
        
        <>
            
            <div className={StyleCard.title}>{props.children}</div>
            <div className={StyleCard.containerCard}>
            {props.list.map((i)=>{
            
                return(
                <div className={StyleCard.cardData} key={i.id}>
                    <div className={StyleCard.name}>
                        <h2>{i.name}</h2>
                    </div>
                    <div className={StyleCard.imageCard}>
                        <img src={i.image} className={StyleCard.image} alt="imagen"></img>
                    </div>
                    <div>
                        <p>{i.gender}</p>
                    </div>
                    <div>
                        <p>{i.species}</p>
                    </div>
                    
                </div>
            )})}
            
            </div>
        </>
    )  
            
}
export default Card