import Link from "next/link";
import { FC } from "react";
import { FaBoxOpen } from "react-icons/fa6";
import Card from "../core/Card";
import Header from "../core/Header";

interface ProjectCardProps {
  title: string;
  projectLink?: string;
  description: string;
  tags: string[];
}
export const ProjectCard: FC<ProjectCardProps> = ({
  description,
  projectLink,
  tags,
  title,
}) => {
  return (
    <Card.Root className="max-w-sm backdrop-blur-[1px] hover:backdrop-blur-sm hover:shadow-lg hover:shadow-fuchsia-600/90 transition-all duration-150 ease-in-out hover:text-white">
      <Card.Content className="p-4">
        <Header.H3 className="flex justify-between items-center">
          <span>{title}</span>
          {projectLink && (
            <Link
              href={projectLink}
              className="text-sm font-normal text-slate-400 hover:text-white flex gap-2 items-center justify-center"
            >
              <FaBoxOpen className="text-2xl" />
              <span>Project</span>
            </Link>
          )}
        </Header.H3>
        <p>{description}</p>
        <span className="flex items-center justify-start mt-2 gap-x-4 flex-wrap">
          {tags.map((elm) => (
            <span className="rounded-full text-slate-400 border-slate-400">
              #{elm}
            </span>
          ))}
        </span>
      </Card.Content>
    </Card.Root>
  );
};
