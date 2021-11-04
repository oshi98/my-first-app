import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  //execute when the component is mounted
  constructor(props) {
    console.log("constructor-shopping cart");
    super(props); //calling the super class's constructor which is Component's constructor
    //initialization of the state
    this.state = {
      products: [
        { id: 1, productName: "iPhone", price: 309992, quantity: 0 },
        // { id: 2, productName: "Samsung A20", price: 580092, quantity: 0 },
        // { id: 3, productName: "Huawei", price: 967792, quantity: 0 },
        // { id: 4, productName: "iPhone 11", price: 9992, quantity: 0 },
        // { id: 5, productName: "Xiomi", price: 9555992, quantity: 0 },
        // { id: 6, productName: "S2", price: 34455, quantity: 0 },
      ],
    };
  }

  render() {
    console.log("render-shopping cart");
    return (
      <div className="container-fluid">
        <h1>Shopping Cart</h1>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount-shopping cart");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdate-shopping cart",
      prevProps,
      prevState,
      this.props,
      this.state
    );
  }

  componentWillUnmount() {
    console.log("componentWillUnmount-shopping cart");
  }

  handleIncrement = (product, maxValue) => {
    //console.log("increment", product);
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    //console.log(allProducts[index]);
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      this.setState({ products: allProducts });
    }
  };

  handleDecrement = (product, minValue) => {
    //console.log("decrement", product);
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      this.setState({ products: allProducts });
    }
  };

  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("are you sure to delete?")) {
      allProducts.splice(index, 1);
      this.setState({ products: allProducts });
    }
  };
}
