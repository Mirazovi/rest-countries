import PropTypes from 'prop-types'

const Country_Details = ({country}) => {
    const {flags,name} = country;
    return (
        <div >
                <img className="w-full h-[100px] rounded-xl" src={flags.png} alt="" />
                <li className="text-xl font-bold">{name.common}</li>
        </div>
    );
};
Country_Details.propTypes ={
    country :PropTypes.object
}
export default Country_Details;