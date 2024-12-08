import { Card } from "@/shared/components/cards";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Card isHoverable isPressable header={<div></div>} className="p-4">
        <div className="w-full h-full">
          <h1 className="text-2xl font-semibold">Hello World</h1>
        </div>
      </Card>
    </div>
  );
}
