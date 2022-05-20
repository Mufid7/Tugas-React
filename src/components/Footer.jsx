import React, { Component } from 'react';
import {Container} from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <div>                
                <footer class="py-5 bg-dark">
                    <Container className='px-4'>
                        <p class='text-white text-center'>copyright2022 @muhammadmufidridho</p>
                    </ Container>
                </footer>
            </div>
        );
    }
}

export default Footer;