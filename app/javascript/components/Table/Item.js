import React, { Component } from 'react';
import Thumbnail from './Thumbnail';
import styled from 'styled-components';

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0;
  background: #fff;
  box-shadow: 0px 0px 0px 3px #473228, -6px 6px #ef5f17,
    -6px 6px 0px 3px #473228;
`;

const Item = (props) => {
  return (
    <div className='row py-4'>
      <div className='col-md-10 offset-md-1'>
        <div>
          <div className='card px-5'>
            <div className='row'>
              <div className='col-md-4'>
                <Thumbnail />
              </div>
              <div className='col-md-8'>
                <div className='py-4'>
                  <h4>{props.title}</h4>
                  <p>{props.description}</p>
                  <div className='cta-wrapper'>
                    <Button
                      onClick={props.handleVideoChange}
                      className='btn cta-btn'
                    >
                      Watch This Video
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
