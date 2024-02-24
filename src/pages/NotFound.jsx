import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-primary text-primary-text">
            <h1 className="text-[10rem] font-extrabold tracking-widest">404</h1>

            <div className="bg-secondary px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>

            <button
                className="mt-5">
                <Link to="/"
                    className="relative inline-block text-sm font-medium text-secondary group active:text-[#6b90bd] focus:outline-none focus:ring"
                >
                    <span
                        className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-secondary group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>

                    <span className="relative block px-8 py-3 bg-primary border border-current">
                        Go Home
                    </span>
                </Link>
            </button>
        </main>
    )
}

export default NotFound