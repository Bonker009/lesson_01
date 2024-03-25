import {useState} from "react";

// eslint-disable-next-line react/prop-types
export default function Form({onSendData}) {
    // const [productName, setProductName] = useState("");
    // const [productQuantity,setProductQuantity] = useState("");
    // const [unitPrice,setUnitPrice] = useState("");
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        quantity: "",
        unitPrice: ""
    })
    const changeHandler = (event) => {
        const {name, value} = event.target;
        setFormData(prevState => ({
            ...prevState, [name]: value
        }));

    };
    // console.table(formData)

    const submitFormHandler = (event) => {
        event.preventDefault();
        onSendData(formData);

    }
    const clickHandler = () => {
        setShow(prevState => !prevState);
    }


    return (
        <div>
            {/*<h1>This is what u entered : {productName}</h1>*/}
            <button className="mx-auto p-4 bg-red-500 rounded-2xl font-semibold text-white" onClick={clickHandler}>Click
                Me
            </button>
            {
                show && (<form
                    className="flex flex-col justify-center items-start bg-teal-400 p-4 font-semibold rounded-2xl w-1/2 mx-auto my-12"
                    onSubmit={submitFormHandler}>
                    <label htmlFor="name" className="text-slate-50 font-semibold">Product Name</label>
                    <input className="w-full rounded-md p-4 mb-4" type="text" name="name" id="name"
                           onChange={changeHandler}/>
                    <label htmlFor="quantity" className="text-slate-50 font-semibold">Product Quantity</label>
                    <input className="w-full rounded-md p-4 mb-4" type="text" name="quantity" id="quantity"
                           onChange={changeHandler}/>
                    <label htmlFor="unitPrice" className="text-slate-50 font-semibold">Product Unit Price</label>
                    <input className="w-full rounded-md p-4 mb-4" type="number" name="unitPrice" id="unitPrice"
                           onChange={changeHandler}/>
                    <label htmlFor="image" className="text-slate-50 font-semibold">Product Image</label>
                    <input className="w-full rounded-md p-4 mb-4" type="text" name="image" id="image"
                           onChange={changeHandler}/>
                    <input type="submit" value="Submit"
                           className="px-5 mt-4 rounded-2xl p-4 bg-teal-300 text-black font-semibold self-end"/>
                </form>)
            }

        </div>)
}