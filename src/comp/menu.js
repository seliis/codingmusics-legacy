import React from "react"

class Menu extends React.Component {
    setNavs(genreIndex) {
        if (window.location.pathname.slice(1) != "board") {
            window.location.href = "/board"
        }
        this.props.setGenre(genreIndex)
        this.props.menuStateFunc()
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