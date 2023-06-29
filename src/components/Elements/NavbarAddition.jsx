const email =localStorage.getItem("email")

const NavbarAddition = () => {
    return (
        <div className={`flex justify-between items-center gap-7 `}>
            <a href="#"><img src="https://freeimghost.net/images/2023/06/15/bell.png" alt="bell.png" border="0" /></a>
            <a href="#"><img src="https://freeimghost.net/images/2023/06/15/Vector-6.png" alt="Vector-6.png"
                    border="0" /></a>
            <a className="flex items-center gap-2 text-title font-semibold" href="#"><img
                    src="https://freeimghost.net/images/2023/06/15/profile-img.jpg.png" alt="profile-img.jpg.png"
                    border="0" />{email}</a>
        </div>
    );
}

export default NavbarAddition;