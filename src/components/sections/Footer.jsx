import NowPlaying from '../cards/NowPlaying';

const Footer = () => {
    return (
        <section className='max-w-4xl mx-auto md:px-8 pb-3'>
            <div className="flex flex-col justify-center items-center gap-3 md:flex-row md:justify-between md:items-center">
                <NowPlaying />
                <p className='text-secondary-text text-center'>
                    © 2024 John Clayton Blanc. All Rights Reserved.
                </p>
            </div>
        </section >
    )
}

export default Footer