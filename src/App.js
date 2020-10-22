import React, { Component } from 'react';
import Header from './components/Header';
import Child from './components/child';
import Footer from './components/footer';
import './App.css';


import './App.css';
// let name = "usama"
class App extends Component {
  constructor(){
    super()
    // super tb likhte hen jb parent se koi value leni ho
    this.state = {
      name :"usama",
      email:"syedusamaali@gmail.com",
      value:""
    }
  }
  setName=()=>{
    // setState me me dunga ek obj isme jo bhi me properety dunga state ki wo update hojayegi
    this.setState({
      name:this.state.value
    })
  }
  getName=()=>{
    console.log(this.state.name)
  }
  handleChange=(e)=>{
    // console.log(e.target.value)
    // console.log(e.target.name)
    this.setState({
      [e.target.name]:e.target.value 
      // name me chng hoga tou name chng krdega wrna EM ail
    })
  }

  getProps=(props)=>{
console.log(props)
  }
  render(){
    // let tods = [{text : "usama"},{text :"ali"}]
    return(
      <div>
        <Header getProps={this.getProps} email={this.state.email} name={this.state.name} page="Application page"/>
        <br></br>
    <h2>my name is {this.state.name}</h2>
    <h2>my name is {this.state.name}</h2>
    <h4>email: {this.state.email}</h4>
        <input  onChange={(e)=>this.setState({name:e.target.value})} type="text" placeholder="enter value" id="val"></input>
        <input onChange={(e)=>this.setState({value:e.target.value})} type="text" placeholder="enter value" id="val"></input>
        <input name="email" onChange={(e)=>this.handleChange(e)} type="text" placeholder="enter email" ></input>
        <input name="name" onChange={(e)=>this.handleChange(e)} type="text" placeholder="enter name" ></input>
        <button onClick={this.getName}>Get name</button>
        <button onClick={this.setName}>Set name</button>

{/* e.target.value se input ka sab miljata he or .id se id milti he */}




      {/* <h1>hello {name}</h1>
      <ul>
        {tods.map((item,index)=>{
          return <li key={index}>{item.text}</li>
        })}
      </ul> */}

      <h1>parrent</h1>
      <Child name="car" price="170000"/>
      <Child name="watch" price="156789"/>
      <Child name="house" price="456789"/>
      <Child name="bat" price="67890"/>
      <Footer/>
      </div>
    )
  }
}

export default App;
