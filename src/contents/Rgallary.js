

const Gallery = () => {
    const images=['1.jpg','2.webp','3.jpg','4.webp','5.webp','6.jpg','7.jpg','8.jpg','9.jpg','10.avif','11.avif','12.webp']
    return (
        <div className="flex flex-wrap gap-3 p-20"> 
            {images.map(image => {
               return <img src={image} className="max-w-96"/>
            })}


        </div>
    );
}

export default Gallery;