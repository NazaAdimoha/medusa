import { Github } from "@medusajs/icons"
import { Heading } from "@medusajs/ui"
import { Button } from "@medusajs/ui"
import Image from "next/image"
import Rocket from "@modules/common/icons/Rocket.svg"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-[#F8F9FB]">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="md:text-[42px] md:max-w-[866px] w-full md:h-28 align-middle md:leading-[58.8px] text-[#000000] font-normal"
          >
            Launch Your E-Commerce Platform with Trade Enablers and Next.js
          </Heading>
          <Heading
            level="h2"
            className="text-base md:leading-[22.4px] align-middle text-[#5C5C5C] font-normal mt-2"
          >
            Easily start your online store using our raedy made Template and Tools.
          </Heading>
        </span>
        <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
          <Button variant="secondary">
            View on GitHub
            <Github />
          </Button>
        </a>
        <div className="flex justify-center items-center md:h-full w-full">
          <Image src={Rocket} width={400} height={400} alt="hero" />
        </div>
      </div>
    </div>
  )
}

export default Hero