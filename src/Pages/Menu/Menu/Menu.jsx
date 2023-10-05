import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
// import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import menuImg from "../../../assets/menu/menu-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../Hooks/UseHooks";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../../Shared/Cover/MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory
        items={offered}
        title="Dessert"
        img={dessertImg}
      ></MenuCategory>
      {/* Dessert Menu Itens */}
      <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title="Salad" img={saladImg}></MenuCategory>
      <MenuCategory items={soup} title="Soup" img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
