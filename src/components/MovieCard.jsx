export default function MovieCard() {
    return (
        <>
            <div className="card mb-6 mx-3 col-3">
                <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                    <div style={{ height: "200px" }}> {/* Adjust the height as needed */}
                        <img src="assets/filmImages/1.jpg" className="img-fluid" alt="img-on-card"/>
                    </div>

                    <a href="#!">
                        <div style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} className="mask"></div>
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </>
    );
}
