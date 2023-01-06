import React, { Component } from 'react';
import cc from './cc.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ten from './icon/Group 10.png';
import { useState } from 'react';
const Season = () => { 

    const handleClick = () => {
        fetch(
          'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=你的授權碼&locationName=臺北'
        )
          .then((response) => response.json())
          .then((data) => {
            console.log('data', data);
          });
      };
      
const [weather,setweather] = useState({
    locationName: '后里區',
    rain:'降雨機率30%',
    temperature:'29'
})
        return (
            <div className={cc.season}>
            <div className={cc.season1}>
                <div className={cc.seasoninfo}>
                    <h1>{Math.round(weather.temperature)}°</h1>
                    <p>&nbsp;&nbsp;{weather.locationName}&nbsp;&nbsp;</p>&nbsp;&nbsp;<span className={cc.spancolo}>{weather.rain}</span>
                </div>
                <img src={ten} alt=""/>
            </div>
        </div>
        );
    
}
 
export default Season;
