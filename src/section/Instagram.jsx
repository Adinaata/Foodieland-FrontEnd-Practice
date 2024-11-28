const Instagram = () => {
  return (
    <section className="w-full bg-gradient-to-t from-primary to-white py-12">
      <div className="w-[1280px] mx-auto flex flex-col items-center">
        <h2 className="text-5xl font-semibold mb-8">
          Check out @foodieland on Instagram
        </h2>
        <p className="text-center w-[840px] mx-auto text-black/60">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quod
          dolor fuga aperiam, est voluptas sint iste officia sit, magni ex
          quisquam neque similique cum rerum quo ad eius soluta.
        </p>
        <div className="flex gap-8 justify-between my-20">
          <img src="./assets/Post.png" alt="post" />
          <img src="./assets/Post2.png" alt="post" />
          <img src="./assets/Post3.png" alt="post" />
          <img src="./assets/Post4.png" alt="post" />
        </div>
        <button className="font-semibold text-sm text-white bg-black px-6 py-4 rounded-xl hover:scale-105 hover:bg-secondary/100 duration-300 flex gap-4">
          Visit Our Instagram
          <img
            src="./assets/instagram.png"
            alt="ig"
            width={20}
            className="invert"
          />
        </button>
      </div>
    </section>
  );
};

export default Instagram;
