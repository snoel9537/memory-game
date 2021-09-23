import './theme.scss';
import theme from './theme.module.scss';
import cn from 'classnames';
import { gameActions } from 'pages/game/store';
import { useDispatch } from 'store/hooks';

export function Congratulation() {
  const dispatch = useDispatch();

  const resetGame = () => dispatch(gameActions.generateCards());
  return (
    <section className={theme.wrapper}>
      <div>
        <h1 className={theme.title}>Congratulations</h1>
        <p className={theme.btnWrapper}>
          <button className={cn('link-btn', theme.btn)} onClick={resetGame}>
            Try again
          </button>
        </p>
      </div>
      {new Array(15).fill(null).map((_, i) => (
        <div key={i} className={`firework-${i}`} />
      ))}
    </section>
  );
}
