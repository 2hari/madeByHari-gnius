import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from "react"

const OnboardingContext = createContext({
  onboarding: true,
  pageTransitionDuration: 2,
  headingDelay: 2.5,
  textDelay: 2.6,
  setOnboarding: () => {},
})

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [onboarding, setOnboarding] = useState(true)

  const [pageTransitionDuration, setPageTransitionDuration] = useState(2)
  const [headingDelay, setHeadingDelay] = useState(2.5)
  const [textDelay, setTextDelay] = useState(2.6)

  const setOnBoardingFalse = () => setOnboarding(false)

  useEffect(() => {
    if (onboarding) {
      setPageTransitionDuration(2)
      setHeadingDelay(4)
      setTextDelay(4.1)
    } else {
      setPageTransitionDuration(0)
      setHeadingDelay(0.5)
      setTextDelay(0.6)
    }
  }, [onboarding])

  return (
    <OnboardingContext.Provider
      value={{
        onboarding,
        pageTransitionDuration,
        headingDelay,
        textDelay,
        setOnboarding: setOnBoardingFalse,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  )
}

export const useOnboarding = () => {
  return useContext(OnboardingContext)
}
