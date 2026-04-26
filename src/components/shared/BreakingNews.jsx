import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    const news = [
        { "id": 1, "title": "Global markets react to new economic policy announcements" },
        { "id": 2, "title": "Major earthquake reported in a coastal region, emergency response underway" },
        { "id": 3, "title": "Tech company unveils next-generation AI assistant update" },
        { "id": 4, "title": "Severe weather warning issued across multiple countries" },
        { "id": 5, "title": "International peace talks show early signs of progress" },
        { "id": 6, "title": "Space agency confirms successful satellite launch mission" },
        { "id": 7, "title": "Healthcare researchers report breakthrough in vaccine development" },
        { "id": 8, "title": "Global sports event breaks viewership records worldwide" }
    ]

    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto'>
            <button className='btn bg-pink-500 text-white'>Latest News</button>
            <Marquee pauseOnHover speed={50}>
                {
                    news.map(n => <span className='mx-10' key={n.id}>{n.title}</span>)
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;