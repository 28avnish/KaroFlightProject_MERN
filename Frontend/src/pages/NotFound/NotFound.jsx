import FourOFour from "../../assets/images/404.svg";

const NotFound = () => {
  return (
    <div class="relative z-1 flex min-h-screen flex-col items-center justify-center overflow-hidden p-6">
      <div class="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
        <h1 class="mb-8 text-title-md font-bold text-gray-800  xl:text-title-2xl">
          ERROR
        </h1>

        <img src={FourOFour} alt="404" />

        <p class="mb-6 mt-10 text-base text-gray-700 sm:text-lg">
          We can’t seem to find the page you are looking for!
        </p>

        <a
          href="/"
          class="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 "
        >
          Back to Home Page
        </a>
      </div>
    </div>
  );
};

export default NotFound;
