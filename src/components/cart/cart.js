import React,{useState} from 'react';

export const Cart = ({data, deleteItem}) => {

    const [showCart, setShowCart] = useState(false);
    
    const clickCart = (e) => {
        e.preventDefault();
        setShowCart(true)
    }
    const closeCart = () => {
        setShowCart(false)
    }
    const cartItems = data.map((el, index) => {
        if (!el) {
            return <></>;
        } else {
            return (
                <div className="modal-header">
                    <h5 className="modal-title">{`${el.name}  ${el.date}  ${el.color}  ${el.price}$`}</h5>
                    <button onClick={() => deleteItem(index)} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )
            }
        }
    )
   
    if (showCart === true){
        return(
        <>
            <div>
            <p><a  href="">Card{data.length}</a></p>
            </div>
            <div className="modal in" style={{display: "block"}} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Cart</h5>
                        <button onClick={closeCart} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {cartItems}
                    </div>
            </div>
            </div>
        </>
        )
    }else{
        return(
            <div >
                <p><a onClick={clickCart} href="">Card{data.length}</a></p>
            </div>
        )
    }


}