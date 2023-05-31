import heart from "../Assets/Card/eye.jpg";

const footer = () => {
  return (
    <div className=" w-full  mx-auto">
      <div className="bg-[#F5F5F5] py-12">
        <div className="bg-gray-900">
          <div className="bg-neutral-200 text-center text-white dark:bg-neutral-600 dark:text-neutral-200">
            <div className="container p-6">
              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
                <div className="mb-6 lg:mb-0">
                  <img src={heart} className="w-full rounded-md shadow-lg" />
                </div>
                <div className="mb-6 lg:mb-0">
                  <img src={heart} className="w-full rounded-md shadow-lg" />
                </div>
                <div className="mb-6 lg:mb-0">
                  <img src={heart} className="w-full rounded-md shadow-lg" />
                </div>
                <div className="mb-6 lg:mb-0">
                  <img src={heart} className="w-full rounded-md shadow-lg" />
                </div>
                <div className="mb-6 lg:mb-0">
                  <img src={heart} className="w-full rounded-md shadow-lg" />
                </div>
                <div className="mb-6 lg:mb-0">
                  <img src={heart} className="w-full rounded-md shadow-lg" />
                </div>
              </div>
            </div>

            <div className="text-right  pr-48">
              <span
                href="#_"
                className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
              >
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  MEET THE TEAM{" "}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
