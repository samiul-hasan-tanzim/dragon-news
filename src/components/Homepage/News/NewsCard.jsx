import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsCard = ({ news }) => {
    // console.log(news)
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            </div>
            <figure>
                <Image
                    src={news.image_url} width={200} height={300}
                    alt="Shoes" />
            </figure>
            <p className=' text-sm truncate'>{news.details}</p>
            <p className='line-clamp-3'>{news.details}</p>
            <Link href={`/news/${news._id}`}>
                <button className='btn'>See Details</button>
            </Link>
        </div>
    );
};

export default NewsCard;