import { createSelector } from '@reduxjs/toolkit';

export const getArticles = state => state.contacts;

export const getFilter = state => state.filter;

export const getFilteredArticles = createSelector(
  [getArticles, getFilter],
  (articles, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const filteredArticles = articles.filter(({ title }) =>
    title.toLowerCase().includes(normalizedFilter)
    );
    return filteredArticles;
  }
);
