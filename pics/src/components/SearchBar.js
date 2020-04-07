import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //arrow function can solve bind problem
  onFormSubmit = (event) => {
    event.preventDefault();
    // the props onSubmit from app.js, we sign the term to this.state.term ?
    this.props.onSubmit(this.state.term);
  };

  //control component, input value and onChange props (change to upperCase or put default value in initailize state)
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="feild">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
