import Header from "@/components/core/Header";
import NavigationBar from "@/components/core/NavigationBar";
import Page from "@/components/core/Page";
import Link from "next/link";
import { FaGithub, FaReact } from "react-icons/fa6/index";
import { TbBrandNextjs } from "react-icons/tb/index";
import { SiRailway, SiTailwindcss, SiRedis } from "react-icons/si/index";
export default function Home() {
  return (
    <Page.Root className="">
      <div className="matrix">
        <NavigationBar.Root></NavigationBar.Root>
        <Page.Content className="h-screen">
          <Header.H1>Randy Glasgow</Header.H1>
          <Header.Subtitle>
            A software engineer with a passion for engineering elegant
            solutions to complicated problems.
          </Header.Subtitle>
        </Page.Content>
        <Page.Footer className="py-8 gap-4 grid">
          <Header.H4 className="text-slate-400">Made using</Header.H4>
          <div className="flex mx-auto items-center justify-center gap-3">
            <Link href="https://nextjs.org/">
              <SiRailway className="text-3xl text-slate-400 hover:text-white " />
            </Link>
            <Link href="https://nextjs.org/">
              <TbBrandNextjs className="text-3xl text-slate-400 hover:text-white" />
            </Link>
            <Link href="https://nextjs.org/">
              <FaReact className="text-3xl text-slate-400 hover:text-white animate-spin-slow hover:animate-none" />
            </Link>
            <Link href="https://nextjs.org/">
              <SiTailwindcss className="text-3xl text-slate-400 hover:text-white " />
            </Link>
            <Link href="https://nextjs.org/">
              <SiRedis className="text-3xl text-slate-400 hover:text-white " />
            </Link>
          </div>
        </Page.Footer>
      </div>
    </Page.Root>
  );
}
