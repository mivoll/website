import { createFileRoute } from "@tanstack/react-router";
import { Controller, useForm } from "react-hook-form";

export const Route = createFileRoute("/contact-us")({
  component: RouteComponent,
});

function RouteComponent() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await fetch("https://formsubmit.co/ajax/info@mivoll.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <>
      <div>Hello</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          rules={{ required: "Name is required" }}
          render={({ field: { value, onChange }, fieldState: { error } }) => <input value={value} onChange={(e) => onChange(e.target.value)} />}
        />
      </form>
    </>
  );
}
