import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const OverallPage = () => {
  return (
    <Card className="w-full rounded-xl">
      <CardHeader>
        <CardTitle>Head-to-Head Comparison</CardTitle>
        <CardDescription>Winning rate and other metrics </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col mb-3">
          <div className="flex justify-between mb-3">
            <p>24</p>
            <p>Wins</p>
            <p>44</p>
          </div>
          <Progress value={33} />
        </div>
        <div className="flex flex-col mb-3">
          <div className="flex justify-between mb-3">
            <p>24</p>
            <p>Avg. Response Time (s)</p>
            <p>44</p>
          </div>
          <Progress value={33} />
        </div>
        <div className="flex flex-col mb-3">
          <div className="flex justify-between mb-3">
            <p>24</p>
            <p>Avg. Token Generation Time (s)</p>
            <p>44</p>
          </div>
          <Progress value={33} />
        </div>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default OverallPage;
