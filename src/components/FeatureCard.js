
const FeatureCard = ({ image, title, price }) => {
  return (
    <>
      <div className='a-box'>
        <div className='s-b-text'>
          <h2>{title}</h2>
          <h3>{price}</h3>
          <ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
            <p>Lorem ipsum dolor sit amet, consectng elit, sed do eiusmod tempor </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, se </p>
          </ul>
          <button className="plan-btn">Select</button>
        </div>
      </div>
    </>
  )
}
export default FeatureCard;
