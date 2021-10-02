import React from "react"

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 onClick={
                    () => {
                        if (this.props.menuState) {
                            this.props.menuStateFunc()
                        }
                        if (window.location.pathname.slice(1) == "") {
                            return null
                        }
                        window.location.href = "/"
                    }
                }>
                    CODING MUSICS
                </h1>
                <i
                    className={
                        `fas fa-bars ${
                            this.props.menuState ? "open" : null
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