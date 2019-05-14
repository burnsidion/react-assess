//This app.js file could be considered as the "Head" of the application, things like the initial state are created here, which are then passed down to the different components via 'props'.
import React, {Component} from 'react';
import './App.css';
//line 6 imports the component called NewMessage.js whithin the Components folder, allowing communication between both the the head and component.
//import NewMessage from './components/NewMessage';

//line 7 is what hooks up the front end to the back end, the back end has cors permissions set up to allow the front end to access it via an API.
const API = 'https://ian-q2-assessment.herokuapp.com/messages'

//this is setting up the class called "App", this is specifically where things like state are created before they are passed down to the components.
class App extends Component {
  //line 12 is the constructor, it is the first thing that is called in the lifecycle of a class, this is where the initial state is created for this class with this.state, the props value is passed from the contructor to the super method, which is used to create the inital state. In this instance it is setting up an empty array and pairing it with a key called 'messages'
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      formHidden: 'hidden'
    }
  }
  //the third phase in the lifecycle is the componentDidMount, it is handled asynchronously as it must first wait for the render() method to complete, it first goes to the API via a fetch method, if the response is 200 (meaning the request was correclty recieved), it then sends the response in json format, and then calls this.setState to fill in the previously set up empty array. If the request fails, it will return the status of the response with the preceding error messaage.
  async componentDidMount() {
    const response = await fetch(API)
    if (response.status === 200) {
      const json = await response.json()
      this.setState({messages: json})
    } else {
      console.log('Couldn/t fetch json', response.status);
    }
  }

  //this is a function being created which will handle the changes of state concerning the toggling of a compose form for a message. Basically, if the state is initally set to have the form hidden, it will toggle it to be the opposite, and vice versa.
  composeToggle = () => {
    this.state.formHidden === 'hidden'
      ? this.setState({formHidden: ''})
      : this.setState({formHidden: 'hidden'})
  }

  //this is the final stage in the mounting cycle of a component, it will check things like setState and this.state which were created in the component did mount, which is now waiting for the render() in order to fill the browser with the according DOM elements.
  render() {
    console.log("my log", this.state.messages);
    return (<div className="container">
      <h1 className="title">Time for a react assessment!</h1>
      <h3 className="message-title">Your Messages</h3>
      {/* <MessageList messages={this.state.messages} deleteMess={this.deleteMess} patchStuff={this.patchStuff}/> */}
      {/* <NewMessage composeToggle={this.composeToggle} postStuff={this.postStuff} formHidden={this.state.formHidden}/> */}
    </div>);
  }
}
//once the class is created, this line will make it exportable and communicable to the other parts of the application
export default App;
