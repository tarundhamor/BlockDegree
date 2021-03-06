import React, { Component } from "react";
import axios from "axios";
import Alert from "sweetalert-react";

class ForceSync extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    axios
      .get("/api/forceSyncEvents")
      .then(resp => {
        console.log(resp.data);
        if (resp.data.status === true) {
          this.setState({
            showSuccess: true,
            successMsg: "Re-Synced the Events",
            eventType: null,
            templateStatus: "",
            inputFile: "",
            inputFileName: "",
            templateName: "",
            templatePurpose: ""
          });
        } else {
          this.setState({
            showError: true,
            errorMsg: resp.data.error
          });
        }
      })
      .catch(err => {
        console.log("error: ", err);
        this.setState({
          showError: true,
          errorMsg: err
        });
      });
  }

  render() {
    return (
      <div className="card">
        <div className="header">
          <h4>Force Sync Events</h4>
        </div>

        <div className="content">
          <form className="form-horizontal soft-input">
            <div className="form-group">
              <label className="col-md-3"></label>
              <div className="col-md-9">
                <button
                  type="button"
                  onClick={this.handleSubmit}
                  className="right btn btn-fill btn-info"
                >
                  Sync the Events
                </button>
              </div>
            </div>
          </form>
        </div>

        <Alert
          title="Success"
          show={this.state.showSuccess}
          text={this.state.successMsg}
          type="success"
          onConfirm={() => {
            this.setState({ showSuccess: false, successMsg: "success" });
            this.props.fetchActiveJobs();
          }}
        />
        <Alert
          title="Error"
          show={this.state.showError}
          text={this.state.errorMsg}
          type="error"
          onConfirm={() =>
            this.setState({ showError: false, errorMsg: "error" })
          }
        />
      </div>
    );
  }
}

export default ForceSync;
