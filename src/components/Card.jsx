import React, { useEffect } from 'react'

function Card({data, show, setShow}) {
    // useEffect( () => {
    //     switchData()
    // }, [])

    // let styles = {
    //     "display": "inline"
    // }
    // // console.log(Array.isArray(data)) after checking it is an array

    // function switchData(data){
    // data.map((info) => { 
    //     switch(info.position){
    //         case 0: 
    //         styles = {
    //             "backgroundColor": "green"
    //         }
    //         break;
    //         case 1:
    //         styles = {
    //             "backgroundColor": "red"
    //         }
    //         break;
    //         case 2:
    //         styles = {
    //             "backgroundColor": "blue"
    //         }
    //         break;
    //         case 3:
    //             styles = {
    //                 "backgroundColor": "blue"
    //             }    
    //         break;
    //         case 4:
    //             styles = {
    //                 "backgroundColor": "blue"
    //             }
    //             break;
    //         default:
    //             return null;
    //     }
    //     return styles;
    // })
    // }

  return (
    <div className='container' id='news-center'>
    <div className='grid'>
        {data.map((info) => (
            <div key={info.position} className={`grid-item-${info.position}`} >
                <img key={info.position} className= 'grid-item'  src={info.image} />
                <h5 className='gridHeader'>{info.whiteTitle}<span className='greenTitle'>{info.greenTitle}</span></h5>
                <p className={show ? 'gridPara1':'gridPara'}>{info.description}</p>
                <button onClick={() => {setShow(true)}} onBlur={() => {setShow(false)}} className='readMore'>Read more</button>
            </div>
        ))}
    </div>
    </div>
  )
}



export default Card