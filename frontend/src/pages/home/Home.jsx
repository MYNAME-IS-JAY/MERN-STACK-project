import Hero from "../../components/Hero"
import CategoryWrapper from "../category/CategoryWrapper"
import FeaturedSection from "./FeaturedSection"
import LatestRecipre from "./LatestRecipre"
import NewsLetter from "./NewsLetter"
import Aboutsection from "./Aboutsection"
import CompanyLogo from "./CompanyLogo"
import Subscription from "./Subscription"
const Home = () => {
    return (
        <div className="container mx-auto">
              <div className="flex flex-col justify-center items-center w-full py-20">
               <Hero/>
                <CategoryWrapper/>
              </div>

               {/* others component */}
               <FeaturedSection/>
               <LatestRecipre />
               {/* <NewsLetter/> */}
               <Aboutsection/>
               <CompanyLogo/>
               <Subscription/>
            </div>
    )
}

export default Home