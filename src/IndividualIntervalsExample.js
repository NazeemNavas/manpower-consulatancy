import Carousel from 'react-bootstrap/Carousel';
import wall1 from './img/wall1.png';
import wall2 from './img/wall2.png';
function IndividualIntervalsExample() {
  return (
    <Carousel style={{width:'100%'}}>
      <Carousel.Item interval={2000}>
        
        <img src={wall1}  alt='no img' /> 
       
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        
        <img src={wall2}  alt='no img' /> 
       
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;