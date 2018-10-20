const AllIdeas = props => {
  var ideas = props.ideas.map(idea => {
    return (
      <div key={idea.id}>
        <Idea
          idea={idea}
          handleDelete={props.handleDelete}
          handleUpdate={props.handleUpdate}
        />
      </div>
    );
  });

  return <div>{ideas}</div>;
};
