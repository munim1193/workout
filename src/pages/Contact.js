import React from "react";
import Navbar from "./components/Navbar";
import "./Contact.css";
import {  Container,  Segment } from "semantic-ui-react";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, WhatsappIcon } from "react-share";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Container>
        <Segment>
          <FacebookShareButton
            url="https://www.youtube.com/watch?v=2BnTYEafRQc&ab_channel=FullstackTechies"
            quote="jdcjncjcncndsjcnd"
            hashtag="#"
          >
            <FacebookIcon lightingColor="white" round={true}></FacebookIcon>
          </FacebookShareButton>
          <WhatsappShareButton
            title="Sahdfcddfdfadfdfs"
            url="https://www.youtube.com/watch?v=2BnTYEafRQc&ab_channel=FullstackTechies"
          >
            <WhatsappIcon lightingColor="white" round={true}></WhatsappIcon>
          </WhatsappShareButton>
        </Segment>
      </Container>
    </>
  );
}
