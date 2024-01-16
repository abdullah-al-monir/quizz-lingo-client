import { Link } from "react-router-dom";
import MaxWidth from "../../components/MaxWidth";
import { useRef, useState } from "react";

const SignUp = () => {
  const [error, setError] = useState("");
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const photoRef = useRef(null);
  const handleSignUp = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const photo = photoRef.current.value;
    if (password.length < 6) {
      setError("Password should not less than 6 characters");
    }
  };
  return (
    <MaxWidth>
      <div className="hero min-h-[calc(100vh-80px)] max-w-4xl mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-right">
            <h1 className="text-5xl font-bold">Sign Up!</h1>
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
                  <span className="label-text">Name</span>
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Profile Picture Link</span>
                </label>
                <input
                  ref={photoRef}
                  type="text"
                  placeholder="Photo URL"
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
                <label className="label text-sm text-red-600">{error && <p>{error}</p>}</label>
                <label className="label">
                  <p className="">
                    Already have an account?
                    <Link
                      to="/signIn"
                      className="link link-hover text-green-600 hover:text-green-800 font-semibold"
                    >
                      Sign In
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={handleSignUp}
                  className="btn bg-green-600 text-white hover:bg-green-800"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MaxWidth>
  );
};

export default SignUp;
