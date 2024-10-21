import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    //create user
  };
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">Login Here</h2>
      <form
        onSubmit={handleLogin}
        className="w-1/2 mx-auto my-8 border border-red-500 p-5"
      >
        <input
          placeholder="Enter Your Email"
          className="border w-full py-2 px-4"
          type="email"
          name="email"
          id=""
        />
        <br />
        <br />
        <input
          placeholder="Enter Password"
          className="border w-full py-2 px-4"
          type="password"
          name="password"
          id=""
        />
        <br />
        <br />
        <input
          className="btn w-full bg-blue-500 hover:bg-blue-600 text-white font-bold"
          type="submit"
          value="Login"
        />
        <h2 className="mt-3">
          New to this? Please{" "}
          <Link className="text-green-500 font-bold" to="/register">
            Register
          </Link>
        </h2>
      </form>
    </div>
  );
};

export default Login;
