const Bifrost = (component, connect) => {
  const mapState = state => ({
    count: state.count
  });

  const mapDispatch = ({ count: { increment, incrementAsync } }) => ({
    increment: () => increment(1),
    incrementAsync: () => incrementAsync(1)
  });

  return connect(
    mapState,
    mapDispatch
  )(component);
};

export default Bifrost;
