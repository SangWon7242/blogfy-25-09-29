import Image from "next/image";

export default function Home() {
  return (
    <section className="main-section flex-1 flex flex-col">
      <div className="inner flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">BLOGFY</h1>
        <p className="text-lg">개발자들을 위한 블로그 플랫폼</p>
      </div>
    </section>
  );
}
