import LeftSideBar from "@/components/Homepage/News/LeftSideBar";
import NewsCard from "@/components/Homepage/News/NewsCard";
import RightSideBar from "@/components/Homepage/News/RightSideBar";
import { getCategory, getNewsByCategoryId } from "@/lib/data";

const NewsByCategorypage = async ({ params }) => {
    const { id } = await params
    // console.log(id)
    const categories = await getCategory()
    const news = await getNewsByCategoryId(id)


    return (
        <div className="container mx-auto grid grid-cols-12 gap-4 my-15">
            <div className=" col-span-3">
                <LeftSideBar categories={categories} activeId={id} />
            </div>
            <div className="font-bold col-span-6">
                <h2 className="font-bold text-lg mb-6">News by Category</h2>
                <div className="space-y-4">
                    {
                        news.length > 0 ? news.map(n => { return <NewsCard className="p-6 rounded-md border" key={n._id} news={n} /> }) : <p>No data</p>
                    }
                </div>
            </div>
            <div className="col-span-3">
                <RightSideBar />
            </div>
        </div>
    );
};

export default NewsByCategorypage;