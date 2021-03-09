import { makeStyles } from '@material-ui/styles';
import { Fade, Theme, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';

const useStyles = makeStyles(({ palette, transitions }: Theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: `linear-gradient(180deg, ${palette.primary.main} 0%, ${palette.secondary.main} 100%)`,
    animation: `$fade .5s ${transitions.easing.easeIn}`,
  },
  headText: {
    fontSize: '3rem',
    color: 'white',
  },
  bodyText: {
    fontSize: '2rem',
    color: 'white',
  },
  '@keyframes fade': {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
}));

const texts = ['Lean, ', 'Effective, ', 'Co-Work'];

function Introduce() {
  const classes = useStyles();
  const [orders, setOrders] = useState(() =>
    texts.map((t) => ({ in: false, text: t })),
  );
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
    if (cursor >= orders.length) return;

    const timeoutId = setTimeout(() => {
      const newOrders = [...orders];
      newOrders[cursor] = { ...orders[cursor], in: true };
      setOrders(newOrders);
      setCursor(cursor + 1);
    }, 1000);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(timeoutId);
  }, [cursor]);

  return (
    <article className={classes.root}>
      <Fade in timeout={1000}>
        <Typography className={classes.headText} component="h1">
          Meta Programmer
        </Typography>
      </Fade>
      <section>
        {orders.map((order) => (
          <Fade in={order.in} timeout={500} key={order.text}>
            <Typography className={classes.bodyText} component="span">
              {order.text}
            </Typography>
          </Fade>
        ))}
      </section>
    </article>
  );
}

export default Introduce;
