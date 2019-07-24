import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const list = [
  {
  title:'react',
  url:'https://www.baidu.com',
  author:'jw',
  num_conmments:3,
  points:4,
  objectID:0,
},
{
  title:'vue',
  url:'https://www.bing.com',
  author:'ak',
  num_conmments:8,
  points:9,
  objectID:1,
}
];
class MyReactApp extends React.Component{
  constructor(props){
    super(props);
    this.state={list,}
		this.onDismiss = this.onDismiss.bind(this);
  }
onDismiss(id){
	function isNotId(item){
		return item.objectID !== id;

	}
	const updatedList = this.state.list.filter(isNotId);

	this.setState({list:updatedList});
}
  render(){
    return(
      <div className="App">
        {this.state.list.map(item => 
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button onClick={() => this.onDismiss(item.objectID)}
                       type = "button">
                         Dismiss
                       </button>
            </span>
          </div>      
          )}
      </div>
    );
  }
}
ReactDOM.render(
  <MyReactApp />,document.getElementById('root')
);

