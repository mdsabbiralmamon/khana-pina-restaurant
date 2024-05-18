import PropTypes from 'prop-types'

const SectionHeading = (params) => {
    const {top_heading, heading} = params;

    return (
        <div className='mx-auto text-center mb-24'>
            <h3 className="text-[#D99904] text-xl">{top_heading}</h3>
            <div className="divider w-96 mx-auto"></div> 
            <h2 className=" text-4xl uppercase ">{heading}</h2>
            <div className="divider w-96 mx-auto"></div> 
        </div>
    );
};

SectionHeading.propTypes = {
    params: PropTypes.node,
};

export default SectionHeading;