# Form Control with Zod, React Hook Form, Shadcn, and 

## Overview
- [Shadcn](https://ui.shadcn.com/) is a library of pre-built components that are styled with Tailwind CSS.
- [Zod](https://zod.dev/) is a schema declaration and validation library for TypeScript.
- [React Hook Form](https://react-hook-form.com/) is a library for managing forms in React.

## Antonomy of Components
### An example of `Form` in Shadcn

```tsx
import { useForm } from 'react-hook-form'
<Form>
    const form = useForm()

    <FormField
    control={form.control}
    name="username"
    render={({ field }) => (
        <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
            <Input placeholder="shadcn" {...field} />
        </FormControl>
        <FormDescription>This is your public display name.</FormDescription>
        <FormMessage />
        </FormItem>
    )}
    />
</Form>
```
- `Form` is a wrapper component that provides the context for the form.
- `FormField` is a component that renders a form field.
- `FormItem` is a component that renders a form item.
- `FormLabel` is a component that renders a form label.
- `FormControl` is a component that renders a form control.
- `FormDescription` is a component that renders a form description.
- `FormMessage` is a component that renders a form message.

But we need more to cooperate with `react-hook-form` and `zod`.

### An example of `Form` in Shadcn with `react-hook-form` and `zod`
#### 1. Create a schema with `zod`.
  ```tsx showLineNumbers
"use client"

import { z } from "zod"

const formSchema = z.object({
    username: z.string().min(2).max(50),
    })
  ```
    - `zod` is a schema declaration and validation library for TypeScript.
    - The reason why we use `"use client"` is that `zod` is a client-side library.
    - `z.object({})` is a function that creates a schema for an object.
  
#### 2. Use the schema with `react-hook-form` and `zod`
  ```tsx showLineNumbers highlight={3-4,13-20,23}
  "use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
}
    ```
    - `zodResolver(formSchema)` is a function that resolves the schema to a resolver.
    - This resolver is used to validate the form values.
    - `useForm<z.infer<typeof formSchema>>({})` is a function that creates a form.
    - `z.infer<typeof formSchema>` is a function that infers the type of the form values.

#### 3. Use the form in the UI
  Here we need to use `Form` component from Shadcn and put validation logic in `onSubmit` function.
  ```tsx showLineNumbers highlight={7-17,28-50}
  "use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProfileForm() {
  //const form = useForm<z.infer<typeof formSchema>>({ ... })
  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
  ```
  - `<Form {..form}>` is used to pass the form context to `Form` component. `form` comes from `useForm` hook.
  - `onSubmit={form.handleSubmit(onSubmit)}` is used to handle the form submission. And this is still on original `form` component.
  - `<FormField>` is used to render a form field.
  - In the `FormField`, `control={form.control}` is used to pass the form control to the field. `from.control` comes from `useForm` hook. Even though we didn't define `control` explicitly, [useForm](https://react-hook-form.com/docs/useform/control) has already provided it by default. 
  - Also, `field` in `render={({ field }) => (...)}` is used to bind the field to the input. It comes from `controller` of [`useController`](https://react-hook-form.com/docs/usecontroller/controller). And `FormField` is a wrapper of `Controller` component.
  - Remeber to spread the `field` to `Input` component.




ref: https://ui.shadcn.com/docs/components/form
