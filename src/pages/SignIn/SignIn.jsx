import { Link } from "react-router-dom";
import MaxWidth from "../../components/MaxWidth";
import { useRef, useState } from "react";

const SignIn = () => {
  const [error, setError] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleSignIn = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
  };
  return (
    <MaxWidth>
      <div className="hero min-h-screen max-w-4xl mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign In!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  ref={passwordRef}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label text-sm text-red-600">
                  {error && <p>{error}</p>}
                </label>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <label className="label">
                  <p className="">
                    Don't have an account?{" "}
                    <Link
                      to="/signUp"
                      className="link link-hover text-green-600 hover:text-green-800 font-semibold"
                    >
                      Sign Up
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={handleSignIn}
                  className="btn bg-green-600 text-white hover:bg-green-800"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MaxWidth>
  );
};

export default SignIn;
