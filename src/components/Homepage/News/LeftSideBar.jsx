import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ categories, activeId }) => {
    return (
        <div>
            <h2 className="font-bold text-lg">All Category</h2>
            <ul className="flex flex-col gap-3 mt-5">
                {
                    categories.news_category.map(categorie => <li key={categorie.category_id} className={`${activeId === categorie.category_id && 'bg-slate-100'} p-2 rounded-md font-bold text-center text-md`}><Link className='block p-2' href={`/category/${categorie.category_id}`}>{categorie.category_name}</Link></li>)
                }
            </ul>
        </div>
    );
};

export default LeftSideBar;