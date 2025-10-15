import React from "react";
import Card from "./Card";
const CardList =({Robots})=> {
    const cardmap =Robots.map((user,i)=>{
       return <Card key={i} id={user.id} name={user.name} email={user.email}/>
    })
   
   return( 
    <div>
    {cardmap}
    </div>
      );
    }
    export default CardList;