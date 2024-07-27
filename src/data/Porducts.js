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

const ServicesData = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsRGKWj-FACNCNvCHafgWRxqbMN19LBohUxGDTTy8hAhhOGR1VOKn2YPxNa0IVFAFO6Cs&usqp=CAU",

    name: "Espresso",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToBpFPWlod7Jj2rL1ZNVJZYhH4MhlbZ9wJqg&s",

    name: "Americano",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "300",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/1459715799/photo/pizza-with-ham-and-cheese.jpg?s=612x612&w=0&k=20&c=gpRMVfqy44ag4TkroT8WEerRotlfKheZQu6kQkdhnxQ=",

    name: "Cappuccino",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZbXyOod58TD6H0waoTwOAxmaSw4Kjb0BoRDc6M4bWhznLlc6Ld76NB9jfccneE3PEtI&usqp=CAU",

    name: "Bd",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500",
  },
];

const TestimonialData = [
  {
    id: 1,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Sabir ali",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Dipankar kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Satya Narayan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];
