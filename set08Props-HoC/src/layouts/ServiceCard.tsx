interface ServiceCardProps {
  icon: any;
  text: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, text }) => {
  return (
    <div className="group flex flex-col items-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
      <div className="bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
        {icon}
      </div>
      <h1 className="font-semibold text-lg">{text}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quasi
        debitis dolor reprehenderit ducimus cum dolorem harum repudiandae
        accusantium, eaque nam ex consequuntur saepe aut tenetur atque ea
        praesentium doloribus.
      </p>
      <h3 className="cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out text-backgrounColor">
        Learn More
      </h3>
    </div>
  );
};
