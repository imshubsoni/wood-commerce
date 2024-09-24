import { Provider } from "react-redux";
import appStore from "../utils/reduxStore/appStore";
import Body from "./Body";

const AppLayout = () => {

    return (
        <Provider store={appStore}>
            <div className="app-layout">
                <Body />
            </div>
        </Provider>    
    )
}

export default AppLayout;