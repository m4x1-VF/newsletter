import Image from "next/image";

const CardImage = () => {
  return (
    <section className="md:order-last">
      <Image
        src={"/illustration-sign-up-mobile.svg"}
        width={375}
        height={284}
        alt="Sign up illustration"
        className="object-cover w-full md:hidden"
      />
      <Image
        src={"/illustration-sign-up-desktop.svg"}
        width={400}
        height={593}
        alt="Sign up illustration"
        className="hidden md:h-full md:block md:p-5"
      />
    </section>
  );
};

export default CardImage;
