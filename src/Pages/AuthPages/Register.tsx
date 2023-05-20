import React from "react";

const Register = () => {
  return (
    <section className="h-screen">
      <div className="h-full">
        {/* Left column container with background */}
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>

          {/* Right column container */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            {/* <form> */}
              {/* Sign in section */}
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-lg">Sign in with</p>

                {/* Facebook */}
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  {/* Facebook */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                                     <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1c0-2.29 1.866-4.137 4.168-4.137h3.832v-4h-3.832c-4.418 0-8 3.582-8 8v1h-4v4h4v12h-4v-12h-4v-4h4v-1c0-5.523 4.477-10 10-10h3.832v-4h-3.832c-2.302 0-4.168 1.847-4.168 4.137v1z" />
                  <path fill="none" d="M0 0h24v24H0z" />
                </svg>
              </button>

              {/* Google */}
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                {/* Google */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.64 10.667h-1.498V8.986h-1.997v1.68h-1.498v2.012h1.498v1.68h1.997v-1.68h1.498v-2.012zm-6.83 0V14h3.828c-.214 1.18-1.246 1.748-2.63 1.748-1.51 0-2.747-1.258-2.747-2.808 0-1.552 1.237-2.81 2.747-2.81 1.067 0 1.78.488 2.18.9l1.486-1.413C14.163 8.563 12.992 8 11.184 8c-2.816 0-5.104 2.34-5.104 5.224s2.288 5.224 5.104 5.224c2.437 0 4.04-1.615 4.04-3.8 0-.263-.03-.474-.066-.678H10.81zm9.312-7.228v1.66H21v1.848h-1.498v1.659H18.51V5.867h-1.997V4.19h1.997V2.532h1.504z" />
                </svg>
              </button>

              {/* LinkedIn */}
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                {/* LinkedIn */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.25 0a3.257 3.257 0 00-3.25 3.25v17.5A3.257 3.257 0 003.25 24H20.75A3.257 3.257 0 0024 20.75v-17.5A3.257 3.257 0 0020.75 0H3.25zm2.068 3.25a2.068 2.068 0 11-4.136 0 2.068 2.068 0 014.136 0zm-2.068 17.417v-11.9h-1.52v11.9h1.52zm4.26 0v-7.32h-1.521v7.32h1.52zm-1.52-8.828a.52.52 0 11-1.04 0 .52.52 0 011.04 0zm8.302 8.828h-1.52v-4.877c0-1.95-2.343-1.786-2.343 0v4.877h-1.522v-7.32h1.522v1.038c.65-.615 1.797-.656 2.343 0v-1.038h1.52v7.32z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    {/* </div> */}
   </section>
  );
}

export default Register
