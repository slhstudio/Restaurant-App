import React, { Component } from 'react';

class WaitListPatron extends Component {
	
	render() {
		const { patron, cell } = this.props;

			return (
				<tr>
				<td> { patron } </td>
				<td> { cell } </td>
				<button onClick = {this.props.deletePatron.bind(this, this.props.patron)}> Delete </button>
				<button onClick = ""> Notify </button>  
				</tr>
			);
	}

	//need to add function to handle Notify. Should use cell number of patron to text that their table is ready.
	//Twilio script is currently in userController.

	/*renderAction() {
		return ( 
			<div>
			<td>
					<button onClick = {this.props.deletePatron.bind(this, this.props.patron)}> Delete </button>
			</td>
			
			<td>
					<button onClick = ""> Notify </button>  
			</td>
			</div>
		);
	}*/

	/*render() {
    return (
      <tr>
        {this.renderList()}
        {this.renderAction()}
      </tr>
    );
  }*/

}

export default WaitListPatron;