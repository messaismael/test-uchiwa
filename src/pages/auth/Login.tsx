import { Logo } from "components";
import { users } from "data";
import { isNil } from "lodash-es";
import { useLocation, useNavigate } from "react-router-dom";
import AuthService from "services/auth.service";

const LoginPage = () => {
  const name = "Tony";
  const email = "tony@gmail.com";
  const password = "qwerty";
  const navigate = useNavigate();
  let location = useLocation();

  const submit = () => {
    const query = Object.fromEntries(new URLSearchParams(location.search));
    AuthService.processLogin(users[0]);
    navigate(isNil(query.prev) ? "/" : `${query.prev}${location.hash}`);
  };

  const onCancel = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary">
      <div className=" w-6/12 grid grid-cols-2 bg-primary border border-gray-200 rounded-2xl overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="bg-primary-600 bg-opacity-25 flex items-center justify-center gap-3 py-10">
          <Logo /> <span className="text-medium text-2xl">Lab</span>
        </div>
        <form className="space-y-6 text-primary sm:p-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h5>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="input"
              value={name}
              placeholder="name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input"
              value={email}
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="••••••••"
              className="input"
              required
            />
          </div>
          <div className="flex items-start justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                />
              </div>
              <label
                htmlFor="remember"
                className="mx-2 text-sm font-medium dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="ms-auto text-sm  text-primary-600 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <div className="flex justify-end gap-2 w-full">
            <button onClick={onCancel} className="btn btn-dark">
              Cancel
            </button>
            <button onClick={submit} className="btn btn-primary">
              Login
            </button>
          </div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <a
              href="#"
              className="text-primary-600 hover:underline dark:text-blue-500"
            >
              Create account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
