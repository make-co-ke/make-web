import React, { FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import "boxicons/css/boxicons.min.css";

function Footer() {
  async function onSubmit(event) {
    event.preventDefault();

    console.log("submitting form");
    // ...
  }

  return (
    <div className="__footer grid grid-cols-4 gap-4">
      <div className="col-span-1 __footer__basic">
        <div className="__footer__logo">
          <Image src="/assets/site/logo.png" width={110} height={100} />
        </div>
        <p className="__footer__text">Copyright © 2023 Make ltd.</p>
        <p className="__footer__text">All rights reserved</p>
        <div className="__footer__socials">
          <Link href="/" className="__footer__menu__item __footer__social">
            <i class="bx bxl-facebook-circle"></i>
          </Link>
          <Link href="/" className="__footer__menu__item __footer__social">
            <i class="bx bxl-linkedin-square"></i>
          </Link>
          <Link href="/" className="__footer__menu__item __footer__social">
            <i class="bx bxl-twitter"></i>
          </Link>
          <Link href="/" className="__footer__menu__item __footer__social">
            <i class="bx bxl-dribbble"></i>
          </Link>
        </div>
      </div>
      <div className="col-span-2">
        <div className="grid grid-cols-3 gap-4  __footer__menu">
          <div className="__footer__menu__wrapper ">
            <h1 className="__footer__sections__title">Company</h1>
            <Link href="/" className="__footer__menu__item">
              About us
            </Link>
            <Link href="/" className="__footer__menu__item">
              Blog
            </Link>
            <Link href="/" className="__footer__menu__item">
              Contact us
            </Link>
            <Link href="/" className="__footer__menu__item">
              Pricing
            </Link>
          </div>
          <div className="__footer__menu__wrapper ">
            <h1 className="__footer__sections__title">Support</h1>
            <Link href="/" className="__footer__menu__item">
              Help center
            </Link>
            <Link href="/" className="__footer__menu__item">
              Terms of service
            </Link>
            <Link href="/" className="__footer__menu__item">
              Privacy policy
            </Link>
            <Link href="/" className="__footer__menu__item">
              FAQs
            </Link>
          </div>
          <div className=" ">
            <h1 className="__footer__sections__title">Stay up to date</h1>

            <form className="">
              <div className="__subscribe__form">
                <input
                  type="text"
                  name="name"
                  placeholder="Your email address"
                />
                <button type="submit" className="__subscribe__btn">
                  <i class="bx bx-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
