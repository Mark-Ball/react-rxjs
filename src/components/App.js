import React, { Component } from 'react';
import { fromEvent } from 'rxjs';
import List from './List';

class App extends Component {
	source = ['Adam', 'Brian', 'Christine'];

	render() { 
		return (
			<>
				<h1>App</h1>
				<List items={[1, 2, 3]} />
			</>
		)
	}
}

export default App;