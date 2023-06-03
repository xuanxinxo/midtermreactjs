import React from 'react';
import axios from 'axios';

const Xoa = () => {
  // Hàm xóa sản phẩm
  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`)
      .then((response) => {
        console.log('Sản phẩm đã được xóa thành công');
        // Thực hiện các thao tác khác sau khi xóa thành công
      })
      .catch((error) => {
        console.error('Đã xảy ra lỗi khi xóa sản phẩm:', error);
        // Xử lý lỗi nếu có
      });
  };

  // ...
};
export default Xoa;
