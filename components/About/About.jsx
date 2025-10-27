import React from 'react'

const About = () => {
 return (
  <>
  <section className="section about" id='about'>
  <div className="container position-relative">
    <div className="row">
      <div className="col-12 col-md-8 col-lg-6">
        <div className="d-flex flex-column justify-content-center h-100">
          <h2 className="about-heading">About Megha Yeasmin</h2>
          <p className="about-sub-heading my-2">
            Megha Yeasmin is a dedicated and skilled Physician Assistant with extensive experience in providing high-quality patient care at Medica Superspeciality Hospital, Kolkata. She has developed a strong clinical foundation, assisting physicians in managing complex medical cases and ensuring that patients receive comprehensive and compassionate care.
          </p>
          <p className="about-sub-heading my-2">
            Known for her attentive and empathetic approach, Megha takes the time to understand her patients’ concerns and works collaboratively with the medical team to support personalized treatment plans. She emphasizes the importance of holistic care, addressing both the physical and emotional well-being of her patients.
          </p>
          <p className="about-sub-heading my-2">
            Outside of her professional responsibilities, Megha enjoys engaging in activities that promote wellness and spending meaningful time with family and friends. Her passion for healthcare, combined with her professionalism and compassionate nature, has earned her the respect and trust of both patients and colleagues.
          </p>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <img src="/images/about/my-about.jpg" alt="Megha Yeasmin" className="img-fluid about-img" />
      </div>
    </div>
  </div>
</section>

  </>
 )
}

export default About