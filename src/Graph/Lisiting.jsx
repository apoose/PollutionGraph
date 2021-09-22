import React, { Component, useState, useEffect } from 'react';
import { getpollutiondata, getCities } from './services'
import DatePicker from "react-datepicker";
import LineChartGraph from './LineChartGraph'
import "react-datepicker/dist/react-datepicker.css";
import '../Graph/style.css';



const Newlist = () => {
    const [pollution, setpollution] = useState([])
    const [cities, cityData] = useState([])
    const [city, SetCity] = useState("")
    const [startDate, setStartDate] = useState(new Date());
    const handleCity = (e) => {
        console.log(e.target.value)
        SetCity(e.target.value)
    }
    const submitData = (e) => {
        let cityName = city;
        let changedDate = startDate;
        alert(changedDate)
        var date = new Date(changedDate),
        
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        var fromDate = [date.getFullYear(), mnth, day].join("-");
        getpollutiondata(cityName, fromDate).then((data) => {
            console.log("response....", data)
            setpollution(data.results)
        })
    }
    useEffect(() => {
        getCities().then((city) => {
            cityData(city.results)
        })
    }, []
    )

    return (
        <div>
            <div class="row" style={{
                marginLeft: '102px',
                marginTop: '50px'
            }}>
                <div class="col-sm-4">
                    <select id="city" onChange={handleCity} >
                        <option value="0" >select city</option>
                        {cities.map((cityName, i) => (
                            <option value={cityName.city}>{cityName.city}</option>
                        ))}
                    </select><br></br>
                </div>
                <div class="col-sm-4" >
                    <DatePicker selected={startDate} onChange={(dd) => setStartDate(dd)} />

                </div>
                <div class="col-sm-2" >
                    <span className="saveButton" onClick={() => submitData()}>Submit</span>
                </div>
            </div>
            {pollution.length > 0 && 
                <LineChartGraph pollutionData={pollution}></LineChartGraph>
                
            }
        </div>
    )
}
export default Newlist