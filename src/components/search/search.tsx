import Image from "next/image";

export const Search = () => {
  const handleSubmit = () => {
    console.log("test");
  };
  const handleChange = () => {
    console.log("change");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-brand-primary p-2 rounded-lg flex gap-2">
        <Image src="/search.png" height={32} width={32} alt="search" />
        <input
          placeholder="Explore..."
          className="border-0 bg-brand-primary w-60"
        />
      </div>
    </form>
  );
};
