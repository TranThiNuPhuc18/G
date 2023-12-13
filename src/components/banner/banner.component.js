import 'bootstrap/js/src/carousel.js';
import './banner.component.scss';

const BannerComponent = () => {
    return (
        <div className="container-fluid">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://s3.ca-central-1.amazonaws.com/shopizer-lightsail/files/DEFAULT/slider2.jpg"
                            className="d-block w-100 carousel-item-img" alt="12" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://th.bing.com/th/id/OIP.4oQB0n3oEwA443tVtEemfQHaE8?pid=ImgDet&w=204&h=136&c=7&dpr=1.25"
                            className="d-block w-100 carousel-item-img" alt="12" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.pinimg.com/originals/9a/26/75/9a26751cad924a10af2a7185960fdf10.jpg"
                            className="d-block w-100 carousel-item-img" alt="12" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default BannerComponent;