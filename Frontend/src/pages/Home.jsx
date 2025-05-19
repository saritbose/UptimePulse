import React from "react";

const Home = () => {
  return (
    <div className="bg-black text-white py-5">
      {/* HEADER */}
      <header className="flex justify-between text-sm px-10">
        <div className="flex">
          <div>@</div>
          <div>UptimePulse</div>
        </div>
        <div className="hidden md:flex gap-8 text-neutral-400">
          <div>Features</div>
          <div>Products</div>
          <div>Community</div>
          <div>Pricing</div>
          <div>Company</div>
        </div>
        <div className="rainbow rounded-2xl p-[1px]">
          <div className="bg-black rounded-2xl py-1.5 px-4 text-xs cursor-pointer text-white hover:text-neutral-300 ">
            Free Trial
          </div>
        </div>
      </header>
      {/* CTA */}
      <div className="text-center mt-10 px-7">
        <div className="text-5xl text-wrap">
          Where trust and{" "}
          <span className="block">
            credit meet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-400 to-blue-500">
              confidence.
            </span>
          </span>
        </div>
        <p className="text-xs my-5 px-20 text-neutral-200/70">
          UptimePulse displays customized suggestions based on your credit
          profile. Additionally, before{" "}
          <span className="md:block">
            applying, you can view your Approval Odds without affecting your
            scores.
          </span>
        </p>
        <div className="flex items-center justify-center gap-5">
          <div className="rainbow rounded-full p-[0.8px]">
            <div className="rounded-full bg-black px-5 py-2 ">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-50% to-sky-400">
                START FOR FREE
              </span>
            </div>
          </div>
          <div className="rainbow rounded-full p-[0.8px]">
            <div className="rounded-full bg-black px-5 py-2 ">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-50% to-sky-400">
                TALK EXPERTS
              </span>
            </div>
          </div>
        </div>
        {/* CHARTS */}
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <div>
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-50% to-sky-300">
            TRUSTED BY LEADING BRANDS
          </span>
          <div className="flex justify-around text-neutral-400 my-3">
            <div>Halimark</div>
            <div>Aircell</div>
            <div>Qatar Air</div>
            <div>Lionix</div>
            <div>pizzaHut</div>
          </div>
        </div>
      </div>
      {/* HOW IT WORKS ? */}
      <div className="py-10 text-center bg-gray-700/20 bg-gradient-to-b from-gray-700/20 via-gray-900/10 to-black">
        <div className="text-4xl font-semibold">How does it work?</div>
        <p className="text-xs my-5 px-20 text-neutral-200/70">
          UptimePulse displays customized suggestions based on your credit
          profile. Additionally, before{" "}
          <span className="md:block">
            applying, you can view your Approval Odds without affecting your
            scores.
          </span>
        </p>
        <div className="flex flex-col md:flex-row justify-around gap-10 md:gap-20 px-10 my-20">
          <div className="text-center md:text-left border py-5">
            <div className="text-2xl font-semibold mb-5">
              Set up and{" "}
              <span className="md:block text-nowrap">get organized</span>
            </div>
            <p className="text-neutral-400 text-xs px-20 md:px-0">
              Define your plan, set up workflows, add team members, mark
              deadlines, create triggers for alerts and notifications.
            </p>
          </div>
          <div className="text-center md:text-left border py-5">
            <div className="text-2xl font-semibold mb-5">
              Monitor <span className="md:block text-nowrap">progress</span>
            </div>
            <p className="text-neutral-400 text-xs px-20 md:px-0">
              Monitor and analyze your team's performance in real-time, stay
              ahead of potential roadblocks and delays, get periodic updates.
            </p>
          </div>
          <div className="text-center md:text-left border py-5">
            <div className="text-2xl font-semibold mb-5">
              Stay on track{" "}
              <span className="md:block text-nowrap">throughout</span>
            </div>
            <p className="text-neutral-400 text-xs px-20 md:px-0">
              Adapt your plan and course-correct where needed, never miss a
              deadline, prioritize based on situation and deliver every time.
            </p>
          </div>
        </div>
      </div>
      {/* INFOS */}
      <div className="px-7">
        <div>Financial progress starts with credit health.</div>
        <p>
          Easy to use saas all in one platform to start, run, grow and simplify
          your business.
        </p>
        <div className="flex">
          <div>
            <div>Credit monitoring</div>
            <p>
              Get alerted to important changes to your reports. Learn what
              affects your scores and what you can do to improve them.
            </p>
          </div>
          <div>
            <div>Insights</div>
            <p>
              Learn what affects your scores and what you can do to improve
              them. Get personalized recommendations for ways to use.
            </p>
          </div>
          <div>
            <div>Better decisions</div>
            <p>
              Get personalized recommendations for ways to use your credit more
              wisely. Get alerted to important changes to your reports.
            </p>
          </div>
        </div>
      </div>
      {/* FEATURES SS */}
      <div>
        <div>
          <div>Build credit the easy way.</div>
          <p>
            If you don't have much credit history, song even 10 every saycheck
            might improve it. With just a few clicks, you παγ receive immediate
            approval and begin building your credit in little us two months.
          </p>
          <div>Learn More</div>
          <p>
            " You're eligible to apply through Credit Karma Money if your
            TransUnion credit score is 619 or below at the time of application.
            Members with a credit score of 619 or under could see an increase
            within 2 months. "
          </p>
          <p>Julian Alvarez, CEO,Hotspot</p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div>
        <div>
          <div>Get the personalized relief you need.</div>
          <p>
            Relief roadmap connects you to givemment support and personalized
            debt relief options, With just a few clicks, you may receive
            immediata-appruval and begin building your credit in as little as
            two months.
          </p>
          <div>Learn More</div>
          <p>
            " You're eligible to apply through Credit Karma Money if your
            TransUnion credit score is 619 or below at the time of application.
            Members with a credit score of 619 or under could see an increase
            within 2 months. "
          </p>
          <p>Julian Alvarez, CEO,Hotspot</p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      {/* ACHIEVEMENTS */}
      <div className="flex">
        <div>4.9</div>
        <div>7M</div>
        <div>1</div>
        <div>5.0</div>
        <div>4.9</div>
      </div>
      {/* REVIEWS */}
      <div>
        <div className="flex">
          <div>
            <div>What our client says</div>
            <p>
              Track your entire project from start to finish with beautiful
              views that make project planning a breeze manage your resources.
            </p>
          </div>
          <div>ALL SUCCESS STORIES</div>
        </div>
        <div>Testimonials</div>
      </div>
      {/* DESIGN */}
      <div>Ready to get started?</div>
      <div>@ UptimePulse</div>
      {/* FOOTER */}
      <div>
        <div className="flex">
          <div>
            <div>Platform</div>
            <div>
              <div>Email Marketing</div>
              <div>SMS</div>
              <div>Platform</div>
              <div>Instigations</div>
              <div>Features</div>
            </div>
          </div>
          <div>
            <div>Support</div>
            <div>
              <div>Help Centre</div>
              <div>Community</div>
              <div>Academy</div>
              <div>Developer Portal</div>
              <div>Legal</div>
            </div>
          </div>
          <div>
            <div>Resources</div>
            <div>
              <div>Blog</div>
              <div>Guides And Reports</div>
              <div>FAQ</div>
              <div>Help Centre</div>
            </div>
          </div>
          <div>
            <div>Company</div>
            <div>
              <div>About Us</div>
              <div>Customers</div>
              <div>Careers</div>
              <div>Contact Us</div>
              <div>Partners</div>
            </div>
          </div>
          <div>
            <div>Join Our Newsletter</div>
            <button>Enter your mail</button>
            <p>
              * Will send you weekly updates for your better business
              management.
            </p>
          </div>
        </div>
        <div className="flex">
          <div>2025. All Rights Reserved</div>
          <div>T F I</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
