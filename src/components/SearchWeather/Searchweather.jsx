import React from 'react'

const Searchweather = () => {
    return (
        <div>
            {console.log('hello')};
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card text-white">
                            <img src='https://api.unsplash.com/photos/?client_id=rl1w01G1yNj20X17q4YuDCudXAN8T64jN6FicS9925I' className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchweather
