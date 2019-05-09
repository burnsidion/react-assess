//this is a component for the editing of a previously created message, it will pull the props down from other components which in turn ge the props passed down from the app.js.
import React from 'react'

export default class Message extends React.Component{
  //the constructor for this class sets up its own state with this.state, which sets up the message to be un-edited from the start.
  constructor(props){
    super(props);
    this.state = {
      edit: false
    }
  }
  //there is no componentDidMount in this class, as nothing needs to be updated within it, whatever happens in this class will be sent to neighboring components which will adjust their state to adjust the database with the edited message.
  render() {
    return (
      <div className="row">
        <hr />
        <div className="col-md-11">
          {/* within this div, there is a form that is created in which the user MUST enter their name as well as the message theyre editing, it will check the status of "edit" in which if it is not in editing form, will simply display the message that is to be edited. If the message is in editing form, the user will have to make the edits following the form constraints. */}
          { this.state.edit ?
            <form>
              Sender: <input required id="name" name="name" type="text"
              // this will set the value of the user name BEFORE it is edited to be whatever the users name is
              defaultValue={this.props.message.name} /><br />
              Message: <input required id="message" name="message" type="text"
              // this will similarly set up the message BEFORE it is edited to whatver the message is 
              defaultValue={this.props.message.message} /><br /><br />
              <input type="submit" value="Confirm" /><input type="button" value="Cancel"  />
            </form>
            :
            <div>
              <p>Sender: { this.props.message.name }</p>
              <p>Message: { this.props.message.message }</p>
            </div>
          }
        </div>
        <div className="col-md-1">
          <span className="pull-right">
            {/* this contains the buttons that will be clicked in order to edit or delete a message. */}
            <i className="fa fa-edit fa-lg edit"  /><br />
            <i className="fa fa-trash fa-lg trash"  />
          </span>
        </div>
      </div>
    )
  }
