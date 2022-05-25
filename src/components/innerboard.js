import React from 'react'

import Letter from './Keyletter';

function innerboard() {
   
  return (
    <div className='board'>
        {" "}
        <div className='row'>
            <Letter letterposition={0} letterval={0}/>
            <Letter letterposition={1} letterval={0}/>
            <Letter letterposition={2} letterval={0}/>
            <Letter letterposition={3} letterval={0}/>
            <Letter letterposition={4} letterval={0}/>
             </div>
        <div className='row'> 
            <Letter letterposition={0} letterval={1}/>
            <Letter letterposition={1} letterval={1}/>
            <Letter letterposition={2} letterval={1}/>
            <Letter letterposition={3} letterval={1}/>
            <Letter letterposition={4} letterval={1}/>
            </div>
        <div className='row'>
            <Letter letterposition={0} letterval={2}/>
            <Letter letterposition={1} letterval={2}/>
            <Letter letterposition={2} letterval={2}/>
            <Letter letterposition={3} letterval={2}/>
            <Letter letterposition={4} letterval={2}/>
             </div>
        <div className='row'>
            <Letter letterposition={0} letterval={3}/>
            <Letter letterposition={1} letterval={3}/>
            <Letter letterposition={2} letterval={3}/>
            <Letter letterposition={3} letterval={3}/>
            <Letter letterposition={4} letterval={3}/> </div>
        <div className='row'>
            <Letter letterposition={0} letterval={4}/>
            <Letter letterposition={1} letterval={4}/>
            <Letter letterposition={2} letterval={4}/>
            <Letter letterposition={3} letterval={4}/>
            <Letter letterposition={4} letterval={4}/>
             </div>
        <div className='row'>
            <Letter letterposition={0} letterval={5}/>
            <Letter letterposition={1} letterval={5}/>
            <Letter letterposition={2} letterval={5}/>
            <Letter letterposition={3} letterval={5}/>
            <Letter letterposition={4} letterval={5}/>
             </div>
        </div>
  );
}

export default innerboard