import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
            <p className="text-gray-500 mt-2 max-w-md">
                Sorry, the page you are looking for doesn’t exist or has been moved.
            </p>

            <Link href="/">
                <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Go Back Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;