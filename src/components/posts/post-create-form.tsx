'use client';

import { Button, Input, Textarea, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { useFormState } from "react-dom";
import * as actions from '@/actions'
import FormButton from "@/components/common/form-button";
import ShowErrorMessage from "@/components/common/error-form-message";

interface PostCreateFormProps
{
    slug: string;
}

export default function PostCreateForm({ slug }: PostCreateFormProps)
{
    const [formState, action] = useFormState(actions.createPost.bind(null, slug), { errors: {} });
    return (
        <Popover placement="bottom">
            <PopoverTrigger>
                <Button color='primary'> Create a Post</Button>
            </PopoverTrigger>

            <PopoverContent>
                <form action={action}>
                    <div className="flex flex-col gap-4 p-4 w-80">
                        <h3 className="text-lg">Create a Post</h3>
                        <Input
                            name="title"
                            label="Title"
                            labelPlacement="outside"
                            placeholder="Title"
                            isInvalid={!!formState.errors.title}
                            errorMessage={formState.errors.title?.join(', ')}>
                        </Input>
                        <Textarea
                            name="content"
                            label="Content"
                            labelPlacement="outside"
                            placeholder="Content">
                        </Textarea>
                        {formState.errors._form ? <ShowErrorMessage message={formState.errors._form.join(', ')} /> : null}
                        <FormButton>
                            Create Post
                        </FormButton>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    );
}