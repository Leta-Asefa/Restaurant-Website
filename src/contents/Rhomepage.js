import { Typewriter } from 'react-simple-typewriter';

const HomePage = () => {

    return (
        <div className="mx-auto mb-60  text-white font-sans relative z-50 flex justify-center items-center mt-12 p-2">

            <div className='space-y-44'>
                <p className="text-center text-8xl  font-bold font-handwriting2">ABC Food <span className="text-red-500">&</span> Restaurant</p>
                <div>
                    <p className="text-center text-4xl font-semibold ">Delicious Moments, Memorable Tastes</p>
                    <div className='text-center text-3xl font-semibold'> We Offer
                        <Typewriter
                            words={["  Delicious Specialty Dishes ", " Fresh, Local Ingredients", " Memorable Dining Experiences", " Seasonal and Unique Menus"]}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                </div>

            </div>



        </div>
    );
}

export default HomePage;