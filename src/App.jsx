import "./App.css";

// import mobileBanner from "./assets/image-header-mobile.jpg";

function App() {
  return (
    <div className="App ">
      <div className="bg-gray-900 h-screen p-12">
        <main className="flex flex-col my-10 bg-[#1C1938] rounded-lg">
          <div className="bg-[url('./assets/image-header-mobile.jpg')] bg-cover h-64  rounded-t-lg">
            <div class="w-full h-full flex bg-purple-900/40 backdrop-brightness-90"></div>
          </div>
          <article className="p-8">
            <div className="text-center">
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
            <div className="flex flex-col justify-center items-center text-white">
              <div className="flex flex-col justify-center items-center mb-6">
                <h2 className="text-2xl font-semibold">10k+</h2>
                <p className="text-xs text-gray-400 font-semibold uppercase">
                  Companies
                </p>
              </div>
              <div className="flex flex-col justify-center items-center mb-6">
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
        </main>
      </div>
    </div>
  );
}

export default App;
