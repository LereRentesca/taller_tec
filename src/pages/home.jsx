import Carousel from "../components/carousel";
import "./styles/home.css"

function Home(){
    return (
        <div className="home">
            <h1>¡Bienvenido a la tienda online!</h1>
            <div className="container">
                <Carousel></Carousel>
            </div>
            <div className="texto container">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ullamcorper odio. Praesent vitae diam ut elit efficitur luctus at
                 non nulla. Sed et eleifend felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget magna tempor, rutrum libero 
                 non, ullamcorper velit. Suspendisse potenti. Ut blandit est ut dolor finibus, in vehicula libero varius. In elementum, diam at 
                 vestibulum convallis, lectus sem auctor nisi, nec molestie ante purus id velit.</p>
            </div>
        </div>
    );
}
export default Home;