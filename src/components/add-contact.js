var React = require('react');

class EditContactModal extends  React.Component {

	render() {
		return(
			<div id="edit_contact_modal" className="modal">
				<form id="edit_contact_form" onSubmit={this._saveContact}>
					<div className="modal-content">
						<h4>Edit Contact</h4>
						<div className="input-field">
							<i className="mdi-action-account-circle prefix"></i>
							<input id="contact_name" type="text" className="validate" />

						</div>
						<div className="input-field">
							<i className="mdi-communication-phone prefix"></i>
							<input id="contact_phone" type="tel" className="validate"/>

						</div>
						<div className="input-field">
							<i className="mdi-communication-email prefix"></i>
							<input id="contact_email" type="email" className="validate"/>
						</div>
					</div>
					<input id="contact_id" type="hidden" />
					<input id="contact_avatar" type="hidden" />
					<input type="submit" className="hidden-btn"/>
				</form>

				<div className="modal-footer">
					<a onClick={this._saveContact} className="modal-action modal-close waves-effect waves-green btn-flat">Press enter or click here</a>
					<a onClick={this._removeContact} className="red lighten-4 modal-action modal-close waves-effect waves-red btn-flat">delete contact</a>
				</div>
			</div>
		);
		
	}
	
}

module.exports = EditContactModal;