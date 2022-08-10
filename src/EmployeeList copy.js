
import list from './EmployeeList.module.css';
import React, {useState, useEffect} from 'react'
import { Axios } from 'axios';
const EmployeeList=()=>{
   
const [emps,setEmps] = useState([])
useEffect(()=>{
 Axios.get('http://localhost:3002/EmployeeList').then((res)=> {

 setEmps(res.data)

 })
}, [] )  


    return(

<body>

  <div className={list.flexcontainer}>
    <div className={list.flexrow}>
      <a href="LandingPage"> <div className={list.aboutus}>About-Us</div></a>
      <a  href="EmployeeList"><div className={list.staffmembers}>Staff members</div></a>
      <a href="UpdateEmp"><div className={list.staffmembers2}>update members</div></a>
      <a href="/"><div className={list.logout}>Logout</div></a>
    </div>
    <div className={list.overlapgroup6}>
      <div className={list.rectangle41}></div>
      <div className={list.oip41}></div>
      <div className={list.membersrrect}></div>
      <h1 className={list.title}>TEAM MEMBERS</h1>
      <div className={list.group1}>
        <div className={list.overlapgroup}>
          <div className={list.rectangle48}></div>
          <div className={list.rectangle54}></div>
          <div className={list.name}>Jackie Nkosi</div>
          <div className={list.age30}>Age:30</div>
          <div className={list.position}>Position: CEO</div>
          <img className={list.images11} />
        </div>
        <a href="UpdateEmp" ><div className={list.viewprofile}>View Profile</div></a>      <button className={list.deleteProfile}>delete</button>
      </div>
      <div className={list.overlapgroup1}>
        <div className={list.rectangle48}></div>
        <div className={list.rectangle54}></div>
        <div className={list.name1}>John Doe</div>
        <a href="UpdateEmp"><div className={list.viewprofile1}>View Profile</div></a>        <button className={list.deleteProfile0}>delete</button>
        <div className={list.age301}>Age:45</div>
        <div className={list.positionfinanicialadvisor}>Position: finanicial advisor</div>
        <img className={list.istockphoto}  />
      </div>
      <div className={list.overlapgroup2}>
        <div className={list.rectangle48}></div>
        <div className={list.rectangle54}></div>
        <div className={list.name2}>Fikile Dlamini</div>
        <a href="UpdateEmp"><div className={list.viewprofile1}>View Profile</div></a>        <button className={list.deleteProfile1}>delete</button>
        <div className={list.age302}>Age:38</div>
        <div className={list.positionspokesperson}>Position: Spokesperson</div>
        <img className={list.ditebofarmingsupervisor1} />
      </div>
      <div className={list.overlapgroup3}>
        <div className={list.rectangle48}></div>
        <div className={list.rectangle54}></div>
        <div className={list.tebogodlomo}>Tebogo Dlomo</div>
        <a href="UpdateEmp"><div className={list.viewprofile2}>View Profile</div></a>         <button className={list.deleteProfile2}>delete</button>
        <div className={list.age28}>Age:28</div>
        <div className={list.positionmarketing}>Position: marketing</div>
        <img className={list.tebzamarketingdirector1}   border-radius="5px"  />
      </div>
      <div className={list.group2}>
        <div className={list.overlapgroup}>
          <div className={list.rectangle48}></div>
          <div className={list.rectangle54}></div>
          <div className={list.musamapane}>Musa Mpapane</div>
          <div className={list.age29}>Age:29</div>
          <div className={list.position}>Position: Founder</div>
          <img className={list.img}/>
        </div>
      
      </div>
      <div className={list.group3}>
        <div className={list.overlapgroup}>
          <div className={list.rectangle48}></div>
          <div className={list.rectangle54}></div>
          <div className={list.name3}>Lucia Sovara</div>
          <div className={list.age303}>Age:30</div>
          <a href="UpdateEmp"><div className={list.viewprofile3}>View Profile</div></a>         <input type="submit" className={list.deleteProfile3} value="delete" border="5px"/>
          <div className={list.positionmanager}>Position: Manager</div>
          <img className={list.images1} />
        </div>
        <a href="UpdateEmp"><div className={list.viewprofile4}>View Profile</div></a>           <button className={list.deleteProfile4}> delete </button>
        <a href="UpdateEmp"><div className={list.viewprofile5}>View Profile</div></a>
      </div>
    </div>
  </div>
  
</body>
    )
}
  export default EmployeeList;