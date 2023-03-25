import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Lesson52.scss";
import Find from './find2.png'

const Lesson52 = () => {

    const search = document.querySelector(".search");
    const toggledInput = document.querySelector(".input");
    const handleClick = () =>{
        search.classList.toggle("active");
        toggledInput.focus();   
    };

    const {t, i18n} = useTranslation();

    const handleChangeLanguage = (lan)=>{
      i18n.changeLanguage(lan);
    }

    const [country,  setCountry] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error,  setError] = useState(false);
    const [input, setInput] = useState("");
 
    const findCountry = (e)=>{
        e.preventDefault();

    }
   
    const getData = async ()=>{

        let url;
        if (input) {

            url = `https://restcountries.com/v3.1/name/${input}?fulText=false`;
        }
        else{
            url = `https://restcountries.com/v3.1/all`
        }
        try{  
            const response = await axios.get(url);
            setCountry(response.data);
          }
        catch{
            setError(error);
        }
        finally{
            setLoading(false);
        }

console.log(country);
    }
    useEffect(()=>{
        getData();
    }, [input]);

    if (loading) {
        return <div>Loading...</div>
    }

  return (
    <div>
        <div className='container'>
            <div>
                <button className="button" onClick={()=>{handleChangeLanguage("eng")}}>Eng</button>
                <button className="button" onClick={()=>{handleChangeLanguage("ru")}}>ru</button>

                <h1>
                    {
                        t(`text`)
                    }
                </h1>
            </div>
            <div>
            </div>
            <div>
                <form className="mt-5 mb-5 search" onSubmit={findCountry}>
                    <input type="text input" onChange={(e)=>{setInput(e.target.value)}} placeholder="Search..." className="input"/>
                    <button type="submit" className="btn" onClick={handleClick}><img src={Find} alt="search" /></button>
                </form>
                <div className="row d-flex justify-content-center align-items-center g-3">
                    {

                        country.slice(0,6).map((davlat, index)=>{
                            const { flags, name, population, currencies, capital } = davlat;
                            let populationFixed;
                                if (population > 1000000) {
                                    populationFixed = `${Math.floor(population/1000000).toFixed()} mln`
                                } else if(population > 1000){
                                    populationFixed = `${Math.floor(population/1000).toFixed()} ming`;
                                } else if(population === 0){
                                    populationFixed = `${population}`
                                } 
                                else{
                                    populationFixed = `Axoli juda kam`
                                }
                                const currenciesInArray2 = Object.entries(currencies)[0][1].name;

                            return <div className="col-12 col-md-6 col-lg-4  text-center" key={index}>
                                         <div className="card border-0"> 
                                         <div className="cart">
                                            <img className="image" src={flags.svg} alt={flags.alt}/>
                                            <div className="cart-body ">
                                                <h2>{name.common}</h2>
                                                <h4>{capital}</h4>
                                                <span>Population: {populationFixed}</span>
                                                <p>Currency: {currenciesInArray2}</p>
                                            </div>
                                        </div>
                                         </div>
                                    </div>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lesson52;