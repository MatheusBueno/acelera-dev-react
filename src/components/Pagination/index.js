import React from 'react';
import PropTypes from 'prop-types';
import { Container, Prev, Next, Page } from './styles';

const Pagination = ({ pages, page, onPaginate }) => (
  <Container>
    <Prev data-testid="pagination-prev" onClick={() => onPaginate(page > 1 ? page - 1 : page)} />
    {Array.from(Array(pages), (x, i) => i + 1).map(p => (
      <Page data-testid={`pagination-${p}`} key={`pagination-${p}`} active={page === p} onClick={() => onPaginate(p)}>
        {p}
      </Page>
    ))}
    <Next data-testid="pagination-next" onClick={() => onPaginate(page < pages ? page + 1 : page)} />
  </Container>
);

Pagination.defaultProps = {
  pages: 0,
  page: 0,
  onPaginate: function() {}
};

Pagination.propTypes = {
  pages: PropTypes.number,
  page: PropTypes.number,
  onPaginate: PropTypes.func
};

export default Pagination;
