import React from 'react';
import './New.css';
import new_collections from '../assets/images/new_collections';
import Item from '../Items/Item'

const New = () => {
  return (
    <div className='new'>
      <h1>NEW PRODUCTS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item,i)=>{
            return <Item  
            key={i}
            id={item.id} 
            image={item.image} 
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default New
