import ArticleCard from "./Common/ArticleCard"

function Articlepage(){
    return(
        <section className="flex items-center justify-center">
            <div className="w-[1200px] h-[1842px] gap-5 border-[10px] border-red-500">
                <ArticleCard imgsrc="\public\img\DSC_1449.JPG" imgalt="cat" title="maewza999" detail="testestetstestestsetsetset"/>
            </div>
        </section>
    )
}
export default Articlepage