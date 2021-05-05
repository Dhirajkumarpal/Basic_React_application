import React from "react";
import "./bootstrap.css";
class multisearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchlist: [
        {
          name: "Adharsh",
          Salary: "20000",
          experience: "2",
          department: "Tax"
        },
        {
          name: "Adhir",
          Salary: "30000",
          experience: "3",
          department: "Services"
        },
        {
          name: "Adham",
          Salary: "20000",
          experience: "2",
          department: "Tax"
        },
        {
          name: "baraksh",
          Salary: "20000",
          experience: "2",
          department: "Tax"
        },
        {
          name: "Chrish",
          Salary: "20000",
          experience: "2",
          department: "Tax"
        },
        {
          name: "Don",
          Salary: "20000",
          experience: "2",
          department: "Tax"
        }
      ],
      tempsearch: [
        {
          name: "Adharsh",
          Salary: "20000",
          experience: "2",
          department: "Tax"
        },
        {
          name: "Adhir",
          Salary: "30000",
          experience: "3",
          department: "Services"
        },
        {
          name: "Adham",
          Salary: "20000",
          experience: "2",
          department: "Tax"
        },
        {
          name: "baraksh",
          Salary: "20000",
          experience: "2",
          department: "Tax"
        },
        {
          name: "Chrish",
          Salary: "20000",
          experience: "2",
          department: "Tax"
        },
        {
          name: "Don",
          Salary: "20000",
          experience: "2",
          department: "Tax"
        }
      ],
      searchthis: { name: "", Salary: "", experience: "", department: "" }
    };
  }
  searching = (searchvalue, searchfield) => {
    console.log("button clicked");
    var list1 = [];
    if (searchfield == "name") {
      this.state.searchlist.map((item) => {
        if (item.name.search(searchvalue) != -1) {
          list1.push(item);
        }
      });
      console.log("after searching" + list1);
      this.setState({
        tempsearch: list1,
        searchthis: { name: searchvalue }
      });
    } else if (searchfield == "Salary") {
      this.state.searchlist.map((item) => {
        if (item.Salary.search(searchvalue) != -1) {
          list1.push(item);
        }
      });
      console.log("after searching" + list1);
      this.setState({
        tempsearch: list1,
        searchthis: { salary: searchvalue }
      });
    } else if (searchfield == "experience") {
      this.state.searchlist.map((item) => {
        if (item.experience.search(searchvalue) != -1) {
          list1.push(item);
        }
      });
      console.log("after searching" + list1);
      this.setState({
        tempsearch: list1,
        searchthis: { experience: searchvalue }
      });
    } else {
      this.state.searchlist.map((item) => {
        if (item.department.search(searchvalue) != -1) {
          list1.push(item);
        }
      });
      console.log("after searching" + list1);
      this.setState({
        tempsearch: list1,
        searchthis: { deapartment: searchvalue }
      });
    }
    console.log("temp" + this.state.tempsearch);
  };

  render() {
    return (
      <div
        class=" border border-4 fs-2 text-white "
        style={{ backgroundColor: "rgb(80, 51, 53)" }}
      >
        <div className="row border border-3 ">
          <div class="col-3 border border-1">
            <input
              style={{ width: "100%" }}
              value={this.state.searchthis.name}
              placeholder="Enter the name here"
              onChange={(e) => {
                this.searching(e.target.value, "name");
              }}
            />
          </div>
          <div class="col-3 border border-1">
            <input
              style={{ width: "100%" }}
              value={this.state.searchthis.salary}
              placeholder="Enter the salary here"
              onChange={(e) => {
                this.searching(e.target.value, "Salary");
              }}
            />
          </div>
          <div class="col-3 border border-1">
            <input
              style={{ width: "100%" }}
              value={this.state.searchthis.experience}
              placeholder="Enter the experience here"
              onChange={(e) => {
                this.searching(e.target.value, "experience");
              }}
            />
          </div>
          <div class="col-3 border border-1">
            <input
              style={{ width: "100%" }}
              value={this.state.searchthis.department}
              placeholder="Enter the department here"
              onChange={(e) => {
                this.searching(e.target.value, "department");
              }}
            />
          </div>
        </div>

        <div>
          <div class="row border border-1">
            <div class="col-3 border border-1">
              <b>Name</b>
            </div>
            <div class="col-3 border border-1">
              <b>Salary</b>
            </div>
            <div class="col-3 border border-1">
              <b>Experience</b>
            </div>
            <div class="col-3 border border-1">
              <b>Department</b>
            </div>
          </div>

          {this.state.tempsearch.map((item) => {
            return (
              <div class="row">
                <div class="col-3 border border-1">{item.name}</div>
                <div class="col-3 border border-1">{item.Salary}</div>
                <div class="col-3 border border-1">{item.experience}</div>
                <div class="col-3 border border-1">{item.department}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default multisearch;
