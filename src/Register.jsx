import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase.init";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    //create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">Register Here</h2>
      <form
        onSubmit={handleRegister}
        className="w-1/2 mx-auto my-8 border border-yellow-500 p-5"
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
          className="btn w-full bg-green-500 hover:bg-green-600 text-white font-bold"
          type="submit"
          value="Register"
        />
        <h2 className="mt-3">
          Already have an account ? Please{" "}
          <Link className="text-blue-500 font-bold" to="/login">
            Login
          </Link>
        </h2>
      </form>
    </div>
  );
};

export default Register;
