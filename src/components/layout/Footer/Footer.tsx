import React from "react";
import { Copyright, ExternalLinkIcon } from "lucide-react";

import { ExternalLink } from "@/components/common";

const Footer = () => {
  return (
    <footer className="font-nohemi text-lg font-medium shadow-inner">
      <div className="m-auto flex h-full max-w-[90%] flex-col justify-between gap-8 px-5">
        <div className="flex items-center justify-between py-5">
          <ExternalLink href="https://v1.bhavit.dev">
            <button className="px-2 py-0.5">
              <ExternalLinkIcon
                className="inline-flex h-[1.1em] pr-0.5 pb-0.5"
                strokeWidth="2.5px"
              />
              <span>v1.0</span>
            </button>
          </ExternalLink>

          <p>
            <Copyright className="inline-flex h-[1.1em] pr-0.5 pb-0.5" strokeWidth="3px" />
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
