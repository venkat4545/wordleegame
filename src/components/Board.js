import React from 'react'

import Letter from './Letter';

function Board() {
   
  return (
    <div className='board'>
        {" "}
        <div className='row'>
            <Letter letterpos={0} letterval={0}/>
            <Letter letterpos={1} letterval={0}/>
            <Letter letterpos={2} letterval={0}/>
            <Letter letterpos={3} letterval={0}/>
            <Letter letterpos={4} letterval={0}/>
             </div>
        <div className='row'> 
            <Letter letterpos={0} letterval={1}/>
            <Letter letterpos={1} letterval={1}/>
            <Letter letterpos={2} letterval={1}/>
            <Letter letterpos={3} letterval={1}/>
            <Letter letterpos={4} letterval={1}/>
            </div>
        <div className='row'>
            <Letter letterpos={0} letterval={2}/>
            <Letter letterpos={1} letterval={2}/>
            <Letter letterpos={2} letterval={2}/>
            <Letter letterpos={3} letterval={2}/>
            <Letter letterpos={4} letterval={2}/>
             </div>
        <div className='row'>
            <Letter letterpos={0} letterval={3}/>
            <Letter letterpos={1} letterval={3}/>
            <Letter letterpos={2} letterval={3}/>
            <Letter letterpos={3} letterval={3}/>
            <Letter letterpos={4} letterval={3}/> </div>
        <div className='row'>
            <Letter letterpos={0} letterval={4}/>
            <Letter letterpos={1} letterval={4}/>
            <Letter letterpos={2} letterval={4}/>
            <Letter letterpos={3} letterval={4}/>
            <Letter letterpos={4} letterval={4}/>
             </div>
        <div className='row'>
            <Letter letterpos={0} letterval={5}/>
            <Letter letterpos={1} letterval={5}/>
            <Letter letterpos={2} letterval={5}/>
            <Letter letterpos={3} letterval={5}/>
            <Letter letterpos={4} letterval={5}/>
             </div>
        </div>
  );
}

export default Board