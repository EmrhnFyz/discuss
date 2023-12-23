interface ErrorMessageProps
{
    message: string
}

export default function ShowErrorMessage({ message }: ErrorMessageProps)
{
    return <div className='p-2 bg-red-200 border rounded border-red-400 flex justify-center'>{message}</div>
}