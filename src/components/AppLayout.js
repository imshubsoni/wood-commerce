import { Provider } from "react-redux";
import appStore from "../utils/reduxStore/appStore";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {

    return (
        <Provider store={appStore}>
            <div className="app-layout">
                <Header />
                {/* Outlet will be replace by the element which comes from router-dom based on the url -- If its product listing page, or product details page -- */}
                {/* In this way -- we can keep header and footer intact for all the pages and not need to add to every page separately */}
                <Outlet />
                <Footer />
            </div>
        </Provider>    
    )
}

export default AppLayout;