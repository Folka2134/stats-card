import "./App.css";

// import mobileBanner from "./assets/image-header-mobile.jpg";

function App() {
  return (
    <div className="App ">
      <div className="bg-gray-900 h-screen p-12">
        <main className="flex flex-col lg:flex-row my-10 rounded-lg">
          <div className="bg-[url('./assets/image-header-mobile.jpg')] bg-cover h-64 rounded-t-lg lg:hidden">
            <div class="w-full h-full flex bg-purple-900/40 backdrop-brightness-90"></div>
          </div>
          <article className="bg-[#1C1938] p-8 lg:p-14 rounded-lg">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold text-white">
                Get <span className="text-[#A55AD7]">insights</span> that help
                your business grow.
              </h1>
              <p className="text-gray-300 py-6">
                Discover the benefits of data analytics and make better
                descisions regarding revenue, customer exerience, and overall
                efficieny
              </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center lg:flex lg:justify-evenly lg:mt-10 text-white">
              <div className="flex flex-col justify-center items-center mb-6 lg:mb-0">
                <h2 className="text-2xl font-semibold">10k+</h2>
                <p className="text-xs text-gray-400 font-semibold uppercase">
                  Companies
                </p>
              </div>
              <div className="flex flex-col justify-center items-center mb-6 lg:mb-0">
                <h2 className="text-2xl font-semibold">314</h2>
                <p className="text-xs text-gray-400 font-semibold uppercase">
                  Templates
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold">12M+</h2>
                <p className="text-xs text-gray-400 font-semibold uppercase">
                  Queries
                </p>
              </div>
            </div>
          </article>
          <div className="bg-[url('./assets/image-header-desktop.jpg')] bg-cover w-full rounded-r-lg hidden lg:flex">
            <div class="w-full h-full flex bg-purple-900/40 backdrop-brightness-90"></div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
