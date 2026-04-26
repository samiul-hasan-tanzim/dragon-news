import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export async function generateMetadata({ params }) {
    const { id } = await params
    console.log(id)
    const news = await getNewsDetailsById(id)
    console.log(news)
    return {
        title: news.title,
        description: news.description,
    }
}

const NewsDetailesPage = async ({ params }) => {
    const { id } = await params
    const news = await getNewsDetailsById(id)
    // console.log(news)

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{news.title}</h2>
            </div>
            <figure>
                <Image
                    src={news.image_url} width={200} height={300}
                    alt="Shoes" />
            </figure>
            <p >{news.details}</p>
            <Link href={`/category/${news.category_id}`}><button className='btn '>See Same Category</button></Link>
        </div>
    );
};

export default NewsDetailesPage;