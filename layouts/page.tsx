import Head from "next/head"
import { NextSeo } from "next-seo"
import { Global } from "@/tina/__generated__/types"

import PageTransition from "@/layouts/page-transition"
import SmoothScroll from "@/layouts/smooth-scroll"
import { Header, Footer } from "@/components/index"
import { headerDefault } from "@/content/default"

interface PageI {
  children: JSX.Element | JSX.Element[]
  seo: Record<string, unknown>
  data?: Omit<Global, "id" | "_sys" | "_values">
}

const Page = ({ children, seo, data }: PageI) => {
  return (
    <>
      <NextSeo {...seo} titleTemplate="%s | Christopher Nolan" />
      <PageTransition />
      <Header data={data?.header || headerDefault} />
      <SmoothScroll>{children}</SmoothScroll>
      <Footer />
    </>
  )
}

export default Page
