import Link from "next/link";

import React from 'react';

interface PageTitleProps {
    title: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
        <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '90px' }}>
            <div className="row py-5">
                <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 className="display-4 text-white animated zoomIn">{props.title}</h1>
                </div>
            </div>
        </div>
    );
};

export default PageTitle;
