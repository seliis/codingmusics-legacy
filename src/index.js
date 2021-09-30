// React
import "./index.scss"
import React from "react"
import ReactDom from "react-dom"

// Component
import Header from "./comp/header"
import Board from "./comp/board"
import Menu from "./comp/menu"
import Home from "./comp/home"

// Variable
const navMenus = [
    {
        ["name"]: "lofi"
    },
    {
        ["name"]: "city"
    },
    {
        ["name"]: "classic"
    }
]

// Application
class Application extends React.Component {
    constructor(p) { super(p)
        this.state = {
            menuState: false,
            presGenre: 0
        }

        // Handler Binding
        this.setGenre = this.setGenre.bind(this)
        this.menuStateFunc = this.menuStateFunc.bind(this)
    }

    setGenre(g) {
        if (this.state.presGenre == g) {
            return null
        }
        this.setState({
            presGenre: g
        })
    }

    getPage() {
        const path = window.location.pathname.slice(1)
        if (path == "") {
            return <Home/>
        }
        if (path == "board") {
            return <Board/>
        }
        window.location.href = "/"
    }

    menuStateFunc() {
        this.setState({
            menuState: !this.state.menuState
        })
    }

    render() {
        return (
            <main>
                <Header
                    menuState={this.state.menuState}
                    menuStateFunc={this.menuStateFunc}
                />
                <section>
                    {
                        this.state.menuState ? <Menu
                            navMenus={navMenus}
                            setGenre={this.setGenre}
                            menuStateFunc={this.menuStateFunc}
                        /> : null
                    }
                    {this.getPage()}
                </section>
            </main>
        )
    }
}

// Exporting
export default Application

// Rendering
ReactDom.render(<Application/>, document.getElementById("root"))