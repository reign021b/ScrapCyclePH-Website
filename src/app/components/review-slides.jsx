"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

import Image from "next/image";
import { LiaFacebookF } from "react-icons/lia";

const ReviewSlides = () => {
  return (
    <Swiper
      spaceBetween={15}
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay={{
        delay: 1800,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      breakpoints={{
        640: {
          scale: 0.8,
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          centeredSlides: true,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
          centeredSlides: true,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 40,
          centeredSlides: true,
        },
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {/* user review 1 */}
      <SwiperSlide>
        <div className="w-full border border-slate-300 rounded-3xl overflow-clip mx-8 text-left">
          {/* image */}
          <div className="relative w-full h-[300px]">
            <Image
              src="/reviews/user1-pic.png"
              fill
              style={{ objectFit: "cover" }}
              alt="ScrapCycle App Phone"
            />
          </div>

          {/* details */}
          <div className="py-6 px-5">
            {/* top */}
            <div className="flex items-center">
              {/* user image */}
              <div className="w-14 h-14 bg-[url('/reviews/kaito.jpg')] bg-cover rounded-full" />
              {/* name */}
              <div className="ml-3 mr-auto">
                <h4 className="font-semibold text-lg">Kaito Rokujochigusa</h4>
                <p className="text-sm">Posted on Facebook</p>
              </div>
              {/* link button */}
              <a
                target="_blank"
                href="https://www.facebook.com/franciscomikel/posts/pfbid0ssqZVsbxVxJhWM2WAJhDZrji1dxZDFQoPTNRcUyDXRPjxyvK2wKCnudYuiaFmx9bl"
                className="h-11 w-11 flex items-center justify-center text-blue-600 border border-blue-500 hover:bg-blue-50 rounded-full text-2xl"
              >
                <LiaFacebookF />
              </a>
            </div>
            <p className="text-sm mt-4">
              Thank you ScrapCycle.ph for picking up or recyclables for such a
              reasonable price. #SupportStartUp #newyeardecluttering
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* user review 2 */}
      <SwiperSlide>
        <div className="w-full border border-slate-300 rounded-3xl overflow-clip mx-8 text-left">
          {/* image */}
          <div className="relative w-full h-[250px]">
            <Image
              src="/reviews/user2-pic.png"
              fill
              style={{ objectFit: "cover" }}
              alt="ScrapCycle App Phone"
            />
          </div>

          {/* details */}
          <div className="py-6 px-5">
            {/* top */}
            <div className="flex items-center">
              {/* user image */}
              <div className="w-14 h-14 bg-[url('/reviews/celia.jpg')] bg-cover rounded-full" />
              {/* name */}
              <div className="ml-3 mr-auto">
                <h4 className="font-semibold text-lg">Celia Marie</h4>
                <p className="text-sm">Posted on Facebook</p>
              </div>
              {/* link button */}
              <a
                target="_blank"
                href="https://www.facebook.com/lieca.me/posts/pfbid0WoZM9ccLBt2LYCNLdHTD4Spzu4ghFbVvjdYkonNd64Enem4DphMN7UGJexywwQEQl"
                className="h-11 w-11 flex items-center justify-center text-blue-600 border border-blue-500 hover:bg-blue-50 rounded-full text-2xl"
              >
                <LiaFacebookF />
              </a>
            </div>
            <p className="text-sm mt-4">
              Easy and Hassle free transaction. Thank you so much ScrapCycle.ph
              🥰 #TRASHTOCASH
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* user review 3 */}
      <SwiperSlide>
        <div className="w-full border border-slate-300 rounded-3xl overflow-clip mx-8 text-left">
          {/* image */}
          <div className="relative w-full h-[310px]">
            <Image
              src="/reviews/user3-pic.png"
              fill
              style={{ objectFit: "cover" }}
              alt="ScrapCycle App Phone"
            />
          </div>

          {/* details */}
          <div className="py-6 px-5">
            {/* top */}
            <div className="flex items-center">
              {/* user image */}
              <div className="w-14 h-14 bg-[url('/reviews/neil.jpg')] bg-cover rounded-full" />
              {/* name */}
              <div className="ml-3 mr-auto">
                <h4 className="font-semibold text-lg">Neil Baran</h4>
                <p className="text-sm">Posted on Facebook</p>
              </div>
              {/* link button */}
              <a
                target="_blank"
                href="https://www.facebook.com/photo?fbid=7047378718652582&set=a.757294280994422"
                className="h-11 w-11 flex items-center justify-center text-blue-600 border border-blue-500 hover:bg-blue-50 rounded-full text-2xl"
              >
                <LiaFacebookF />
              </a>
            </div>
            <p className="text-sm mt-4">
              Turn your garbage to cash Thanks to ScrapCycle.ph 💯
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* user review 4 */}
      <SwiperSlide>
        <div className="w-full border border-slate-300 rounded-3xl overflow-clip mx-8 text-left">
          {/* image */}
          <div className="relative w-full h-[250px]">
            <Image
              src="/reviews/user4-pic.png"
              fill
              style={{ objectFit: "cover" }}
              alt="ScrapCycle App Phone"
            />
          </div>

          {/* details */}
          <div className="py-6 px-5">
            {/* top */}
            <div className="flex items-center">
              {/* user image */}
              <div className="w-14 h-14 bg-[url('/reviews/bryan.jpg')] bg-cover rounded-full" />
              {/* name */}
              <div className="ml-3 mr-auto">
                <h4 className="font-semibold text-lg">Bryan Ondangan</h4>
                <p className="text-sm">Posted on Facebook</p>
              </div>
              {/* link button */}
              <a
                target="_blank"
                href="https://www.facebook.com/footbolista10/posts/pfbid0tgacmrGbgcQswim2SAW9WYKykuKB6PmYm4Xpszvp61Fjn8qUskNoWCK9SovGwm7Ul"
                className="h-11 w-11 flex items-center justify-center text-blue-600 border border-blue-500 hover:bg-blue-50 rounded-full text-2xl"
              >
                <LiaFacebookF />
              </a>
            </div>
            <p className="text-sm mt-4">From trash to cash 🙂 ScrapCycle.ph</p>
          </div>
        </div>
      </SwiperSlide>

      {/* user review 7 */}
      <SwiperSlide>
        <div className="w-full border border-slate-300 rounded-3xl overflow-clip mx-8 text-left">
          {/* image */}
          <div className="relative w-full h-[350px]">
            <Image
              src="/reviews/user7-pic.png"
              fill
              style={{ objectFit: "cover" }}
              alt="ScrapCycle App Phone"
            />
          </div>

          {/* details */}
          <div className="py-6 px-5">
            {/* top */}
            <div className="flex items-center">
              {/* user image */}
              <div className="w-14 h-14 bg-[url('/reviews/rjan.jpg')] bg-cover rounded-full" />
              {/* name */}
              <div className="ml-3 mr-auto">
                <h4 className="font-semibold text-lg">Rjan Tibay</h4>
                <p className="text-sm">Posted on Facebook</p>
              </div>
              {/* link button */}
              <a
                target="_blank"
                href="https://www.facebook.com/permalink.php?story_fbid=pfbid0RCfAjuuv8J3UDvxpoUixVRgwNDrnsy8vWx4JRPKoKQ3oY7rqmjr7xAc53aB9nJrel&id=100009773763743"
                className="h-11 w-11 flex items-center justify-center text-blue-600 border border-blue-500 hover:bg-blue-50 rounded-full text-2xl"
              >
                <LiaFacebookF />
              </a>
            </div>
            <p className="text-sm mt-4">
              Ready for pickup ScrapCycle.ph 😆😆😆 arun ma limpyo ang palibot.
              Almost 200 PC's bottles and mix plastic etc.
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* user review 5 */}
      <SwiperSlide>
        <div className="w-full border border-slate-300 rounded-3xl overflow-clip mx-8 text-left">
          {/* image */}
          <div className="relative w-full h-[230px]">
            <Image
              src="/reviews/user5-pic.png"
              fill
              style={{ objectFit: "cover" }}
              alt="ScrapCycle App Phone"
            />
          </div>

          {/* details */}
          <div className="py-6 px-5">
            {/* top */}
            <div className="flex items-center">
              {/* user image */}
              <div className="w-14 h-14 bg-[url('/reviews/manzaf.jpg')] bg-cover rounded-full" />
              {/* name */}
              <div className="ml-3 mr-auto">
                <h4 className="font-semibold text-lg">Man Zaf</h4>
                <p className="text-sm">Posted on Facebook</p>
              </div>
              {/* link button */}
              <a
                target="_blank"
                href="https://www.facebook.com/permalink.php?story_fbid=pfbid02Gw7hNmyNE6yQTLmHaW3KD5W9rvb8MiauAk8Ynp3uTwcXNshhxD7C4MUQokiZw1rsl&id=61553419143078"
                className="h-11 w-11 flex items-center justify-center text-blue-600 border border-blue-500 hover:bg-blue-50 rounded-full text-2xl"
              >
                <LiaFacebookF />
              </a>
            </div>
            <p className="text-sm mt-4">
              They will contact you ahead of time for any updates or adjustments
              on your booked schedule. It is a very convenient and priced list
              of the collected wastes that can also be viewed on their app as
              well. This is a very good initiative for easy disposal of wastes,
              you can earn and help the community at the same time.
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* user review 6 */}
      <SwiperSlide>
        <div className="w-full border border-slate-300 rounded-3xl overflow-clip mx-8 text-left">
          {/* image */}
          <div className="relative w-full h-[350px]">
            <Image
              src="/reviews/user6-pic.png"
              fill
              style={{ objectFit: "cover" }}
              alt="ScrapCycle App Phone"
            />
          </div>

          {/* details */}
          <div className="py-6 px-5">
            {/* top */}
            <div className="flex items-center">
              {/* user image */}
              <div className="w-14 h-14 bg-[url('/reviews/emanj.png')] bg-cover rounded-full" />
              {/* name */}
              <div className="ml-3 mr-auto">
                <h4 className="font-semibold text-lg">Eemanuj Jga</h4>
                <p className="text-sm">Posted on Facebook</p>
              </div>
              {/* link button */}
              <a
                target="_blank"
                href="https://www.facebook.com/photo.php?fbid=7644858675542578&set=a.765967183431796&type=3"
                className="h-11 w-11 flex items-center justify-center text-blue-600 border border-blue-500 hover:bg-blue-50 rounded-full text-2xl"
              >
                <LiaFacebookF />
              </a>
            </div>
            <p className="text-sm mt-4">
              Chic and efficient way to get rid of your trash!!!😊 Just book
              your appointment through their app, click on the type of
              recyclable trash you"re getting rid off, you'll get a call for
              confirmation and they'll come with their truck wearing uniform
              shirts. I love their service, will definitely recommend to my
              friends. You should give them a try too.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewSlides;
