import React, { Component } from 'react';


class About extends Component {
  render() {
    return (
      <div>
        <section id="about">
           <div className="row">
              <div className="three columns">
                 <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
              </div>
              <div className="nine columns main-col">
                 <h2>About Me</h2>
                 <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                 eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                 voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                 voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                 sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                 Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                 </p>
                 <div className="row">
                    <div className="columns contact-details">
                       <h2>Contact Details</h2>
                       <p className="address">
           						   <span>Alan Fidelino</span><br/>
           						   <span>
                           10 Marlowe Street<br/>
                          Wetherill Park, NSW 2164 Australia
                        </span>
                        <br/>
     						        <span><a href="tel:+612432193240">Call Me</a></span><br/>
                        <span><a href="mailto:alanfidelino@yahoo.com.au">Email Alan</a></span>
     					         </p>
                    </div>
                    <div className="columns download">
                       <p>
                          <a href="#" className="button"><i className="fa fa-download"></i>Download Resume</a>
                       </p>
                    </div>

                 </div>

              </div>

           </div>

        </section>
      </div>
    );
  }
}

export default About;
