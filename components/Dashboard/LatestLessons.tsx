import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface LatestLessonsProps {
  className: string;
}

export default function LatestLessons({ className }: LatestLessonsProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Latest Lessons</CardTitle>
        <CardDescription>{`Latest lessons for [Type of License]`}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
