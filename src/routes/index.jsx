// routes/index.tsx or similar
import { createFileRoute } from "@tanstack/react-router";
import ComingSoon from "../pages/comingsoon";

export const Route = createFileRoute("/")({
  component: () => (
    <ComingSoon />
  ),
});
