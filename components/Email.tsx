import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface EmailProps {
  title: string;
}

export default function Email({ title }: EmailProps) {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        className=" placeholder:text-gray-600"
        type="email"
        placeholder="Your Email Here"
      />
      <Button className="bg-[#65806b] text-white" type="submit">
        {title}
      </Button>
    </div>
  );
}
