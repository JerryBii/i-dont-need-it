const Home = ({ user }) => {
  return (
    <>
      <h3 className="text-secondary">Summary</h3>
      <hr />
      <div>{user.totalProducts}</div>
    </>
  );
};

export default Home;
