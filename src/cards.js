
import {useState,useEffect} from 'react';
import Data from './service/list.js';
import './App.css';
//using functional component
function Cards(){
	const[data,setdata]=useState([]);
	useEffect(()=>{
		setdata(Data);
		console.log(data);

	},[])
		return(
			
			<div className="product">
			{
				data.map(data=>(
					<div className="container">
					<div className="img">
					<img src={data.imageUrl} alt="not found"/>
					</div>
					<div className="title">
					<h3>{data.title}</h3>
					</div>
					<div className="description">
					<p>{data.description}</p>
					</div>
					</div>
					))
			}
			</div>
			
			)
	
}
export default Cards;