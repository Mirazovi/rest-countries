import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import Country_Details from "./Country_Details";

const Countries = () => {
    const [countries,setCountries] = useState([])
    const [visitedCountry,setVisitedCountry] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
},[])
const handleVisitedCountry = (country) =>{
    const NewVisitedCountry = [...visitedCountry ,country]
    setVisitedCountry(NewVisitedCountry)
}
    return (
        <div>
            
            <h1 className="text-2xl text-center my-4">Countries :{countries.length}</h1>
            <div className="grid grid-cols-7 gap-2 w-[90%] m-auto my-4">
            {
                visitedCountry.map((country,idx) => <Country_Details key={idx} country={country}></Country_Details>)
            }
            <ul>
                <li></li>
            </ul>
            </div>
            <div className="grid grid-cols-4 gap-3 w-[90%] m-auto">
                {
                    countries.map((country,idx) => <Country
                     key={idx} 
                     country={country}
                     handleVisitedCountry={handleVisitedCountry}
                     ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;