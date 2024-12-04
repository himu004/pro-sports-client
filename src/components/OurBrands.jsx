import Marquee from 'react-fast-marquee'

const OurBrands = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-3">Our Leading Brands</h2>
                <p className="text-xl text-gray-600">Discover the {`world's`} top athletic brands</p>
            </div>
            <div className="relative">
                <div className="absolute left-0 w-40 h-full transparent z-10"></div>
                <div className="absolute right-0 w-40 h-full transparent z-10"></div>
                <Marquee
                    direction="right"
                    speed={40}
                    gradient={false}
                    className="py-8"
                >
                    
                    <div className="flex items-center justify-center mx-12">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png" alt="Adidas" className="h-10" />
                    </div>

                    <div className="flex items-center justify-center mx-12">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Nike_Logo.svg/1200px-Nike_Logo.svg.png" alt="Nike" className="h-12" />
                    </div>

                    <div className="flex items-center justify-center mx-12">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Puma_Logo.svg/2560px-Puma_Logo.svg.png" alt="Puma" className="h-10" />
                    </div>

                    <div className="flex items-center justify-center mx-12">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Under_armour_logo.svg/2560px-Under_armour_logo.svg.png" alt="Under Armour" className="h-8" />
                    </div>

                    <div className="flex items-center justify-center mx-12">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/New_Balance_logo.svg/2560px-New_Balance_logo.svg.png" alt="New Balance" className="h-8" />
                    </div>

                    <div className="flex items-center justify-center mx-12">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Reebok_delta_logo.svg/2560px-Reebok_delta_logo.svg.png" alt="Reebok" className="h-8" />
                    </div>

                </Marquee>
            </div>
        </div>
    )
}

export default OurBrands
