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
        <div className="flex flex-col md:flex-row columns-3 __services">
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

      <div class="grid grid-col-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 object-center">
          <Image src="/assets/images/3d__2.png" width={391} height={407} />
        </div>
        <div className="col-span-2 __statement__section ms:p-23">
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
      <div className="columns-2 __stats">
        <p className="__title">
          Helping your business
          <br />
          <span className="intro__text__light">its reinvent technology</span>
        </p>
        <div>Statistics</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="col-span-1 object-center">
          <Image src="/assets/images/3d__3.png" width={391} height={407} />
        </div>
        <div className="col-span-2 __statement__section">
          <h1 className="__title">Our Tech Stacks</h1>

          <p className="__text">
            We&apos;re technology agnostic, but we have a propensity to leverage lean
            tools that are best suited to get the job done. Our systems are
            built leveraging various frameworks , but the most established are
            React, Next js, Kotlin, Flutter and React native, with Flask and
            Laravel. We try to always focus on tools that allow for greater
            quality of work, and productivity.
          </p>

          <Link href="/" className="__action action__solid __btn__margin">
            Read more
          </Link>
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
