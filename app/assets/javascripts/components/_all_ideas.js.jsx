class AllIdeas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: []
    };
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
    var ideas = this.state.ideas.map(idea => {
      return (
        <div key={idea.id}>
          <h1>{idea.name}</h1>
          <p>{idea.description}</p>
        </div>
      );
    });

    return <div>{ideas}</div>;
  }
}
