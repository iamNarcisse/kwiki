import React, { Component } from 'react';
import MainAside from './mainAside';
import SectionStore from './sectionStore';

class Section extends Component {

    render() {

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
}

export default Section;