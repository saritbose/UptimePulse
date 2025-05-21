import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricings = () => {
  return (
    <>
      <Card className="bg-black shadow text-white border-0 hover:border hover:border-pink-800/80 hover:shadow-pink-800 hover:shadow-md">
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
          <Button className="bg-neutral-950 cursor-pointer">Get Started</Button>
        </CardFooter>
      </Card>
      <Card className="relative bg-black shadow text-white border-pink-800/80 hover:border-pink-800 hover:shadow-md hover:shadow-pink-800">
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
      <Card className="bg-black shadow text-white border-0 hover:border hover:border-pink-800/80 hover:shadow-md hover:shadow-pink-800">
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
    </>
  );
};

export default Pricings;
