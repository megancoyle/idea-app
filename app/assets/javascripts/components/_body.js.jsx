class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewIdea = this.addNewIdea.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteIdea = this.deleteIdea.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateIdea = this.updateIdea.bind(this);
  }

  handleFormSubmit(name, description) {
    let body = JSON.stringify({
      idea: { name: name, description: description }
    });

    fetch("http://localhost:3000/api/v1/ideas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    })
      .then(response => {
        return response.json();
      })
      .then(idea => {
        this.addNewIdea(idea);
      });
  }

  addNewIdea(idea) {
    this.setState({
      ideas: this.state.ideas.concat(idea)
    });
  }

  handleDelete(id) {
    fetch(`http://localhost:3000/api/v1/ideas/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      this.deleteIdea(id);
    });
  }

  deleteIdea(id) {
    newIdeas = this.state.ideas.filter(idea => idea.id !== id);
    this.setState({
      ideas: newIdeas
    });
  }

  handleUpdate(idea) {
    fetch(`http://localhost:3000/api/v1/ideas/${idea.id}`, {
      method: "PUT",
      body: JSON.stringify({ idea: idea }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      this.updateIdea(idea);
    });
  }
  updateIdea(idea) {
    let newIdeas = this.state.ideas.filter(f => f.id !== idea.id);
    newIdeas.push(idea);
    this.setState({
      ideas: newIdeas
    });
  }

  componentDidMount() {
    fetch("/api/v1/ideas.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ ideas: data });
      });
  }

  render() {
    return (
      <div>
        <NewIdea handleFormSubmit={this.handleFormSubmit} />
        <AllIdeas
          ideas={this.state.ideas}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}
