import React, { useEffect, useState, useRef } from 'react'
import './App.css'
import Imazh from "./flag.png";
function Project() {
const ref=useRef(null);
const[country, setCountry]=useState("albania");
const [datas,setDatas]=useState(null);
const [response, setresponse]=useState('')
const [error, setError]=useState(false);
const [inputVal,setInputVal]=useState("");
  useEffect(()=>{
    let apiReq=fetch(`https://coronavirus-19-api.herokuapp.com/countries/${country}`)
    .then(res=>{
  
    return res.json()
    })
    .then(data=> {
    setDatas(data)
    setError(false)
  
    })
    .catch(err=> setError(true))
    
    },[country])








    return (



       <div className="contain">
{error ? <h1 style={{color: `#90918d` }} className="text-center err">Sorry we do not have info for {country} !  </h1> : <> </> }

<div className="form">
<form action="" className='form' style={{margin: `0 auto`}}>
<input placeholder="Search for country" list='lista' value={inputVal} type="text" onChange={(e)=> {
  setInputVal(e.target.value)
}} />
<datalist id='lista'  >
   <option value="Albania"/>
   <option value="Algeria"/>
   <option value="Andorra"/>
   <option value="Argentina"/>
   <option value="Armenia"/>
   <option value="Australia"/>
   <option value="Austria"/>
   <option value="Azerbaijan"/>
   <option value="Bahamas"/>
   <option value="Bahrain"/>
   <option value="Bangladesh"/>
   <option value="Belarus"/>
   <option value="Belgium"/>
   <option value="Bolivia"/>
   <option value="Bosnia & Herzegovina"/>
   <option value="Brazil"/>
   <option value="Bulgaria"/>
   <option value="Burundi"/>
   <option value="Cambodia"/>
   <option value="Cameroon"/>
   <option value="Canada"/>
   <option value="Chad"/>
   <option value="Chile"/>
   <option value="China"/>
   <option value="Colombia"/>
   <option value="Comoros"/>
   <option value="Congo"/>

   <option value="Costa Rica"/>
   <option value="Cote DIvoire"/>
   <option value="Croatia"/>
   <option value="Cuba"/>
   <option value="Cyprus"/>
   <option value="Czech Republic"/>
   <option value="Denmark"/>
   <option value="Djibouti"/>
   <option value="Dominica"/>
   <option value="Dominican Republic"/>
   <option value="East Timor"/>
   <option value="Ecuador"/>
   <option value="Egypt"/>
   <option value="Estonia"/>
   <option value="Ethiopia"/>
   <option value="Falkland Islands"/>
   <option value="Faroe Islands"/>
   <option value="Fiji"/>
   <option value="Finland"/>
   <option value="France"/>
   <option value="French Guiana"/>
   <option value="French Polynesia"/>
   <option value="French Southern Ter"/>
   <option value="Gabon"/>
   <option value="Gambia"/>
   <option value="Georgia"/>
   <option value="Germany"/>
   <option value="Ghana"/>
   <option value="Gibraltar"/>
   <option value="Great Britain"/>
   <option value="Greece"/>
   <option value="Greenland"/>
   <option value="Grenada"/>
   <option value="Guadeloupe"/>
   <option value="Guam"/>
   <option value="Guatemala"/>
   <option value="Guinea"/>
   <option value="Guyana"/>
   <option value="Haiti"/>
   <option value="Hawaii"/>
   <option value="Honduras"/>
   <option value="Hong Kong"/>
   <option value="Hungary"/>
   <option value="Iceland"/>
   <option value="Indonesia"/>
   <option value="India"/>
   <option value="Iran"/>
   <option value="Iraq"/>
   <option value="Ireland"/>

   <option value="Israel"/>
   <option value="Italy"/>
   <option value="Jamaica"/>
   <option value="Japan"/>
   <option value="Jordan"/>
   <option value="Kazakhstan"/>
   <option value="Kenya"/>

   <option value="Korea North"/>
   <option value="Korea Sout"/>
   <option value="Kuwait"/>

   <option value="Latvia"/>
   <option value="Lebanon"/>
   <option value="Lesotho"/>
   <option value="Liberia"/>
   <option value="Libya"/>
   <option value="Liechtenstein"/>
   <option value="Lithuania"/>
   <option value="Luxembourg"/>
   <option value="Macau"/>
   <option value="Macedonia"/>
   <option value="Madagascar"/>
   <option value="Malaysia"/>
   <option value="Malawi"/>
   <option value="Maldives"/>
   <option value="Mali"/>
   <option value="Malta"/>

   <option value="Martinique"/>
   <option value="Mauritania"/>
   <option value="Mauritius"/>
   <option value="Mayotte"/>
   <option value="Mexico"/>

   <option value="Moldova"/>
   <option value="Monaco"/>
   <option value="Mongolia"/>
   <option value="Morocco"/>
   <option value="Mozambique"/>
   <option value="Myanmar"/>

   <option value="Nepal"/>
  
   <option value="Netherlands"/>
   <option value="Nevis"/>
   <option value="New Caledonia"/>
   <option value="New Zealand"/>
   <option value="Nicaragua"/>
   <option value="Niger"/>
   <option value="Nigeria"/>
 
   <option value="Norfolk Island"/>
   <option value="Oman"/>
   <option value="Pakistan"/>

   <option value="Palestine"/>
   <option value="Panama"/>
   <option value="Papua New Guinea"/>
   <option value="Paraguay"/>
   <option value="Peru"/>
   <option value="Phillipines"/>

   <option value="Poland"/>
   <option value="Portugal"/>
   <option value="Puerto Rico"/>
   <option value="Qatar"/>
   <option value="Republic of Montenegro"/>
   <option value="Republic of Serbia"/>
   <option value="Reunion"/>
   <option value="Romania"/>
   <option value="Russia"/>
   <option value="Rwanda"/>

   <option value="San Marino"/>
   <option value="Sao Tome & Principe"/>
   <option value="Saudi Arabia"/>
   <option value="Senegal"/>
   <option value="Sierra Leone"/>
   <option value="Singapore"/>
   <option value="Slovakia"/>
   <option value="Slovenia"/>
   <option value="Solomon Islands"/>
   <option value="Somalia"/>
   <option value="South Africa"/>
   <option value="Spain"/>
   <option value="Sri Lanka"/>
   <option value="Sudan"/>
   <option value="Sweden"/>
   <option value="Switzerland"/>
   <option value="Syria"/>
   <option value="Tahiti"/>
   <option value="Taiwan"/>
   <option value="Tajikistan"/>
   <option value="Tanzania"/>
   <option value="Thailand"/>
 
   <option value="Tonga"/>
   <option value="Trinidad & Tobago"/>
   <option value="Tunisia"/>
   <option value="Turkey"/>
   <option value="Turkmenistan"/>

   <option value="Uganda"/>
   <option value="uk"/>
   <option value="Ukraine"/>
   <option value="uae"/>
   <option value="usa"/>
   <option value="Uruguay"/>
   <option value="Uzbekistan"/>

   <option value="Venezuela"/>
   <option value="Vietnam"/>
   <option value="Yemen"/>
   <option value="Zambia"/>
   <option value="Zimbabwe"/>
   </datalist>

<input ref={ref} type="submit" onClick={(e)=>{
  e.preventDefault()
  setCountry(inputVal);

  setInputVal("");
 
}}/>

   </form>
   </div>



<div className="row ">

<div className="col-lg-12 text-center">
{!datas ? <h1>Ne ngarkim...</h1> : 
<h2 className="fs-1">
    {datas.country}
</h2>

}

</div>




</div>
<div className="row ">

<div className=" col-12 col-lg-6 my-5 ">
<div className="card mx-auto shadow-lg  border-0 " style={{width: `300px`, height: `10rem`}}>
  <div className="card-body ">
    <h5 className="card-title fs-3 text-center">Raste sot:</h5>
    <p className="card-text fs-4 text-primary  text-center"> {datas && datas.todayCases}</p>
  </div>
</div>


</div>
<div className=" col-12 col-lg-6 my-5">

 

<div className="card shadow-lg mx-auto" style={{width: `18rem`,height: `10rem`}}>

  <div className="card-body">
    <h5 className="card-title fs-3 text-center">Vdekje sot:</h5>
    <p className="card-text text-center fs-4 text-danger"> {!datas? <h1>Ne ngarkim</h1> : <span>{datas.todayDeaths}</span> 


}</p>
    
  </div>
</div>

</div>


</div>


<div className="row">
<div className="col-12 col-lg-4 my-5">
  <div className="card shadow-lg  mx-auto" style={{width: `18rem`,height: `10rem`}}>
<div className="card-body">
  <h5 className="card-title fs-3 text-center"> Terapi intensive:</h5>
  <p className="card-text text-center fs-4 text-warning">   {!datas? <span>Ne ngarkim</span> : <span>{datas.critical}</span> } </p>
</div>
</div>
  
</div>
<div className="col-12 col-lg-4 my-5">
  <div className="card shadow-lg mx-auto" style={{width: `18rem`,height: `10rem`}}>
<div className="card-body">
  <h5 className="card-title fs-3 text-center">Te sheruar:</h5>
  <p className="card-text text-center fs-4 text-success">   {!datas? <h1>Ne ngarkim</h1> : <span>{datas.recovered}</span> } 
</p>
</div>
</div>
</div>

<div className="col-12 col-lg-4 my-5">
<div class="card shadow-lg mx-auto" style={{width: `18rem`,height: `10rem`}}>
<div class="card-body">
  <h5 class="card-title fs-3 text-center">  Te testuar: </h5>
  <p class="card-text text-center fs-4 text-info">    {!datas? <h1>Ne ngarkim</h1> : <span>{datas.totalTests}</span> }  
</p> 
</div>
</div>
</div>



</div>



<div className="row">
<div className="col-12 col-lg-4 my-5">

<div className="card shadow-lg mx-auto" style={{width: `18rem`,height: `10rem`}}>

<div className="card-body">
<h5 className="card-title fs-3 text-center">   Vdekje totale: </h5>
<p className="card-text text-center fs-4 text-danger">    {!datas? <h1>Ne ngarkim</h1> : <span>{datas.deaths}</span> }   
</p>
</div>
</div>
</div>
<div className="col-12 col-lg-4 my-5">
<div className="card shadow-lg mx-auto" style={{width: `18rem`,height: `10rem`}}>
<div className="card-body">
  <h5 className="card-title fs-3 text-center">   Raste totale: </h5>
  <p className="card-text text-center fs-4 text-secondary">    {!datas? <h1>Ne ngarkim</h1> : <span>{datas.cases}</span> }   
</p>
  
</div>
</div>

  </div>
  <div className="col-12 col-lg-4 my-5">
  <div className="card shadow-lg mx-auto" style={{width: `18rem`,height: `10rem`}}>
<div className="card-body">
  <h5 className="card-title fs-3 text-center">   % vdekshmerise: </h5>
  <p className="card-text text-center fs-4 text-danger">    {!datas? <h1>Ne ngarkim</h1> : <span>{parseFloat((datas.deaths/datas.cases)*100).toPrecision(3) + " %"}</span> }   
</p>
  
</div>
</div>
</div>


</div>
       </div>
    )
}

export default Project
