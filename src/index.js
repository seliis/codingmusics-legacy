// React
import "./index.scss"
import React from "react"
import ReactDom from "react-dom"

// Component
import Header from "./comp/header"
import Player from "./comp/player"
import Board from "./comp/board"
import Menu from "./comp/menu"
import Home from "./comp/home"

// Variable
const navMenus = [
    {
        ["genre"]: "lofi"
    },
    {
        ["genre"]: "city"
    },
    {
        ["genre"]: "classic"
    }
]

// Application
class Application extends React.Component {
    constructor(p) { super(p)
        this.state = {
            menuState: false,
            presGenre: 0,
            playId: null,
            isHome: true
        }

        // Binding
        this.setPlay = this.setPlay.bind(this)
        this.setGenre = this.setGenre.bind(this)
        this.menuStateFunc = this.menuStateFunc.bind(this)
    }

    setGenre(genre) {
        if (this.state.presGenre == genre) {
            return null
        }
        this.setState({
            presGenre: genre
        })
    }

    setHome(bool) {
        if (this.state.isHome == bool) {
            return null
        }
        this.setState({
            isHome: bool
        })
    }

    setPlay(id) {
        if (id == this.state.playId) {
            return null
        }
        this.setState({
            playId: id
        })
    }

    getPage() {
        const path = window.location.pathname.slice(1)
        if (path == "") {
            this.setHome(true)
            return <Home/>
        }
        if (path == "board") {
            this.setHome(false)
            return <Board
                genre={this.state.presGenre}
                setPlay={this.setPlay}
            />
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
            <div id="app">
                <Header
                    menuState={this.state.menuState}
                    menuStateFunc={this.menuStateFunc}
                />
                <section className={this.state.isHome ? "home" : "board"}>
                    {
                        this.state.menuState ? <Menu
                            navMenus={navMenus}
                            setGenre={this.setGenre}
                            menuStateFunc={this.menuStateFunc}
                        /> : null
                    }
                    {
                        this.getPage()
                    }
                    {
                        this.state.isHome ? null : <Player
                            playId={this.state.playId}
                        />
                    }
                </section>
            </div>
        )
    }
}

// Exporting
export default Application

// Rendering
ReactDom.render(<Application/>, document.getElementById("root"))