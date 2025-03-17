function Button(){
  return(
      <ul className="flex justify-between w-[276px] h-[48px] gap-[8px]">
                 <button className="w-[150px] h-[48px] px-[40px] py-[12px] gap-[6px] rounded-full border font-poppins font-medium text-[14px] leading-[24px]"><li>
                      <a href="">Log in</a>
                  </li>
                  </button> 
                  <button className="w-[150px] h-[48px] px-[40px] py-[12px] gap-[6px] rounded-full bg-[rgba(38,35,30,1)] font-poppins font-medium text-[14px] leading-[24px] text-white">
                  <li>
                      <a href="">Sign up</a>
                  </li>
                  </button>
              </ul>
  )
}
export default Button