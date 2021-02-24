import React,{Component} from 'react';
import Data from './service/list.js';

import './App.css';
//using class component
class Card extends Component{
	state={
		data:[]
	}

	getdata=()=>{
		this.setState({
			data:Data
		})
}
	componentDidMount(){
		this.getdata();
	}
	render(){
		console.log(this.state.data);
		return(
			
			<div className="product">
			{
				this.state.data.map(data=>(
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
}
export default Card;