import React from 'react';
import ReactDOM from 'react-dom';
import '/src/style.sass'


class App extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Bibesh Manandhar
                </h1>
                <p>
                    Hello world
                </p>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));