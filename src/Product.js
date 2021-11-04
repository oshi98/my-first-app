import { timers } from "jquery";
import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    console.log("constructior - product");
    this.state = {
      product: this.props.product,
    };
  }

  render() {
    console.log("render - product");
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">
              #{this.state.product.id}
              <span
                className="pull-right hand-icon"
                onClick={() => {
                  this.props.onDelete(this.props.product);
                }}
              >
                <i className="fa fa-times"></i>
              </span>
            </div>
            <div className="p-2 border-top">
              {this.state.product.productName}
            </div>
            <div>${this.state.product.price}</div>
          </div>
          <div className="card-footer">
            <div className="float-left">
              <span className="">{this.state.product.quantity}</span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => {
                    this.props.onIncrement(this.state.product, 10);
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => {
                    this.props.onDecrement(this.state.product, 0);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <div className="float-right">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount-product");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate-product");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount-product");
  }
}
