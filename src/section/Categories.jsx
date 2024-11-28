import { FoodCategories } from "../constants";

const Categories = () => {
  return (
    <section className="w-[1280px] mx-auto my-32">
      <div className="flex justify-between mb-20 ">
        <p className="text-5xl font-semibold">Categories</p>
        <button className="font-semibold text-sm bg-primary py-2 px-4 rounded-xl hover:bg-blue-100 duration-200">
          View All Categories
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-between">
        {FoodCategories.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-between bg-gradient-to-b ${category.color} rounded-3xl w-44 h-52 border-b ${category.hover} ease-in-out duration-300 cursor-pointer`}
          >
            <div className="text-7xl mt-14 ">{category.emoji}</div>
            <p className=" text-base font-bold mb-5">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
