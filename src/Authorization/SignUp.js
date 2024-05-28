import React, { useState } from 'react';

const SignUp = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [phone,setPhone]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();

        setEmail("");
        setName("");
        setPassword("");
        setPhone("");
    }

  return (
        <div className='signup'>
            <h1>Sign up</h1>
            <div className='boxs'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">User Name : </label>
                    <input value={name} required
                    onChange={(e)=> setName(e.target.value)} placeholder='Enter your name' type="text" className="form-control"id="exampleInputEmail1"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email : </label>
                    <input value={email} required
                    onChange={(e)=> setEmail(e.target.value)} placeholder='Enter your email' type="email" className="form-control"id="exampleInputEmail1"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number : </label>
                    <input value={phone} required
                    onChange={(e)=> setPhone(e.target.value)} placeholder='Enter your phone number' type="number" className="form-control"id="exampleInputEmail1"/>
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

export default SignUp
