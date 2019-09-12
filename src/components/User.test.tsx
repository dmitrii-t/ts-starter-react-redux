import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { createShallow } from '@material-ui/core/test-utils';
import * as React from 'react';
import { User } from './User';
import { IUser } from '../model/IUserDTO';

describe('<User/>', () => {
  const user: IUser = {
    userId: '123',
    userName: 'testuser',
    imageUrl: '/statics/photo.jpg',
  };
  const MUIShallow = createShallow();

  it('should display the user inside a Card component', () => {
    const wrapper = MUIShallow(<User user={user} />);
    expect(wrapper.find(Card).length).toEqual(1);
  });

  it('should display the user name on the card title', () => {
    const wrapper = MUIShallow(<User user={user} />);
    expect(wrapper.find(CardHeader).props().title).toEqual(`User: testuser`);
  });

  it('should display 2 Typography component', () => {
    const wrapper = MUIShallow(<User user={user} />);
    expect(wrapper.find(Typography).length).toEqual(2);
  });

  it('should display user id in the first Typography', () => {
    const wrapper = MUIShallow(<User user={user} />);
    const userIdComp = wrapper.find(Typography).at(0);
    const content = userIdComp.dive().dive();
    expect(content.text()).toEqual('Id: 123');
  });

  it('should display user image in the 2nd Typography', () => {
    const wrapper = MUIShallow(<User user={user} />);
    const userImageComp = wrapper.find(Typography).at(1);
    const content = userImageComp.dive().dive();
    expect(content.text()).toEqual('Image Url: /statics/photo.jpg');
  });
});
