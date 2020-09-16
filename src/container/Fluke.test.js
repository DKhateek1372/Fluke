import React from 'react';
import { listItemData } from '../../data-for-testing';
import Fluke from './Fluke';
import { shallow } from 'enzyme';
const { display_name, category_name, description, image_uri, attributes, spec_parameters } = listItemData;

it('renders without crashing', () => {
  // eslint-disable-next-line no-unused-vars
  const component = shallow(
    <Fluke
      display_name={display_name}
      category_name={category_name}
      image_uri={image_uri}
      attributes={attributes}
      description={description}
      spec_parameters={spec_parameters}
    />,
  );
});
