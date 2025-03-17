function ArticleCard({imgsrc,imgalt,title,detail}){
    return(
        <div>
            <div className="w-[590px] h-[582px] gap-6 ">
                <div className="w-[590px] h-[360px] rounded-[16px] flex justify-center">
                    <img src={imgsrc} alt={imgalt} className="object-cover w-[100%] h-full rounded-[16px]"/>
                </div>
                
                <div className="w-[100%] h-[150px] flex gap-3 flex-col  justify-center items-start ">  
                <div>
                    tag
                </div>
                <h2 className="font-poppins font-semibold text-[20px] leading-[28px] tracking-normal ">
                    {title}
                </h2>
                <p className="font-poppins font-medium text-[14px] leading-[22px] tracking-normal">
                    {detail}
                </p>
                </div>  

            </div>
        </div>
    )
}
export default ArticleCard