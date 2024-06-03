import PropTypes from 'prop-types';

const HeadingWithTitle = ({ heading, title }) => {

    return (
        <div>
            <div className="bg-white text-[#333] p-4 w-full rounded font-[sans-serif]">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="sm:text-4xl text-3xl font-extrabold">{heading}</h1>
                    <div className="mb-10 mt-5">
                        <p className=" text-sm">{title}</p>
                    </div>
                    <hr />

                </div>
            </div>
        </div>
    );
};
HeadingWithTitle.propTypes = {
    heading: PropTypes.any, // No // Accepts any object
    title: PropTypes.any, // No // Accepts any object
};
export default HeadingWithTitle;