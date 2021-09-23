import theme from './theme.module.scss';
import cn from 'classnames';
import { CardInfo } from 'types/card';
import { useDispatch } from 'store/hooks';
import { gameActions } from 'pages/game/store';

interface Props {
  card: CardInfo;
  index: number;
}

export function Card({ card, index }: Props) {
  const dispatch = useDispatch();
  return (
    <>
      <button
        className={cn(theme.card, {
          [theme.shown]: card.isShown,
          [theme.guessed]: card.isGuessed,
        })}
        disabled={card.isGuessed}
        onClick={() => dispatch(gameActions.openCard({ index }))}
      >
        <div className={theme.inner}>
          <div className={theme.front}>{card.mark}</div>
          <div className={theme.back} />
        </div>
      </button>
    </>
  );
}
