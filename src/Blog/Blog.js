import React from 'react';
import blog1 from '../images/news-46-240-oiwebsite.jpg'
import blog2 from '../images/Responsive-Web-Design.png'
import blog3 from '../images/1_8al0RhBlJgA2P0Br_OQHqQ.jpeg'
import './Blog.css'

const Blog = () => {
    return (
        <div className='p-5'>
            <h1 className='text-center p-5'>Newsletter</h1>
            <div class="Blog">
  <div class="card m-3" style={{width:'300px'}}>
    <img src={blog1}  class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card m-3" style={{width:'300px'}}>
    <img src={blog2}  class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card m-3" style={{width:'300px'}}>
    <img src={blog3} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;