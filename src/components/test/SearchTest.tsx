import React from 'react';

const SearchTest = () => {
    return (
        <div className="col-xs-12 search-container nopadding">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-lg-5">
                    <a href="./" title="ReactJS TMDb Movie Search">
                        <img className="logo" alt="The Movie Database" />
                    </a>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-7">
                    <form className="searchbox">
                        {/* <label> */}
                        <input
                            className="searchbox__input typeahead form-control"
                            type="text"
                            placeholder="Search Movie Title..."
                            id="q"
                        />
                        {/* </label> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchTest;
