import React, { useEffect } from "react";
import {
  ArrowRight,
  Bell,
  Bird,
  Cat,
  ClockFading,
  Dog,
  GitFork,
  Snail,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import Testimonials from "../Component/Testimonials";
import Pricings from "@/Component/Pricings";
import Features from "@/Component/Features";
import Chart1 from "@/Component/Chart1";
import Chart2 from "@/Component/Chart2";
import Chart3 from "@/Component/Chart3";
import { SignInButton, SignUpButton, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="bg-black text-white py-5">
      {/* HEADER */}
      <header className="flex justify-between text-sm px-10">
        <div className="flex gap-2 items-center">
          <img src="/UptimePulseLogo.png" />
          <div>UptimePulse</div>
        </div>
        <div className="hidden md:flex gap-8 text-neutral-400">
          <div>Home</div>
          <div>How It Works</div>
          <div>Features</div>
          <div>Pricing</div>
        </div>
        <SignInButton mode="modal">
          <div className="rainbow rounded-2xl p-[1px]">
            <div className="bg-black rounded-2xl py-1.5 px-4 text-xs cursor-pointer text-white hover:text-neutral-300 ">
              Login
            </div>
          </div>
        </SignInButton>
      </header>
      {/* CTA */}
      <div className="text-center mt-10 px-7">
        <div className="text-5xl text-wrap">
          Never Miss a{" "}
          <span className="block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-400 to-blue-500">
              Downtime{" "}
            </span>
            Again
          </span>
        </div>
        <p className="text-xs my-5 px-20 text-neutral-200/70">
          Lightning-fast, developer-friendly uptime{" "}
          <span className="block">monitoring + instant alerts.</span>
        </p>
        <div className="flex flex-col gap-10 items-center">
          <div className="flex items-center justify-center gap-5">
            <SignUpButton mode="modal">
              <div className="rainbow rounded-full p-[0.8px] cursor-pointer">
                <div className="rounded-full bg-black px-5 py-2">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-50% to-sky-400">
                    Try Free for 14 Days
                  </span>
                </div>
              </div>
            </SignUpButton>
            <div className="rainbow rounded-full p-[0.8px] cursor-pointer">
              <div className="rounded-full bg-black px-5 py-2 ">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-50% to-sky-400">
                  View Demo Site
                </span>
              </div>
            </div>
          </div>
          {/* CHARTS */}
          <div className="flex w-full flex-col lg:flex-row items-center justify-center overflow-hidden gap-5 mb-5">
            <Chart1 />
            <Chart3 />
            <Chart2 />
          </div>
        </div>
        <div>
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-50% to-sky-300">
            TRUSTED BY LEADING BRANDS
          </span>
          <div className="flex items-center justify-between text-neutral-400 my-3">
            <div className="flex items-center mr-2">
              <img className="w-7" src="/Hallmark.jpg" />
              <div>Halimark</div>
            </div>
            <div className="flex items-center mr-2">
              <img className="w-7" src="/Aircell.jpg" />
              <div>Aircell</div>
            </div>
            <div className="flex items-center text-nowrap mr-2">
              <img className="w-7" src="/Quatarair.jpg" />
              <div>Qatar Air</div>
            </div>
            <div className="flex items-center mr-2">
              <img className="w-7" src="/Lionix.jpg" />
              <div>Lionix</div>
            </div>
            <div className="flex items-center mr-2">
              <img className="w-7" src="/pizzahut.jpg" />
              <div>pizzaHut</div>
            </div>
          </div>
        </div>
      </div>
      {/* HOW IT WORKS ? */}
      <div className="py-10 text-center bg-gray-700/20 bg-gradient-to-b from-gray-700/20 to-black">
        <div className="text-4xl font-semibold">How UptimePulse Works?</div>
        <div className="flex flex-col md:flex-row justify-around gap-5 md:gap-20 px-10 my-15">
          <div className="flex flex-col items-center text-center py-5">
            <ClockFading size={40} />
            <div className="text-2xl font-semibold mt-2 mb-5 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-50% to-sky-300">
              Configure Your{" "}
              <span className="md:block text-nowrap">Monitors</span>
            </div>
            <p className="text-neutral-400 text-xs px-20 md:px-0">
              Add any URL in seconds. Choose check-intervals down to 1 minute.
            </p>
          </div>
          <div className="flex flex-col items-center text-center  py-5">
            <GitFork size={40} />
            <div className="text-2xl font-semibold mt-2 mb-5 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-50% to-sky-300">
              Automated{" "}
              <span className="md:block text-nowrap">Health Checks</span>
            </div>
            <p className="text-neutral-400 text-xs px-20 md:px-0">
              Our cron-powered backend pings your sites every 5 minutes and logs
              status & response time.
            </p>
          </div>
          <div className="flex flex-col items-center text-center  py-5">
            <Bell size={40} />
            <div className="text-2xl font-semibold mt-2 mb-5 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-50% to-sky-300">
              Instant Alerts{" "}
              <span className="md:block text-nowrap">& Reports</span>
            </div>
            <p className="text-neutral-400 text-xs px-20 md:px-0">
              Get emails on downtime, view uptime percentages, and share public
              status pages.
            </p>
          </div>
        </div>
      </div>
      {/* FEATURES SECTION */}
      <div className="px-7">
        <Features />
      </div>
      {/* SUBSCRIPTION SECTION */}
      <div className="px-7 text-center">
        <div className="text-4xl font-semibold mb-15">Pick Your Plan</div>
        <div className="px-7 grid grid-rows-3 md:grid-cols-3 md:grid-rows-none justify-around">
          <Pricings />
        </div>
      </div>
      {/* REVIEWS */}
      <img src="/Reviews.jpg" />
      <div className="px-7 mt-10">
        <div className="flex justify-between items-baseline">
          <div>
            <div className="text-4xl font-semibold mb-5">
              What our client says
            </div>
            <p className="text-sm text-neutral-400/80">
              Track your entire project from start to finish with beautiful
              views that make project planning a breeze manage your resources.
            </p>
          </div>
          <div className="w-fit">
            <div className="hidden lg:block rainbow rounded-full p-[0.8px] cursor-pointer">
              <div className="rounded-full bg-black px-5 py-2 ">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-50% to-sky-400">
                  ALL SUCCESS STORIES
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <Testimonials />
        </div>
      </div>
      {/* DESIGN */}
      <div className="py-15 font-mono text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-300/80 to-sky-400/70">
        Ready to Stay Online 24/7?
      </div>
      <div className="flex gap-2 items-center justify-center mb-10">
        <img src="/UptimePulseLogo.png" />
        <div>UptimePulse</div>
      </div>
      {/* FOOTER */}
      <div className="px-7">
        <div className="flex gap-5 justify-evenly">
          <div className="text-left">
            <div>Platform</div>
            <div className="text-neutral-400/80 mt-7">
              <div>Email Marketing</div>
              <div>SMS</div>
              <div>Platform</div>
              <div>Instigations</div>
              <div>Features</div>
            </div>
          </div>
          <div>
            <div>Support</div>
            <div className="text-neutral-400/80 mt-7">
              <div>Help Centre</div>
              <div>Community</div>
              <div>Academy</div>
              <div>Developer Portal</div>
              <div>Legal</div>
            </div>
          </div>
          <div>
            <div>Resources</div>
            <div className="text-neutral-400/80 mt-7">
              <div>Blog</div>
              <div>Guides And Reports</div>
              <div>FAQ</div>
              <div>Help Centre</div>
            </div>
          </div>
          <div>
            <div>Company</div>
            <div className="text-neutral-400/80 mt-7">
              <div>About Us</div>
              <div>Customers</div>
              <div>Careers</div>
              <div>Contact Us</div>
              <div>Partners</div>
            </div>
          </div>
          <div className="hidden md:block ml-10">
            <div className="text-xl">Join Our Newsletter</div>
            <div className="my-2 relative">
              <Input
                type="email"
                className="rounded-full h-10 bg-white text-black"
                placeholder="Enter your mail"
              />
              <div className="absolute right-1 top-0.5 w-8.5 h-8.5 flex items-center justify-center rounded-full text-transparent bg-gradient-to-r from-red-400 via-50% to-sky-400">
                <ArrowRight size={17} className="text-white" />
              </div>
            </div>
            <p className="text-neutral-600">
              * Will send you weekly updates for your better business
              management.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-end mt-5">
          <div className="text-xs">
            © 2025 Sarit Bose • UptimePulse. All rights reserved.
          </div>
          <div className="flex gap-1">
            <Bird size={20} />
            <Cat size={20} />
            <Dog size={20} />
            <Snail size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
