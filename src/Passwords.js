import pass from './Pass.module.css';
const Passwords=()=>{
    return(

        <body >

        <div class={pass.signuppage}>
            <div class={pass.overlap}>
              <img class={pass.bergin3} src="./images.bergin-bottle-collage-sm-3.png" alt='sm-3' />
              <div class={pass.rect24}></div>
              <div class={pass.rect25}></div>
              <h1 class={pass.sparky}>SPARKY<br />Wines.</h1>
              <div class={pass.creating}>Creating the greatest of dinner moments, <br />Great Wine for everyone..</div>
              <div class={pass.rect26}></div>
              <img class={pass.kelsey2} src="./images/kelsey-knight-udj2td3wksy-unsplash-2.png" alt='kudn2'/>
              <div class={pass.signin}>SIGN-IN</div>
              <div>
                
                <form method="post">
      
                    <table  class={pass.fname}>
      
                       
                        <tr><td class={pass.FFI}>New password:</td><td><input type="password" class={pass.sawi} name="txt_number"/></td></tr>
                        <tr><td class={pass.FGI}>Confirm password:</td><td><input type="password" class={pass.saii} name="txt_number" /></td></tr> 
                        <input type="submit"  class={pass.rect33}  name="sign-up" id="register" value="Submit" />
                        
                   </table>
                </form>
            
               </div>
             </div>
        </div>
          
      </body>

    )
}
  export default Passwords;