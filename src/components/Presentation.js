import presentationImg from '../images/presentation.png';
const Presentation = () => {
  return (
    <div id="presentation">
      <h1>Network</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <img className='presentation-img' src={presentationImg} alt="presentation-img" />
    </div>
  )
}

export default Presentation;
