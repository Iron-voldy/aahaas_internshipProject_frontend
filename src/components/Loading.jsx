const Loading = () => {
  return (
    <section className="py-20 px-4 bg-dark-blue-950">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="loader mb-4"></div>
        <p className="text-gray-400 text-lg">Loading products...</p>
      </div>
    </section>
  );
};

export default Loading;
