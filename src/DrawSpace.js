import React,{Component} from 'react';
import Atrament from 'atrament';
class DrawSpace extends Component {
    constructor(props) {
        super(props);

    }
    render(){
        
        return <atrament style={{
            width: '100vw',
				height: '100vh',
				position: 'fixed',
				top: 0,
				left: 0,
				zindex: 2
        }}>
            
        </atrament>

    }
}
export default DrawSpace;