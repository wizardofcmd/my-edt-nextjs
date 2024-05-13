import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LatestLessons() {
  return (
    <Card>
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
