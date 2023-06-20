import React from "react"
import { InferGetStaticPropsType } from "next"
import { useTina } from "tinacms/dist/react"
import { client } from "@/tina/__generated__/client"

import { Page } from "@/layouts/index"
import { Heading } from "@/components/index"

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { data } = useTina(props)
  console.log(data)
  return (
    <Page
      seo={{
        title: "Home",
        description: "Christopher Nolan, Film Director and Screenwriter",
      }}
      data={data.global as any}
    >
      <Heading
        mainTitle={{ text: "CHRISTOPHER" }}
        subTitle={{ text: "NOLAN" }}
        description={{
          top: "A  BRITISH-AMERICAN",
          mid: "FILM DIRECTOR AND",
          bottom: "SCREEN WRITER",
          paddingTop: "4",
        }}
      />
    </Page>
  )
}

export const getStaticProps = async () => {
  const homeResponse = await client.queries.global({
    relativePath: "index.json",
  })

  return {
    props: {
      data: homeResponse.data,
      query: homeResponse.query,
      variables: homeResponse.variables,
    },
  }
}
