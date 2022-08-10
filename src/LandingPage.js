
import land from './Landing.module.css';


const LandingPage=()=>{
    return(
      <body>

      <div className={land.landingpage}>
        <div className={land.overlapgroup}>
          <div className={land.rectangle34}></div>
          <div className={land.rectangle36}></div>
          <img className={land.chelsea} src="./images/chelsea-pridham-pj1jhhrqd3c-unsplash-1.jpg" alt='chelsea'/>
          <div className={land.rectangle37}></div>
          <a href="./Login"><div className={land.logout}>Logout</div></a>
          <div className={land.sw}>[S-W]</div>
          <div className={land.sparkywines}>SPARKY Wine</div>
          <a href="employeeList.js"><div className={land.staffmembers}>Staff members</div></a>
          <a href="LandingPage.js"><div className={land.aboutus}>About-Us</div></a>
         
        </div>
        <div className={land.flexrow}>
          <div className={land.flexcol}>
            <h1 className={land.title}>OUR SPECIALTIES</h1>
            <div className={land.flexrow1}>
              <div className={land.flexol1}>
                <div className={land.overlapgroup2}>
                  <div className={land.rectangle38}></div>
                  <img className={land.x51m1} src="./images/51mReccSy9L._SX342_QL70_ML2_.jpg" alt='51m'/>
                </div>
                <div className={land.topknoch}>Top knoch</div>
              </div>
              <div className={land.flexcol2}>
                <div className={land.overlapgroup3}>
                  <div className={land.rectangle39}></div>
                  <img className={land.oip21} src="./images/OIP2.jpg" alt='oi'/>
                </div>
                <div className={land.perfect}>Perfect</div>
              </div>
              <div className={land.flexcol3}>
                <img className={land.manstyled1} src="./images/man_styled_chenin_nv.jpg" alt='man' />
                <div className={land.affordable}>Affordable</div>
              </div>
            </div>
          </div>
          <div className={land.overlapgroup1}>
            <div className={land.whyus}>Why us</div>
            <p className={land.weprovide}>. We provide the best wine at an affordable prize</p>
            <div className={land.flexrow2}>
              <div className={land.text1}>.</div>
              <p className={land.reliablechoice}>Reliable wine for any event of choice</p>
            </div>
            <p className={land.winestored}>
              .Wine stored in the best and coolest recommended temperatures ready for you
            </p>
            <div className={land.overlapgroup4}>
              <div className={land.aboutus1}>About Us</div>
            
            </div>
            <p className={land.customersalwaysright}>.Customers always right rule applies</p>
            <p className={land.respecttoour}>
              .Respect to our clients,stuff and to all who use our services
            </p>
            <p className={land.ourfarmsarelegit}>.Our farms are legit and our services are reliable</p>
            <p className={land.ourfarmsarelegit1}>.Trust us we got you</p>
          </div>
        </div>
      </div>
      
      </body>

    )
}
  export default LandingPage;