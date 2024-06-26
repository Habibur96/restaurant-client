import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/UseMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section className="mb-12 ">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>

      <button className="btn btn-outline border-0 border-b-4">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
