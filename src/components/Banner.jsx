import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const Banner = () => {
    return (
        <AwesomeSlider
            animation="cubeAnimation"
            className="h-[600px]"
        >
            <div className="relative">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Sports Sneakers" className="w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-white text-center px-4">
                        <h2 className="text-4xl font-bold mb-4">Elite Performance Sneakers</h2>
                        <p className="text-xl">Dominate the court with cutting-edge footwear</p>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img src="https://images.unsplash.com/photo-1577212017984-e8c7acd382ba" alt="Sports Jersey" className="w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-white text-center px-4">
                        <h2 className="text-4xl font-bold mb-4">Premium Team Jerseys</h2>
                        <p className="text-xl">Wear your pride with authentic team colors</p>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da" alt="Baseball Equipment" className="w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-white text-center px-4">
                        <h2 className="text-4xl font-bold mb-4">Pro Baseball Gear</h2>
                        <p className="text-xl">Hit home runs with major league quality bats</p>
                    </div>
                </div>
            </div>
            
            <div className="relative">
                <img src="https://images.unsplash.com/photo-1509255929945-586a420363cf" alt="Training Equipment" className="w-full" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-white text-center px-4">
                        <h2 className="text-4xl font-bold mb-4">Pro Training Gear</h2>
                        <p className="text-xl">Level up your game with professional equipment</p>
                    </div>
                </div>
            </div>
        </AwesomeSlider>
    );
};

export default Banner;
