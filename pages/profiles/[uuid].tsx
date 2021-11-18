import Image from "next/image";

export async function getServerSideProps({ params }) {
  return {
    props: {
      id: params.id,
      name: "A very cool duck",
    },
  };
}

export default function Profile({ name, id }) {
  return (
    <>
      <h1>Cool profile</h1>
      <p>{name}</p>
      <p>{id}</p>
      <Image src="/images/duck.jpg" height={144} width={144} alt={name} />
      <button onClick={() => window.history.back()}>Back</button>
    </>
  );
}
