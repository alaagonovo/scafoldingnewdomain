import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="footerbg w-[92%] mx-auto xl:w-[100%]  py-[35px]  xl:p-[75px]">
      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-black text-[35px] sm:text-[67px] font-semibold my-[40px] lg:hidden"
      >
        Contact Info
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-10">
        <div
          className="h-[331px] sm:h-[400px] lg:h-[790px] w-[580] relative"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <Image src="/assets/footerview.webp" alt="" fill />
        </div>
        <div className="xl:ml-20 ml-0 sm:ml-10">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-black text-[67px] font-semibold mb-[90px] hidden lg:block"
          >
            Contact Info
          </h1>
          <p
            className="text-2xl md:text-3xl leading-10 font-medium mb-7 xl:mb-14"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            1000 Great West Road <br />
            BRENTFORD, TW8 9DW
          </p>
          <p
            className="text-2xl md:text-3xl leading-10 font-medium mb-10 xl:mb-20"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            (+44) 7449147099
            <br />
            info@thescaffolding.co.uk
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 xl:gap-14">
            <div>
              <h2
                className="text-2xl md:text-3xl leading-10 font-medium mb-5"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Business Hours
              </h2>
              <p
                className="text-2xl text-time mb-4"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Monday to Friday
                <br />
                9:00 am to 6:00 pm
              </p>
              <p
                className="text-2xl text-time mb-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                Saturday
                <br />
                9:00 am to 12:00 pm
              </p>
              <p
                className="text-2xl text-time"
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-offset="50"
              >
                Sunday
                <br />
                appointment only
              </p>
            </div>
            <div className="flex flex-col justify-between gap-8 sm:gap-0">
              <div>
                <h2
                  className="text-2xl md:text-3xl leading-10 font-medium mb-5"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Get Social
                </h2>
                <div
                  className="flex gap-4"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <Link
                    href="/"
                    className="relative w-[42px] h-[42px] rounded-full  ring-2 ring-btnbg"
                  >
                    <Image
                      src="/svgs/facebook.svg"
                      className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                      alt="facebook icon"
                      width={28}
                      height={28}
                      style={{ height: "28px" }}
                    />
                  </Link>
                  <Link
                    href="/"
                    className="relative w-[42px] h-[42px] rounded-full  ring-2 ring-btnbg"
                  >
                    <Image
                      src="/svgs/X.svg"
                      className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                      alt="facebook icon"
                      width={28}
                      height={28}
                      style={{ height: "28px" }}
                    />
                  </Link>
                  <Link
                    href="/"
                    className="relative w-[42px] h-[42px] rounded-full  ring-2 ring-btnbg"
                  >
                    <Image
                      src="/svgs/instagram.svg"
                      className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                      alt="facebook icon"
                      width={28}
                      height={28}
                      style={{ height: "28px" }}
                    />
                  </Link>
                </div>
              </div>
              <div
                className="relative w-[220px] h-[36px]"
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-offset="50"
              >
                <Image src="/svgs/logofoot.svg" alt="logo" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
