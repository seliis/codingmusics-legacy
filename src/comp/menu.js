import React from "react"

class Menu extends React.Component {
    setNavs(genreIndex) {
        if (window.location.pathname.slice(1) != "board") {
            window.location.href = "/board"
        }
        this.props.setGenre(genreIndex)
        this.props.menuStateFunc()
    }

    goAbout() {
        if (window.location.pathname.slice(1) != "about") {
            window.location.href = "/about"
        }
    }

    getNavs() {
        const map = this.props.navMenus
        const code = []; for(let i=0; i<map.length; i++) {
            const genre = map[i].genre
            code.push(
                <li key={`nav-${i}`} onClick={
                    () => {this.setNavs(i)}
                    }
                >
                    {genre}
                </li>
            )
        }
        code.push(
            <li key="about" className="about" onClick={
                () => {this.goAbout()}
            }>
                About
            </li>
        )
        return code
    }

    render() {
        return (
            <nav>
                <ul>
                    {this.getNavs()}
                </ul>
            </nav>
        )
    }
}

export default Menu