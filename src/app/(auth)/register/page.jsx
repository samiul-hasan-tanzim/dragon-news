'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const handelLogin = (data) => {
        console.log(data)
        // e.preventDefault()
        // const email = e.target.email.value
        // const password = e.target.password.value
        // console.log(email, password)
    }
    console.log(watch('email'))
    console.log(watch('password'))

    return (
        <div>
            <h2>Login Your Account</h2>
            <form onSubmit={handleSubmit(handelLogin)}>
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
                    <input type="email" {...register("photo", { required: "email fild rew" })} className="input" placeholder="Enter your photo url" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Password</legend>
                    <input type="password" {...register("password", { required: "Password fild rew" })} className="input" placeholder="Enter your Password" />
                </fieldset>
                {errors.password && <p>{errors.password.message}</p>}
                <button className="btn">Login</button>
            </form>
            <p>Don't have an account?<Link href={'/login'} className='text-blue-500'>Register</Link> </p>
        </div>
    );
};

export default RegisterPage;