import React, { Component } from 'react';
import styled from 'styled-components';

export const StatHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-family: ${({ theme }) => theme.fonts.monospace};
  margin-bottom: ${({ theme }) => theme.space[2]}px;
`;
const StatkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[1]}px;
`;

export default class StatSection extends Component {
  render() {
    const { data } = this.props;
    const statistic = Object.keys(data);
    return (
      <div>
        <StatHeader>Statistic</StatHeader>
        <StatkList>
          {statistic.map(key => (
            <li key={key}>
              <p>
                {key} : {data[key]}
                {key === 'positivePercentage' ? '%' : ''}
              </p>
            </li>
          ))}
        </StatkList>
      </div>
    );
  }
}
