import React from 'react'

const Login = () => {
  return (
    <div>
        <div>
            <h1>Đăng nhập Admin</h1>
            <form>
                <div>
                    <p>Email :</p>
                    <input type="email" name="email" placeholder="Email" required/>
                </div>

                <div>
                    <p>Mật khẩu :</p>
                    <input type="password" name="password" placeholder="Mật khẩu" required />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login