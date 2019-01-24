import React from 'react';
import MainAside from './mainAside';
import SectionStore from './sectionStore';

const Section = () => {

    return (

        <div className="section">

            <div className="container">
                <div className="row">

                    <MainAside />
                    <SectionStore />

                </div>
            </div>
        </div>

    )
}

export default Section;