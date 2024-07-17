import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom'
import PageHead from '../components/PageHead'
import Tags from '../shop/Tags';
import Poppost from '../shop/Poppost';


const socialList = [ { link: "#", iconName: "icofont-facebook", className: "facebook", }, { link: "#", iconName: "icofont-twitter", className: "twitter", }, { link: "#", iconName: "icofont-linkedin", className: "linkedin", }, { link: "#", iconName: "icofont-instagram", className: "instagram", }, { link: "#", iconName: "icofont-pinterest", className: "pinterest", }, ];

const SingleBlog = () => {
    const [blog, setBlod] = useState(blogList)
    const {id} = useParams()
    // console.log(id)
    const result = blog.filter((b) => b.id === Number(id));
    console.log(result[0])
  return (
    <div>
        <PageHead title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />

        <div className="blog-section blog-single padding-tb section-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        <article>
                            <div className="section-wrapper">
                                <div className="row row-cols-1 justify-contetn-center g-4">
                                    <div className="col">
                                        <div className="post-item style-2">
                                            <div className="post-inner">
                                                {
                                                    result.map((item) => (
                                                        <div key={item.id}>
                                                            <div className="post-thumb">
                                                                <img src={item.imgUrl} alt="" className='w-100'/>
                                                            </div>

                                                            <div className="post-content">
                                                                <h3>{item.title}</h3>
                                                                <div className="meta-post">
                                                                <ul className="lab-ul">
                                                                    {
                                                                        item.metaList.map((val, i) => (
                                                                        <li key={i}><i className={val.iconName}>{val.text}</i></li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                                </div>
                                                                <p>Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe</p>

                                                                <blockquote>
                                                                    <p>Dynamic recaptiualize distributed technologies is whereas turnkey channles and ontonecatally provide access to resource levling expertise vias worldwide deliverables uolisticly extend aserser are diverse vortals.</p>
                                                                    <cite>
                                                                        <a href="#">...Bob Marley</a>
                                                                    </cite>
                                                                </blockquote>

                                                                <p>whole heart create am alone and feel the charm of exstenceth spot which the blissouls like mineing am soo happy my dearsi frend absoribed the exquste sense enjoy my whole hearts alone and fee the charm of exstenceths spotsi which was the blis of souils mineing amosing dear frend soingu etc etc...</p>

                                                                <img src="/src/assets/images/blog/single/01.jpg" alt="" />

                                                                <p>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt massa in fermentum imperdiet. Phasellus nec erat non dolor auctor condimentum ac eget odio. Quisque varius mollis vestibulum. Pellentesque blandit ut nulla vitae semper. Pellentesque sed leo venenatis, mattis est quis, vulputate mauris. Aliquam blandit volutpat sagittis. Donec et felis vel orci imperdiet porta id in eros. Maecenas dictum rutrum nulla ac congue. Vestibulum placerat sit amet tellus in feugiat. Aliquam erat volutpat. Duis lacinia, arcu hendrerit tincidunt vehicula, orci mi tincidunt lorem, in egestas quam massa vel purus. Duis dictum magna mauris, sit amet varius dolor venenatis ut. Cras efficitur eleifend dignissim. Suspendisse id placerat tellus.</p>

                                                                <div className="video-thumb">
                                                                    <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                                    <a href="https://youtu.be/gt2JwT5Uywk?si=tBU9Y22XWdz--JNT" className='video-button popup' target='_blank' >
                                                                    <i className="icofont-ui-play"></i>
                                                                    </a>
                                                                </div>

                                                                <p>Nullam non sodales dui, vel facilisis quam. Aliquam cursus tellus quis eros rhoncus, et volutpat mi lobortis. Proin sodales maximus est. Phasellus libero leo, dictum a odio id, euismod auctor nunc. Sed venenatis aliquet mollis. Mauris nec erat interdum lorem vulputate tincidunt in id augue. In imperdiet lacus non nibh vehicula, et finibus erat fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam quis nisi eget nisl finibus lacinia ac eget lectus. Vivamus eu dolor vitae lectus mattis venenatis vitae at neque. Aenean nec ligula turpis. Nulla dui leo, dapibus vel dictum id, gravida non urna. In quis rutrum nibh.</p>

                                                                <div className="tags-section">
                                                                    <ul className='tags lab-ul'>
                                                                        <li><a href="#">Agency</a></li>
                                                                        <li><a href="#">Business</a></li>
                                                                        <li><a href="#">Personal</a></li>
                                                                    </ul>
                                                                    <ul className="lab-ul social-icons">
                                                                        {
                                                                            socialList.map((val,i) => (
                                                                                <li key={i} className={val.className}>
                                                                                    <a href="#"><i className={val.iconName}></i></a>
                                                                                </li>  
                                                                            ))
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="navigations-part">
                                        <div className="left">
                                            <a href="#" className='prev'>
                                                <i className="icofont-double-left"></i> Previous Blog
                                            </a>
                                            <a href="#" className='title'>
                                                Evisculate Parallel Processes via Technica Sound Modles Authoritative
                                            </a>
                                        </div>
                                        <div className="right">
                                            <a href="#" className='prev'>
                                                <i className="icofont-double-right"></i> Next Blog
                                            </a>
                                            <a href="#" className='title'>
                                                Ovisculate Parrallel Processes via Technica Sound Models Authoritative
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="col-lg-4 col-12">
                       <aside>
                        <Tags/>
                        <Poppost/>
                        </aside> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleBlog