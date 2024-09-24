import { Provider } from "react-redux";
import appStore from "../utils/reduxStore/appStore";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () => {

    return (
        <Provider store={appStore}>
            <div className="app-layout">
                <Header />
                <Body />
                <Footer />
            </div>
        </Provider>    
    )
}

export default AppLayout;