import { redirect } from "next/navigation";

export default function Home() {
  // Redirect immediately to the main editor with a default project
  redirect("/editor/local");
}
