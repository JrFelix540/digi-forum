import { ThreadPage } from "@/components/thread-page/thread-page";
import { thread } from "@/components/thread-page/threads.utils";

export default function Page() {
  return <ThreadPage {...thread} />;
}
