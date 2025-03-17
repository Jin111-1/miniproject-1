import { Linkedin , Github }from 'lucide-react';


function Footer(){
    return(
        <footer className=" flex justify-center ">
            <section className='w-[1440px] h-[144px] flex justify-between pt-[60px] pr-[120px] pb-[60px] pl-[120px]'>
            <div className="w-[226px] h-[24px] flex gap-6 justify-between">
                <p className="font-poppins font-medium text-[16px] leading-[24px] tracking-normal ">Get in touch</p>
                <div className="w-[104px] h-[24px] flex gap-4">
                    <a href=""> <Linkedin /></a> 
                    <a href=""><Github /></a>
                    <a href="">google</a>
                </div>
            </div>
            <div>
                 <a href="" className='font-poppins font-medium text-[16px] leading-[24px] tracking-normal underline decoration-solid decoration-[0px] decoration-offset-[0px]'>Home page</a>
            </div>
            </section>
        </footer>
    )
}
export default Footer