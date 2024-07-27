import React from "react";

const ServicesData = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsRGKWj-FACNCNvCHafgWRxqbMN19LBohUxGDTTy8hAhhOGR1VOKn2YPxNa0IVFAFO6Cs&usqp=CAU",

    name: "Vagetable pizza",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToBpFPWlod7Jj2rL1ZNVJZYhH4MhlbZ9wJqg&s",

    name: "Chicken pizza",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "300",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/1459715799/photo/pizza-with-ham-and-cheese.jpg?s=612x612&w=0&k=20&c=gpRMVfqy44ag4TkroT8WEerRotlfKheZQu6kQkdhnxQ=",

    name: "Ttkka Fajita pizza",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZbXyOod58TD6H0waoTwOAxmaSw4Kjb0BoRDc6M4bWhznLlc6Ld76NB9jfccneE3PEtI&usqp=CAU",

    name: "Cheese  pizza",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <div className="py-10">
      <div className="container">
        {/* Heading section */}
        <div className="text-center mb-20 py-8">
          <h1 className="text-4xl font-bold font-cursive text-black ">
            Best Pizza For You
          </h1>
        </div>
        {/* services card section */}
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 md:gap-2 place-items-center">
          {ServicesData.map((service) => (
            <div
              className="rounded-2xl bg-white shadow-xl hover:border-2 border-solid border-black hover:bg-primary hover:text-black 
            relative shodow-xl duration-high group w-[290px] h-[300px]"
            >
              <div className="h-[160px] ">
                <img
                  data-aos="fade-up"
                  // data-aos-delay={service.aosDelay}
                  src={service.img}
                  alt={service.name}
                  className="max-w-[250px] rounded-md h-[160px] block mx-auto cursor-pointer 
                  transform -translate-y-13 group-hover:scale-105 group-hover:rotate-6 duration-300"
                />
              </div>
              <div className="p-2 text-center">
                <div className="w-full"></div>
                <h1 className="text-xl font-bold text-black py-2">
                  {service.name}
                </h1>
                <p className="text-gray-500 group-hover:text-gray-800 duration-high text-sm line-clamp-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
