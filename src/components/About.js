const About = ({ image, title, button }) => {
  return (
    <>
      <div id="about">
        <div className="about-image">
          <img src={image} alt="" />
        </div>
        <div className="about-text">
          <h2>{title}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <button>{button}</button>
        </div>
      </div>
    </>
  )
}

export default About;
