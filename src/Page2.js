import React,{Component} from 'react';
import Layout from './components/Layout';
import bg5 from './images/bg5.png';
import okButton from './images/okButton.png';
import Modal from 'react-modal';
Modal.setAppElement('#root')
const medalStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
class Page2 extends Component {
    constructor() {
        super();
    
        this.state = {
          colorModalIsOpen: false,
          thicknessModalIsOpen: false
        };
    
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openColorModal = () => {
        this.setState({colorModalIsOpen: true});
    }
    openThicknessModal = () =>{
        this.setState({thicknessModalIsOpen: true});
    }
    
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }
    clearButtonClick = () => {
        this.layout.handleClear()
    }
    changeColor(color){
        console.log(color)
        this.layout.handleColorChange(color)
        this.setState({colorModalIsOpen: false});
    }
    changeThickness(thickness){
        this.layout.handleThickness(thickness)
        this.setState({thicknessModalIsOpen:false});
    }
    closeModal() {
        this.setState({colorModalIsOpen: false});
    }
    render(){

        return (
        <div className="bg" >
        <div className="bg" style={{backgroundImage:`url(${bg5})` ,
            opacity: "0.2",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center"
        }}></div>
        
            <Modal
                isOpen={this.state.colorModalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={medalStyles}
                shouldCloseOnOverlayClick={false}
                contentLabel="Color"
            >
                <button style={{
                    borderStyle: "solid",
                    borderWidth: "0.5px", 
                    // backgroundColor: "rgba(ee, 0, 0, 1)",
                    backgroundColor: "#f92a36",
                    height : "200px",
                    width: "200px",
                }} onClick={this.changeColor.bind(this,"#f92a36")}></button>
                <button style={{
                    borderStyle: "solid",
                    borderWidth: "0.5px", 
                    backgroundColor: "#293bf9",
                    height : "200px",
                    width: "200px",
                }} onClick={this.changeColor.bind(this,"#293bf9")}></button>
                <button style={{
                    borderStyle: "solid",
                    borderWidth: "0.5px", 
                    backgroundColor: "#1f2126",
                    height : "200px",
                    width: "200px",
                }} onClick={this.changeColor.bind(this,"#1f2126")}></button>
            </Modal>
            <Modal
                isOpen={this.state.thicknessModalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={medalStyles}
                shouldCloseOnOverlayClick={false}
                contentLabel="thickness"
            >
                <button style={{
                    // borderStyle: "solid",
                    borderWidth: "0.5px", 
                    
                    height : "200px",
                    width: "200px",
                    fontSize: "50px",
                    fontFamily: "Comic Sans MS,arial,helvetica,sans-serif"
                }} onClick={this.changeThickness.bind(this,"5")}>細</button>
                <button style={{
                    borderWidth: "0.5px", 
                    backgroundColor: "rgba(ee, 0, 0, 0.5)", 
                    height : "200px",
                    width: "200px",
                    fontSize: "50px"
                }} onClick={this.changeThickness.bind(this,"7")}>中</button>
                <button style={{
                    borderWidth: "0.5px", 
                    backgroundColor: "rgba(ee, 0, 0, 0.5)",
                    height : "200px",
                    width: "200px",
                    fontSize: "50px"
                }} onClick={this.changeThickness.bind(this,"10")}>粗</button>
            </Modal>
        <Layout ref={ref => this.layout = ref}/>
        <button className="page2clearButton" onClick={this.clearButtonClick}>Clear</button>
        <button className="changeColorButton" onClick={this.openColorModal}>Color</button>
        <button className="changeThicknessButton" onClick={this.openThicknessModal}>Thickness</button>
        <button className="startButton">
        <img className= "startButtonImage" src={okButton} alt="" onClick={this.props.onOkButtonClick} />
        </button>
        
        </div>)
    }
}
export default Page2;