import React, { useEffect, useState } from 'react'
import './App.css'
import Imazh from "./flag.png"
function Project() {

const [country,setCountry]=useState("albania");
const [datas,setDatas]=useState(null);

useEffect(()=>{
let apiReq=fetch(`https://coronavirus-19-api.herokuapp.com/countries/${country}`)
.then(res=>{
return res.json()
})
.then(data=> {
setDatas(data)

})

},[])






    return (
       <div className="contain">
<div className="row text-center">


<img className="" src={Imazh} style={{borderRadius: `50%`,width: `200px`, position: `relative`, margin: `0 auto`}} alt=""/>

</div>

<div className="row">

<div className="col-lg-12 text-center">
{!datas ? <h1>Ne ngarkim...</h1> : 
<h2 className="fs-1">
    {datas.country}
</h2>

}

</div>




</div>
<div className="row">

<div className="border border-dark  col-lg-4 col-md-4  fs-3 cold-sm-4 text-center my-3">



<div class="card mx-auto" style={{width: `18rem`}}>

  <div class="card-body">
    <h5 class="card-title fs-3">Raste sot:</h5>
    <p class="card-text text-center"> {datas && datas.todayCases}</p>
    
  </div>
</div>


</div>
<div className="border border-danger col-lg-4 col-md-4 cold-sm-4 text-danger fs-3 text-center my-3">

 

<div class="card mx-auto" style={{width: `18rem`}}>

  <div class="card-body">
    <h5 class="card-title fs-3">Vdekje sot:</h5>
    <p class="card-text text-center"> {!datas? <h1>Ne ngarkim</h1> : <span>{datas.todayDeaths}</span> 


}</p>
    
  </div>
</div>

</div>

<div className="col-lg-4  fs-3 col-md-4 cold-sm-4 text-center  my-3 border border-primary">

 

   <div class="card mx-auto" style={{width: `18rem`}}>

<div class="card-body">
  <h5 class="card-title fs-3"> Terapi intensive:</h5>
  <p class="card-text text-center">   {!datas? <h1>Ne ngarkim</h1> : <span>{datas.critical}</span> } </p>
  
</div>
</div>

   
</div>


</div>
<div className="row">



<div className="col-lg-4  fs-3 col-md-4 cold-sm-4 text-center  my-3 border border-success">

 

   <div class="card mx-auto" style={{width: `18rem`}}>

<div class="card-body">
  <h5 class="card-title fs-3">Te sheruar:</h5>
  <p class="card-text text-center">   {!datas? <h1>Ne ngarkim</h1> : <span>{datas.recovered}</span> } 
</p>
  
</div>
</div>
   


</div>

<div className="col-lg-4  fs-3 col-md-4 cold-sm-4 text-center  my-3 border border-primary">




<div class="card mx-auto" style={{width: `18rem`}}>

<div class="card-body">
  <h5 class="card-title fs-3">  Te testuar: </h5>
  <p class="card-text text-center">    {!datas? <h1>Ne ngarkim</h1> : <span>{datas.totalTests}</span> }  
</p>
  
</div>
</div>
</div>
   


<div className="col-lg-4  fs-3 col-md-4 cold-sm-4 text-danger  my-3 border border-danger">

  



   <div class="card mx-auto" style={{width: `18rem`}}>

<div class="card-body">
  <h5 class="card-title fs-3">   Vdekje totale: </h5>
  <p class="card-text text-center">    {!datas? <h1>Ne ngarkim</h1> : <span>{datas.deaths}</span> }   
</p>
  
</div>
</div>



</div>
</div>



<div className="row">
<div className="col-lg-6  fs-3 col-md-6 cold-sm-6 text-danger  my-3 border border-danger">


<div class="card mx-auto" style={{width: `18rem`}}>

<div class="card-body">
  <h5 class="card-title fs-3">   Raste totale: </h5>
  <p class="card-text text-center">    {!datas? <h1>Ne ngarkim</h1> : <span>{datas.cases}</span> }   
</p>
  
</div>
</div>

  </div>
  <div className="col-lg-6  fs-3 col-md-6 cold-sm-6 text-danger  my-3 border border-danger">


  <div class="card mx-auto" style={{width: `18rem`}}>

<div class="card-body">
  <h5 class="card-title fs-3">   % vdekshmerise: </h5>
  <p class="card-text text-center">    {!datas? <h1>Ne ngarkim</h1> : <span>{parseFloat((datas.deaths/datas.cases)*100).toPrecision(3) + " %"}</span> }   
</p>
  
</div>
</div>
</div>



</div>
       </div>
    )
}

export default Project
