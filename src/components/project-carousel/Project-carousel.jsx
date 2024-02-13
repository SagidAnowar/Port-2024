import './project-carousel.scss';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectCarousel = ({ text }) => (

    <div className="carousel-container" >
        <Carousel  class="carousel-main" showStatus={false} showThumbs={false} showArrows={true}>
                <div>
                    <img className="carousel-image" alt="homepage" src={text.image_1} />
                    
                </div>
                <div>
                    <img className="carousel-image" alt="homepage" src={text.image_2} />
                    
                </div>
                <div>
                    <img className="carousel-image" alt="sneakers" src={text.image_3} />
                </div>
        </Carousel>
    </div>

);

export default ProjectCarousel;