import theme from './theme.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'store/hooks';
import { gameActions } from 'pages/game/store';
import { Card } from 'pages/game/card';
import { Congratulation } from 'pages/game/congratulation';
import cn from 'classnames';

export function GamePage() {
  const { cards } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const shownCards = cards.filter((card) => card.isShown);
  const isWinner = cards.every((card) => card.isGuessed);

  // init game cards
  useEffect(() => {
    dispatch(gameActions.generateCards());
  }, [dispatch]);

  // check opened pair
  useEffect(() => {
    if (shownCards.length === 2) {
      setTimeout(() => {
        dispatch(gameActions.checkPair());
      }, 1000);
    }
  }, [dispatch, shownCards.length]);

  return (
    <>
      <div className="container">
        <div className={theme.cards}>
          {cards.map((card, i) => (
            <Card card={card} key={i} index={i} />
          ))}
        </div>
      </div>
      <div className={cn(theme.fadeInOverlay, isWinner && theme.show)}>{isWinner && <Congratulation />}</div>
    </>
  );
}
