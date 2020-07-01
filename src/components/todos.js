import React from "react";

class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
        this.todos = [];
    }
    addText(event) {
        let pass = event.target.value;
        this.setState({ text: pass });
    }
    addTodo() {
        if (this.state.text === "") {
            return;
        }
        this.todos.push(this.state.text);
        this.setState({ text: "" });
    }
    render() {
        return (
            <div className="main">
                <ul>
                    {this.todos.map((todo) => {
                        return <li key={todo}>{todo}</li>;
                    })}
                </ul>
                <div className="input">
                    <input
                        type="text"
                        value={this.state.text}
                        onChange={(event) => {
                            this.addText(event);
                        }}
                    />
                    <button
                        onClick={() => {
                            this.addTodo();
                        }}
                    >
                        追加
                    </button>
                </div>
            </div>
        );
    }
}

export default Todos;
