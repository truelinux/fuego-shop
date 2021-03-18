import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
import { runInThisContext } from "vm";
import Product from "./components/Product";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    order: [],
    payment: [],
    cartTotal: 0,
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
      if (singleItem.id == localStorage.getItem("id")) {
        this.setState(() => {
          return { detailProduct: singleItem };
        });
      }
    });

    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id == id);

    return product;
  };

  handleDetail = (id) => {
    localStorage.setItem("id", id);
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = (id, size) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    const price = product.price;
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(
      (item) => item.title === product.title
    );
    const index2 = tempCart.indexOf(selectedProduct);
    const product2 = tempCart[index2];
    if (product2) {
      if (product2.size == size) {
        this.increment(id);
        return;
      }
      const selectedProduct2 = tempCart.find(
        (item) => item.title === product.title && item.size === size
      );
      const index22 = tempCart.indexOf(selectedProduct2);
      const product22 = tempCart[index22];
      if (!product22) {
        const jb = { ...product };
        jb.hidden = true;
        jb.size = size;
        jb.id = tempProducts.length + 1;
        jb.count = 1;
        this.setState(() => {
          return {
            products: [...tempProducts, jb],
            cart: [...this.state.cart, jb],
            detailProduct: { ...product },
          };
        }, this.addTotals);
        return;
      } else {
        this.increment(product22.id);
      }
    } else {
      product.size = size;
      product.count = 1;
      product.total = price;
      this.setState(() => {
        return {
          products: [...tempProducts],
          cart: [...this.state.cart, product],
          detailProduct: { ...product },
        };
      }, this.addTotals);
    }
  };

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  setOrder = (payment, total) => {
    this.setState(() => {
      return { order: [...this.state.cart], payment: payment, total: total };
    });
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          setOrder: this.setOrder,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
