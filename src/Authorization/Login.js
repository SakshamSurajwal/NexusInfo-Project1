import React, { useState } from 'react';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();

        setEmail("");
        setPassword("");
    }

  return (
        <div className='login'>
            <h1>Login</h1>
            <div className='box'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email : </label>
                    <input value={email} required
                    onChange={(e)=> setEmail(e.target.value)} placeholder='Enter your email' type="email" className="form-control"id="exampleInputEmail1"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password : </label>
                    <input value={password} required
                    onChange={(e)=> setPassword(e.target.value)}  placeholder='Enter your password' type="password" className="form-control"id="exampleInputPassword1"/>
                </div>
                <button style={{width:'100%',backgroundColor:'purple',color:'white'}} type="submit" className="btn btn-primary">Sign up</button>
            </form>
            </div>
        </div>
  )
}

export default Login
