import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import LoadiingSpinner from "./LoadiingSpinner";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <LoadiingSpinner />}
    
      <Header />

      <div className="overflow-auto">
        <main className="max-w-3xl mx-auto">
          <Outlet />
        </main>
      </div>
        <CartOverview />
    </div>
  );
}

export default AppLayout;
