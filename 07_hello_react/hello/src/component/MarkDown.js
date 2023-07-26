import React from 'react'
import Remarkable from 'remarkable';

export default class MarkDown extends React.Component {

    constructor(v) {
        super(v)
        this.md = new Remarkable();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            text: ""
        }
    }

    handleChange(e) {
        this.setState({text: e.target.value})
    }

    getRawMarkup() {
        return { __html: this.md.render(this.state.text) };
    }

    render() {
        return <div>
            <textarea
                defaultValue={this.state.text}
                onChange={this.handleChange}
            />
            <h3>Output</h3>
            <div dangerouslySetInnerHTML={this.getRawMarkup()}/>
        </div>
    }
}