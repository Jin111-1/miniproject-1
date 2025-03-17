function HeroSection(){
    return (
        <section className="flex justify-center mt-[50px]">
        <div className="w-[1200px] h-[529px] gap-[60px] flex justify-center item-center text-[#75716B]">
            
            <div className="w-[247px] h-[276px] gap-[24px]  ">
                <h1 className="font-poppins font-semibold text-[52px] leading-[60px] tracking-normal text-right">
                Stay Informed, Stay Inspired
                </h1>
                <br />
                <p className="font-poppins font-medium text-[16px] leading-[24px] tracking-normal text-right">
                Discover a World of Knowledge at Your Fingertips. Your Daily Dose of Inspiration and Information.
                </p>
            </div>
            
            <div className="w-[386px] h-[529px] rounded-[16px]">
                <img src="\public\img\highlight.jpg" class="object-cover w-full h-full rounded-[16px]" alt="profile" />
            </div>
            
            <div className="w-[347px] h-[284px] gap-[12px]">
                <p className="font-poppins font-medium text-[12px] leading-[20px] tracking-normal">-Author</p>
                <h3 className="font-poppins font-semibold text-[24px] leading-[32px] tracking-normal">Thompson P.</h3>
                <p className="font-poppins font-medium text-[16px] leading-[24px] tracking-normal">I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness. 

                When i’m not writing, I spends time volunteering at my local animal shelter, helping cats find loving homes.</p>
            </div>
        </div>
        </section>
    )
}
export default HeroSection