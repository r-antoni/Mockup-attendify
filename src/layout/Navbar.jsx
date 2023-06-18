import NavbarAddition from "../components/Elements/NavbarAddition";
const Navbar = (props) => {
    const {visibility} = props
    return (
        <div className="flex justify-between items-center w-screen bg-white h-20 px-12">
            <nav>
                <a className="font-semibold text-title text-3xl" href="/">Attendify</a>
            </nav>
            <div className={`${visibility}`}>
                <NavbarAddition />
            </div>
        </div>
    );
}

export default Navbar;