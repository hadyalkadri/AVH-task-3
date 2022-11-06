import React from 'react'

function CardTwo({display}) {

    // const element = JSON.stringify(display);
    // Object.keys(display).forEach((key) => {
    //   // arr.push(display[key]);
    //   console.log(key)

  //Object.entries(display).forEach((key) => {
  //arr.push(key);
  //})


  let newArray = [];
 
console.log(newArray);
  // Object.entries(display).map((sth) => {
  //   const [key, value] = sth
  //   Object.assign(arrayObjects, {prop1: key, prop2: value})
  //   console.log(arrayObjects);
  // })
  // [{prop1: sth[0], prop2: sth[1]}] = arrayObjects

  

  // Object.assign(arrayObjects, {prop1: sth[0], prop2: sth[1]})

  return (
    <div className='flexBox'>
        {  Object.entries(display).map((sth) => {
              const [key, value] = sth
               newArray.push({"key": key, "value": value})
  })}
  {newArray.filter(info => info.key === 'whiteTitle' || info.key === 'greenTitle').map((filtered, index) =>(
        <div className='flex-item flex-item-0'>
          <h2  className={`title-${index}`}>{filtered.value}</h2>
        </div>
      ))}
    {newArray.filter(info => info.key === 'authorName').map((filtered) =>(
        <div className='flex-item flex-item-1'>
          <img className='authorImage' src='https://i.postimg.cc/Jz5mWWmd/t-Rr-SSFt-X3-Io-AAAAASUVORK5-CYII.png' />
          <div className='flex-item-1a'>
          <h6>Author</h6>
          <h4>{filtered.value}</h4>
          </div>
        </div>
      ))}
      {newArray.filter(info => info.key === 'description').map((filtered) =>(
        <div className='flex-item flex-item-2'>
          <p >{filtered.value}</p>
        </div>
      ))}
    {newArray.filter(info => info.key === 'largeImage').map((filtered) =>(
      <img className='flex-item flex-item-3' src={filtered.value} />
    ))}
    {newArray.filter(info => info.key === 'newsBody').map((filtered) =>(
      //  we use the dangerouslySetInnerHTML to render html encoded within text
        <div className='flex-item flex-item-4' dangerouslySetInnerHTML={{__html: filtered.value}}>
        </div>
      ))}
    </div>
 
  )
}
//<React.Fragment>{content.map((sth) => <h1 key={content.}>{sth.greenTitle}</h1>)}</React.Fragment>
export default CardTwo