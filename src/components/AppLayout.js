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
                <Outlet />
                <Footer />
            </div>
        </Provider>    
    )
}

export default AppLayout;