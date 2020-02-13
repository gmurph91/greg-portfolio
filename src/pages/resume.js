import React, {Component} from 'react';
import FileViewer from 'react-file-viewer';
const file = 'resume.pdf'
const type = 'pdf'
export default class resume extends Component {
    render(){
        return(
        <FileViewer
        fileType={type}
        filePath={file}/>
        )}
}