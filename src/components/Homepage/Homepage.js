import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home()
{
    return(
       <div className='homebackground'>
        <Container>
            <Row>
                <col md={7}>
                    <h2 className='headtext'>Hello <span className='wave'>👋</span></h2>
                    <h2 className='nametext'>I`m Tushar Srivastava</h2>
                    <span></span>
                    <Text/>
                    <button onClick={() => {
              window.open("https://github.com/tusharsrivastava29");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/rahulvijay81/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("https://twitter.com/rahulvijay8156");
            }}
              className='socailmediabtn'><AiOutlineTwitter className='icon' /></button>
            <button onClick={() => {
              window.open("https://instagram.com/rahulvijay81");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
                </col>
            </Row>
        </Container>
       </div>
    )
}
