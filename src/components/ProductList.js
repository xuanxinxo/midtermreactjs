// import React, { Component } from 'react';
// import axios from 'axios';
// // import Wrapper from './layout_admin/wrapper.js';
// // import Banner from './layout_admin/banner.js';
// // import { NavLink } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Navigate } from 'react-router-dom';

// class ProductList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             products: [],
//             keyword: '',
//         }
//     }

//     componentDidMount() {
//         axios({
//             method: 'GET',
//             url: 'https://6478ba41362560649a2e5ce8.mockapi.io/lucdeptrai',
//             data: null
//         }).then(res => {
//             console.log(res);
//             this.setState({
//                 products: res.data
//             });
//         }).catch(err => {
//             console.log(err);
//         });
//     }

//     // onDelete = (id) => {
//     //     var { products } = this.state;
//     //     axios({
//     //         method: 'DELETE',
//     //         url: `http://localhost:3000/products/${id}`,
//     //         data: null
//     //     }).then(res => {
//     //         if (res.status === 200) {
//     //             var index = this.findIndex(products, id);
//     //             if (index !== -1) {
//     //                 products.splice(index, 1);
//     //                 this.setState({
//     //                     products: products
//     //                 });
//     //                 toast.success("Xóa sản phẩm thành công", {
//     //                 })
//     //             }
//     //         }
//     //     });
//     // }
//     // findIndex = (products, id) => {
//     //     var { products } = this.state;
//     //     var result = -1;
//     //     products.forEach((product, index) => {
//     //         if (product.id === id) {
//     //             result = index;
//     //         }
//     //     });
//     //     return result;
//     // }
//     onChange = (event) => {
//         var target = event.target;
//         var name = target.name;
//         var value = target.value;
//         this.setState({
//             [name]: value
//         });
//     }



//     render() {
//         // var { products, keyword } = this.state;
//         // let search = this.state.products.filter(
//         //     (product) => {
//         //         return product.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1;
//         //     }
//         // );
//         // if (!localStorage.username) {
//         //     return <Navigate to="/login" />;
//         // }
//         return (
//             <React.Fragment>
//                 <div>
//                     <div id="wrapper">

//                         <div id="content-wrapper" className="d-flex flex-column">
//                             <div id="contentt">

//                                 <div className="btn-group mt-2 float-left a">
//                                     <a className="navbar-brand mb-5 ml-4" to="/add"><button type="button" className="btn btn-primary">Thêm Sản Phẩm</button></a>
//                                 </div>
//                                 <div className="mt-3 float-left">
//                                     {/* <input className="form-control search mb-3 ml-5" name="keyword" value={keyword} onChange={this.onChange} type="search" placeholder="Search" aria-label="Search" /> */}
//                                 </div>
//                                 <table className="table table-bordered table-hover mt-6 ml-5">
//                                     <thead>
//                                         <tr>
//                                             <th className="text-center">STT</th>
//                                             <th className="text-center">Tên Sản Phẩm</th>
//                                             <th className="text-center">Loại Sản Phẩm</th>
//                                             <th className="text-center">Hình ảnh</th>
//                                             <th className="text-center">Xuất xứ</th>
//                                             <th className="text-center">Tình Trạng</th>
//                                             <th className="text-center">Hành Động</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {this.state.products.map((item,index) => (
//                                             <tr>
//                                                 <td>{index+1}</td>
//                                                 <td>{item.tensanpham}</td>
//                                             </tr>
                                            
//                                         ))}

//                                         {/* {search.map((product, index) => {
//                                             return < p key={index} index={index} product={product} onDelete={this.onDelete} />
//                                         })} */}
//                                     </tbody>
//                                 </table>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         );
//     }
// }
// export default ProductList;									