import { FlexBox } from 'components/Box';
import React, { Component } from 'react';
import styled from 'styled-components';

const Item = styled.div`
  color: ${p => (p.isSelected ? 'green' : 'black')};
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const TaskHeader = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.l};
  margin-bottom: ${({ theme }) => theme.space[2]}px;
  margin-top: ${({ theme }) => theme.space[3]}px;
  font-family: ${({ theme }) => theme.fonts.gillSans};
`;

export default class Video extends Component {
  render() {
    const { items, onSelect, selected } = this.props;
    return (
      <FlexBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="5px"
        mx="auto"
      >
        <TaskHeader>Task -1</TaskHeader>
        {items.map(({ id, link }) => (
          <Item
            key={id}
            onClick={() => onSelect(link)}
            isSelected={link === selected}
          >
            {link}
          </Item>
        ))}
      </FlexBox>
    );
  }
}
