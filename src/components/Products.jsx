import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

const Products = () => {
  const data = [
    {
      id: 1,
      name: "Double Cheeseburger",
      category: "Vagetable pizza",
      aosDelay: "100",
      rating: "3.5",
      size: "small",
      image:
        "https://i0.wp.com/www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven.png?resize=720%2C480&ssl=1",
      price: "180",
    },
    {
      id: 2,
      name: "Bacon Cheeseburger",
      category: "Vagetable pizza",
      aosDelay: "100",
      rating: "4.5",
      size: "small",
      image:
        "https://i0.wp.com/www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven.png?resize=720%2C480&ssl=1",
      price: "155",
    },
    {
      id: 3,
      name: "Mushroom pizza",
      category: "Vagetable pizza",
      aosDelay: "100",
      rating: "4.0",
      size: "big",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiTxk23LJEHLPb9gvlelnrkrqwVZ-RBNGX8g&s",
      price: "155",
    },
    {
      id: 4,
      name: "Loaded pizza",
      category: "Vagetable pizza",
      aosDelay: "100",
      rating: "3.5",
      size: "small",
      image:
        "https://www.superhealthykids.com/wp-content/uploads/2021/10/best-veggie-pizza-featured-image-square-2.jpg",
      price: "180",
    },
    {
      id: 5,
      name: "Feta & Spinnach",
      category: "Chicken pizza",
      aosDelay: "100",
      rating: "4.5",
      size: "big",
      image:
        "https://static.toiimg.com/thumb/53339084.cms?imgsize=85489&width=800&height=800",
      price: "165",
    },
    {
      id: 6,
      name: "Supreme Pizza",
      category: "Chicken pizza",
      aosDelay: "100",
      rating: "4.0",
      size: "small",
      image:
        "https://www.tasteofhome.com/wp-content/uploads/2019/06/Chicken-Parmesan-Pizza_EXPS_PPMBZ24_195069_DR_11_07_8b.jpg",
      price: "205",
    },
    {
      id: 7,
      name: "Meat Lovers",
      category: "Chicken pizza",
      aosDelay: "100",
      rating: "3.5",
      size: "big",
      image:
        "https://www.allrecipes.com/thmb/qZ7LKGV1_RYDCgYGSgfMn40nmks=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d.jpg",
      price: "180",
    },
    {
      id: 8,
      name: "Cheese Pizza",
      category: "Chicken pizza",
      aosDelay: "100",
      rating: "3.5",
      size: "big",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP0Jrkmd-gYQOcx3ovx_kgNhU4jHzefYQABQ&s",
      price: "165",
    },
    {
      id: 9,
      name: "Kale pizza",
      category: "Ttkka Fajita pizza",
      aosDelay: "100",
      rating: "3.0",
      size: "big",
      image:
        "https://deliciousonadollar.com/wp-content/uploads/2013/12/img_5772.jpg?w=584&h=388",
      price: "165",
    },
    {
      id: 10,
      name: "Ceasar pizza",
      category: "Ttkka Fajita pizza",
      aosDelay: "100",
      rating: "4.5",
      size: "big",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqAF9OqaS5wpL-k1jBAr7rUU49gN29Jn4c2CJdpzKznDQbAdNmDFA30n_gXCoqZfZ0XK4&usqp=CAU",
      price: "155",
    },
    {
      id: 11,
      name: "Loaded pizza",
      category: "Ttkka Fajita pizza",
      aosDelay: "100",
      rating: "3.5",
      size: "small",
      image:
        "https://img-global.cpcdn.com/recipes/80d08a89adcbfb42/680x482cq70/chicken-tikka-pizza-recipe-main-photo.jpg",
      price: "205",
    },
    {
      id: 12,
      name: "Fruit pizza",
      category: "Ttkka Fajita pizza",
      aosDelay: "100",
      rating: "4.5",
      size: "small",
      image:
        "https://140206166.cdn6.editmysite.com/uploads/1/4/0/2/140206166/s589268049491467375_p76_i1_w576.jpeg",
      price: "165",
    },
    {
      id: 13,
      name: "Wings pizza",
      category: "Cheese  pizza",
      aosDelay: "100",
      rating: "5.0",
      size: "small",
      image:
        "https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/08/08/fotografia-de-una-pizza.jpeg",
      price: "165",
    },
    {
      id: 14,
      name: "Baked pizza",
      category: "Cheese  pizza",
      aosDelay: "100",
      rating: "5.0",
      size: "big",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5n-wzqM3GFdcHO43IuwwtZj8LH9E3QF2q7zcn4QlJxw5MBMmZbZ3dh0cZhnz4hMiqtI&usqp=CAU",
      price: "155",
    },
    {
      id: 15,
      name: "Cheese pizza",
      category: "Cheese  pizza",
      aosDelay: "100",
      rating: "4.5",
      size: "small",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS56Doy-cgX33EjAb5HdFFIOn--MdAqEff7sxKkv6-GN9vr2B0WG9NEfAbSlhOT9DpYGEk&usqp=CAU",
      price: "205",
    },
    {
      id: 16,
      name: "Chicken Kabob",
      category: "Cheese  pizza",
      aosDelay: "100",
      rating: "3.5",
      size: "small",
      image:
        "https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/08/08/fotografia-de-una-pizza.jpeg",
      price: "205",
    },
  ];

  const [product, setProduct] = useState(data);
  //   filter by category
  const filterCategory = (category) => {
    setProduct(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   filter by prices
  const filterPrice = (price) => {
    setProduct(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-dark font-bold text-4xl text-center py-8">
          Our All Pizza
        </h1>
        {/* filter by price and category */}
        <div className="flex justify-between flex-col  lg:flex-row">
          {/* filter by category */}
          <div>
            <p className="font-bold text-black text-2xl py-2">Filter Type</p>
            <div className="flex justify-between flex-wrap py-2">
              <button
                className="m-1 cursor-pointer border-dark text-[18px] text-orange-500 hover:text-white
               hover:bg-orange-600 px-2 py-0.5 rounded-md"
                onClick={() => setProduct(data)}
              >
                All Pizza
              </button>
              <button
                className="m-1 cursor-pointer border-dark text-[18px] text-orange-500 hover:text-white
               hover:bg-orange-600 px-2 py-0.5 rounded-md"
                onClick={() => filterCategory("Vagetable pizza")}
              >
                Vagetable Pizza
              </button>
              <button
                className="m-1 cursor-pointer border-dark text-[18px] text-orange-500 hover:text-white
               hover:bg-orange-600 px-2 py-0.5 rounded-md"
                onClick={() => filterCategory("Chicken pizza")}
              >
                Chicken Pizza
              </button>
              <button
                className="m-1 cursor-pointer border-dark text-[18px] text-orange-500 hover:text-white
               hover:bg-orange-600 px-2 py-0.5 rounded-md"
                onClick={() => filterCategory("Ttkka Fajita pizza")}
              >
                Ttkka Fajita Pizza
              </button>
              <button
                className="m-1 cursor-pointer border-dark text-[18px] text-orange-500 hover:text-white
               hover:bg-orange-600 px-2 py-0.5 rounded-md"
                onClick={() => filterCategory("Cheese  pizza")}
              >
                Cheese Pizza
              </button>
            </div>
          </div>
          {/* filter by price */}
          <div>
            <p className="text-2xl font-bold text-black ">Filter Prices</p>
            <div className="flex justify-between max-w-[500px] py-4 w-full gap-4">
              <button
                className="m-1 cursor-pointer border-dark text-[16px] text-orange-500 hover:text-white
               hover:bg-orange-600 px-2 py-0.5 rounded-md"
                onClick={() => filterPrice("155")}
              >
                Low Price
              </button>
              <button
                className="m-1 cursor-pointer border-dark text-[16px] text-orange-500 hover:text-white
               hover:bg-orange-600 px-2 py-0.5 rounded-md"
                onClick={() => filterPrice("165")}
              >
                Low Mid Price
              </button>
              <button
                className="m-1 cursor-pointer border-dark text-[16px] text-orange-500 hover:text-white
               hover:bg-orange-600 px-2 py-0.5 rounded-md"
                onClick={() => filterPrice("180")}
              >
                High Mid Price
              </button>
              <button
                className="m-1 cursor-pointer border-dark text-[16px] text-orange-500 hover:text-white
               hover:bg-orange-600 px-2 py-0.5 rounded-md"
                onClick={() => filterPrice("205")}
              >
                High Price
              </button>
            </div>
          </div>
        </div>
        {/* show all products */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4"
          data-aos="fade-down"
          data-aos-once="true"
        >
          {product.map((items, index) => (
            <div
              key={index}
              className="border w-[300px] h-[410px] shadow-2xl hover:scale-105 duration-300 rounded-lg"
            >
              <img
                data-aos="fade-up"
                src={items.image}
                alt={items.name}
                className="w-full h-[250px] object-cover rounded-t-lg"
              />
              <div
                className="flex justify-between items-center px-4 py-4 "
                data-aos="fade-up"
              >
                <p className="font-bold text-[18px] text-black ">
                  {items.name}
                </p>
                <p className="text-orange-600 text-xl">{items.price}</p>
              </div>
              <div className="flex justify-between items-center px-4 ">
                <span className="font-bold text-black cursor-pointer flex justify-around gap-2 items-center">
                  {items.rating}
                  <FaStar size={17} className="text-orange-500 items-center" />
                </span>
                <span className="text-orange-600 cursor-pointer text-lg font-semibold">
                  {items.size}
                </span>
              </div>
              <div
                className="flex items-center justify-center py-3  "
                data-aos="fade-up"
              >
                <button
                  className="w-[275px] bg-dark h-[30px] rounded-md text-md cursor-pointer
                 hover:bg-black hover:text-white hover:scale-105 duration-300"
                >
                  Order Now{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
