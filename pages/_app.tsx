import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"

import { OnboardingProvider } from "@/contexts/onboarding"
import theme from "@/theme/theme"

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <OnboardingProvider>
        <AnimatePresence mode="wait">
          <Component route={router.route} key={router.route} {...pageProps} />
        </AnimatePresence>
      </OnboardingProvider>
    </ChakraProvider>
  )
}
