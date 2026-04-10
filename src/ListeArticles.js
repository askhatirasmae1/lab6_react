import useFetch from "./useFetch";

function ListeArticles() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur</p>;

  return (
    <ul>
      {data.slice(0, 10).map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default ListeArticles;