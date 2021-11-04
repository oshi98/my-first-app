import React, { Component } from "react";

class CustomersList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Curtis",
        phone: "404-349-6698",
        address: { city: "Matale" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "Karen",
        phone: "847-919-8872",
        address: { city: "Colombo" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 3,
        name: "Katie",
        phone: null,
        address: { city: "Kegalle" },
        photo: null,
      },
      {
        id: 4,
        name: "Patricia",
        phone: "229-413-3420",
        address: { city: "Galle" },
        photo: null,
      },
      {
        id: 5,
        name: "Jennifer",
        phone: null,
        address: { city: "Jaffna" },
        photo: "https://picsum.photos/id/1014/60",
      },
    ],
  };

  // customerNameStyle = (custName) => {
  //   if (custName.startsWith("K")) return "greenHighlight";
  //   else if (custName.startsWith("J")) return "redHighlight";
  //   else return "";
  // };

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
              <th scope="col">Image</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Phone</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning text-center">No Phone</div>;
    }
  };

  getPhotoToRender = (photo) => {
    if (photo) return <img src={photo} alt="" />;
    else {
      return <div className="bg-primary text-center">No Photo</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            {this.getPhotoToRender(cust.photo)}
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangeImage(cust, index);
                }}
              >
                Change Image
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };

  onChangeImage = (cust, index) => {
    //console.log(cust);
    //console.log(index);
    const custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/1020/60";
    this.setState({ customer: custArr });
  };
}

export default CustomersList;
