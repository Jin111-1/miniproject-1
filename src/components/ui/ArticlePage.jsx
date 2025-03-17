import ArticleCard from "./Common/ArticleCard"
import ArticleBar from "./ArticleBar"

function Articlepage(){
    return(
        <section className="flex-col items-center justify-center mt-[50px] ">
            <ArticleBar/>
            <div className="flex justify-center">
            <div className="w-[1200px] gap-5 grid grid-cols-2 mt-[50px]">
            <ArticleCard imgsrc="\public\img\DSC_1449.JPG" imgalt="cat" title="maewza999" detail="testestetstestestsetsetset"/>
            <ArticleCard imgsrc="\public\img\DSC_1449.JPG" imgalt="cat" title="maewza999" detail="testestetstestestsetsetset"/>
            <ArticleCard imgsrc="\public\img\DSC_1449.JPG" imgalt="cat" title="maewza999" detail="testestetstestestsetsetset"/>
            <ArticleCard imgsrc="\public\img\DSC_1449.JPG" imgalt="cat" title="maewza999" detail="testestetstestestsetsetset"/>
            <ArticleCard imgsrc="\public\img\DSC_1449.JPG" imgalt="cat" title="maewza999" detail="testestetstestestsetsetset"/>
            <ArticleCard imgsrc="\public\img\DSC_1449.JPG" imgalt="cat" title="maewza999" detail="testestetstestestsetsetset"/>
            </div>
            </div>
        </section>
    )
}
export default Articlepage