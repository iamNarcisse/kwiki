import React, { Component } from 'react';
import MainAside from './mainAside';
import SectionStore from './sectionStore';

class Section extends Component {

    render() {

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
}

export default Section;