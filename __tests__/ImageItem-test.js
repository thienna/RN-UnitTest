/**
 * @format
 */

import 'react-native';
import React from 'react';
import ImageItem from '../src/ImageItem';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <ImageItem text={'Sun'}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
