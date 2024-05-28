import ExternalLink from "@/components/ExternalLink";

const NotFound = () => {
  return (
    <section className="w-full h-svh flex flex-col items-center justify-center">
      <h1 className="font-semibold text-2xl mb-8">Oh no! This page doesn&apos;t exist.</h1>
      <p>
        If you expected to see something here, let me know (
        <ExternalLink className="text-blue-600" href="https://www.linkedin.com/in/bhavit-wadhwa/">
          linkedin
        </ExternalLink>
        ).
      </p>
    </section>
  );
};

export default NotFound;
