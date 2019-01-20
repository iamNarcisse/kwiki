import React from 'react';
import MainAside from './mainAside';
import SectionStore from './sectionStore';

const Section = () => {

    return (

        <div class="section">

            <div class="container">
                <div class="row">

                    <MainAside />
                    <SectionStore />

                </div>
            </div>
        </div>

    )
}

export default Section;