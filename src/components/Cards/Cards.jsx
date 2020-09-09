import React from 'react';
import { Grid } from '@material-ui/core';
import cx from 'classnames';
import CardItem from './CardItem';

import styles from './Cards.module.css';
import Spinner from './../Spinner/Spinner';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) return <Spinner />;

  const cardsData = [
    {
      title: 'Infected',
      value: confirmed.value,
      date: lastUpdate,
      body: 'Number of active cases of COVID-19',
      classes: cx(styles.card, styles.infected),
    },
    {
      title: 'Recovered',
      value: recovered.value,
      date: lastUpdate,
      body: 'Number of recoveries from COVID-19',
      classes: cx(styles.card, styles.recovered),
    },
    {
      title: 'Deaths',
      value: deaths.value,
      date: lastUpdate,
      body: 'Number of deaths caused by COVID-19',
      classes: cx(styles.card, styles.deaths),
    },
  ];

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        {cardsData.map((cardData) => (
          <CardItem data={cardData} />
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
