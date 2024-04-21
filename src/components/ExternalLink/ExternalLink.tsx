import { PropsWithChildren } from "react";

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const ExternalLink = ({ href, children, ...rest }: PropsWithChildren<ExternalLinkProps>) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
};

export default ExternalLink;
