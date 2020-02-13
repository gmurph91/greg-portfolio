import React, {Component} from 'react';

export default class resume extends Component {
    
    render(){
        return(
            <div className="PDFview">
                <object width="100%" height="100%" data="resume.pdf" type="application/pdf" aria-label="resume"></object>
            </div>
        )}
} 