import BumbyTextAnim from "../text anim/BumbyTextAnim";

const SectionHeader = ({ title, subtitle }) => {
    return (
        <div className="text-primary-text text-center pb-10">
            <BumbyTextAnim text={title} className="text-4xl font-bold" />
            <p className="text-secondary-text">{subtitle}</p>
        </div>
    )
}

export default SectionHeader