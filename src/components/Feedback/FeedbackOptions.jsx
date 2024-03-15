import React, { Component } from 'react';
import { Button } from 'antd';
import { FlexBox } from 'components/Box';
import styled from 'styled-components';

const FeedbackList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default class FeedbackOptions extends Component {
  render() {
    const { data, onStatChange } = this.props;
    const buttonKeys = Object.keys(data).slice(0, 3);
    return (
      <FlexBox mr="20px">
        <FeedbackList>
          {buttonKeys.map((key, index) => (
            <li key={key}>
              <Button style={{ width: '100px' }} onClick={e => onStatChange(e)}>
                {key}
              </Button>
            </li>
          ))}
        </FeedbackList>
      </FlexBox>
    );
  }
}
