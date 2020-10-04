import React, { Component } from 'react'

class FloatingActionButton extends Component {
    componentDidMount() {
        const mybutton = document.getElementById("myBtn");
        mybutton.style.display = "none";
        // When the user scrolls down 200px from the top of the document, show the button
        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {

            if ((document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }

        }
    }


    goToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;//for chrome and firefox
    }

    render() {
        return (
            <div className="fixed-action-btn" id='myBtin'>
                <a id="myBtn" onClick={this.goToTop} className="btn-floating btn-large  btnColor">
                    <i className="large material-icons">arrow_upward</i>
                </a>
            </div>
        )
    }
}
export default FloatingActionButton