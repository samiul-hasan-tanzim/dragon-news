'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const [showPassword, setShowPassword] = useState(false)

    const handelSignUp = async (data) => {
        const { email, name, photo, password } = data
        // console.log(email)
        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        })
        if (error) alert(error.message)
        if (res) alert("Signup Successfull!!!!")
    }
    // console.log(watch('email'))
    // console.log(watch('password'))

    return (
        <div className='container mx-auto min-h-[85vh] flex justify-center items-center flex-col bg-slate-100 shadow'>
            <div>
                <h2>Login Your Account</h2>
                <form onSubmit={handleSubmit(handelSignUp)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" {...register("name", { required: "name fild rew" })} className="input" placeholder="Enter your name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" {...register("email", { required: "email fild rew" })} className="input" placeholder="Enter your Email" />
                    </fieldset>
                    {errors.email && <p>{errors.email.message}</p>}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo url</legend>
                        <input type="text" {...register("photo", { required: "email fild rew" })} className="input" placeholder="Enter your photo url" />
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input type={showPassword ? 'text' : "password"} {...register("password", { required: "Password fild rew" })} className="input" placeholder="Enter your Password" />
                        <span onClick={() => setShowPassword(!showPassword)} className='absolute right-1 top-4 p-1 cursor-pointer'>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        {errors.password && <p>{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn">Login</button>
                </form>
                <p>Dont have an account?<Link href={'/login'} className='text-blue-500'>Register</Link> </p>
            </div>
        </div>
    );
};

export default RegisterPage;