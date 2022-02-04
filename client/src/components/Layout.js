import Footer from './footer';
import Header from './header';
// import "../app.scss"
const Layout = (props) => {
    // const { L, account, alerts } = useGlobal()
    return (<>
        <Header/>
        <div className="container container-xl">
            {props.children}
        </div>
        <Footer/>
    </>);
}

export default Layout;