import React from "react";
import Logo from "../assets/UptimePulseLogo.png";
import {
  Activity,
  BarChart,
  Bell,
  Clock,
  ClockFading,
  GitFork,
  Globe,
  LineChart,
  Mail,
  Send,
  Timer,
  UserPlus,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="bg-black text-white py-5">
      {/* HEADER */}
      <header className="flex justify-between text-sm px-10">
        <div className="flex gap-2 items-center">
          <img src={Logo} />
          <div>UptimePulse</div>
        </div>
        <div className="hidden md:flex gap-8 text-neutral-400">
          <div>Home</div>
          <div>How It Works</div>
          <div>Features</div>
          <div>Pricing</div>
        </div>
        <div className="rainbow rounded-2xl p-[1px]">
          <div className="bg-black rounded-2xl py-1.5 px-4 text-xs cursor-pointer text-white hover:text-neutral-300 ">
            Login
          </div>
        </div>
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
        <div className="flex items-center justify-center gap-5">
          <div className="rainbow rounded-full p-[0.8px]">
            <div className="rounded-full bg-black px-5 py-2 ">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-50% to-sky-400">
                Try Free for 14 Days
              </span>
            </div>
          </div>
          <div className="rainbow rounded-full p-[0.8px]">
            <div className="rounded-full bg-black px-5 py-2 ">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-50% to-sky-400">
                View Demo Site
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
        <div className="text-4xl font-semibold text-center">
          Features That Scale
        </div>
        <div className="flex flex-col items-center gap-10 my-15 py-10 overflow-hidden">
          <div className="flex gap-10">
            <div className=" border-l border-t border-neutral-400 shadow-lg shadow-neutral-300 p-5 w-1/2 md:w-70 h-40 transform transition-transform duration-300 hover:scale-95">
              <Activity className=" mb-3" />
              <div className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-50% to-sky-300">
                Real-Time Status
              </div>
              <p className="text-neutral-400 text-xs ">
                Live “Up/Down” badges with last-checked timestamp.
              </p>
            </div>
            <div className=" border-l border-t border-neutral-400 shadow-lg shadow-neutral-300 p-5 w-1/2 md:w-70 h-40 transform transition-transform duration-300 hover:scale-95">
              <Timer className=" mb-3" />
              <div className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-50% to-sky-300">
                Custom Intervals
              </div>
              <p className="text-neutral-400 text-xs ">
                Choose checks from 1 to 60 minutes to fit your needs.
              </p>
            </div>
          </div>
          <div className="flex gap-10">
            <div className=" border-l border-t border-neutral-400 shadow-lg shadow-neutral-300 p-5 w-1/2 md:w-70 h-40 transform transition-transform duration-300 hover:scale-95">
              <Globe className=" mb-3" />
              <div className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-50% to-sky-300">
                Public Status Pages
              </div>
              <p className="text-neutral-400 text-xs ">
                Branded status page (e.g., /status/yoursite) you can share.
              </p>
            </div>

            <div className=" border-l border-t border-neutral-400 shadow-lg shadow-neutral-300 p-5 w-1/2 md:w-70 h-40 transform transition-transform duration-300 hover:scale-95">
              <Mail className=" mb-3" />
              <div className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-50% to-sky-300">
                Email & Webhook Alerts
              </div>
              <p className="text-neutral-400 text-xs ">
                Instant notifications via email, Slack, or custom webhooks.
              </p>
            </div>
          </div>
          <div className="flex gap-10">
            <div className=" border-l border-t border-neutral-400 shadow-lg shadow-neutral-300 p-5 w-1/2 md:w-70 h-40 transform transition-transform duration-300 hover:scale-95">
              <LineChart className=" mb-3" />
              <div className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-50% to-sky-300">
                Uptime History Charts
              </div>
              <p className="text-neutral-400 text-xs ">
                Visualize uptime % and response times over any date range.
              </p>
            </div>
            <div className=" border-l border-t border-neutral-400 shadow-lg shadow-neutral-300 p-5 w-1/2 md:w-70 h-40 transform transition-transform duration-300 hover:scale-95">
              <Users className=" mb-3" />
              <div className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-50% to-sky-300">
                Team Collaboration
              </div>
              <p className="text-neutral-400 text-xs ">
                Invite teammates, assign roles, and manage shared monitors.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* SUBSCRIPTION SECTION */}
      <div className="px-7 text-center">
        <div className="text-4xl font-semibold mb-15">Pick Your Plan</div>
        <div className="px-7 grid grid-rows-3 md:grid-cols-3 md:grid-rows-none justify-around">
          <Card className="bg-black text-white border-0 hover:border hover:border-pink-800/80">
            <CardHeader>
              <CardTitle className="font-bold text-3xl">Free</CardTitle>
              <CardDescription>
                <span className="font-semibold text-2xl text-white">$0</span>
                /month
              </CardDescription>
            </CardHeader>
            <CardContent className="text-neutral-400">
              <p>Up to 3 monitors</p>
              <p>5min check-interval</p>
              <p>Email alerts</p>
              <p>Public status page</p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button className="bg-neutral-950 cursor-pointer">
                Get Started
              </Button>
            </CardFooter>
          </Card>
          <Card className="relative bg-black text-white border-pink-800/80 hover:border-pink-800">
            <CardHeader>
              <div>
                <span className="absolute right-2 top-1 font-extrabold text-xs text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-50% to-sky-300">
                  Most Popular
                </span>
              </div>
              <CardTitle className="font-bold text-3xl">Pro</CardTitle>
              <CardDescription>
                <span className="font-semibold text-2xl text-white">$9</span>
                /month
              </CardDescription>
            </CardHeader>
            <CardContent className="text-neutral-400">
              <p>Up to 25 monitors</p>
              <p>1min check-interval</p>
              <p>Email + Webhook alerts</p>
              <p>Charts PDF</p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button className="cursor-pointer bg-gradient-to-r from-red-500 via-50% to-sky-300 transform transition-transform duration-300 hover:scale-110">
                Start Free Trial
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-black text-white border-0 hover:border hover:border-pink-800/80">
            <CardHeader>
              <CardTitle className="font-bold text-3xl">Team</CardTitle>
              <CardDescription>
                <span className="font-semibold text-2xl text-white">$29</span>
                /month
              </CardDescription>
            </CardHeader>
            <CardContent className="text-neutral-400">
              <p>Unlimited monitors</p>
              <p>SMS + Slack alerts</p>
              <p>Team roles & permissions</p>
              <p>SLA Reports</p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button className="bg-neutral-950 cursor-pointer">
                Contact Sales
              </Button>
            </CardFooter>
          </Card>
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
