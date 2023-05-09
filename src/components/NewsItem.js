import React from 'react'

const NewsItem = (props)=> {
  
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='my-3'>
          <div className="card">
            <div style={{display:'flex', justifyContent:'flex-end', position: 'absolute', right:'0'}}>
               <span className=" badge rounded-pill bg-danger" >{source}</span>
            </div>
            <img className="card-img-top" src={!imageUrl?"https://media.crictracker.com/media/attachments/1681235417040_Delhi-capitals.jpeg":imageUrl} alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              {/* ... means like read more...  */}
              <p class="card-text"><small className="text-danger">By {!author?"Unknown": author} on  {new Date(date).toGMTString()}</small></p>
              <a rel='noreferrer' href={newsUrl} target= "_blank" className="btn btn-sm btn-dark">Read more</a>
              {/* target='_blank' to open anew tab */}
            </div>
          </div>
      </div>
    )
  
}

export default NewsItem
