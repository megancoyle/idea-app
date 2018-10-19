class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewIdea = this.addNewIdea.bind(this);
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
        <AllIdeas ideas={this.state.ideas} />
      </div>
    );
  }
}
