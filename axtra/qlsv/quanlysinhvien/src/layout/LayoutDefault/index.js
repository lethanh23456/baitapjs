import { Link, NavLink , Outlet} from "react-router-dom";
import "./LayoutDefault.scss";
function LayoutDefault() {
    return (
        <>
            <div className ="layout-default">
                <header className="layout-default__header">
                    <div className="layout-default__logo">
                    <Link to ="/"> Home</Link>
                    </div>
                </header>
                <main className="layout-default__main">
                    <Outlet />
                </main>
                <footer className="layout-default__footer">
                    footer
                </footer>
            </div>
        </>
    );
}

export default LayoutDefault;