import Hello from "../components/hello";

export default function Home() {
  console.log('server: test');

  return (
    <>
    <Hello />
      <h1 className="text-3xl">
        TEST Hello
      </h1>
    </>
  );
}
