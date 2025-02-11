import AbouUsImg from "../../../../assets/images/about-us.png"
import TargetImg from "../../../../assets/images/target.png"
import MissionImg from "../../../../assets/images/mission.png"
import AchievementImg from "../../../../assets/images/achievement.png"
export const AboutUs = ()=>{
    return(
        <div className="bg-white text-black pb-[100px] mt-[55px] p-4">
            <div className="relative">
            <img src={AbouUsImg} />
            <div className="absolute bottom-4 left-0 right-0">
            <h1 className="text-white text-center font-bold text-2xl uppercase">Who We Are</h1>
            </div>
            </div>
            <div className="py-3 flex flex-col gap-3 text-sm">
                    <h2 className="text-[#4FC2CA] text-xl">About Us</h2>
                    <p className="text-[#161616]">YADRA is a platform specialized in providing customers with the best options in entertainment services and events, for all segments of society in the Kingdom of Saudi Arabia, and we are working to facilitate the way for entertainment event service providers to reach customers.</p>
                    <p className="text-[#161616]">{`We also pay attention to the smallest details, and we seek to provide unique and diverse entertainment experiences that suit the different tastes of individuals in the community, such as: "concert tickets", "entertainment events", "restaurant reservations", "event and arts reservations", and many more.`}</p>
                    <div className="bg-[#F0F0F0] p-3 -mx-3">
                        <div className="flex gap-2 items-center">
                            <img src={TargetImg} />
                            <h2 className="text-[#4FC2CA] text-xl">Our Mission</h2>
                        </div>
                        <p className="text-[#161616] text-sm py-3">We work to provide a variety of entertainment events and events services, which suit different customers through our platform Yedra,</p>
                    </div>
                    <div className="bg-[#F0F0F0] p-3 -mx-3">
                        <div className="flex gap-2 items-center">
                            <img src={MissionImg} />
                            <h2 className="text-[#4FC2CA] text-xl">Our Vision</h2>
                        </div>
                        <p className="text-[#161616] text-sm py-3">We seek to be the first destination in the field of providing entertainment and events services in the Kingdom of Saudi Arabia.</p>
                    </div>
                    <div className="bg-[#F0F0F0] p-3 -mx-3">
                        <div className="flex gap-2 items-center">
                            <img src={AchievementImg} />
                            <h2 className="text-[#4FC2CA] text-xl">Our Goals</h2>
                        </div>
                        <div className="gap-3 flex flex-col text-[#161616] text-sm mt-3">
                        <p>Facilitate communication between entertainment service providers and customers.</p>
                        <p>Providing entertainment services to the community suitable for all age groups, through a unified platform for events and events, in line with Vision 2030 in developing society.</p>
                        <p>One of our most important goals is to achieve customer satisfaction with our services provided in the field of events, by providing distinctive entertainment experiences through the Yadra platform, and exceeding their expectations.</p>
                        <p>Attract the public, by advertising events and events, through the YADRA platform and Yadra social media.</p>
                        <p>Growth and expansion of entertainment and events advertising through the YADRA platform in Saudi Arabia</p>
                        </div>
                    </div>
            </div>
        </div>
    );
}