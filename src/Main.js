import React,{Component} from 'react';
import okButton from './images/okButton.png';
import bg1 from './images/bg1.jpg';
import bg2 from './images/bg2.jpg';
import bg3 from './images/bg3.jpg';
import Layout from './components/Layout';

class Main extends Component {
    MainButtonClick = (e) => {
        e.preventDefault()
        this.props.pageHandle("goToPage2");
    }
    page2ButtonClick = (e) => {
        e.preventDefault()
        this.props.pageHandle("goToPage3");
    }
    page3ButtonClick = (e) => {
        e.preventDefault()
        this.props.pageHandle("goToMain");
    }
    render(){
        if (this.props.page === "goToMain"){
            var bgStyle = {
                backgroundImage: `url(${bg1})`
              };
            var mainContent = <div className="bg" style={bgStyle}>
                <button className="startButton">
                <img className= "startButtonImage" src={okButton} alt="" onClick={this.MainButtonClick} />
                </button>
            </div>
            return (
                <div className="c1">
                    {mainContent}
                </div>)
        }else if (this.props.page === "goToPage2"){
            var page2 = <div className="bg" style={{backgroundImage:`url(${bg2})`}}>
            <Layout />
            <button className="startButton">
            <img className= "startButtonImage" src={okButton} alt="" onClick={this.page2ButtonClick} />
            </button>
            </div>
            return (
                <div className="c1">
                    {page2}
                </div>)
        }else if (this.props.page === "goToPage3"){
            var page3 = <div className="bg" style={{
                backgroundImage: `url(${bg3})`
            }}>
            <button className="startButton">
            <img className= "startButtonImage" src={okButton} alt="" onClick={this.page3ButtonClick} />
            </button>
            </div>
            return (
                <div className="c1">
                    {page3}
                </div>)
        }
        return (
            <div>
            </div>
        )
    }
}
export default Main;