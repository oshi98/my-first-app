import React, { Component } from "react";

class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Curtis",
        phone: "404-349-6698",
        address: { city: "Matale" },
      },
      {
        id: 2,
        name: "Karen",
        phone: "847-919-8872",
        address: { city: "Colombo" },
      },
      {
        id: 3,
        name: "Katie",
        phone: "318-359-8770",
        address: { city: "Kegalle" },
      },
      {
        id: 4,
        name: "Patricia",
        phone: "229-413-3420",
        address: { city: "Galle" },
      },
      {
        id: 5,
        name: "Jennifer",
        phone: "435-240-2344",
        address: { city: "Jaffna" },
      },
    ],
  };

  render() {
    return (
      <div>
        <h1>
          {this.state.pageTitle}
          <span className="badge badge-secondary customersCount m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Phone</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((cust) => {
              return (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>{cust.name}</td>
                  <td>{cust.phone}</td>
                  <td>{cust.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };
}

export default MainContent;
