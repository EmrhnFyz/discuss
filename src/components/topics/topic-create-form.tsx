'use client';

import { useFormState } from 'react-dom';
import
{
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Input,
    Textarea
} from '@nextui-org/react';
import * as actions from '@/actions'
import FormButton from '@/components/common/form-button';
import ShowErrorMessage from "@/components/common/error-form-message";

export default function TopicCreateForm()
{
    const [formState, action] = useFormState(actions.createTopic, { errors: {} })
    return (
        <Popover placement='left-start'>
            <PopoverTrigger>
                <Button color='primary'>New Topic</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={action}>
                    <div className='flex flex-col gap-4 p-4 w-80'>
                        <h3 className='text-lg'>Create a Topic</h3>
                        <Input
                            name="name"
                            label="Name"
                            labelPlacement="outside"
                            placeholder="name"
                            isInvalid={!!formState.errors.name}
                            errorMessage={formState.errors.name?.join(', ')}
                        />
                        <Textarea
                            name="description"
                            label="Description"
                            labelPlacement="outside"
                            placeholder="Description"
                            isInvalid={!!formState.errors.description}
                            errorMessage={formState.errors.description?.join(', ')}
                        />
                        {formState.errors._form ? <ShowErrorMessage message={formState.errors._form.join(', ')}/> : null}
                        <div className='flex gap-2 justify-center'>
                            <FormButton>
                                Save
                            </FormButton>
                        </div>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    )
}