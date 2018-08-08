import React, { Component } from 'react';

import Sketcher from './Sketcher';
import Controls from './Controls';

class Layout extends Component {

    handleClear() {
        this.sketcher.clear();
    }

    handleThickness(thickness) {
        this.sketcher.weight = parseFloat(thickness);
    }

    handleSmoothing(checked) {
        this.sketcher.smoothing = checked;
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
                                onClear={this.handleClear.bind(this)}
                                onChangeThickness={this.handleThickness.bind(this)}
                                onToggleSmoothing={this.handleSmoothing.bind(this)}
                                onChangeMode={this.handleMode.bind(this)}
                                onChangeOpacity={this.handleOpacity.bind(this)} 
                                onChangeColour={this.handleColorChange.bind(this)}
                                />
                    </div>
                        
                    </div>
                    
                </div>
            </section>
        );
    }

}

export default Layout;
