import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { motion, useInView } from "framer-motion";

export default function Home() {
  const heroRef = useRef(null);
  const stepRef = useRef(null);
  const aboutRef = useRef(null);
  const tesminationalRef = useRef(null);
  const brandRef = useRef(null);
  const workRef = useRef(null);
  const statRef = useRef(null);
  const newRef = useRef(null);
  const contactRef = useRef(null);
  const headerRef = useRef(null);

  const navRef : any = useRef(null);

  const heroInView = useInView(heroRef, {
    // once: true, // chi thuc hien 1 lan
    amount: 0.2,
  });

  const stepInView = useInView(stepRef, {
    // once: true, // chi thuc hien 1 lan
    amount: 0.2,
  });

  const aboutInView = useInView(aboutRef, {
    // once: true, // chi thuc hien 1 lan
    amount: 0.2,
  });

  const testInView = useInView(tesminationalRef, {
    // once: true, // chi thuc hien 1 lan
    amount: 0.2,
  });

  const brandInView = useInView(brandRef, {
    // once: true, // chi thuc hien 1 lan
    amount: 0.2,
  });

  const workInView = useInView(workRef, {
    // once: true, // chi thuc hien 1 lan
    amount: 0.2,
  });

  const statInView = useInView(statRef, {
    // once: true, // chi thuc hien 1 lan
    amount: 0.2,
  });

  const newInView = useInView(newRef, {
    // once: true, // chi thuc hien 1 lan
    amount: 0.2,
  });

  const contactInView = useInView(contactRef, {
    // once: true, // chi thuc hien 1 lan
    amount: 0.2,
  });

  const openNavMobile = () => {
    console.log("open nav mobile");
    if (navRef.current) {
      navRef.current.classList.toggle("nav-is-open");
    }
  };

  // Hàm để scroll tới section tương ứng
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    const headerHeight = 300;
    if (ref.current) {
      // ref.current.scrollIntoView({ behavior: "smooth" });
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="bg-gray-100">
        {/* header */}
        <header
          ref={headerRef}
          className="sticky top-0 h-[90px] shadow-xl z-30 bg-white"
        >
          <div className="container mx-auto flex justify-between h-full items-center">
            {/* Logo */}
            <a href="#">
              <img src="/logo.svg" />
            </a>
            {/* nav */}
            <nav>
              {/* nav mobile trigger */}
              <div
                className="cursor-pointer lg:hidden"
                id="nav_trigger_btn"
                onClick={openNavMobile}
              >
                <i className="ri-menu-line text-4xl text-primary"></i>
              </div>

              <ul
                className="fixed w-full h-0 p-0 bg-white overflow-hidden border-t top-[90px]
              left-0 flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0
              lg:border-none lg:h-full transition-all duration-300 cursor-pointer"
                id="nav-menu"
                ref={navRef}
              >
                <li>
                  <a onClick={() => scrollToSection(heroRef)}>Home</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection(aboutRef)}>About</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection(tesminationalRef)}>
                    Testiomonials
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection(workRef)}>Our work</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection(newRef)}>News</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection(contactRef)}>Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* page warrper */}
        <main className="max-w-[1920px] mx-auto bg-white overflow-hidden">
          {/* girl img */}
          <div></div>

          {/* hero */}
          <section
            className="hero h-[640px] xl:h-[840px] bg-hero 
          bg-center lg:bg-cover bg-no-repeat bg-fixed 
          xl:rounded-bl-[290px] relative z-20"
          >
            <div
              className="container mx-auto h-full flex items-center justify-center
            xl:justify-start"
            >
              {/* text */}
              <motion.div
                initial={{ opacity: 0, y: 50 }} // Bắt đầu ẩn và nằm 50px dưới vị trí hiện tại
                animate={
                  heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                } // Khi animation hoàn thành, nó sẽ xuất hiện đầy đủ và nằm đúng vị trí
                transition={{ duration: 0.8, ease: "easeOut" }} // Thời gian và kiểu easing cho animation
                ref={heroRef}
                className="hero__text w-[576px] flex flex-col
              items-center text-center"
              >
                <h1 className="h1 mb-8">Let Your Home Be Unique</h1>
                <p className="mb-8">
                  There are many variations of the passages of lorem Ipsum from
                  available, variations of the passages.
                </p>
                <button className="btn btn-primary mx-auto xl:mx-0">
                  Get free estimation
                  <i className="ri-arrow-right-line" />
                </button>
              </motion.div>
            </div>
          </section>

          {/* steps */}
          <section className="steps mt-[80px] xl:mt-[200px] relative z-20">
            <div className="container mx-auto">
              {/* gird items */}
              <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
                {/* step 1 */}
                <motion.div
                  ref={stepRef}
                  initial={{ opacity: 0, y: 50 }} // Bắt đầu ẩn và nằm 50px dưới vị trí hiện tại
                  animate={
                    stepInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  } // Khi animation hoàn thành, nó sẽ xuất hiện đầy đủ và nằm đúng vị trí
                  transition={{ duration: 0.8, ease: "easeOut" }} // Th
                  className="steps__step text-center"
                >
                  <div className="mb-4">
                    <i className="ri-compasses-2-line text-5xl text-accent"></i>
                  </div>
                  <h3 className="h3 mb-5">Project Planning</h3>
                  <p className="mb-5 max-w-md mx-auto">
                    There are many variations of the passages of lorem Ipsum
                    from available, majority.
                  </p>
                  <a href="#" className="font-medium flex justify-center gap-2">
                    Read more
                    <i className="ri-arrow-right-line text-accent"></i>
                  </a>
                </motion.div>
                {/* step 2 */}
                <motion.div
                  ref={stepRef}
                  initial={{ opacity: 0, y: 50 }} // Bắt đầu ẩn và nằm 50px dưới vị trí hiện tại
                  animate={
                    stepInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  } // Khi animation hoàn thành, nó sẽ xuất hiện đầy đủ và nằm đúng vị trí
                  transition={{ duration: 0.8, ease: "easeOut" }} // Th
                  className="steps__step text-center"
                >
                  <div className="mb-4">
                    <i className="ri-magic-line text-5xl text-accent"></i>
                  </div>
                  <h3 className="h3 mb-5">Gaining Materials</h3>
                  <p className="mb-5 max-w-md mx-auto">
                    There are many variations of the passages of lorem Ipsum
                    from available, majority.
                  </p>
                  <a href="#" className="font-medium flex justify-center gap-2">
                    Read more
                    <i className="ri-arrow-right-line text-accent"></i>
                  </a>
                </motion.div>
                {/* step 3 */}
                <motion.div
                  ref={stepRef}
                  initial={{ opacity: 0, y: 50 }} // Bắt đầu ẩn và nằm 50px dưới vị trí hiện tại
                  animate={
                    stepInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  } // Khi animation hoàn thành, nó sẽ xuất hiện đầy đủ và nằm đúng vị trí
                  transition={{ duration: 0.8, ease: "easeOut" }} // Th
                  className="steps__step text-center"
                >
                  <div className="mb-4">
                    <i className="ri-tools-line text-5xl text-accent"></i>
                  </div>
                  <h3 className="h3 mb-5">Project Execution</h3>
                  <p className="mb-5 max-w-md mx-auto">
                    There are many variations of the passages of lorem Ipsum
                    from available, majority.
                  </p>
                  <a href="#" className="font-medium flex justify-center gap-2">
                    Read more
                    <i className="ri-arrow-right-line text-accent"></i>
                  </a>
                </motion.div>
              </div>
            </div>
          </section>

          {/* about */}
          <section className="about mt-[80px] xl:mt-[200px] relative z-20">
            <div className="container mx-auto xl:px-0">
              <div
                className="flex flex-col xl:flex-row text-center xl:text-left justify-between
              items-center gap-8 xl:gap-[74px]"
              >
                {/* text */}
                <motion.div
                  initial={{ opacity: 0, x: -200 }} // Bắt đầu ẩn và nằm 50px dưới vị trí hiện tại
                  animate={
                    aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }
                  } // Khi animation hoàn thành, nó sẽ xuất hiện đầy đủ và nằm đúng vị trí
                  transition={{ duration: 1, ease: "easeOut" }} // Thời g
                  ref={aboutRef}
                  className="flex-1 order-2 xl:order-none max-w-xl xl:max-w-[410px]
                flex flex-col items-center xl:items-start gap-8"
                >
                  <h2 className="h2">
                    We Create The Art Of Stylish Living Stylishly
                  </h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layouts the points of using that it has a more-or-less
                    normal
                  </p>
                  {/* phone */}
                  <div className="flex items-center justify-center xl:justify-start gap-4">
                    <div
                      className="bg-accent/15 w-[93px] h-[93px] rounded-full flex
                     justify-center items-center"
                    >
                      <i className="ri-phone-fill text-accent text-4xl"></i>
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-bold">0987 562 321</div>
                      <div>Call Us Anytime</div>
                    </div>
                  </div>
                  {/* btn */}
                  <button className="btn btn-primary ">
                    Get free estimation
                    <i className="ri-arrow-right-line text-accent"></i>
                  </button>
                </motion.div>
                {/* img */}
                <motion.div
                  initial={{ opacity: 0, x: 200 }} // Bắt đầu ẩn và nằm 50px dưới vị trí hiện tại
                  animate={
                    aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }
                  } // Khi animation hoàn thành, nó sẽ xuất hiện đầy đủ và nằm đúng vị trí
                  transition={{ duration: 1, ease: "easeOut" }} // Thời g
                  className="about__img order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-none xl:mx-0"
                >
                  <img src="/about/img.png" alt="" />
                </motion.div>
              </div>
            </div>
          </section>

          {/* testimonial */}
          <section className="testimoial mt-[80px] xl:mt-[200px] relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 100 }} // Bắt đầu ẩn và nằm 50px dưới vị trí hiện tại
              animate={
                testInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
              } // Khi animation hoàn thành, nó sẽ xuất hiện đầy đủ và nằm đúng vị trí
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} // Thời g
              ref={tesminationalRef}
              className="testimoial__bg container mx-auto bg-accent-secondary rounded-[70px]
            px-6"
            >
              <div className="flex flex-col items-center pt-[88px] pb-[110px]">
                <h2 className="testimonital__title h2 mb-9 text-center">
                  What clients say
                </h2>
                {/* slider */}
                <div className="w-full">
                  <div className="testimonial__slider swiper h-[400px]">
                    <Swiper
                      spaceBetween={20}
                      // slidesPerView={3}
                      pagination={{ clickable: true }}
                      breakpoints={{
                        // Dưới 320px sẽ hiển thị 1 slide
                        320: { slidesPerView: 1 },
                        // Từ 768px trở lên sẽ hiển thị 2 slide
                        768: { slidesPerView: 2 },
                        // Từ 960px trở lên sẽ hiển thị 3 slide
                        960: { slidesPerView: 3 },
                      }}
                      modules={[Pagination]} // Đúng module Pagination
                    >
                      {/* slide 1*/}
                      <SwiperSlide>
                        {/* item */}
                        <div
                          className="testimonial__item w-full max-w-[450px] h-[340px]
                       bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto"
                        >
                          <div className="flex gap-4 mb-6">
                            <img />
                            <div>
                              <h3 className="h3">Natasha Mith</h3>
                              <div>Greenville, USA</div>
                            </div>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the typesetting
                            industry. Ipsum has been.
                          </p>
                        </div>
                      </SwiperSlide>
                      {/* slide 2*/}
                      <SwiperSlide>
                        {/* item */}
                        <div
                          className="testimonial__item w-full max-w-[450px] h-[340px]
                       bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto"
                        >
                          <div className="flex gap-4 mb-6">
                            <img />
                            <div>
                              <h3 className="h3">Natasha Mith</h3>
                              <div>Greenville, USA</div>
                            </div>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the typesetting
                            industry. Ipsum has been.
                          </p>
                        </div>
                      </SwiperSlide>
                      {/* slide 3*/}
                      <SwiperSlide>
                        {/* item */}
                        <div
                          className="testimonial__item w-full max-w-[450px] h-[340px]
                       bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto"
                        >
                          <div className="flex gap-4 mb-6">
                            <img />
                            <div>
                              <h3 className="h3">Natasha Mith</h3>
                              <div>Greenville, USA</div>
                            </div>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the typesetting
                            industry. Ipsum has been.
                          </p>
                        </div>
                      </SwiperSlide>
                      {/* slide 4*/}
                      <SwiperSlide>
                        {/* item */}
                        <div
                          className="testimonial__item w-full max-w-[450px] h-[340px]
                       bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto"
                        >
                          <div className="flex gap-4 mb-6">
                            <img />
                            <div>
                              <h3 className="h3">Natasha Mith</h3>
                              <div>Greenville, USA</div>
                            </div>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the typesetting
                            industry. Ipsum has been.
                          </p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    {/* swiper pagination */}
                    <div className="swiper-pagination"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* brand */}
          <section className="brands mt-[80px] xl:mt-[200px] relative z-20">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -200 }} // Bắt đầu ẩn và nằm 50px dưới vị trí hiện tại
                animate={
                  brandInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }
                } // Khi animation hoàn thành, nó sẽ xuất hiện đầy đủ và nằm đúng vị trí
                transition={{ duration: 1.5, ease: "easeOut" }} // Thời g
                ref={brandRef}
                className="flex flex-col xl:flex-row justify-between items-center gap-12"
              >
                <img className="brands__img" src="/brands/01.svg" alt="" />
                <img className="brands__img" src="/brands/02.svg" alt="" />
                <img className="brands__img" src="/brands/03.svg" alt="" />
                <img className="brands__img" src="/brands/04.svg" alt="" />
              </motion.div>
            </div>
          </section>

          {/* work */}
          <section className="work mt-[80px] xl:mt-[150px] relative z-20">
            <div className="container mx-auto  xl:px-0">
              {/* text */}
              <motion.div
                initial={{ opacity: 0, y: 100 }} // Bắt đầu ẩn và nằm 50px dưới vị trí hiện tại
                animate={
                  workInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                } // Khi animation hoàn thành, nó sẽ xuất hiện đầy đủ và nằm đúng vị trí
                transition={{ duration: 1, ease: "easeOut" }} // Thời g
                ref={workRef}
                className="text-center mb-24"
              >
                <h2 className="work__title mb-4 h2 ">Follow Our Project</h2>
                <p className="work__subtitle max-w-3xl mx-auto">
                  It is a logn establish fact that a reader will be distracted
                  by the of readable content of the page lookings at its layouts
                  point
                </p>
              </motion.div>
              {/* grid */}
              <motion.div
                initial={{ opacity: 0, y: 100 }} // Bắt đầu ẩn và nằm 50px dưới vị trí hiện tại
                animate={
                  workInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                } // Khi animation hoàn thành, nó sẽ xuất hiện đầy đủ và nằm đúng vị trí
                transition={{ duration: 1, ease: "easeOut" }} // Thời g
                ref={workRef}
                className="work__grid grid grid-cols-1 xl:grid-cols-2 
              gap-x-[104px] gap-y-[56px]"
              >
                {/* item 1*/}
                <div className="w-full max-w-[548px] h-full mx-auto">
                  <img className="mb-6" src="/work/01.png" alt="" />
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <h3 className="h3">Modern Kitchen</h3>
                      <p>Decor/Architecture</p>
                    </div>
                    <button className="bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
                      <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
                    </button>
                  </div>
                </div>
                {/* item 2*/}
                <div className="w-full max-w-[548px] h-full mx-auto">
                  <img className="mb-6" src="/work/02.png" alt="" />
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <h3 className="h3">Modern Kitchen</h3>
                      <p>Decor/Architecture</p>
                    </div>
                    <button className="bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
                      <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
                    </button>
                  </div>
                </div>
                {/* item 3*/}
                <div className="w-full max-w-[548px] h-full mx-auto">
                  <img className="mb-6" src="/work/03.png" alt="" />
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <h3 className="h3">Modern Kitchen</h3>
                      <p>Decor/Architecture</p>
                    </div>
                    <button className="bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
                      <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
                    </button>
                  </div>
                </div>
                {/* item 4*/}
                <div className="w-full max-w-[548px] h-full mx-auto">
                  <img className="mb-6" src="/work/04.png" alt="" />
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <h3 className="h3">Modern Kitchen</h3>
                      <p>Decor/Architecture</p>
                    </div>
                    <button className="bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
                      <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* stats */}
          <section
            className="stats mt-[80px] xl:mt-[150px] relative z-20
          bg-accent-secondary py-[80px] xl:py-[150px]"
          >
            <div className="container mx-auto">
              {/* grid */}
              <motion.div
                initial={{ opacity: 0, x: -200 }} // Bắt đầu ẩn và nằm 50px dưới vị trí hiện tại
                animate={
                  statInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }
                } // Khi animation hoàn thành, nó sẽ xuất hiện đầy đủ và nằm đúng vị trí
                transition={{ duration: 1.5, ease: "easeOut" }} // Thời g
                className="grid grid-cols-1 xl:grid-cols-4 gap-12"
              >
                {/*grid item  */}
                <div
                  ref={statRef}
                  className="stats__item text-center xl:border-r xl:border-accent"
                >
                  <h3 className="h1 font-primary text-accent">12</h3>
                  <p>Years Of Experience</p>
                </div>
                {/*grid item  */}
                <div className="stats__item text-center xl:border-r xl:border-accent">
                  <h3 className="h1 font-primary text-accent">85</h3>
                  <p>Projects Completed</p>
                </div>
                {/*grid item  */}
                <div className="stats__item text-center xl:border-r xl:border-accent">
                  <h3 className="h1 font-primary text-accent">15</h3>
                  <p>Active Projects</p>
                </div>
                {/*grid item  */}
                <div className="stats__item text-center">
                  <h3 className="h1 font-primary text-accent">99</h3>
                  <p>Happy Customers</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* news */}
          <section className="news mt-[80px] xl:mt-[150px] relative z-20">
            <div className="container mx-auto px-0">
              {/* text */}
              <motion.div
                initial={{ opacity: 0, y: 100 }} // Bắt đầu ẩn và nằm 50px dưới vị trí hiện tại
                animate={
                  newInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                } // Khi animation hoàn thành, nó sẽ xuất hiện đầy đủ và nằm đúng vị trí
                transition={{ duration: 1, ease: "easeOut" }} // Thời g
                ref={newRef}
                className="max-w-[810px] mx-auto text-center mb-[52px]"
              >
                <h2 className="news__title h2 mb-3">Artical & News</h2>
                <p className="news__subtitle">
                  It is a long established fact that a reader will be distracted
                  by the of readble content of a page when lookings at its
                  layouts the points of using
                </p>
              </motion.div>
              {/* grid */}
              <div className="news__grid grid grid-cols-1 xl:grid-cols-3 gap-[27px]">
                {/* grid item */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }} // Bắt đầu ẩn và nằm 50px dưới vị trí hiện tại
                  animate={
                    newInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                  } // Khi animation hoàn thành, nó sẽ xuất hiện đầy đủ và nằm đúng vị trí
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }} // Thời g
                  ref={newRef}
                  className="news__item w-full max-w-[382px] h-[520px] border
                 border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary
                 transition-all group cursor-pointer mx-auto xl:mx-0"
                >
                  <img className="mb-5" src="/news/01.png"></img>
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="h3">
                      {"Let's Get Solution For Building Contruction Work"}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-base">22 June, 2024</p>
                      <button
                        className="bg-accent-secondary w-[52px] h-[52px] rounded-full
                        group-hover:bg-white transition-all"
                      >
                        <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
                      </button>
                    </div>
                  </div>
                </motion.div>
                {/* grid item */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }} // Bắt đầu ẩn và nằm 50px dưới vị trí hiện tại
                  animate={
                    newInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                  } // Khi animation hoàn thành, nó sẽ xuất hiện đầy đủ và nằm đúng vị trí
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }} // Thời g
                  ref={newRef}
                  className="new__item w-full max-w-[382px] h-[520px] border
                 border-primary/20 p-[20px] rounded-[62px] hover:bg-accent-secondary
                 transition-all group cursor-pointer mx-auto xl:mx-0"
                >
                  <img className="mb-5" src="/news/01.png"></img>
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="h3">
                      {"Let's Get Solution For Building Contruction Work"}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-base">22 June, 2024</p>
                      <button
                        className="bg-accent-secondary w-[52px] h-[52px] rounded-full
                        group-hover:bg-white transition-all"
                      >
                        <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
                      </button>
                    </div>
                  </div>
                </motion.div>
                {/* grid item */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }} // Bắt đầu ẩn và nằm 50px dưới vị trí hiện tại
                  animate={
                    newInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                  } // Khi animation hoàn thành, nó sẽ xuất hiện đầy đủ và nằm đúng vị trí
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }} // Thời g
                  ref={newRef}
                  className="new__item w-full max-w-[382px] h-[520px] border
                 border-primary/20 p-[20px] rounded-[62px] hover:bg-accent-secondary
                 transition-all group cursor-pointer mx-auto xl:mx-0"
                >
                  <img className="mb-5" src="/news/01.png"></img>
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="h3">
                      {"Let's Get Solution For Building Contruction Work"}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-base">22 June, 2024</p>
                      <button
                        className="bg-accent-secondary w-[52px] h-[52px] rounded-full
                        group-hover:bg-white transition-all"
                      >
                        <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* contact */}
          <section className="contact mt-[80px] xl:mt-[150px] relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 100 }} // Bắt đầu ẩn và nằm 50px dưới vị trí hiện tại
              animate={
                contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
              } // Khi animation hoàn thành, nó sẽ xuất hiện đầy đủ và nằm đúng vị trí
              transition={{ duration: 2, ease: "easeOut" }}
              className="contact__container container mx-auto bg-primary rounded-[70px]
            py-[80px]"
            >
              <div
                ref={contactRef}
                className="contact__text max-w-[640px] mx-auto text-center"
              >
                <h2 className="h2 text-white mb-4">
                  Do you want to join Interno?
                </h2>
                <p className="text-white mb-8 max-w-sm xl:max-w-none mx-auto">
                  It is a long established fact will be distracted.
                </p>
                <button className="btn btn-accent mx-auto">
                  Connect with us{" "}
                  <i className="ri-arrow-right-line text-primary" />
                </button>
              </div>
            </motion.div>
          </section>

          {/* footer */}
          <footer className="footer mt-[180px] xl:mt-[150px] relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 100 }} // Bắt đầu ẩn và nằm 50px dưới vị trí hiện tại
              animate={
                contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
              } // Khi animation hoàn thành, nó sẽ xuất hiện đầy đủ và nằm đúng vị trí
              transition={{ duration: 2, ease: "easeOut", delay: 1 }}
              className="container mx-auto px-0"
            >
              <div
                className="flex flex-col xl:flex-row xl:gap-[100px]
            xl:mb-[150px]"
              >
                {/* left */}
                <div
                  className="footer__item w-full max-w-[400px] mx-auto mb-8
               text-center xl:text-left"
                >
                  {/* logo */}
                  <a
                    className="flex justify-center xl:justify-start mb-8"
                    href=""
                  >
                    <img src="/logo.svg" alt=""></img>
                  </a>
                  <p className="mb-8 text-xl">
                    It is a long established fact that a reader will be
                    distracted lookings.
                  </p>
                  {/* socials */}
                  <ul className="text-primary flex gap-[54px] justify-center xl:justify-start cursor-pointer">
                    <li>
                      <a>
                        <i className="ri-facebook-fill "></i>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="ri-twitter-fill "></i>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="ri-linkedin-fill "></i>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="ri-instagram-fill "></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* right */}
                <div
                  className="flex-1 flex flex-col xl:flex-row text-center 
              xl:text-left gap-12 xl:gap=[100px] xl:justify-end"
                >
                  <div className="footer__item">
                    <h3 className="h3 mb-3">Pages</h3>
                    <ul className="flex flex-col gap-4">
                      <li>
                        <a href="">About Us</a>
                      </li>
                      <li>
                        <a href="">Testimolials</a>
                      </li>
                      <li>
                        <a href="">Our Work</a>
                      </li>
                      <li>
                        <a href="">News</a>
                      </li>
                      <li>
                        <a href="">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer__item">
                    <h3 className="h3 mb-3">Services</h3>
                    <ul className="flex flex-col gap-4">
                      <li>
                        <a href="">Kitchen</a>
                      </li>
                      <li>
                        <a href="">Living Area</a>
                      </li>
                      <li>
                        <a href="">Bathroom</a>
                      </li>
                      <li>
                        <a href="">Bedroom</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer__item">
                    <h3 className="h3 mb-3">Contact</h3>
                    <div className="flex flex-col gap-6 text-[20px]">
                      <p>55 East Brichwood Ave. Brooklyn, New York 11201</p>
                      <p>contact@intergo.com</p>
                      <p>(123) 456 - 7890</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* copyright */}
            <p
              className="footer__copyright text-center text-lg py-10
            bg-white xl:border-t"
            >
              Copyright &copy; Interno 2024. All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
