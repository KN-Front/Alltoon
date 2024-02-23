import React from 'react';

const Card = () => {
    return (
        <div className="col-xs-12 cardcont nopadding">
            <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
                <h1>testest</h1>

                <span className="tagline">testest</span>
                <p>testest</p>
                <div className="additional-details">
                    <span className="genre-list">testest</span>
                    <span className="production-list">testest</span>
                    <div className="row nopadding release-details">
                        <div className="col-xs-6">
                            {' '}
                            Original Release: <span className="meta-data">testest</span>
                        </div>
                        <div className="col-xs-6">
                            {' '}
                            Running Time: <span className="meta-data">testest mins</span>{' '}
                        </div>
                        <div className="col-xs-6">
                            {' '}
                            Box Office: <span className="meta-data">testest</span>
                        </div>
                        <div className="col-xs-6">
                            {' '}
                            Vote Average: <span className="meta-data">testest</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
                <img id="postertest" className="poster" src="/images/FMV-211.jpg" />
            </div>
        </div>
    );
};

export default Card;
