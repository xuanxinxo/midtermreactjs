import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      keyword: '',
    };
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/api/products',
      data: null,
    })
      .then(res => {
        console.log(res);
        this.setState({
          products: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onDelete = id => {
    var { products } = this.state;
    axios({
      method: 'DELETE',
      url: `http://127.0.0.1:8000/api/products/${id}`,
      data: null,
    }).then(res => {
      if (res.status === 200) {
        var index = this.findIndex(products, id);
        if (index !== -1) {
          products.splice(index, 1);
          this.setState({
            products: products,
          });
          toast.success('Xóa sản phẩm thành công', {});
        }
      }
    });
  };

  findIndex = (products, id) => {
    // var { products } = this.state;
    var result = -1;
    products.forEach((product, index) => {
      if (product.id === id) {
        result = index;
      }
    });
    return result;
  };

  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    var { products, keyword } = this.state;
    let search = this.state.products.filter(product => {
      return product.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1;
    });

    return (
      <React.Fragment>
        <div>
          <div id="wrapper">
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="contentt">
                <div className="btn-group mt-2 float-left a">
                  <NavLink className="navbar-brand mb-5 ml-4" to="/Add">
                    {/* <button type="button" className="btn btn-primary">
                      Thêm Sản Phẩm
                    </button> */}
                  </NavLink>
                </div>
                <div className="mt-3 float-left">
                <input
                    className="form-control search mb-3 ml-5"
                    name="keyword"
                    value={keyword}
                    onChange={this.onChange}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
                <table className="table table-bordered table-hover mt-6 ml-5">
                  <thead>
                    <tr>
                      <th className="text-center">STT</th>
                      <th className="text-center">Tên Sản Phẩm</th>
                      {/* <th className="text-center">Loại Sản Phẩm</th> */}
                      {/* <th className="text-center">Hình ảnh</th> */}
                      <th className="text-center">Hình ảnh</th>
                      {/* <th className="text-center">Tình Trạng</th>
                      <th className="text-center">Hành Động</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {search.map((product, index) => {
                      return <Item key={index} index={index} product={product} onDelete={this.onDelete} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

class Item extends Component {
  onDelete = id => {
    if (window.confirm('Bạn chắc chắn muốn xóa?')) {
      this.props.onDelete(id);
    }
  };

  render() {
    var { product, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.name}</td>
        <td className="text-center">{product.name_category}</td>
        <td className="text-center">
          <img alt="" src={product.image} height="80" width="80" className="list-img" />
        </td>
        <td>{product.origin}</td>
        <td className="text-center">
          <span className={product.tinhtranghang === true ? 'badge bg-success' : 'badge bg-danger'}>
            {product.tinhtranghang === true ? 'Còn hàng' : 'Hết hàng'}
          </span>
        </td>
        <td className="text-center">
          <Link to={`/EditProduct/${this.props.product.id}`} type="button" className="btn btn-primary">
            Sửa
          </Link>
          {/* <NavLink to={`/products/${this.props.product.id}/prodetailadmin`}>
            <button type="button" className="btn btn-primary ml-1">
              Xem
            </button>
          </NavLink> */}
          <button type="button" onClick={() => this.onDelete(product.id)} className="btn btn-primary ml-1">
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default Admin;

