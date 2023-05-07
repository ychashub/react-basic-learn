import React from "react";

class Test extends React.Component {
    timer = null;
    componentDidMount() {
        console.log("Test componentDidMount");
        this.timer = setInterval(() => {
            console.log("Test componentDidMount 定时器开启");
        }, 1000);
    }

    componentWillUnmount() {
        console.log("Test componentWillUnmount");
        // 清理定时器
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>Test Component</div>
        )
    }
}

class App extends React.Component {
    constructor() {
        super();  // must call super() before this
        console.log("App constructor");
    }

    componentDidMount() {
        console.log("App componentDidMount");
    }

    componentDidUpdate() {
        console.log("App componentDidUpdate");
    }

    state = {
        count: 0,
        flag: true
    }

    clickHandler = (count) => {
        this.setState({
            count: count + 1,
            flag: !this.state.flag
        })
    }

    render() {
        console.log("App render")

        return (
            <div>
                {/* 通过一个数据状态的切换，让 Test 组件销毁重建，就会发生组件卸载 */}
                {this.state.flag ? <Test /> : null}
                this is div
                <button onClick={() => this.clickHandler(this.state.count)}>{this.state.count}: button</button>
            </div >
        )
    }
}

export default App;
