import React, {useState, useEffect} from 'react';

const Weather = ({description_det, temp_det,  description_short }) => {

    console.log("det = ", description_det)
    console.log("temp = ", temp_det)
    console.log("short = ", description_short)

    const get_images = (image) => {
      
               console.log("image = ", image);
                switch(image){
                   case "Clear"  : 
                       return <img width="300px" height="250px" src="https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="clear sky image" /> 
                   case "Clouds" :
                        return <img width="300px" height="250px" src="http://canitbesaturdaynow.com/images/fpics/1679/033120bd5d2cfd5c05653a107622e41d.jpg" alt="few clouds image" /> 
                   case "Rain" :
                        return <img width="300px" height="250px" src="https://regmedia.co.uk/2013/06/08/rain_cloud.jpg?x=442&y=293&crop=1" alt="few clouds image" /> 
                   case "Snow" :
                        return <img width="300px" height="250px" src="https://previews.123rf.com/images/esolex/esolex1712/esolex171200068/92232175-snowflakes-falling-from-the-sky-spruces-covered-with-hoarfrost-and-snow-winter-forest.jpg" alt="few clouds image" /> 
                   case "Mist" :
                        return <img width="300px" height="250px" src="http://www.sabcnews.com/sabcnews/wp-content/uploads/2018/09/SABC-News-thick-mist-Reuters.jpg" alt="few clouds image" />                   
                   case "Haze" :
                        return <img width="300px" height="250px" src="https://images.unsplash.com/photo-1515280588352-4023329abe6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="few clouds image" />                   
                   default :
                        return <img width="300px" height="250px" src="http://larepubliquedeslivres.com/wp-content/uploads/2012/11/36676-sky_blue.jpg" alt="few clouds image" /> 

                    }
           }

    return(
        <div className="weather-div">
            <p>{temp_det} K </p>
            <p> {description_det}</p>            
            <div className="centered" >
            {get_images(description_short)}
            </div>
        </div>
    );
    


}

export default Weather;