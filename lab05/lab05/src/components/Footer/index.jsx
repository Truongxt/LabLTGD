import "./index.css";

export default function Footer() {
    return (
        <div className="footer bg-[#1D2228] text-white p-5 md:p-10 flex justify-between mt-10">
            <div className="left w-[500px]">
                <h4 className="text-lg font-semibold">About us</h4>
                <p className="mt-2">Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>

                <div className="send flex mt-4">
                    <input type="text" placeholder="Enter your email" className="bg-white text-black px-2 py-1 rounded-md" />
                    <button className="bg-white text-black ml-4 px-4 py-1 rounded-md">Send</button>
                </div>

                <div className="footerEnd flex items-center justify-around text-sm mt-4 text-[15px]">
                    <img src="./icons8-chef-50.png" alt="Chefify Logo" className="w-8 h-8 bg-white" />
                    <h2 className="text-pink-400 font-bold text-lg">Chefify</h2>
                    <p>2023 Chefify Company</p>
                    <p className="ml-4">Terms of Service | Privacy Policy</p>
                </div>
            </div>

            <div className="right flex justify-between w-[500px]">
                <div className="learn-more-shop">
                    <div className="learn-more">
                        <h4 className="text-lg font-semibold">Learn more</h4>
                        <p className="mt-2">Our cooks</p>
                        <p>See Our features</p>
                        <p>FAQ</p>
                    </div>

                    <div className="shop mt-4">
                        <h4 className="text-lg font-semibold">Shop</h4>
                        <p className="mt-2">Gift Subscription</p>
                        <p>Send Us Feedback</p>
                    </div>
                </div>

                <div className="recipes">
                    <h4 className="text-lg font-semibold">Recipes</h4>
                    <p className="mt-2">What to cook this week</p>
                    <p>Pasta</p>
                    <p>Dinner</p>
                    <p>Healthy</p>
                    <p>Vegetarian</p>
                    <p>Vegan</p>
                    <p>Christmas</p>
                </div>
            </div>
        </div>
    );
}
