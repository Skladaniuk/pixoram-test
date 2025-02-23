import { useFetch } from "../../hooks/useFetch";

export const CardsList = () => {
  const { data, isLoading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      Cards list
      {data?.length > 0 ? (
        data.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        ))
      ) : (
        <div>No items found</div>
      )}
    </div>
  );
};
