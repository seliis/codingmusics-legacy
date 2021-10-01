import React from "react"

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 onClick={
                    () => {
                        if (window.location.pathname.slice(1) == "") {
                            return null
                        }
                        window.location.href = "/"
                    }
                }>
                    CODING MUSICS 24/7
                </h1>
                <i
                    className={
                        `fas fa-bars ${
                            this.props.menuState ? "open" : "close"
                        }`
                    }
                    onClick={
                        this.props.menuStateFunc
                    }
                />
            </header>
        )
    }
}

export default Header