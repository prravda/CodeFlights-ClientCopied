import React from 'react';
import './Schedule.css'
import { Link } from 'react-router-dom';
import { data } from '../Datas/Dummy'
function Schedule ({ match }) { 
  const { city } = match.params;
  const cityData = data[city];
  let air 
  let article ;
  if(!cityData) {
    air = 'unvaliable'
    article = 'unvaliable'
  } else {
  air = cityData.flights.map(ele => <li className='ticket'><div>{ele.Airline}</div><div>출발 : {ele.departure}</div><div>도착 : {ele.arrival}</div></li>);
  article = cityData.articles.map(ele => <li className='article'><Link className="view" to={`/result/${city}/${ele.id}`}><p>{ele.id}</p><p>{ele.title}</p></Link></li>)
  }
  
  return (
  <div>
    
    <h2>{city}로 가는 항공편</h2>
    <ul className='ticket-container'>{air}</ul>  
    <h2>{city}의 여행 팁</h2>
    <ul className='article-container'>{article}</ul>
  </div>  
  )
}

export default Schedule;