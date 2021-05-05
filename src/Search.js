import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchlist: ["Saab", "Volvo", "BMW", "Saan", "Volvn", "BMn"],
      tempsearch: ["Saab", "Volvo", "BMW", "Saan", "Volvn", "BMn"],
      searchthis: ""
    };
  }
  searching = (searchvalue) => {
    console.log("button clicked");
    var list1 = [];
    this.state.searchlist.map((item) => {
      if (item.search(searchvalue) != -1) {
        list1.push(item);
      }
    });
    console.log("after searching" + list1);
    this.setState({
      tempsearch: list1,
      searchthis: searchvalue
    });
    console.log("temp" + this.state.tempsearch);
  };

  render() {
    return (
      <div>
        <input
          value={this.state.searchthis}
          placeholder="searching word here"
          onChange={(e) => {
            this.searching(e.target.value);
          }}
        />
        <div>
          <ul>
            {this.state.tempsearch.map((item) => {
              <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
