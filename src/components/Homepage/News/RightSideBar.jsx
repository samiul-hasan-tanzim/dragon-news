'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    const handelGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data)
    }
    const handelGithubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        })
        console.log(data, 'data')
    }

    return (
        <div>
            <h2 className='font-bold text-lg mb-4'>Login With</h2>
            <div className='flex flex-col gap-2'>
                <button onClick={handelGoogleSignIn} className='btn border-blue-500 text-blue-500'><FaGoogle />Login With Google </button>
                <button onClick={handelGithubSignIn} className='btn'><FaGithub />Login With GitHub </button>
            </div>
        </div>
    );
};

export default RightSideBar;