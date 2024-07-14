import React from 'react'
import { Link } from 'react-router-dom';

const tit = "Most Popular Post";

const postList = [
    {
    id:1,
    imgUrl: '/src/assets/images/blog/10.jpg',
    imgAlt: 'rajibraj91',
    title: 'Poor People Campaign Our Resources',
    date: 'Jun 05,2022',
    },
    {
    id:2,
    imgUrl: '/src/assets/images/blog/11.jpg',
    imgAlt: 'rajibraj91',
    title: 'I mean its 2:22 AM ',
    date: 'Jun 05,2022',
    },
    {
    id:3,
    imgUrl: '/src/assets/images/blog/12.jpg',
    imgAlt: 'rajibraj91',
    title: 'But we doing it cause we ',
    date: 'Jun 05,2022',
    },
    {
    id:4,
    imgUrl: '/src/assets/images/blog/09.jpg',
    imgAlt: 'rajibraj91',
    title: 'have hindered our own ass for the least...',
    date: 'Jun 05,2022',
    },
    ]

const Poppost = () => {
  return (
      <div className='widget widget-post'>
          <div className="widget-header">
              <h5 className='title'>{tit}</h5>
          </div>

          <ul className="widget-wrapper">
              {
                  postList.map((blog, i) => (
                      <li key={i} className='d-flex flex-wrap justify-content-between'> 
                          <div className="post-thumb">
                              <Link to={`/blog/${blog.id}`}><img src={blog.imgUrl} alt="" /></Link>
                        </div>
                          <div className="post-content">
                              <Link to={`/blog/${blog.id}`}><h5>{blog.title}</h5></Link>
                              <p>{blog.date}</p>
                          </div>
                    </li>  
                  ))
              }
          </ul>
    </div>
  )
}

export default Poppost