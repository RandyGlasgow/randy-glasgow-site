import Header from "@/components/core/Header";
import NavigationBar from "@/components/core/NavigationBar";
import Page from "@/components/core/Page";
import Link from "next/link";
import { FaReact } from "react-icons/fa6/index";
import { TbBrandNextjs } from "react-icons/tb/index";
import { SiTailwindcss } from "react-icons/si/index";
import { ProjectCard } from "@/components/ProjectCard";

export default async function Home() {
  return (
    <Page.Root>
      <div className="min-h-screen matrix">
        <NavigationBar.Root></NavigationBar.Root>
        <Page.Content>
          <span>
            <Header.H1 className="text-white">Randy Glasgow</Header.H1>
            <Header.Subtitle>
              A software engineer with a passion for engineering elegant
              solutions to complicated problems.
            </Header.Subtitle>
          </span>
        </Page.Content>
        <Page.Content>
          <Header.H2>About Me</Header.H2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Fugiat deleniti nostrum aperiam id obcaecati saepe
            voluptatibus, sequi cumque maiores reprehenderit perspiciatis
            dolor. Qui ad deserunt alias accusamus quas aut sit iusto
            delectus odio doloremque quaerat, voluptate asperiores
            perferendis velit tempore illum explicabo, amet quo cumque in
            dolores quidem inventore quos? Culpa velit ad repellendus odit
            distinctio sed, quia hic, autem consequuntur aut eveniet
            reprehenderit veniam, atque et! Quisquam ducimus labore unde?
            Eaque quo fugiat, ut beatae consequuntur quasi quia? Nulla
            commodi assumenda eum voluptates expedita suscipit debitis
            aliquam, sed, ipsa, numquam quod rerum a quas officia? Non
            laboriosam adipisci delectus id, quam eius vero? Modi animi
            mollitia inventore dolorum quae aperiam adipisci perspiciatis?
            Aperiam dignissimos ducimus nesciunt deserunt, eveniet
            assumenda voluptas optio libero! Assumenda at ipsum accusamus
            excepturi incidunt recusandae aliquid eveniet deserunt
            molestiae eos non placeat, expedita laborum perspiciatis
            voluptas delectus consequuntur deleniti similique amet?
            Perferendis aut veniam quo nulla quae velit ipsam deserunt
            consectetur tempore distinctio fugiat, expedita, suscipit optio
            architecto. Rerum nobis magnam fuga amet commodi non est, odit
            molestiae odio ratione, mollitia dolor molestias distinctio
            recusandae expedita quaerat pariatur sit nemo tempora sapiente?
            Quia, nisi. Autem unde ea cupiditate soluta excepturi,
            consectetur exercitationem molestias! Ad repellat cum, quaerat
            quidem ab a, vitae fugiat aliquid, natus voluptatibus illum
            deleniti unde voluptate. Assumenda ipsam doloribus placeat
            dolorum nostrum nulla commodi dignissimos quidem doloremque
            nihil. Omnis blanditiis quas hic pariatur possimus, deserunt,
            rerum architecto placeat, maxime atque commodi corporis a
            ullam. Quidem, dicta assumenda? Iusto deleniti explicabo
            architecto eaque.
          </p>
        </Page.Content>
        <Page.Content>
          <Header.H2 className="">Projects</Header.H2>
          <div className="flex flex-col sm:flex-row mx-auto justify-center items-center sm:items-stretch w-full gap-4 flex-wrap my-8">
            <ProjectCard
              title={"Relay It"}
              projectLink={"https://relay-it.dev"}
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
          <Header.H4 className="text-slate-400">Made using</Header.H4>
          <div className="flex mx-auto items-center justify-center gap-3">
            <Link href="https://nextjs.org/">
              <TbBrandNextjs className="text-3xl text-slate-400 hover:text-white" />
            </Link>
            <Link href="https://react.dev/">
              <FaReact className="text-3xl text-slate-400 hover:text-white" />
            </Link>
            <Link href="https://tailwindcss.com/">
              <SiTailwindcss className="text-3xl text-slate-400 hover:text-white " />
            </Link>
          </div>
        </Page.Footer>
      </div>
    </Page.Root>
  );
}
