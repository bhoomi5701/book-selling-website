import { useEffect, useState } from "react";
import axios from "axios";
import { BookSearchBar } from "../components";
import img from "../images/aahat.jfif";

export default function BookList() {
    const api_url = import.meta.env.VITE_backend_url;
    let [bookData, setBookData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`${api_url}/book/all`);
            setBookData(res.data.result);
            console.log(bookData);
        }
        fetchData();
    }, []);

    return (
        <>
            <div className="text-center m-auto text-4xl font-bold font-roboto">
                Book List
                <div className="border border-b-2 w-1/4 m-auto mt-3 border-black"></div>
            </div>
            <div className="m-4">
                <BookSearchBar total={bookData.length} />
            </div>
            <div className="grid grid-cols-3 gap-2">
                {/* <div className="card w-72 bg-base-100 shadow-xl font-roboto">
                    <figure className="image-full"><img src={img} alt="Aahat" className="w-full" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold">Aahat</h2>
                        <p className="">Horror</p>
                        <p className="">About book</p>
                        <p className="text-lg text-black">MRP {200} Rs.</p>
                        <div className="card-actions max-w-full">
                            <button className="btn btn-primary w-full">Add to Cart</button>
                        </div>
                    </div>
                </div> */}

                {bookData.map((book, index) => {
                    return (
                        <div key={book.id} className="card w-72 bg-base-100 shadow-xl font-roboto">
                            <figure className=""><img src={book.base64image} alt="Aahat" className="w-full h-40" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-bold">{book.name}</h2>
                                <p className="">{book.category}</p>
                                <p className="h-16 overflow-hidden">{book.description}</p>
                                <p className="text-lg text-black">MRP {book.price} Rs.</p>
                                <div className="card-actions max-w-full">
                                    <button className="btn btn-primary w-full">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}