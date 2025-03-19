import Menu from "../Menu"
import Sider from "./Sider"
import "./index.css"
export default function Main() {
    return (
        <>
            <div className="main text-center">
                <div className=" flex justify-evenly">
                    <Sider />
                    <Menu />
                </div>
                <h2 className="text-[30px] text-pink">An All Access subscription includes </h2>
                <ul className="flex justify-evenly">
                    <li className="w-50 h-50">
                        <h4>Cooking</h4>
                        <p>Enjoy recipes, advice and inspiration for any occasion. </p>
                    </li>
                    <li className="w-50 h-50">
                        <h4>Wirecutter </h4>
                        <p>Explore independent reviews for thousands of products.  </p>
                    </li>
                    <li className="w-50 h-50">
                        <h4>Games </h4>
                        <p>Unwind with Spelling Bee, Wordle, The Crossword  </p>
                    </li>
                    <li className="w-50 h-50">
                        <h4>The Athletic </h4>
                        <p>Discover in-depth, personalized sports journalism. </p>
                    </li>
                </ul>
                <div className="w-full text-center ">
                    <div className="flex justify-center items-center text-center">   
                        <img src="./chef.png" alt="" className="h-15 w-15" />
                        <span className="text-[20px]">Chefify</span>
                    </div>
                    <h3 className="text-[35px]">Subscribe to Chefify Cooking only </h3>
                    <p>Enjoy thousands of delicious recipes for every taste, plus advice and inspiration daily. </p>
                    <div>
                        <input type="radio" />
                        $2/month (Billed every 4 weeks)
                    </div>
                    <div>$20/year (Billed one annually) </div>
                    <button>Subscribe Now </button>
                    <button>Cancel or Pasue anytime</button>
                </div>
            </div>
        </>
    )
}