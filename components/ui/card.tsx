import { EmailForm } from "@/components/emailForm";
import ItemsList from "@/components/itemsList";

const Card = () => {
  return (
    <section className="px-8 py-16 order-last md:py-10">
      <section className="flex flex-col gap-10 md:justify-center md:pt-8 md:gap-6 md:pl-5">
        <h1 className="text-5xl font-bold">Stay update!</h1>
        <p className="">
          Join 60,000+ product managers receiving monthly updated on:
        </p>
        <ul className="space-y-4">
          <ItemsList item={"Product discovery and building what matters"} />
          <ItemsList item={"Measuring to ensure updates are a success"} />
          <ItemsList item={"And much more!"} />
        </ul>
        <EmailForm />
      </section>
    </section>
  );
};

export default Card;
