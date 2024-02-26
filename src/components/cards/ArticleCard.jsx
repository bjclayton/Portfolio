import { DirectionAwareHover } from "../ui/DirectionAwareHover";

const ArticleCard = ({ article }) => {
    return (
        <div className="relative flex flex-col mt-6 text-primary-text bg-third shadow-md bg-clip-border rounded-xl w-80 md:w-[21rem] lg:w-[25rem] mb-3">
            <div
                className="relative h-56 mx-4 -mt-6 overflow-hidden shadow-lg bg-clip-border rounded-xl shadow-blue-gray-500/40">
                <DirectionAwareHover imageUrl={article.image} />
            </div>
            <div className="p-6">
                <h5 className="block mb-2 text-xl font-semibold">
                    {article.title}
                </h5>
                <p className="block text-base text-secondary-text">
                    {article.resume}
                </p>
            </div>
            <div className="p-6 pt-0">
                <a href={article.url}
                    className="align-middle text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-z py-3 px-6 rounded-lg hover:bg-secondary text-white shadow-md shadow-gray-900/10 hover:shadow-lg bg-primary focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">
                    Read More
                </a>
            </div>
        </div>
    )
}

export default ArticleCard