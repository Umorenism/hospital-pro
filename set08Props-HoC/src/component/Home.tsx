import { Button } from "../layouts/Button";

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-img bg-no-repeat bg-cover opcaity-90">
      <div className="w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering health choices for a vibrant life your trusted..
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, fuga
          corrupti fugiat debitis voluptatem consectetur eos beatae quasi magni
          ex.
        </p>
        {/* <Button title="see services" /> */}
        <div>
          <button className="px-4 py-2 rounded-md hover:bg-orange-500 transition duration-300 text-white bg-green-400">
            see services
          </button>
        </div>
      </div>
    </div>
  );
};
