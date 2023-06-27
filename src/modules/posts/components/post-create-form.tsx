import classNames from "classnames";
import { Formik } from "formik";
import * as Yup from "yup";

import { useAppDispatch } from "@/modules/redux/hooks";
import Button from "@/modules/ui/components/button";
import Input from "@/modules/ui/components/input";
import LoadingSpinner from "@/modules/ui/components/loading-spinner";
import Select from "@/modules/ui/components/select";
import TextArea from "@/modules/ui/components/text-area";

import { useCreatePostMutation } from "../apis/posts-api";
import { addSinglePost } from "../slices/posts-slice";

export default function PostCreateForm() {
  const dispatch = useAppDispatch();
  const [createPost, { isLoading }] = useCreatePostMutation();

  const initialValues = {
    title: "",
    body: "",
    tag1: "Tag 1",
    tag2: "Tag 2",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    body: Yup.string().required("Body is required"),
    tag1: Yup.string().required("Tag 1 is required"),
    tag2: Yup.string().required("Tag 2 is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values, "Submitted-1");
        const params = {
          title: values.title,
          body: values.body,
          tags: [values.tag1, values.tag2],
        };
        (async () => {
          const result = await createPost(params).unwrap();
          console.log(result, "Submitted-2");
          dispatch(addSinglePost(result));
        })().catch((error) => {
          console.log(error, "Submitted-3");
        });
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
        return (
          <div className="flex flex-col gap-2 m-2 p-2 bg-neutral rounded-md">
            <span className="text-4xl">Add your story!</span>
            <div className="flex justify-between">
              <Input
                name="title"
                placeholder="Title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                className={classNames(errors.title ? "border-red-500" : "")}
              />

              <div className="flex gap-2">
                <Select
                  name="tag1"
                  placeholder="Select a tag"
                  options={["Tag 1", "Tag 2", "Tag 3"]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tag1}
                  className={classNames(errors.tag1 ? "border-red-500" : "")}
                />
                <Select
                  name="tag2"
                  placeholder="Select a tag"
                  options={["Tag 1", "Tag 2", "Tag 3"]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tag2}
                  className={classNames(errors.tag2 ? "border-red-500" : "")}
                />
              </div>
            </div>
            <TextArea
              name="body"
              placeholder="My story..."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.body}
              className={classNames(errors.body ? "border-red-500" : "")}
            />
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <Button type="submit" onClick={() => handleSubmit()}>
                Submit
              </Button>
            )}
          </div>
        );
      }}
    </Formik>
  );
}
