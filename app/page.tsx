import {
  HeaderOne,
  HeaderTwo,
  HeaderFour,
} from "@/components/core/Header";
import NavigationBar from "@/components/core/NavigationBar";
import Page from "@/components/core/Page";
import Link from "next/link";
import Image from "next/image";
import ProfilePhoto from "@/public/RandyGlasgow.jpeg";
import { FaReact } from "react-icons/fa6/index";
import { TbBrandNextjs } from "react-icons/tb/index";
import { SiTailwindcss } from "react-icons/si/index";
import { ProjectCard } from "@/components/ProjectCard";
import { KeywordGroup } from "@/components/KeywordGroup/indext";
import { StrengthBar } from "@/components/StrengthBar";
import { ToolsAndTech } from "@/components/ToolsAndTech";
import Guestbook from "@/components/Guestbook";

export default async function Home() {
  return (
    <Page.Root>
      <div className="min-h-screen matrix">
        <NavigationBar.Root></NavigationBar.Root>
        <Page.Content className="text-center">
          <HeaderOne className="text-white text-6xl">
            Randy Glasgow
          </HeaderOne>
          <Image
            src={ProfilePhoto}
            quality={40}
            loading="eager"
            alt="Randy Glasgow"
            className="mx-auto rounded-full overflow-hidden object-cover object-center border border-stone-400 h-80 w-80 m-10 border-dashed border-spacing-2 p-2"
          />
        </Page.Content>
        <Page.Content id="Core Competencies">
          <HeaderTwo className="text-center">Core Competencies</HeaderTwo>
          <div className="flex sm:flex-row mx-auto justify-center items-center sm:items-stretch w-full gap-4 flex-wrap my-8">
            <KeywordGroup
              keywords={[
                "Agile",
                "Architecture",
                "Code Coverage",
                "Collaboration",
                "Communication",
                "Cost Containment",
                "Developer Experience",
                "Distributed Systems",
                "Frontend Engineering",
                "Microservices",
                "Process Improvement",
                "Project Management",
                "SEO",
                "Software Engineering",
                "Strategic Planning",
                "Team Leadership",
                "User Experience",
              ].sort()}
            />
          </div>
        </Page.Content>
        <Page.Content id="Languages & Frameworks">
          <HeaderTwo className="text-center">
            Languages & Frameworks
          </HeaderTwo>
          <div className="grid grid-cols-2 mx-auto justify-center items-center w-full gap-4 flex-wrap my-8">
            {[
              { label: "React", strength: 95 },
              { label: "Typescript", strength: 90 },
              { label: "Javascript", strength: 95 },
              { label: "HTML", strength: 93 },
              { label: "CSS", strength: 90 },
              { label: "Tailwindcss", strength: 90 },
              { label: "NextJs", strength: 92 },
              { label: "NodeJs", strength: 88 },
              { label: "Rust", strength: 55 },
              { label: "Python", strength: 60 },
            ]
              .sort((a, b) => b.strength - a.strength)
              .map((elm) => (
                <StrengthBar label={elm.label} strength={elm.strength} />
              ))}
          </div>
        </Page.Content>
        <Page.Content>
          <HeaderTwo className="text-center">
            Tools & Technologies
          </HeaderTwo>
          <div className="my-8">
            <ToolsAndTech />
          </div>
        </Page.Content>
        <Page.Content>
          <HeaderTwo className="text-center">Projects</HeaderTwo>
          <div className="flex flex-col sm:flex-row mx-auto justify-center items-center sm:items-stretch w-full gap-4 flex-wrap my-8">
            <ProjectCard
              title={"Relay It"}
              // projectLink={"https://relay-it.dev"}
              tags={["Javascript", "NextJs", "Tailwindcss", "APIs"]}
              description={
                "A utility first API that helps you write better code without changing the way you work. All the HTTP response status codes available from one convenient API."
              }
            />
            <ProjectCard
              title={"Auto-GPT"}
              tags={["Rust", "ChatGPT"]}
              description={
                "A rust based CLI tool that allows you to generate code from a prompt. It uses the ChatGPT-4 API to generate code from a prompt, test it, and update your codebase."
              }
            />
            <ProjectCard
              title={"Computology"}
              // projectLink={"https://computology.app"}
              tags={[
                "Typescript",
                "Microservices",
                "NextJs",
                "Tailwindcss",
                "ChatGPT",
                "PostgreSQL",
              ]}
              description={
                "Computology is a weekend project evolving into a SaaS product. It aims to offer a platform for developers, designers, and creatives to collaborate using Generative Pre-trained Transformers like ChatGPT-4."
              }
            />
          </div>
        </Page.Content>
        <Page.Footer className="py-8 gap-4 grid">
          <Guestbook />
          <HeaderFour className="text-stone-400">Made using</HeaderFour>
          <div className="flex mx-auto items-center justify-center gap-3">
            <Link href="https://nextjs.org/">
              <TbBrandNextjs className="text-3xl text-stone-400 hover:text-white" />
            </Link>
            <Link href="https://react.dev/">
              <FaReact className="text-3xl text-stone-400 hover:text-white" />
            </Link>
            <Link href="https://tailwindcss.com/">
              <SiTailwindcss className="text-3xl text-stone-400 hover:text-white " />
            </Link>
          </div>
        </Page.Footer>
      </div>
    </Page.Root>
  );
}
