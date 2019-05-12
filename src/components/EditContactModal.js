
import React from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import $ from 'jquery';


const MODAL_QUERY = gql`
  query {
      showEditModal @client
  }
`;
const EditContactModal = () => (
  <Query query={MODAL_QUERY}>
     {
         ({ data }) => data.showEditModal && (
            
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    ...
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>
         )
     }
  </Query>
);
export default EditContactModal