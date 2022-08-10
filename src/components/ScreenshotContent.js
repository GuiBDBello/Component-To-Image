import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { AiFillWarning, AiFillLike } from 'react-icons/ai';
import { DiDatabase } from "react-icons/di";
import { GoDatabase } from "react-icons/go";
import { ImDatabase } from "react-icons/im";
import { MdAccessTimeFilled } from "react-icons/md";

import './ScreenshotContent.css';

const ScreenshotContent = () => {

    return (
        <Container className="test-card">
            <h1 className="test-card-title">Test Card</h1>
            <Row>
                <Col xs={8}>
                    <textarea className="test-card-header-textarea" rows="auto" cols="50" placeholder="Title" />
                </Col>
                <Col>
                    <textarea className="test-card-header-textarea" placeholder="Deadline" />
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                    <textarea className="test-card-header-textarea" placeholder="Responsible" />
                </Col>
                <Col>
                    <textarea className="test-card-header-textarea" placeholder="Duration (in hours)" />
                </Col>
            </Row>

            <h6 className="test-card-step">STEP 1: HYPOTHESIS</h6>
            <Row>
                <Col xs={6} style={{ height: '100%', margin: 'auto' }}>
                    <h4>We believe that</h4>
                </Col>
                <Col style={{ padding: '0 12px 0 0' }}>
                    <OverlayTrigger
                        placement='top'
                        overlay={
                            <Tooltip id={'tooltip-top'}>
                                <strong>Critical</strong>
                            </Tooltip>
                        }
                    >
                        <ToggleButtonGroup style={{ float: 'right' }} type="radio" name="options1" defaultValue={0}>
                            <ToggleButton className="test-card-step-togglebutton" id="tbg-radio-11" value={11}>
                                <AiFillWarning style={{ width: 15, height: '100%' }} />
                            </ToggleButton>
                            <ToggleButton className="test-card-step-togglebutton" id="tbg-radio-12" value={12}>
                                <AiFillWarning style={{ width: 25, height: '100%' }} />
                            </ToggleButton>
                            <ToggleButton className="test-card-step-togglebutton" id="tbg-radio-13" value={13}>
                                <AiFillWarning style={{ width: 35, height: '100%' }} />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </OverlayTrigger>
                </Col>
            </Row>
            <textarea className="test-card-step-textarea" rows="5" cols="50"></textarea>

            <h6 className="test-card-step">STEP 2: TEST</h6>
            <Row>
                <Col xs={6} style={{ height: '100%', margin: 'auto' }}>
                    <h4>To verify that, we will</h4>
                </Col>
                <Col style={{ width: '140px', padding: '0 12px 0 0' }}>
                    <OverlayTrigger
                        placement='top'
                        overlay={
                            <Tooltip id={'tooltip-top'}>
                                <strong>Test Cost</strong>
                            </Tooltip>
                        }
                    >
                        <ToggleButtonGroup style={{ float: 'right' }} type="radio" name="options21" defaultValue={0}>
                            <ToggleButton className="test-card-step-togglebutton" id="tbg-radio-211" value={211}>
                                <DiDatabase style={{ width: 20, height: '100%' }} />
                            </ToggleButton>
                            <ToggleButton className="test-card-step-togglebutton" id="tbg-radio-212" value={212}>
                                <GoDatabase style={{ width: 25, height: '100%' }} />
                            </ToggleButton>
                            <ToggleButton className="test-card-step-togglebutton" id="tbg-radio-213" value={213}>
                                <ImDatabase style={{ width: 35, height: '100%' }} />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </OverlayTrigger>
                </Col>
                <div style={{ padding: '20px 30px', float: 'right', position: 'absolute', top: 0, left: 0 }}>&nbsp;</div>
                <Col style={{ width: 140, padding: '0 12px 0 0' }}>
                    <OverlayTrigger
                        placement='top'
                        overlay={
                            <Tooltip id={'tooltip-top'}>
                                <strong>Data Reliability</strong>
                            </Tooltip>
                        }
                    >
                        <ToggleButtonGroup style={{ float: 'right' }} type="radio" name="options22" defaultValue={0}>
                            <ToggleButton className="test-card-step-togglebutton" id="tbg-radio-221" value={221}>
                                <AiFillLike style={{ width: 15, height: '100%' }} />
                            </ToggleButton>
                            <ToggleButton className="test-card-step-togglebutton" id="tbg-radio-222" value={222}>
                                <AiFillLike style={{ width: 25, height: '100%' }} />
                            </ToggleButton>
                            <ToggleButton className="test-card-step-togglebutton" id="tbg-radio-223" value={223}>
                                <AiFillLike style={{ width: 35, height: '100%' }} />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </OverlayTrigger>
                </Col>
            </Row>
            <textarea className="test-card-step-textarea" rows="5" cols="50"></textarea>

            <h6 className="test-card-step">STEP 3: METRIC</h6>
            <Row>
                <Col xs={6} style={{ height: '100%', margin: 'auto' }}>
                    <h4>And measure</h4>
                </Col>
                <Col style={{ padding: '0 12px 0 0' }}>
                    <OverlayTrigger
                        placement='top'
                        overlay={
                            <Tooltip id={'tooltip-top'}>
                                <strong>Time Required</strong>
                            </Tooltip>
                        }
                    >
                        <ToggleButtonGroup style={{ float: 'right' }} type="radio" name="options3" defaultValue={0}>
                            <ToggleButton className="test-card-step-togglebutton" id="tbg-radio-31" value={31}>
                                <MdAccessTimeFilled style={{ width: 15, height: '100%' }} />
                            </ToggleButton>
                            <ToggleButton className="test-card-step-togglebutton" id="tbg-radio-32" value={32}>
                                <MdAccessTimeFilled style={{ width: 25, height: '100%' }} />
                            </ToggleButton>
                            <ToggleButton className="test-card-step-togglebutton" id="tbg-radio-33" value={33}>
                                <MdAccessTimeFilled style={{ width: 35, height: '100%' }} />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </OverlayTrigger>
                </Col>
            </Row>
            <textarea className="test-card-step-textarea" rows="5" cols="50"></textarea>

            <h6 className="test-card-step">STEP 4: CRITERIA</h6>
            <Row>
                <Col style={{ height: '100%', margin: 'auto' }}>
                    <h4 style={{ padding: '6px 0' }}>We are right if</h4>
                </Col>
            </Row>
            <textarea className="test-card-step-textarea" rows="5" cols="50"></textarea>
        </Container>
    )
};

export default ScreenshotContent;
