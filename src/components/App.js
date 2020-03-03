import React, { Component } from 'react';

import UserForm from './UserForm';
import PopupButton from './PopupButton';

class App extends Component {
	render() {
		return (
			<>
				<h1>App</h1>
				<UserForm />
				<PopupButton />
			</>
		)
	}
}

export default App;