import AboutUs from "./Rabout";
import Chefs from "./Rchef";


const Gallery = () => {
    const images = ['1.jpg', '5.webp', '10.avif', '4.webp', '6.jpg', '7.webp','9.jpg',  '8.jpg', '11.avif','2.webp',  '3.jpg', '12.webp']
    const half = images.length / 2
    return (
        <div className="flex flex-wrap gap-3 p-20">
            {images.map((image, i) => {
                return <div>

                    {i === half ? <Chefs /> : <img src={image} className="w-96" />}

                </div>
            })}

            <img src='7.webp' className="w-96" />

        </div>
    );
}

export default Gallery;