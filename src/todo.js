import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listmain: [],
      listtemp: [],
      searchthis: "",
      valuetoadd: ""
    };
  }
  trackitemtoadd = (value) => {
    this.setState({
      valuetoadd: value
    });
  };
  searching = (searchvalue) => {
    console.log("button clicked");
    var list1 = [];
    this.state.listmain.map((item) => {
      if (item.search(searchvalue) != -1) {
        list1.push(item);
      }
    });
    console.log("after searching" + list1);
    this.setState({
      listtemp: list1,
      searchthis: searchvalue
    });
    console.log("temp" + this.state.tempsearch);
  };
  Additem = () => {
    var list1 = this.state.listmain;
    list1.push(this.state.valuetoadd);
    this.setState({
      listmain: list1,
      listtemp: list1,
      valuetoadd: ""
    });
    console.log(this.state.listmain);
  };
  Deleteitem = (key) => {
    var list1 = this.state.listmain;
    list1.splice(key, 1);
    console.log("printing list1" + list1);
    this.setState({ listmain: list1, listtemp: list1 });
  };
  Clearlist = () => {
    this.setState({ listmain: [], listtemp: [] });
  };
  render() {
    return (
      <div class=" container mt-5">
        <div class="bg-white border border-white rounded">
          <h1> React to do App</h1>
          <h5> Enhance Your Productivity </h5>
        </div>
        <div class="">
          <center>
            <input
              placeholder="Enter the item to be added"
              style={{ maxWidth: "300px" }}
              class="form-control m-1"
              type="text"
              name="newitem"
              value={this.state.valuetoadd}
              onChange={(e) => this.trackitemtoadd(e.target.value)}
            />
          </center>
          <center>
            <button
              class="btn btn-default"
              onClick={(e) => {
                this.Additem();
              }}
            >
              Enter new item{" "}
            </button>
          </center>
          <center>
            <div class="form-outline">
              <input
                style={{ maxWidth: "300px" }}
                class="form-control m-1"
                placeholder="Enter the item to search"
                type="text"
                value={this.state.searchthis}
                onChange={(e) => this.searching(e.target.value)}
              />
            </div>
          </center>
          {this.state.listtemp.map((item, key) => {
            return (
              <div class="row bg-white text-dark m-1">
                <div class="col-3">Task {key + 1}</div>
                <div class="col-6">{item}</div>
                <div class="col-3">
                  <button
                    class="btn btn-default"
                    onClick={(e) => {
                      this.Deleteitem(key);
                    }}
                  >
                    X
                  </button>
                </div>
              </div>
            );
          })}
          <center>
            <button
              class="btn btn-default m-1"
              onClick={(e) => {
                this.Clearlist();
              }}
            >
              Clear the List
            </button>
          </center>
          <center>
            <button
              class="btn btn-default m-1"
              onClick={(e) => {
                this.searching("");
              }}
            >
              Reset the List
            </button>
          </center>
        </div>
      </div>
    );
  }
}

export default Todo;
