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
            const name = map[i].name
            code.push(
                <li onClick={
                    () => {this.setNavs(i)}
                    }
                >
                    {name}
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