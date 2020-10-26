
import { createElement, Component, render } from './toy-react'
class MyComponent extends Component {
    render(){
        return <div>
            <p>MyComponent</p>
            {this.children}
        </div>
    }
}

render(<MyComponent id="a" class="b" >
    <div>abc</div>
    <div>2</div>
</MyComponent>, document.body)