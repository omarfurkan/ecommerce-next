


export default function InpurComponent({ label, type, placeholder, value, onChange }) {
    return (
        <div className="relative">
            <p className=" absolute pt-0 pr-2 pl-0 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600  bg-white">{label}</p>
            <input
                type={type || "text"}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="border placeholder-gray-40 focus:outline-none focus:border-black w-full pt-4 pr-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white  border-gray-300 rounded-md"
            />
        </div>
    )
}