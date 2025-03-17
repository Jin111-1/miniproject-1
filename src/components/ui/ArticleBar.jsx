import { Input } from "./chad/Input"

function ArticleBar() {
    return (
        <div className="flex items-center justify-center">
            <div className="w-[1200px] h-[80px] flex justify-between rounded-[16px] pt-4 pr-6 pb-4 pl-6  bg-[#EFEEEB]">
                    <ol className="w-[438px] h-[48px] flex gap-2 justify-between items-center font-poppins font-medium text-[16px] leading-[24px] tracking-normal text-[#75716B] " >
                        <li>
                        <a className="w-[113px] h-[48px] flex gap-[10px] rounded-[8px] pt-3 pr-5 pb-3 pl-5 justify-center hover:bg-[#DAD6D1]" href="">Highlight</a>
                        </li>
                        <li>
                        <a className="w-[113px] h-[48px] flex gap-[10px] rounded-[8px] pt-3 pr-5 pb-3 pl-5 justify-center hover:bg-[#DAD6D1]" href="">Cat</a>
                        </li>
                        <li>
                        <a className="w-[113px] h-[48px] flex gap-[10px] rounded-[8px] pt-3 pr-5 pb-3 pl-5 justify-center hover:bg-[#DAD6D1]" href="">Inspiration</a>
                        </li>
                        <li >
                        <a className="w-[113px] h-[48px] flex gap-[10px] rounded-[8px] pt-3 pr-5 pb-3 pl-5 justify-center hover:bg-[#DAD6D1]" href="">General</a>
                        </li>
                    </ol>

                    <div>
                        <Input/>
                    </div>
            </div>
        </div>
    )
}
export default ArticleBar