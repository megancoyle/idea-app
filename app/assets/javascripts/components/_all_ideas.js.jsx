const AllIdeas = props => {
  var ideas = props.ideas.map(idea => {
    return (
      <div key={idea.id}>
        <h1>{idea.name}</h1>
        <p>{idea.description}</p>
      </div>
    );
  });
  return <div>{ideas}</div>;
};
