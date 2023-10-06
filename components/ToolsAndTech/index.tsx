"use client";
import { FC } from "react";
import {
  SiAmazonaws,
  SiDocker,
  SiElasticsearch,
  SiGithub,
  SiGithubactions,
  SiGoogleanalytics,
  SiGooglecloud,
  SiRedis,
  SiSentry,
  SiSlack,
  SiVagrant,
  SiVisualstudiocode,
} from "react-icons/si";
import { ToolAndTechElement } from "./ToolsAndTechElement";

export const ToolsAndTech: FC = () => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4 w-full sm:w-2/3 mx-auto text-xs
    align-middle justify-items-center"
    >
      {[
        { Icon: SiGithub, title: "GitHub" },
        { Icon: SiGithubactions, title: "GitHub Actions" },
        { Icon: SiSentry, title: "Sentry" },
        { Icon: SiGoogleanalytics, title: "Google Analytics" },
        { Icon: SiDocker, title: "Docker" },
        { Icon: SiVagrant, title: "Vagrant" },
        { Icon: SiSlack, title: "Slack" },
        { Icon: SiVisualstudiocode, title: "VS Code" },
        { Icon: SiElasticsearch, title: "Elasticsearch" },
        { Icon: SiAmazonaws, title: "AWS" },
        { Icon: SiRedis, title: "Redis" },
        { Icon: SiGooglecloud, title: "Google Cloud" },
      ].map((elm) => (
        <ToolAndTechElement {...elm} />
      ))}
    </div>
  );
};
