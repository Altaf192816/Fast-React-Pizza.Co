import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
function Menu() {
  //3 using loaderData
const menu =  useLoaderData();
  return <ul className="px-2 divide-y divide-stone-300">{menu.map(pizza=><MenuItem pizza = {pizza} key={pizza.id}/>)}</ul>;
}

//?Data fetching using react-router(fetch as component render)
//1 Creating Loader
export async function loader(){
 const menu = await getMenu();
 return menu;
}

export default Menu;
