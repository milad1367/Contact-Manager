import React, { Component } from 'react'


const $ = window.$;

class Test extends Component{
  constructor(props) {
    super(props);
    this.modal = React.createRef();
    this.hide = this.hide.bind(this);
    
}
hide() {
  console.log("mdal",this.modal.current);
  $(this.modal.current).modal('hide');


}
	render() {
		
		return(
			<div>
          <button data-target="modal1" className="btn modal-trigger">Modal</button>

  <div id="modal1" className="modal">
    <div className="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div className="modal-footer">
      <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
      </div>
		);
	
	}
	
};

export default  Test;