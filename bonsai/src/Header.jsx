function Header() {
    return(
        <header>
            <h1 className="logo-name">B<img className="logo" src="./src/assets/images/bonsailogo.webp" alt="logo"></img>nsai</h1>
            <nav className="navigation">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header