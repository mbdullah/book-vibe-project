import React from 'react';
import { useLoaderData } from 'react-router';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

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

const PageToRead = () => {
    const data = useLoaderData();
    return (
        <div className='bg-[#F3F3F3] mt-8 mb-20 px-1 py-5 md:px-8 md:py-14 lg:px-14 lg:py-24 rounded-3xl mx-5'>
           <ResponsiveContainer width="100%" height={500}>
           <BarChart 
            data={data}
            margin={{
                top: 20,
                right: 60,
                left: 5,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey="rating" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
            </BarChart>
           </ResponsiveContainer>
        </div>
    );
};

export default PageToRead;