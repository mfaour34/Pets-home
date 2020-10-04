import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer root" >
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Pet's Home</h5>
                            <p className="grey-text text-lighten-4">A WebApp that concentrates on first of all pets and second of all humanity</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="https://www.instagram.com/m_faour34/">Instagram</a></li>
                                <li><a className="grey-text text-lighten-3" href="https://github.com/mfaour34">Github</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        Pet's Home © 2020 Copyright
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;