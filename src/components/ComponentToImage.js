import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import html2canvas from '@nidi/html2canvas';

import './ComponentToImage.css';

import ScreenshotContent from './ScreenshotContent';

const HtmlCanvasDemo = () => {

    const exportAsPicture = () => {
        const html = document.getElementsByTagName('HTML')[0];
        const body = document.getElementsByTagName('BODY')[0];
        let htmlWidth = html.clientWidth;
        let bodyWidth = body.clientWidth;

        const data = document.getElementById('card');
        const newWidth = data.scrollWidth - data.clientWidth;

        if (newWidth > data.clientWidth) {
            htmlWidth += newWidth;
            bodyWidth += newWidth;
        }

        html.style.width = htmlWidth + 'px';
        body.style.width = bodyWidth + 'px';

        html2canvas(data).then((canvas) => {
            return canvas.toDataURL('image/png', 1.0);
        }).then((image) => {
            saveAs(image, 'react-screenshot.png');
            html.style.width = null;
            body.style.width = null;
        })
    }

    const saveAs = (blob, fileName) => {
        const elem = window.document.createElement('a');
        elem.href = blob;
        elem.download = fileName;
        (document.body || document.documentElement).appendChild(elem);
        if (typeof elem.click === 'function') {
            elem.click();
        } else {
            elem.target = '_blank';
            elem.dispatchEvent(new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true
            }));
        }
        URL.revokeObjectURL(elem.href);
        elem.remove();
    }

    return (
        <Container style={{ margin: 'auto' }} className="row justify-content-center align-items-center">
            <div id="card" className="col-10 card" style={{ width: "48rem" }}>
                <ScreenshotContent />
            </div>
            <Button className="col-2 save-button" variant="outline-dark" style={{ margin: "5rem" }} onClick={exportAsPicture}>Save as Image</Button>
        </Container>
    )
};

export default HtmlCanvasDemo;
