import "@styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import boxicons from "boxicons/css/boxicons.min.css";

function Home() {
  return (
    <div class="container mx-auto px-4">
      <div class="columns-2 __barner">
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
          <Image src="/assets/images/3d__1.png" width={391} height={407} />
        </div>
      </div>
      <div class="__title_section">
        <h1 className="__heading__2">What we do.</h1>
        <p className="__title__description">
          We are transforming vision into a digital reality
        </p>
        <div className="columns-3 __services">
          <div className="__service__card">
            <div className="icon"></div>
            <p className="__service__title">Innovative Product Development</p>
            <p className="__text__natural">
              Crafting cutting-edge solutions through our own product
              innovations, staying at the forefront of technology trends.
            </p>
          </div>
          <div className="__service__card">
            <p className="__service__title">Software Development</p>
            <p className="__text__natural">
              We partner with businesses to transform their ideas into a digital
              reality. We build the technology needed for sustained growth and
              success.
            </p>
          </div>
          <div className="__service__card">
            <p className="__service__title">Search Engine Optimization</p>
            <p className="__text__natural">
              Collaborating with businesses ensuring seamless execution of their
              digital strategies while optimizing their online presence with
              strategic SEO from the ground u
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4 ">
        <div className="col-span-1">
          <Image src="/assets/images/3d__2.png" width={391} height={407} />
        </div>
        <div className="col-span-2 __statement__section">
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

          <Link href="/" className="__action action__solid __btn__margin">
            Read more
          </Link>
        </div>
      </div>
      <div class="row">Statistics</div>
      <div class="row">Tech stacks</div>
      <div class="row">JUst picture it</div>
      <div class="row">footer sign off</div>
    </div>
  );
}

export default Home;
