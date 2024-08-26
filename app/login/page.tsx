
import "./login.css"

export default function(){

    return (
        <form action="http://localhost:8080/login" method="POST">
        <div className="container">
          <div className="username">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
    )
}