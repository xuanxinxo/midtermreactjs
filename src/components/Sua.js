import React from 'react';
import axios from 'axios';

const Sua = () => {
  // Hàm sửa đổi sản phẩm
  const editProduct = (id) => {
    const updatedProduct = {
      name: 'New Name',
      price: 19.99,
    };

    axios.put(`http://localhost:3000/products/${id}`, updatedProduct)
      .then((response) => {
        console.log('Sản phẩm đã được sửa đổi thành công');
        // Thực hiện các thao tác khác sau khi sửa đổi thành công
      })
      .catch((error) => {
        console.error('Đã xảy ra lỗi khi sửa đổi sản phẩm:', error);
        // Xử lý lỗi nếu có
      });
  };

  // ...
};
export default Sua;
