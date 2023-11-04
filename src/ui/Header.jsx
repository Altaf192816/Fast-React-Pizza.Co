import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 uppercase border-b sm:px-6 border-stone-200 bg-[--primary-color]">
      <Link to={"/"} className="font-semibold tracking-widest text-white">
        Fast React Pizza co.
      </Link>
      <SearchOrder />
      <UserName/>
    </header>
  );
}

export default Header;
