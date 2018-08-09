import React, { Component } from 'react';

import Sketcher from './Sketcher';
import Controls from './Controls';

class Layout extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            thickness: "2",
            colour : "#606060"
        };
      }
    componentDidMount(){
        this.sketcher.smoothing = false
        this.sketcher.adaptiveStroke = false
        this.sketcher.weight = parseFloat(this.state.thickness)
        this.sketcher.colour = this.state.colour
        
    }

    handleClear() {
        this.sketcher.clear();
    }

    handleThickness(thickness) {
        this.sketcher.weight = parseFloat(thickness);
        this.setState((prevState , props) => {
            return {thickness: thickness};
          });
    }

    handleSmoothing(checked) {
        this.sketcher.smoothing = checked;
    }
    handleAdaptiveStroke(checked) {
        this.sketcher.adaptiveStroke = checked;
    }

    handleMode(mode) {
        this.sketcher.mode = mode;
    }

    handleOpacity(opacity) {
        this.sketcher.opacity = parseFloat(opacity);
    }
    
    handleColorChange(color){
        console.log(color)
        this.sketcher.colour = color
        this.setState((prevState , props) => {
            return {colour : color}
        })
    }
    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="Sketcher">
                            <Sketcher ref={ref => this.sketcher = ref} > 
                            
                            </ Sketcher>
                        </div>
                        
                        <div className="column is-one-quarter">
                            <Controls
                                // thickness={this.state.thickness}
                                {...this.state}
                                onClear={this.handleClear.bind(this)}
                                onChangeThickness={this.handleThickness.bind(this)}
                                onToggleSmoothing={this.handleSmoothing.bind(this)}
                                onChangeMode={this.handleMode.bind(this)}
                                onChangeOpacity={this.handleOpacity.bind(this)} 
                                onChangeColour={this.handleColorChange.bind(this)}
                                onChangeAdaptiveStroke={this.handleAdaptiveStroke.bind(this)}
                                />
                    </div>
                        
                    </div>
                    
                </div>
            </section>
        );
    }

}

export default Layout;
