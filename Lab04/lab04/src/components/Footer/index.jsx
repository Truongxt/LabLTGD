import "./index.css"
export default function Footer() {
    return (
        <>
            <div className="footer flex bg-[#1D2228] text-white justify-between">
                <div className="left">
                    <h4>About us</h4>
                    <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
                    <div className="send flex">
                        <input type="text" placeholder="Enter your email" className="bg-white text-black mr-2" />
                        <button className="bg-white text-black">Send</button>
                    </div>
                    <div className="footerEnd flex">
                        <img src="./icons8-chef-50.png" alt="" />
                        <h2 style={{color: "pink"}}>Chefify</h2>
                        <p>2023 Chefify Company</p>
                        <p>Term of Servicel Privacy Policy</p>
                    </div>
                </div>
                <div className="right flex justify-around">
                    <div className="learn-more-shop">
                        <div className="learn-more">
                            <h4>Learn more</h4>
                            <p>Our cooks</p>
                            <p>See Our features</p>
                            <p>FAQ</p>
                        </div>
                        <br />
                        <div className="shop">
                            <h4>Shop</h4>
                            <p>Gift Subscription</p>
                            <p>Send Us Feedback</p>
                        </div>
                    </div>
                    <div className="recipes">
                        <h4>Recipes</h4>
                        <p>What to cook this week</p>
                        <p>Pasta</p>
                        <p>Dinner</p>
                        <p>Healthy</p>
                        <p>Vegetarian</p>
                        <p>Vegan</p>
                        <p>Christmas</p>
                    </div>
                </div>
            </div>
        </>
    )
}