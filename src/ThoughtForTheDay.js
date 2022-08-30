import React from "react"
import get_random_thought from "./imperial_thoughts"


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export default class ThoughtForTheDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thought: "",
            opacity: 1.0
        }
        this.start_loop = true
    }

    componentDidMount() {
        this.write_thought()
    }

    componentWillUnmount() {
        this.start_loop = false
    }

    render() {
        return (
            < p style = {{opacity: this.state.opacity}}>
                {this.state.thought}
            </ p >
        )
    }

    async write_thought() {
        while (this.start_loop) {
            const thought = get_random_thought()
            this.setState({opacity: 0.0})
            await sleep(2000)
            this.setState({
                thought: thought,
                opacity: 1.0
            })
            await sleep(2000)

            const sleep_ms = thought.length * 125
            console.log("Sleep for " + sleep_ms + "ms")
            await sleep(sleep_ms)
        }
    }
}
