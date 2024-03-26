import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const PagesToReadRoot = () => {
    const allReadBookIds = localStorage.getItem('read');

    const [allBooks, setAllBooks] = useState([]);

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(books => {
                // setAllBooks(books)
                setAllBooks(books.filter(book => allReadBookIds?.includes(book.bookId)))
            })
    }, [])

    return (
        <BarChart
            width={1100}
            height={500}
            data={allBooks}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {/* {allBooks.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))} */}
            </Bar>
        </BarChart>
    );
};

export default PagesToReadRoot;