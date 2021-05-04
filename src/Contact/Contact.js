import React from 'react';

const Contact = () => {
    return (
        <div>
            <div id="contact" class="container">
  <h3 class="text-center">Contact</h3>
  <p class="text-center"><em>If you want share about anything</em></p>
  

  <div class="row">
    <div class="col-md-4">
      <p>Drop a note.</p>
      <p><span class="glyphicon glyphicon-map-marker"></span>Bandung,Indonesia</p>
      <p><span class="glyphicon glyphicon-phone"></span>Phone: +62 83820327341</p>
      <p><span class="glyphicon glyphicon-envelope"></span>Email: agung_immanuel@yahoo.com</p>
    </div>
    <div class="col-md-8">
      <div class="row">
        <div class="col-sm-6 form-group">
          <input class="form-control m-2" id="name" name="name" placeholder="Name" type="text" required/>
        </div>
        <div class="col-sm-6 form-group">
          <input class="form-control m-2" id="email" name="email" placeholder="Email" type="email" required/>
        </div>
      </div>
      <textarea class="form-control m-2" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
      <br/>
      <div class="row">
        <div class="col-md-12 justify-content-end form-group">
          <button class="btn mb-4 " type="submit">Send</button>
        </div>
      </div>
    </div>
  </div>
  
        </div>
        <p className="p-3 text-center"><small>copy allright reserve nizam uddin 2021</small></p>
        {/* <div style={{backgroundColor:'black', color:'white', textAlign:'center',margin:'0'}}>
            <p className="p-3"><small>lkfslflklkjlk</small></p>
        </div> */}
        </div>
    );
};

export default Contact;