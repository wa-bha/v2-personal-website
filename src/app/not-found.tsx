import { ExternalLink } from "@/components/common";

const NotFound = () => {
  return (
    <section className="flex h-svh w-full flex-col items-center justify-center">
      <h1 className="mb-8 text-2xl font-semibold">Oh no! This page doesn&apos;t exist.</h1>
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
