const Tooltip = ({ name, image, path }) => {
    return (
        <span className="group relative inline-block">
            <a
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
            >{name}</a>
            <img
                src={image}
                alt="Company Name"
                className="absolute z-50 top-10 scale-0 transition-all rounded-md group-hover:scale-100" />
        </span>
    )
}

export default Tooltip