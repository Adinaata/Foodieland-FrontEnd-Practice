const Hero = () => {
  return (
    <section className="flex justify-center">
      <div className="w-[1280px] flex my-16 ">
        <div className="w-1/2 h-full bg-primary rounded-l-3xl">
          <div className="p-12 gap-8 flex flex-col relative">
            <p className="bg-white w-40 h-11 rounded-3xl flex justify-center items-center font-semibold">
              Hot Recipes
            </p>
            <img
              src="./assets/Badge.png"
              alt="badge"
              width={150}
              className="absolute -right-24"
            />
            <h1 className="text-7xl font-semibold leading-tight">
              Spicy delicious chicken wings
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              odit quos beatae illum delectus fugiat eaque nemo, nisi quasi
            </p>
            <div className="flex gap-4 font-medium">
              <div className="bg-black/5 rounded-3xl h-10 inline-flex items-center">
                <p className="px-4">30 Minutes</p>
              </div>
              <div className="bg-black/5 rounded-3xl h-10 inline-flex items-center">
                <p className="px-4">Chicken</p>
              </div>
            </div>
            <div className="flex mt-12 items-center">
              <div className="rounded-full bg-white h-14 w-14 mr-4 overflow-hidden">
                <img src="./assets/male.png" alt="profile" />
              </div>
              <div className="flex flex-col justify-center ">
                <p className="font-bold">John Smith</p>
                <p className="font-medium text-black/60"> 15 March 2022</p>
              </div>
              <button className="hover:scale-105 hover:bg-secondary/100 duration-300 bg-black w-48 h-14 rounded-xl flex justify-center items-center font-semibold ml-auto text-white">
                View Recipes
              </button>
            </div>
          </div>
        </div>
        <img
          src="./assets/MaskGroup.png"
          alt=""
          className="w-1/2 h-full bg-cover bg-center"
        />
      </div>
    </section>
  );
};

export default Hero;
