import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import paragJoshi from "../Asset/paragJoshi.png"
import ep from "../Asset/ep (1).jpg"


const CoursesHomePage = () => {

    const coursesRef = useRef(null);

    const handleGetStartedClick = () => {
        // Scroll to the Courses section
        if (coursesRef.current) {
          coursesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
// Dummy logos for demonstration, replace these with your actual logo URLs
const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
    'https://i0.wp.com/www.kalvibhoomi.in/wp-content/uploads/2016/07/Changepond-Walk-in-Drive-Program-Analyst-Trainee-for-B.EB_.TechM_.EM_.TechMCA-graduates-on-2728-July-2016.jpg?ssl=1',
    'https://www.nicepng.com/png/detail/677-6776830_capgemini-logo.png',
    'https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fvisa.png&w=256&q=75',
    'https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fjio_240x80__1604486675523.png&w=256&q=75',
    'https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fflipkart_240x80__1617713965876.png&w=256&q=75',
    'https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fola.png&w=256&q=75',
    'https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Faccenture_colour_240X80__1617795159794.png&w=256&q=75',
    'https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fmicrosoft.png&w=256&q=75',
    'https://www.upgrad.com/_next/image/?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fespndigitalmedia.png&w=256&q=75',

    
  ];

  useEffect(() => {
    const marquee = document.getElementById('marquee');
    const logoWidth = marquee.offsetWidth / logos.length;

    marquee.style.animation = `marquee ${(logoWidth * logos.length) / 100}px linear infinite`;

    return () => {
      // Cleanup on component unmount
      marquee.style.animation = 'none';
    };
  }, []);


  return (
    <div style={{backgroundColor:'white'}}>
       <center>
        <h1 className="display-4 text-primary">Empowering Education, Transforming Lives</h1>
        <p className="lead">Unlock a world of knowledge with our diverse range of courses</p>
        
      </center>

      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" onClick={handleGetStartedClick}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://michiganvirtual.org/wp-content/uploads/2019/07/online-learning-illustration-Converted.png" alt="First slide" style={{ borderRadius: '15px', padding: '5px', width: '80%', height: '400px' }} />
          </div>
         
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>

     

      <div style={{marginTop:'100px'}}> 
        <center>
          <h2 className='text-primary'>Why Choose Our Courses?</h2>
          <p style={{color:'black'}}> Our courses are meticulously designed to not only impart theoretical knowledge but also to provide 
         <br></br> hands-on experience and foster the development of practical, 
         <br></br> real-world skills.</p>
        </center>
      </div>
      <div style={{marginTop:'100px'}}>
        <center><h3 className='text-primary'>Our Top Recruiters</h3></center>
      </div>
      <div>
   
      <div
          id="marquee"
          className="marquee-container"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={``}
              className="marquee-logo"
              style={{ margin: '0 10px', maxWidth: '100px', maxHeight: '50px' }}
            />
          ))}
        </div>
    
    </div>
                                  
      <div style={{marginTop:'100px'}}> 
        <center>
          <h2 className='text-primary'>Ready to Dive In?</h2>
         <p style={{color:'black'}}> Discover the comprehensive spectrum of courses meticulously designed to cater to diverse learning needs, providing you with an extensive array of 
         <br></br> educational opportunities to embark on a transformative journey towards acquiring profound 
         <br></br> knowledge and expertise in your chosen field of study.</p>

          
         
        </center>
      </div>

       <div ref={coursesRef} style={{ marginTop: '50px', display: 'flex',  justifyContent:'space-evenly'}}>
        <div className="card" style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <img className="card-img-top" src="https://www.finoit.com/wp-content/uploads/2022/09/clean-code-java-principles.jpg" alt="Card image cap" style={{ width: '100%', height: '80%' }} />
          <div className="card-body">
            <h5 className="card-title">Java FullStack Development</h5>
            <p className="card-text">Master the art of Java Full Stack Development, from server-side programming with Spring Boot to dynamic front-end design using popular frameworks like Angular or React</p>
            <center> <Link to='/course/1' className="btn btn-primary">Explore Course</Link></center>
          </div>
        </div>

        <div className="card" style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <img className="card-img-top" src="https://www.aegissofttech.com/articles/images/reasons-for-hiring-dot-net-developers.jpg" alt="Card image cap" style={{ width: '100%', height: '80%' }} />
          <div className="card-body">
            <h5 className="card-title">.Net FullStack Development</h5>
            <p className="card-text">Master ASP.NET for robust and scalable server-side programming and delve into dynamic front-end development using popular frameworks like Angular.js or React.js</p>
            <center><Link to='/course/2' className="btn btn-primary">Explore Course</Link></center>
          </div>
        </div>

        <div className="card" style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <img className="card-img-top" src="https://dce0qyjkutl4h.cloudfront.net/wp-content/uploads/2022/08/MERN-stack-blog.jpg" alt="Card image cap" style={{ width: '100%', height: '80%' }} />
          <div className="card-body">
            <h5 className="card-title">MERN Stack Development</h5>
            <p className="card-text">Explore MongoDB, Express.js, React, and Node.js to master the art of Full Stack Development, combining powerful backend technologies with dynamic and scalable frontend frameworks</p>
            <center> <Link to='/course/3' className="btn btn-primary">Explore Course</Link></center>
          </div>
        </div>

        <div className="card" style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <img className="card-img-top" src="https://www.techopedia.com/wp-content/uploads/2023/02/istock-1173805290-1.jpeg" alt="Card image cap" style={{ width: '100%', height: '80%' }} />
          <div className="card-body">
            <h5 className="card-title">Data Science</h5>
            <p className="card-text">Unlock the potential of data through statistical analysis, machine learning, and data visualization techniques, mastering the skills to derive valuable insights and make informed decisions</p>
            <center> <Link to='/course/4' className="btn btn-primary">Explore Course</Link></center>
          </div>
        </div>
      </div>


          <center>
      <div style={{marginTop:'50px'}}> 
      <p style={{color:'black'}}>Explore our full range of courses and embark on a journey towards knowledge and expertise.
          </p>
        
        <Link to='/viewAllCourses' className="btn btn-primary btn-lg">View All Courses</Link> 
        </div>

        </center>



        <div className='container  text-center' style={{marginTop:'100px'}}>
      <center>
        <h2 className='text-primary'> Why Choose Our Courses?</h2>
        <h6 style={{color:'black'}}>
          Our courses offer a transformative learning experience, combining theoretical knowledge with hands-on practice to equip you with real-world skills. 
         <br></br> Don't just take our word for it; hear from our satisfied learners:
        </h6>
        <br></br>
      </center>

      {/* Testimonials Section */}
      <div className="testimonials-container">
        {/* Testimonial 1 */}
        <div className="testimonial">
          <p style={{color:'black'}}>
            "Enrolling in a course here was the best decision of my career. The practical approach and industry-relevant curriculum prepared me for success."
          </p>
          <p className="testimonial-author text-primary" >- John Doe, Software Engineer</p>
        </div>
        {/* Testimonial 2 */}
        <div className="testimonial">
          <p style={{color:'black'}}> 
            "The courses provided me with the skills needed in today's competitive job market. I'm now confident and well-prepared for real-world challenges."
          </p>
          <p className="testimonial-author text-primary">- Jane Smith, Data Scientist</p>
        </div>
      </div>
    </div>




    <div className='container  text-center' style={{marginTop:'100px'}}>
      <center>
        <h2 className='text-primary'>Unique Features of Our Courses</h2>
        <h6 style={{color:'black' }}>
          Our courses go beyond traditional education. Explore the unique features that set us apart:
        </h6>
      </center>
      <br></br>
      {/* Features List */}
      <div className="features-list">
        <div className="feature">
          <h3 className='text-primary'> Industry Partnerships</h3>
          <p style={{color:'black'}}>Leveraging our robust and enduring connections with prominent industry leaders, we aim to furnish you with unparalleled access to <br></br>
            invaluable insights,thereby affording you a comprehensive understanding of the most recent trends and emerging 
          <br></br>opportunities within the dynamic landscape of the business world.</p>
        </div>
        <div className="feature">
          <h3 className='text-primary'>Real-World Projects</h3>
          <p style={{color:'black'}}>Participate actively in a series of hands-on projects meticulously designed to replicate authentic real-world scenarios, 
            <br></br>providing you with a unique and immersive opportunity to not only apply the theoretical 
           <br></br> knowledge you acquire but also to cultivate practical skills.</p>
        </div>
        <div className="feature">
          <h3 className='text-primary'>Certifications</h3>
          <p style={{color:'black'}}>  Upon successful completion of the course, you will have the opportunity to acquire industry-recognized certifications, 
               <br></br>a significant achievement that serves as a tangible validation of your acquired skills and expertise.
          </p>
        </div>
      </div>
    </div>



    <div className='container  text-center'   style={{marginTop:'100px'}}>
      <center>
        <h2 className='text-primary'>Meet Our Instructors</h2>
        <p style={{color:'black'}}>
          Learn from experienced professionals and industry experts who are dedicated to your success.
        </p>
      </center>


      {/* Instructor Cards */}
      <div className="instructor-cards">
        {/* Instructor 1 */}
        <div className="instructor-card">
          <img src={paragJoshi} alt="Instructor 1" style={{width:'300px', height:'350px'}} />
          <h4 style={{color:'black'}}> Parag Joshi</h4>
          <p className='text-primary'>CEO of Hematite Corp</p>
        </div>
        {/* Instructor 2 */}
        <div className="instructor-card">
          <img src="https://assets.weforum.org/sf_account/image/rA_TF_tkRNKjxk_gzlr9UlBXMhuoPZNeRaRO7-ys_xw.jpg" alt="Instructor 2"  style={{width:'300px', height:'350px'}} />
          <h4 style={{color:'black'}}>Sundar pichai</h4>
          <p className='text-primary'>CEO of Google</p>
        </div>
      </div>
    </div>



    <div style={{ marginTop: '100px' }}>
        <center><h3 className='text-primary'>Where our Alumni Work</h3></center>
      </div>
      <div>
        <div
          id="marquee"
          className="marquee-container"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={``}
              className="marquee-logo"
              style={{ margin: '0 10px', maxWidth: '100px', maxHeight: '50px' }}
            />
          ))}
        </div>
      </div>



        <div className="container text-center" style={{marginTop:'100px'}}>
        <div className="row">
          <div className="col-md-6">
            <h4>For Indian Nationals</h4>
            <p>Phone: 1800 210 2024</p>
          </div>
          <div className="col-md-6">
            <h4>For Foreign Nationals</h4>
            <p>Phone: +918045604092</p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="container mt-4 text-center">
        <div className="row">
          <div className="col-md-12">
            <p className="text-muted small">
              Disclaimer: LMS is India’s largest online higher education company, as per monthly visit data and total visits data for the last 28 days received from similar web, as on April 13, 2020.
              <br />
              The programs offered by foreign universities are accredited in their respective countries. They are not UGC recognized.
              <br />
              Deakin University CRICOS Provider Code 00113B.
            </p>
          </div>
        </div>
      </div>





      
    </div>
  );
};

export default CoursesHomePage;
