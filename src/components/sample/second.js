/* Total */
class Total extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let total = this.props.total.toFixed(2);
    let tax = (this.props.total * 0.15).toFixed(2);
    let totalIncTax = (+total + +tax).toFixed(2);
    let mystyle = {
      borderTop: "1px solid #ddd",
      marginTop: "10px"
    };
    return (
      <div style={{"marginTop": "30px", "backgroundColor":"#F6F6F6","padding": "10px"}}>
        <h3 className="row" style={{ fontWeight: 400 }}>
          <span className="col-6">total price:</span>
          <span className="col-6 text-right">${total}</span>
        </h3>
        <h3 className="row" style={{ fontWeight: 400 }}>
          <span className="col-6">tax (15%):</span>
          <span className="col-6 text-right">${tax}</span>
        </h3>
        <h3 className="row" style={mystyle}>
          <span className="col-6">tota inc tax:</span>
          <span className="col-6 text-right">${totalIncTax}</span>
        </h3>

      </div>
    );
  }
}

/* ProductForm */
class ProductForm extends React.Component {
  submit(e) {
    e.preventDefault();
    var product = {
      name: this.refs.name.value,
      price: Number(this.refs.price.value),
      info: this.refs.info.value
    };
    console.log(this.refs.name.value, this.refs.price.value);
    this.props.handleProduct(product);
    this.refs.name.value = "";
    this.refs.price.value = 0;
    this.refs.info.value = "";
  }

  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <h3>add new product</h3>
        <div className="row form-group">
          <label className="col-sm-2  col-sm-form-label">name:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              ref="name"
              placeholder="e.g.) android"
              required
            />
          </div>
        </div>

        <div className="row form-group">
          <label className="col-sm-2  col-sm-form-label">price:</label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              ref="price"
              placeholder="e.g.) 100"
              required
            />
          </div>
        </div>

        <div className="row form-group">
          <label className="col-sm-2  col-sm-form-label">info:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              ref="info"
              placeholder="e.g.) product of google"
            />
          </div>
        </div>

        <div className="row form-group">
          <div className="offset-2 col-10">
            <button className="btn btn-outline-primary">create product</button>
          </div>
        </div>

        <hr />
      </form>
    );
  }
}

/* ProductList */
class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      productList: ""
    };

    this.createProduct = this.createProduct.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.showProduct = this.showProduct.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ productList: productList });
    }, 1000);
  }

  createProduct(product) {
    this.setState({
      products: this.state.productList.push(product)
    });
  }

  calculateTotal(price) {
    this.setState({
      total: this.state.total + price
    });
    console.log(this.state.total);
  }

  showProduct(info) {
    console.log(info);
    alert(info);
  }

  render() {
    if (!this.state.productList) return <p>loading...!!!!</p>;

    var component = this;
    var products = this.state.productList.map(function(product) {
      return (
        <Product
          name={product.name}
          price={product.price}
          info={product.info}
          handleShow={component.showProduct}
          handleTotal={component.calculateTotal}
        />
      );
    });

    return (
      <div>
        <ProductForm handleProduct={this.createProduct} />
        {products}
        <Total total={this.state.total} />
      </div>
    );
  }
}
