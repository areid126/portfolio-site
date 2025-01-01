const Header = ({scrollTo, about, projects, contact}) => {
    return (
        <section className="header page-section">
            <h1>Header</h1>
            <ul>
                <li onClick={() => scrollTo(about)} >About</li>
                <li onClick={() => scrollTo(projects)} >Projects</li>
                <li onClick={() => scrollTo(contact)} >Contact</li>
            </ul>
        </section>
    );
}

export default Header;