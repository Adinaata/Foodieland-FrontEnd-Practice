import { RecipeLists } from "../constants";

const Recipes = () => {
  return (
    <section className="w-1280px">
      <div className="max-w-[706px] flex flex-col items-center mx-auto">
        <h3 className=" font-semibold text-5xl mb-10">
          Simple and tasty recipes
        </h3>
        <p className="text-black/60 text-center mb-32">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque
          asperiores saepe velit alias adipisci assumenda at quam dolore Lorem
        </p>
        <div className="flex flex-wrap justify-between gap-12">
          <div className="flex gap-8 ">
            {RecipeLists.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="w-[400px] h-[434px] bg-primary rounded-3xl overflow-hidden bg-gradient-to-t from-primary to-white hover:scale-105 duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[368px] h-[250px] mx-auto rounded-2xl"
                />
                <div className="p-6">
                  <p className="font-semibold text-2xl">{item.name}</p>
                  <div className="flex text-sm gap-8 mt-8 font-medium">
                    <p>{item.time}</p>
                    <p>{item.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            {RecipeLists.slice(3, 5).map((item) => (
              <div
                key={item.id}
                className="w-[400px] h-[434px] bg-primary rounded-3xl overflow-hidden bg-gradient-to-t from-primary to-white hover:scale-105 duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[368px] h-[250px] mx-auto rounded-2xl"
                />
                <div className="p-6">
                  <p className="font-semibold text-2xl">{item.name}</p>
                  <div className="flex text-sm gap-8 mt-8 font-medium">
                    <p>{item.time}</p>
                    <p>{item.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            {RecipeLists.slice(5).map((item) => (
              <div
                key={item.id}
                className="w-[400px] h-[434px] bg-primary rounded-3xl overflow-hidden bg-gradient-to-t from-primary to-white hover:scale-105 duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[368px] h-[250px] mx-auto rounded-2xl"
                />
                <div className="p-6">
                  <p className="font-semibold text-2xl">{item.name}</p>
                  <div className="flex text-sm gap-8 mt-8 font-medium">
                    <p>{item.time}</p>
                    <p>{item.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipes;
