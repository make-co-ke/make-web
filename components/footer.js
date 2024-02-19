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
    // __footer 
    <div className="bg-slate-800 flex flex-col md:flex-row justify-around p-3 md:p-9">
      <div className="text-left">
        <div className="object-center">
          <Image src="/assets/site/logo.png" width={110} height={100} />
        </div>
        <p className="text-center md:text-left text-white p-2">Copyright © 2023 Make ltd.</p>
        <p className="text-center text-white">All rights reserved</p>
        <div className="flex flex-row justify-center align-middle">
          <Link href="/" className="__footer__menu__item __footer__social">
            <i className="bx bxl-facebook-circle"></i>
          </Link>
          <Link href="/" className="__footer__menu__item __footer__social">
            <i className="bx bxl-linkedin-square"></i>
          </Link>
          <Link href="/" className="__footer__menu__item __footer__social">
            <i className="bx bxl-twitter"></i>
          </Link>
          <Link href="/" className="__footer__menu__item __footer__social">
            <i className="bx bxl-dribbble"></i>
          </Link>
        </div>
        <hr className="md:hidden w-10" />
      </div>
      <div className="sm:text-center md:text-left flex flex-col p-2">
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
      <div className="sm:text-center md:text-left flex flex-col p-2">
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
                  className="placeholder:text-slate-600"
                />
                <button type="submit" className="__subscribe__btn">
                  <i className="bx bx-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
      {/* <div className="col-span-2">
        <div className="grid grid-cols-3 gap-4  __footer__menu">



        </div>
      </div> */}
    </div>
  );
}

export default Footer;
