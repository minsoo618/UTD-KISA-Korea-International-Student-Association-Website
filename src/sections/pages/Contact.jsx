import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { faFacebook, faInstagram, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RiKakaoTalkFill } from 'react-icons/ri';

function Contact() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yjshbvo' ,'template_gc2dmol', form.current, 'KV1ybe4l0vhhgjqnj')
          .then((result) => {
              console.log(result.text);
              
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return (
        
        <section>
            
            <div className="DScontainer">
               

                
               <div className='DStopside'>
                        <div className="DSlogo1">
                         <img className='DSlogoOne' src={require("../../images/logo.jpg")} 
                            /> 
                         </div>
                
                       
             <div className='DSOtherContact'>

                    <div className='ContactInformationHeading'>
                        Contact Information
                    </div>

                     <p2>
                       
                        Facebook  : 
                    

                     <a href="https://www.facebook.com/UTDKISA">
                            
                            
                            UTDKISA
                        </a>
                         
                     <br/> 
                     <br/>
                        Instagram  : 
                     <a href="https://www.instagram.com/utd_kisa">
                             @utd_kisa 
                        </a>
                       
                    <br/>
                    <br/>
                        KakaoTalk  : 
                    <a href="https://open.kakao.com/o/gLYn6HHd">
                            kakaoTalk Open Chat 
                        </a>
                        
                    <br/>
                    <br/>
                     Linked In  :
                    <a href="https://www.linkedin.com/in/jihyung-park-9618a2247/">
                             Jihyung Park
                        </a>
                    <br/>
                    <br/>   
                       Location  :  
                    <a href="https://www.google.com/maps/place/University+of+Texas+at+Dallas/@32.9856974,-96.7546248,17z/data=!4m10!1m2!2m1!1sutd!3m6!1s0x864c21ff895e4aa5:0xd9098b32e9aa1331!8m2!3d32.9856974!4d-96.7502474!15sCgN1dGSSARFwdWJsaWNfdW5pdmVyc2l0eeABAA!16zL20vMDJtdDJu">
                            800 W Campbell Rd, Richardson, TX 75080
                        </a>
                        
                     </p2>
                     

                
                    
                       


                    <div className="DSsocialMedia  social-media-icons-white
                    d-flex  justify-content-evenly">
                        <a href="https://www.facebook.com/UTDKISA">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com/utd_kisa">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://open.kakao.com/o/gLYn6HHd">
                            <RiKakaoTalkFill />
                        </a>
                        <a href="https://www.linkedin.com/in/jihyung-park-9618a2247/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
     

                
            </div>


               </div>

               
               
              
     
               

            <div className='ContactContent'>
                
            <form ref={form } onSubmit={sendEmail}>
           
             
            
                <div className='DSEmailInput'>
                
                    
    
                <div className='DSslogan'>

                If you have any questions or would like to contact us,
                please fill out the form below. <div/> Our KISA executives are ready and waiting to hear from you.   
                </div>
              
              <div className='DSkisaform'>
           
            <div/>
              <div class="form-group">
                      <label for="exampleFormControlInput"></label>
                      
                           <input type="name" 
                           class="form-control" 
                           placeholder="Type Name "
                            name="user_name" required
                           >
                           </input>
                  </div>
              <div class="form-group">
                           <label for="exampleFormControlInput"> </label>
                           <br/>
                                  <input type="email" 
                                class="form-control" 
                                  placeholder="Type Email Adress "
                                  name="user_email" required
                                  >
                                  </input>
              </div>

              <div class="form-group">
                  <label for="exampleFormControlInput"></label>
                    <br/>
                      <input type="Subject" 
                      class="form-control" 
                      placeholder="Type Subject"
                      
                      name="subject" required>
                      </input>
                </div>

              </div>
              
            
                <br/>
            <div className='textarea'>
                    <textarea name="message" placeholder='Enter You message Here!'>
    
                     </textarea>
                     <br/>

                     <button type="submit" class="DSbutton">
                        Submit
                    </button> 

            </div>
             
                
                   
             

              </div>
              </form>

            </div>

            <i class="bi bi-chat-left-text-fill"></i>

               
            </div>
            
           

        </section>
    )
}

export default Contact;