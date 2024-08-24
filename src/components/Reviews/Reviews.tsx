import {
    Button,
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
    Typography,
} from '@mui/material'
import { useState } from 'react'

type Props = {}

type Review = {
    name: string
    message: string
}
const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Jack',
            message:
                "Ноутбук приїхав у гарному стані. У пункті самовивезення одразу все перевірили. Хороший процесор, швидко працює. 16 Гб оперативної пам'яті вистачає з головою, але кому не вистачить є розширення до 32",
        },
        {
            name: 'John',
            message:
                'Ноут ,для роботи і навчання, підходить як найкраще,також його вистачить для роботи в Фотошоп , Ілюстратор і Корал...',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        message: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            message: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.message === '') {
            alert('All fields are required!')
        } else {
            setReviews((prevState) => {
                return [...prevState, newReview]
            })

            setNewReview({
                name: '',
                message: '',
            })
        }
    }

    return (
        <div
            style={{
                margin: '40px 0',
            }}
        >
            <Typography component={'h2'} variant="h4">
                Reviews
            </Typography>
            <div>
                {reviews.map((item: Review, i: number) => (
                    <Card
                        key={i}
                        variant="outlined"
                        sx={{
                            margin: '20px 0',
                        }}
                    >
                        <CardContent>
                            <div>{item.name}</div>
                            <p>{item.message}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <form onSubmit={onSend}>
                <h3>Please leave a review</h3>
                <div>
                    <TextField
                        size="small"
                        placeholder="Your name"
                        onChange={handleName}
                        value={newReview.name}
                    />
                </div>
                <br />
                <div>
                    <textarea
                        placeholder="Your message"
                        onChange={handleMessage}
                        value={newReview.message}
                        rows={10}
                    />
                </div>
                <Button type="submit" variant="outlined">
                    Send
                </Button>
            </form>
        </div>
    )
}
export default Reviews
