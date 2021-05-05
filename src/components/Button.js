import './Button.css'
import React from 'react'



 const Button = (props) => {

   
    
    return (
        <div>
            <button className="btn" onClick={()=>{props.onChildClick(props.year)}}>{props.year.toString()}</button>
        </div>
    )
}

export default Button;


/*

onClick={() => params.setName("i'm from Parent")}>

const yearFilter=( )=>{
  const updatedYear= props.currentYear.filter(friend=>friend!==props.year)
        props.updateYear(updatedYear)
        
      }



const yearFilter=(year)=>{
   
    console.log(year);
    
  }

 const Button = ({year}) => {
    return (
        <div>
            <button className="btn" onClick={yearFilter}>{year}</button>
        </div>
    )
}

export default Button;*/