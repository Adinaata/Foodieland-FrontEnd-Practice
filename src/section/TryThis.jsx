import { RecipeLists } from "../constants";

const TryThis = () => {
  return (
    <section className="w-full py-20">
      <div className="w-[1280px] flex flex-col mx-auto ">
        <div className="flex py-20">
          <h2 className="w-1/2 text-5xl">
            Try this delicious recipe to make your day
          </h2>
          <p className="text-black/60 w-1/2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
            a consequatur illum delectus atque dolore nemo magnam minus numquam
            assumenda error. Perferendis, ad tempore velit vero laudantium illo
            qui impedit.
          </p>
        </div>
        <div className=" grid grid-cols-4 gap-y-8">
          {RecipeLists.map((item) => (
            <div
              key={item.id}
              className="w-[290px] h-[316px]rounded-3xl overflow-hidde hover:scale-105 duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[290px] h-[200px] mx-auto rounded-2xl"
              />
              <div className="p-6">
                <p className="font-semibold text-lg">{item.name}</p>
                <div className="flex text-sm gap-8 mt-8 font-medium">
                  <p>{item.time}</p>
                  <p>{item.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TryThis;
