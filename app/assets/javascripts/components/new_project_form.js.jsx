var NewProjectForm = React.createClass({


  getInitialState: function(){
    return {name: "", description: "", project_cost: "", formErrors: {}};
  },

  resetState: function(){
    this.setState({name: "", description: "", project_cost: "", formErrors: {}});
  },

  handleValidationError: function(formErrorObj){
    this.setState({formErrors: formErrorObj});
  },

  newProjectSubmit: function(e){
    e.preventDefault();

    this.props.parentProjectSubmit(
      {project: {name: this.state.name, description: this.state.description, project_cost: this.state.project_cost}},
      this.resetState,
      this.handleValidationError
    );
  },

  handleNameChange: function(e){
    this.setState({name: e.target.value});
  },

  handleDescriptionChange: function(e){
    this.setState({description: e.target.value});
  },

  handleProjectCostChange: function(e){
    this.setState({project_cost: e.target.value});
  },

  renderFieldErrors: function(attribute){
    if(this.state.formErrors[attribute]){
      return(
        this.state.formErrors[attribute].map(function(error, i){
          return(
            <span key={i} className="help-block">
              {error}
            </span>
          );
        })
      );
    }
    else{
      return "";
    }
  },


  renderProjectNameField: function(){

    var formGroupClass = this.state.formErrors["name"] ? "form-group has-error" : "form-group"

    return(

      <div className='row'>

        <div className='col-sm-4'>

          <div className= {formGroupClass}>

            <input
              name="project[name]"
              type="string"
              placeholder="Project Name"
              value={this.state.name}
              onChange={this.handleNameChange}
              className="string form-control"
            />

            {this.renderFieldErrors("name")}

          </div>

        </div>

      </div>
    );
  },

  renderProjectDescriptionField: function(){

    var formGroupClass = this.state.formErrors["description"] ? "form-group has-error" : "form-group"

    return(
      <div className='row'>

        <div className='col-sm-4'>

          <div className= {formGroupClass}>

            <textarea
              name="project[description]"
              placeholder="Project Description"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              className="text form-control"
            />

            {this.renderFieldErrors("description")}

          </div>

        </div>

      </div>
    );

  },

  renderProjectCostField: function(){

    var formGroupClass = this.state.formErrors["project_cost"] ? "form-group has-error" : "form-group"

    return(
      <div className='row'>

        <div className='col-sm-4'>

          <div className= {formGroupClass}>

            <input
              name="project[project_cost]"
              type="number"
              placeholder="Project Cost"
              value={this.state.project_cost}
              onChange={this.handleProjectCostChange}
              className="numeric decimal form-control"
            />

            {this.renderFieldErrors("project_cost")}

          </div>

        </div>
      </div>
    );

  },



  render: function() {

    return(
      <div>
        <h4 style={{marginTop: "50px"}}> Create New Project </h4>

        <form style={{marginTop: "30px"}} onSubmit={this.newProjectSubmit}>

          <div className='form-inputs'/>


            {this.renderProjectNameField()}

            {this.renderProjectDescriptionField()}

            {this.renderProjectCostField()}


            <div className='row'>
              <div className='col-sm-4'>
                <input type="submit" value="Save" className='btn btn-primary' />
              </div>
            </div>

        </form>

      </div>

    );
  }
});