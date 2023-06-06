export default function BookSearchBar({total}) {
    return (
        <div className="max-w-screen h-10 flex items-center justify-between">
            <div className="font-roboto font-bold text-xl">
                Total: {total} items
            </div>
            <div className="flex gap-8">
                <input type="text" className="border border-black px-2 py-1" placeholder="Search..." />
                <div className="flex items-center gap-2">
                    <p>Sort By: </p>
                    <select className="px-2 py-1 rounded w-28 border border-black">
                        <option value={1}>A-Z</option>
                        <option value={2}>Z-A</option>
                    </select>
                </div>
            </div>
        </div>
    );
}