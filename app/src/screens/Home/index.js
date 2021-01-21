import React, { useState, Component } from 'react';
import { Text, FlatList } from 'react-native';

import { Container } from './styles';
import Post from '../../components/Post'
import Header from '../../components/Header'

const Home = () => {


  const comments = [{
    nickname: 'Gabriel Alves Pimenta',
    comment: 'Guilherme programa muito'
  },
  {
    nickname: 'Sonia Pimenta',
    comment: 'Que orgulho do meu filho!'
  }
  ]

  state = {
    posts: [{
      id: Math.random(),
      nickname: 'Guilherme Alves Pimenta',
      email: 'guialvespimenta27@gmail.com',
      image: require('../../assets/fence.jpg'),
      comments: [{
        nickname: 'Wilson viadao',
        comment: 'Gosto de dar a bunda!'
      }]

    },
    {
      id: Math.random(),
      nickname: 'Guilherme Alves Pimenta',
      email: 'fllima@gmail.com',
      image: require('../../assets/bw.jpg'),
      comments: [{
        nickname: 'Gabriel Alves Pimenta',
        comment: 'Guilherme programa muito'
      },
      {
        nickname: 'Sonia Pimenta',
        comment: 'Que orgulho do meu filho!'
      }
      ]
    }]
  }

  return (
    <Container>
      <Header />
      <FlatList
        data={this.state.posts}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) =>
          <Post key={item.id} {...item} />} />

      {/* <Post image={require('../../assets/fence.jpg')}
        comments={comments}
      /> */}

    </Container>
  );
};

export default Home;


