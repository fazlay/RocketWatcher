
import './App.css';
//import Button from './components/Button'
import axios from 'axios'
import React, { useState,useEffect} from 'react';
import RocketCard from './components/rocket-card'
import Button from './components/Button';

function App() {

  
  const [lunch, setLunch] = useState("")
  const [land, setLand] = useState("")
  const [currentYear, setCurrentYear] = useState("")


  var url =`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${lunch}&land_success=${land}&launch_year=${currentYear}`
  const [aircraft, setAircraft] = useState([])

  
    useEffect(() => {
      getSpaceX ()
      return () => {
        cleanup()
      }
    }, [currentYear,lunch, land])
  
    
  /*
  (async function () {
    var reasult = await axios.get(url)
    var years =(reasult.data.launch_year)
    console.log(reasult.data.launch_year);
    return years
  })();


  const getSpaceX =async() => {
  var reasult = await axios.get(url)
  setAircraft(reasult.data)
  console.log(reasult.data);
  
  }
  */
  const cleanup=()=>{

    setLunch("")
    setLand("")
    setCurrentYear("")
   
  }

  const getSpaceX =async() => {
    var reasult = await axios.get(url)
    setAircraft(reasult.data)
    console.log(reasult.data);

  }
  const LunchSucessTrue=()=>{

    setLunch(true)
    console.log(lunch);
    //getSpaceX ()
  }

  const LunchSucessFlase=()=>{
    
    setLunch(false)
    console.log(lunch);
   // getSpaceX ()
  }


  const LandSucessTrue=()=>{
    
    setLand(true)
    console.log(lunch);
  getSpaceX ()
  }

  const LandSucessFlase=()=>{
    
    setLand(false)
    console.log(lunch);
  // getSpaceX ()
  }



  const yearFilter=(year)=>{
    setCurrentYear(year)
    console.log(year);
   // getSpaceX ()
  }

  //var years =[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]

  return (
  
    <div className="App">
      <h1>SpaceX Lunch Programs</h1>
      <div className="filter-container">
        <p> Lunch Years </p>
        <div className="year-container">
        
       
        <Button year={2006} onChildClick={yearFilter}/>
        <Button year={2007} onChildClick={yearFilter}/>
        <Button year={2008} onChildClick={yearFilter}/>
        <Button year={2009} onChildClick={yearFilter}/>
        <Button year={2010} onChildClick={yearFilter}/>
        <Button year={2011} onChildClick={yearFilter}/>
        <Button year={2012} onChildClick={yearFilter}/>
        <Button year={2013} onChildClick={yearFilter}/>
        <Button year={2014} onChildClick={yearFilter}/>
        <Button year={2015} onChildClick={yearFilter}/>
        <Button year={2016} onChildClick={yearFilter}/>
        <Button year={2017} onChildClick={yearFilter}/>
        <Button year={2018} onChildClick={yearFilter}/>
        <Button year={2019} onChildClick={yearFilter}/>
        <Button year={2020} onChildClick={yearFilter}/>

   
        </div>
       <div  className="lunch-container">   <p>Sucessful Lunch </p>
     
     <Button year={true} onChildClick={LandSucessTrue}/>
 
     <Button year={false} onChildClick={LandSucessFlase}/>
      </div>
       <div  className="land-container"> <p>Sucessful Landing</p>
        <Button year={true} onChildClick={LunchSucessTrue}/>
        <Button year={false} onChildClick={LunchSucessFlase}/>
        </div>
     
       
        
      </div>
      
      <div> 
        {aircraft.map((rocketData)=>{
          return <RocketCard rocketData={rocketData}/>
         })}
    </div>
    </div>
    
  );
}

export default App;


//  console.log(rocketData.details);  {years.map((year)=>{return<Button year={year}/>})} onClick={setLunch(true)}  LunchSucessFlase

/*

    {currentYear.map((year)=>{
         return(
       
        <Button year={year} onChild={}/>
      ) })}

*/
