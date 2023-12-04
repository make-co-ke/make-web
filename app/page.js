import "@styles/globals.css";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <div class="container mx-auto px-4">
      <div class="columns-2 __barner">
        <div className="w-full aspect-square __intro">
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
        <div className="w-full aspect-square __intro __intro__image__wrapper ">
          <Image src="/assets/images/3d__1.png" width={391} height={407} />
        </div>
      </div>

      <div class="row">What we do</div>
      <div class="row">Unseen potential </div>
      <div class="row">Statistics</div>
      <div class="row">Tech stacks</div>
      <div class="row">JUst picture it</div>
      <div class="row">footer sign off</div>
    </div>
  );
}

export default Home;
