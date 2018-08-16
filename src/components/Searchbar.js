import React, { Component } from 'react';

class Searchbar extends Component {
  constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});

    }

    handleSubmit(event) {
      this.props.onFormSubmit(this.state.value);
      event.preventDefault();
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="search_nav row">
            <div className="col-md-10 pl-0">
              <input
                value={this.state.value}
                onChange={this.handleChange}
                type="text"
                />
            </div>
            <div className="col-md-2"><button className="btn btn-dark" type="submit" value="Submit">Search</button></div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
