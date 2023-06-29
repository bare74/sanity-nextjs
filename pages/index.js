import { createClient } from "next-sanity";

export default function IndexPage({ pets, cars }) {
  return (
    <>
      <header>
        <h1>Sanity + Next.js</h1>
      </header>
      <main>
        <h2>pets</h2>
        {pets.length > 0 && (
          <ul class="card-list">
            {pets.map((pet) => (
              <li key={pet._id}>
                <p>{pet?.name}</p>
                <h1>{pet?.lastname}</h1>
              </li>
            ))}
          </ul>
        )}
        {!pets.length > 0 && <p>No pets to show</p>}
        {pets.length > 0 && (
          <div>
            <pre>{JSON.stringify(pets, null, 2)}</pre>
          </div>
        )}
        {!pets.length > 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you've configured everything
              correctly
            </p>
          </div>
        )}
        <h2>Cars</h2>
        {cars.length > 0 && (
          <ul class="card-list">
            {cars.map((car) => (
              <li key={car._id}>
                <p>{car?.make}</p>
                <p>{car?.model}</p>
                <p>{car?.year}</p>
              </li>
            ))}
          </ul>
        )}
        {!cars.length > 0 && <p>No pets to show</p>}
        {cars.length > 0 && (
          <div>
            <pre>{JSON.stringify(cars, null, 2)}</pre>
          </div>
        )}
        {!cars.length > 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you've configured everything
              correctly
            </p>
          </div>
        )}
      </main>
    </>
  );
}

const client = createClient({
  projectId: "iihwp4nb",
  dataset: "production",
  apiVersion: "2023-06-28",
  useCdn: false,
});

export async function getStaticProps() {
  const pets = await client.fetch(`*[_type == "pet"]`);
  const cars = await client.fetch(`*[_type == "car"]`);

  return {
    props: {
      pets,
      cars,
    },
  };
}
