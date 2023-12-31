import Card from "@/components/ui/card";
import CardImage from "@/components/ui/cardImage";

const HomePage = () => {
  return (
    <div className=" grid place-content-center md:min-h-screen md:bg-gray-700">
      <article className="bg-white grid grid-cols-1 md:grid-cols-2 md:max-w-[870px] md:max-h-[600px] md:rounded-3xl md:content-center md:justify-items-center">
        <Card />
        <CardImage />
      </article>
    </div>
  );
};

export default HomePage;
