import React from 'react'

const NewsItem = (props) => {


    let { title, discription, imgurl, newsurl, author, date, } = props;
    return (
        <div>
            <div className="card my-4" style={{ width: "18rem" }}>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    New </span>
                <img src={!imgurl ?"https://images.moneycontrol.com/static-mcnews/2021/06/Morning-Scan-14-770x433.jpg":imgurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{discription}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;
