import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
    const [xuan, setxuan] = useState([]);
    useEffect(() => {
        sp();
    }, []);
    const sp = async () => {
        try {
            const data = await axios.get('http://127.0.0.1:8000/api/products')
            setxuan(data.data)
        } catch (error) { console.error(); }
    }
    
    return (
        <div>
            <h1>SHOP XUANMIKENCO</h1>
            <div className="row">
                {xuan.map((item) => (
                <div className="col-md-3" >
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={item.img} className="card-img-top" alt="'" />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text"> Giá Sản Phẩm: {item.price}</p>
                            <a href="#" className="btn btn-primary">Mua nhé</a>
                        </div>
                   </div>
                   </div>
                ))}
            </div>        
        </div>
            )
}
export default Home;