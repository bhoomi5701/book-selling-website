import { useNavigate } from "react-router-dom";

export default function Product() {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate("/edit");
    }

    return (
        <>
            <div className="text-center text-4xl">
                <p>Product Page</p>
                <div className="border border-b-2 w-1/4 border-gray-400 m-auto mt-4"></div>
            </div>
            <div className="flex justify-end mt-6 gap-2">
                <input type="text" className="border border-gray-500 rounded px-2 py-1" placeholder="Search...." />
                <button className="bg-red-500 rounded text-white px-2 py-1 hover:bg-red-600">Add Product</button>
            </div>


            <div className="relative overflow-x-auto mt-6">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Source
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Querry
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4 flex gap-2 justify-end">
                                <button className="bg-green-500 px-2 py-1 text-lg text-white rounded hover:bg-green-600" 
                                onClick={handleEdit}
                                >Edit</button>
                                <button className="bg-red-500 px-2 py-1 text-white text-lg rounded hover:bg-red-600">Delete</button>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4">
                                White
                            </td>
                            <td className="px-6 py-4">
                                Laptop PC
                            </td>
                            <td className="px-6 py-4">
                                $1999
                            </td>
                            <td className="px-6 py-4 flex gap-2 justify-end">
                                <button className="bg-green-500 px-2 py-1 text-lg text-white rounded hover:bg-green-600">Edit</button>
                                <button className="bg-red-500 px-2 py-1 text-white text-lg rounded hover:bg-red-600">Delete</button>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">
                                Black
                            </td>
                            <td className="px-6 py-4">
                                Accessories
                            </td>
                            <td className="px-6 py-4">
                                $99
                            </td>
                            <td className="px-6 py-4 flex gap-2 justify-end">
                                <button className="bg-green-500 px-2 py-1 text-lg text-white rounded hover:bg-green-600">Edit</button>
                                <button className="bg-red-500 px-2 py-1 text-white text-lg rounded hover:bg-red-600">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-4 flex justify-end gap-2 items-center">
                <p className="">Rows per page</p>
                <input type="number" className="w-8 px-1 border border-slate-400" value={5} />
                <p className="text-sm">1 - 5 of 6</p>
                <button className="text-gray-400 rounded border-slate-500 px-2 font-bold">{"<"}</button>
                <button className="text-gray-900 rounded px-2 font-bold border-slate-500">{">"}</button>
            </div>

        </>
    );
}