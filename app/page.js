import "@styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import boxicons from "boxicons/css/boxicons.min.css";
import Hero from "@components/Hero";

function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      {/* <div className="columns-2 __barner">
        <div className="w-full  __intro">
          <p className="intro__text">
            Transforming vision
            <br />
            <span className="intro__text__light">to a digital reality.</span>
          </p>
          <p className="intro__text__2">
            Unlock the potential or your business, build the future with us
          </p>

          <Link href="/" className="__action action__solid __btn__margin">
            Get started
          </Link>
        </div>
        <div className="w-full __intro __intro__image__wrapper ">
          <Image alt="image" src="/assets/images/3d__1.png" width={391} height={407} />
        </div>
      </div> */}
      <div className="">
        <div className="w-full text-center">
          <h1 className="text-3xl font-bold">What we do.</h1>
          <p className="text-secondary-200">
            We are transforming vision into a digital reality
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-1">
          <div className="shadow-md rounded-md flex flex-col gap-3 m-auto p-16 min-h-full">
            <p className="text-3xl font-bold text-center">Innovative Product Development</p>
            <p className="text-center text-secondary-200 text-sm">
              Crafting cutting-edge solutions through our own product
              innovations, staying at the forefront of technology trends.
            </p>
          </div>
          <div className="shadow-md rounded-md flex flex-col gap-3 m-auto p-20 min-h-full">
            <p className="text-3xl font-bold text-center">Software Development</p>
            <p className="text-center text-secondary-200 text-sm">
              We partner with businesses to transform their ideas into a digital
              reality. We build the technology needed for sustained growth and
              success.
            </p>
          </div>
          <div className="shadow-md rounded-md flex flex-col gap-3 m-auto p-20 min-h-full">
            <p className="text-3xl font-bold text-center ">Search Engine Optimization</p>
            <p className="text-center text-secondary-200 text-sm">
              Collaborating with businesses ensuring seamless execution of their
              digital strategies while optimizing their online presence with
              strategic SEO from the ground u
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between  align-middle gap-2 w-full">
        <div className="md:w-1/2">
          <Image alt="image" src="/assets/images/3d__2.png" className="w-full" width={391} height={407} />
        </div>
        <div className="flex flex-col gap-2 md:1/2">
          <h1 className="__title">
            The Unseen Potential of Building Your Next Idea with Us
          </h1>

          <p className="__text">
            Dive into a world where innovation knows no bounds, and every
            project is tailor-made to reflect the uniqueness of your vision. Our
            expertise in web and mobile application development is not just
            about technology – it's about pioneering the digital frontier. By
            choosing us, you gain a partner with a stealthy approach to support,
            working tirelessly behind the scenes to ensure your success. From
            conception to execution, we are dedicated to revealing the hidden
            gems within your idea
          </p>

          <Link href="/" className="m-auto md:m-0">
            <button className="w-4/6 bg-green-700 px-4 py-2 text-white rounded-md">
              Read more
            </button>
          </Link>
        </div>
      </div>
      <div className="columns-2 __stats">
        <p className="__title">
          Helping your business
          <br />
          <span className="intro__text__light">its reinvent technology</span>
        </p>
        <div>Statistics</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="col-span-1 object-center">
          <Image alt="image" src="/assets/images/3d__3.png" width={391} height={407} className="w-full" />
        </div>
        {/* __statement__section sm:p-40 sm:text-center*/}
        <div className="col-span-2 sm:px-40 sm:py-20 sm:text-center md:text-left">
          <h1 className="__title">Our Tech Stacks</h1>

          <p className="__text sm:py-20 leading-loose">
            We&apos;re technology agnostic, but we have a propensity to leverage lean
            tools that are best suited to get the job done. Our systems are
            built leveraging various frameworks , but the most established are
            React, Next js, Kotlin, Flutter and React native, with Flask and
            Laravel. We try to always focus on tools that allow for greater
            quality of work, and productivity.
          </p>

          {/* __action action__solid __btn__margin */}
          <div className="flex flex-col items-center justify-center md:justify-start">
            <Link href="/" className="__action action__solid __btn__margin w-32 sm:text-center">
              Read more
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="__title__section">
          <h1 className="__heading__2">Just Picture It.</h1>
          <p className="__title__description">
            From groundbreaking software innovations to transformative digital
            strategies, trends, and success stories
          </p>

          <div className="columns-3 __blog__section flex sm:flex-col md:flex-row">
            <div className="__blog__card">
              <div className="__blog__image __post_1 sm:w-96"></div>
              <div className="__blog__content">
                <p className="__blog__title">
                  Creating Streamlined Safeguarding Processes with OneRen
                </p>
                <Link href="/" className="__ablog_action ">
                  Readmore
                </Link>
              </div>
            </div>
            <div className="__blog__card">
              <div className="__blog__image __post_1 sm:w-96"></div>
              <div className="__blog__content">
                <p className="__blog__title">
                  Creating Streamlined Safeguarding Processes with OneRen
                </p>
                <Link href="/" className="__ablog_action ">
                  Readmore
                </Link>
              </div>
            </div>
            <div className="__blog__card">
              <div className="__blog__image __post_1 sm:w-96"></div>
              <div className="__blog__content">
                <p className="__blog__title ">
                  Creating Streamlined Safeguarding Processes with OneRen
                </p>
                <Link href="/" className="__ablog_action ">
                  Readmore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="__sign__off">
        <p className="__sign_off_text">
          Innovating digital solutions, empowering growth
        </p>
      </div>
    </div>
  );
}

export default Home;
