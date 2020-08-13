import React from 'react';
import HeaderStyled from '../components/HeaderStyled';
import LayoutStyled from '../components/LayoutStyled';

export default function Layout(props) {
  return (
    <LayoutStyled>
      <HeaderStyled>
        <h1 className="heading">
          <strong className="word">This</strong>
          <em className="separator">for</em>
          <strong className="word">That</strong>
        </h1>
        <p className="intro">
          Do you have a second to spare?<br />Let me tell you my website idea.
        </p>
      </HeaderStyled>
      {props.children}
    </LayoutStyled>
  );
}
