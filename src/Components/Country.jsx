import PropTypes from 'prop-types'
import { useState } from 'react';

const Country = ({country,handleVisitedCountry}) => {
    const {flags,name,area,capital,continents,subregion,population} = country;
    const [visited,setVisited] = useState(false)
    const handleClick = () =>{
            setVisited(!visited);
    }
    return (
        <div className={`p-4 rounded-xl border-red-600 border-2 ${visited ? 'bg-pink-600 text-white' : ''}`}>
            <p className={`text-2xl font-bold`}>Title :{name.common}</p>
            <img className='w-full h-[200px] py-2' src={flags.png} alt="" />
            <p className='text-xl '>Capital :{capital}</p>
            <p className='text-xl '>Area :{area}</p>
            <p className='text-xl '>Continents :{continents}</p>
            <p className='text-xl '>Subregion :{subregion}</p>
            <p className='text-xl '>Population :{population}</p>
            <button onClick={handleClick} className='px-3 rounded-lg w-full text-white bg-violet-600 text-xl py-3 my-2'>{visited ? 'Visited' : 'Going'}</button>
            <button onClick={()=> handleVisitedCountry(country)} className='px-3 rounded-lg w-full text-white bg-amber-600 text-xl py-3 my-2'>Booked</button>
        </div>
    );
};
Country.propTypes = {
    country : PropTypes.object,
    handleVisitedCountry : PropTypes.object
}
export default Country;