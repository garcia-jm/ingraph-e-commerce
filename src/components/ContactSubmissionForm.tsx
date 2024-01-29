import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const ContactSubmissionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.name}>
        <Input
          mb="1rem"
          placeholder="Name (Required)"
          fontSize={{ base: "1em", "2xl": "1.2em" }}
          {...register("name", {
            required: "Name is required",
          })}
        />
        <FormErrorMessage mb="0.5rem">
          {(errors.name?.message as string) || "Invalid name"}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.email}>
        <Input
          type="email"
          mb="1rem"
          placeholder="Email address (Required)"
          fontSize={{ base: "1em", "2xl": "1.2em" }}
          {...register("email", {
            required: "Email Address is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          })}
        />
        <FormErrorMessage mb="0.5rem">
          {(errors.email?.message as string) || "Invalid email address"}
        </FormErrorMessage>
      </FormControl>
      <FormControl>
        <Input
          mb="1rem"
          placeholder="Company"
          fontSize={{ base: "1em", "2xl": "1.2em" }}
          {...register("company")}
        />
      </FormControl>
      <FormControl>
        <Input
          mb="1rem"
          placeholder="Contact Number"
          fontSize={{ base: "1em", "2xl": "1.2em" }}
          {...register("contactNumber")}
        />
      </FormControl>
      <FormControl>
        <Textarea
          height="200px"
          mb="1rem"
          placeholder="Write a message or comment"
          resize="none"
          {...register("message")}
        />
      </FormControl>
      <Flex minW="100%" justifyContent="flex-end">
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export default ContactSubmissionForm;
