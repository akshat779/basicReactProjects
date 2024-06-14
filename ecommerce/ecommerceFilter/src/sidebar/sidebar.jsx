import "./sidebar.css";
import Category from "./category/category";
import Price from "./price/price";
import Colors from "./colors/colors";

function Sidebar(){

    return(
        <>
        <section className="sidebar">
            <div className="logo-container">
                <h1>🛒</h1>
            </div>
            <Category />
            <Price />
            <Colors />
        </section>
        </>
    )
}


export default Sidebar;