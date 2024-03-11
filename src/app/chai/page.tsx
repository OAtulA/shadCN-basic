import { Button } from "@/components/ui/button";

function ChaiPage() {
  return (
    <main className="h-full flex items-center justify-center flex-col">
      <div>Chai Page 🥳️🎉️</div>
      <button>Test button</button>
      <Button variant='chai'> Chai button</Button>
      <Button className="my-4" variant={"secondary"}>
        ShadCN button
      </Button>
      <Button className="mt-8" variant={"destructive"} size="lg">
        ShadCN button
      </Button>
    </main>
  );
}

export default ChaiPage;
