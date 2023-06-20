import React, { LegacyRef, useRef, useEffect } from "react"
import { useRouter } from "next/router"

import { Page } from "@/layouts/index"
import { Heading } from "@/components"

const Biography = () => {
  const careerRef: LegacyRef<HTMLHeadingElement> | undefined = useRef(null)
  const archivesRef: LegacyRef<HTMLHeadingElement> | undefined = useRef(null)
  const latestsRef: LegacyRef<HTMLHeadingElement> | undefined = useRef(null)

  const router = useRouter()

  useEffect(() => {
    if (!careerRef.current) return
    if (router.query.to !== careerRef.current.id) return

    window.scrollTo(0, careerRef.current.offsetTop)
  }, [router, careerRef])

  useEffect(() => {
    if (!archivesRef.current) return
    if (router.query.to !== archivesRef.current.id) return

    window.scrollTo(0, archivesRef.current.offsetTop)
  }, [router, archivesRef])

  useEffect(() => {
    if (!latestsRef.current) return
    if (router.query.to !== latestsRef.current.id) return

    window.scrollTo(0, latestsRef.current.offsetTop)
  }, [router, latestsRef])

  return (
    <Page
      seo={{
        title: "Home",
        description: "Christopher Nolan, Films Career and Latest News",
      }}
    >
      <Heading
        mainTitle={{
          text: "BIOGRAPHY",
          fontSize: ["60px", "70px", "100px", "130px", "168px"],
        }}
        subTitle={{
          text: "DIRECTOR",
          fontSize: ["60px", "70px", "100px", "130px", "168px"],
        }}
        description={{
          top: "15 YEARS OF FILMMAKING",
          mid: "LOW-BUDGET INDEPENDENT FILMS TO",
          bottom: "BIGGEST BLOCKBUSTERS",
          paddingTop: { base: 4, md: 0 },
        }}
      />
    </Page>
  )
}

export async function getStaticProps() {
  return {
    props: { page: "biography" }, // Page prop for no much reason
  }
}

export default Biography
