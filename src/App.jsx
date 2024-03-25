import './App.css'
import Form from "./components/Form.jsx";
import {useState} from "react";

function App() {
    const [data, setData] = useState([]);
    const dataHandler = (newData) => {
        setData(prevState => [...prevState, newData]);
    }
    console.table(data)


    return (
        <>
            <div className="grid grid-cols-12 h-screen">
                <div className="col-span-6">
                    <Form onSendData={dataHandler}/>
                </div>
                <div className="col-span-6">
                    <table className="bg-white border border-gray-200 rounded-lg shadow-2xl w-full">
                        <thead className="bg-slate-200">
                        <tr>
                            <th className="px-4 py-2 text-center">Id</th>
                            <th className="px-4 py-2 text-center">Product Name</th>
                            <th className="px-4 py-2 text-center">Product Quantity</th>
                            <th className="px-4 py-2 text-center">Product Unit Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data && data.map((item, index) => (
                            <tr key={index}  className="odd:bg-slate-300 hover:bg-pink-300 duration-50050 transition-all">
                                <td className="border px-4 py-2 text-center">{index+1}</td>
                                <td  className="border px-4 py-2 text-center" >{item.name}</td>
                                <td  className="border px-4 py-2 text-center">{item.quantity}</td>
                                <td  className="border px-4 py-2 text-center">{item.unitPrice}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>


            </div>
        </>
    )
}

export default App
