import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';
import AccountsUIWrapper from './AccountsUIWrapper.js';

// App component - represents the whole app
class App extends Component {
	 constructor(props) {
    super(props);
 
    this.state = {
      hideCompleted: false,
    };
  }

	handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

     Meteor.call('tasks.insert', text);

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }


  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1 className="titrePrincipal">Liste des commerces</h1>
          <br></br>
		  <AccountsUIWrapper />
            { this.props.currentUser ?
            <div className="panier"><p>Panier : </p>
              <table id="panier"></table>
              <p id="totale">Total : </p>
              <p id="total">0</p>
              <input type="submit" id="valid" value="Valider"></input>
             </div> : ''
            }
            <br></br>
      { this.props.currentUser ?
          <div className="panier"><p>Historique des commandes: </p>
            <table id="historique"></table>
          </div> : ''
      }


          <br></br>
          Cliquez sur un restaurant pour voir ses menus
        </header>
      <div className="div-commerce">

          <a href = "/LaPizza"><img src="/images/resto1.jpg" className="image"/></a>

          <a href = "/GrilleArts"><img src="/images/resto2.jpg" className="image"/></a>

          <a href = "/UnMoment"><img src="/images/resto3.jpg" className="image"/></a>

          <a href = "/NewWorld"><img src="/images/resto4.jpg" className="image"/></a>
      </div>
      </div>

    );
  }
}

export default withTracker(() => {
	Meteor.subscribe('tasks');
	
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
	incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
	currentUser: Meteor.user(),
  };
})(App);